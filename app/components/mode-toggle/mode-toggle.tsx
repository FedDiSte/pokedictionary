import { Moon, Sun } from 'lucide-react';
import { Theme, useTheme } from 'remix-themes';

import { Button } from '../ui/button/button';

export function ModeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <Button variant="ghost" size="icon" onClick={() => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:translate-x-5 dark:translate-y-5 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 -translate-x-5 -translate-y-5 dark:translate-y-0 dark:translate-x-0 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
