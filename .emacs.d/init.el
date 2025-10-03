(setq custom-file "~/.emacs.d/custom.el")

;; Feature
(scroll-bar-mode -1)
(menu-bar-mode -1)
(tool-bar-mode -1)
(setq inhibit-splash-screen t)

;; Styling
(set-frame-font "Monospace 13" nil t)
(global-display-line-numbers-mode t)
(setq display-line-numbers-type 'relative)

;; Saving
(setq auto-save-default nil)

;; Multiple Cursor
(require 'multiple-cursors)
(global-set-key (kbd "C-S-c C-S-c") 'mc/edit-lines)
(global-set-key (kbd "M-n") 'mc/mark-next-like-this)
(global-set-key (kbd "M-p") 'mc/mark-previous-like-this)
(global-set-key (kbd "M-P") 'mc/unmark-next-like-this)
(global-set-key (kbd "M-N") 'mc/unmark-previous-like-this)

;; Simpc-Mode
(load-file "~/.emacs.d/simpc-mode.el")
(require 'simpc-mode)
(add-to-list 'auto-mode-alist '("\\.[hc]\\(pp\\)?\\'" . simpc-mode))

;; ------------ Compile ----------
(load-file "~/.emacs.d/compile.el")

(load custom-file)
