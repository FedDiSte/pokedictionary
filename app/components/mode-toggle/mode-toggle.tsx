import { Moon, Sun } from 'lucide-react';
import { Theme, useTheme } from 'remix-themes';

import { cn } from '~/lib/utils';
import { Button } from '../ui/button/button';

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

    (() => window.getComputedStyle(document.body))();

    setTimeout(() => {
      document.head.removeChild(css);
    }, 1);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative overflow-hidden"
      onClick={() => {
        disableAnimation(() => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK));
      }}
    >
      <Sun
        className={cn(
          'duration-750 delay-250 absolute size-[1.2rem] rotate-0 transition-all fill-mode-forwards dark:-rotate-90',
          theme === Theme.DARK ? 'animate-mode-switcher-out' : 'animate-mode-switcher-in'
        )}
      />
      <Moon
        className={cn(
          'duration-750 delay-250 absolute size-[1.2rem] rotate-90 transition-all fill-mode-forwards dark:rotate-0',
          theme === Theme.DARK ? 'animate-mode-switcher-in' : 'animate-mode-switcher-out'
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
