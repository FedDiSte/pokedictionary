import { Moon, Sun } from 'lucide-react';
import { Theme, useTheme } from 'remix-themes';

import { Button } from '../ui/button/button';
import clsx from 'clsx';

export function ModeToggle() {
  const [theme, setTheme] = useTheme();

  const disableAnimation = (callback: Function) => {
    const css = document.createElement('style');
    css.appendChild(
      document.createTextNode(
        `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
      )
    );
    document.head.appendChild(css);

    callback();

    return () => {
      // Force restyle
      (() => window.getComputedStyle(document.body))();

      // Wait for next tick before removing
      setTimeout(() => {
        document.head.removeChild(css);
      }, 1);
    };
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="overflow-hidden relative"
      onClick={() => {
        disableAnimation(() => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK));
      }}
    >
      <Sun
        className={clsx(
          'h-[1.2rem] w-[1.2rem] absolute rotate-0 transition-all duration-750 dark:-rotate-90 fill-mode-forwards delay-250',
          theme === Theme.DARK ? 'animate-mode-switcher-out' : 'animate-mode-switcher-in'
        )}
      />
      <Moon
        className={clsx(
          'absolute h-[1.2rem] w-[1.2rem] rotate-90 transition-all duration-750 dark:rotate-0 fill-mode-forwards delay-250',
          theme === Theme.DARK ? 'animate-mode-switcher-in' : 'animate-mode-switcher-out'
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
