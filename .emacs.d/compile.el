(defun my-smart-compile-command ()
  "Set a smart compile-command based on project files and file type."
  (let* ((dir (file-name-directory (or buffer-file-name default-directory)))
         (command
          (cond
           ;; 1. Check for a Makefile
           ((file-exists-p (concat dir "Makefile"))
            "make -k")

           ;; 2. Check for CMakeLists.txt
           ((file-exists-p (concat dir "CMakeLists.txt"))
            "cmake -B build && cmake --build build")

           ;; 3. Check for an executable run.sh
           ((and (file-exists-p (concat dir "run.sh"))
                 (file-executable-p (concat dir "run.sh")))
            "./run.sh")

           ;; 4. Check if this is a Java file
           ((and buffer-file-name (string= (file-name-extension buffer-file-name) "java"))
            (let* ((file-name (file-name-nondirectory buffer-file-name))
                   (base-name (file-name-sans-extension file-name)))
              (format "javac %s && java %s"
                      file-name
                      base-name)))

           ;; 5. Check if this is a C file
           ((and buffer-file-name (string= (file-name-extension buffer-file-name) "c"))
            (let* ((file-name (file-name-nondirectory buffer-file-name))
                   (base-name (file-name-sans-extension file-name)))
              (format "gcc -o %s %s -Wall -Wextra -g && ./%s"
                      base-name
                      file-name
		      base-name)))

           ;; 6. Check if this is a C++ file
           ((and buffer-file-name (string= (file-name-extension buffer-file-name) "cpp"))
            (let* ((file-name (file-name-nondirectory buffer-file-name))
                   (base-name (file-name-sans-extension file-name)))
              (format "g++ -o %s %s -Wall -Wextra -g && ./%s"
                      base-name
                      file-name
		      base-name)))

	   ;; 7. Python
	   ((and buffer-file-name (string= (file-name-extension buffer-file-name) "py"))
            (let* ((file-name (file-name-nondirectory buffer-file-name))
                   (base-name (file-name-sans-extension file-name)))
              (format "python %s"
                      file-name)))

	   ;; 8. Verilog
	   ((and buffer-file-name (string= (file-name-extension buffer-file-name) "v"))
            (let* ((file-name (file-name-nondirectory buffer-file-name))
                   (base-name (file-name-sans-extension file-name)))
              (format "iverilog -o %s %s && ./%s && gtkwave %s.vcd" 
                      base-name
                      file-name
		      base-name
		      base-name)))

           ;; Final fallback if nothing else matches
           (t nil))))

    ;; Set the compile-command if determined
    (when command
      (set (make-local-variable 'compile-command) command))))

;; Attach this unified function to multiple hooks
(add-hook 'java-mode-hook #'my-smart-compile-command)
(add-hook 'simpc-mode-hook #'my-smart-compile-command)
(add-hook 'python-mode-hook #'my-smart-compile-command)
(add-hook 'verilog-mode-hook #'my-smart-compile-command)
