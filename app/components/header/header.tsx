import { Link } from '@remix-run/react';
import { Pokeball } from '../icons';
import { Button } from '../ui/button/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu/navigation-menu';
import { ModeToggle } from '../mode-toggle/mode-toggle';

type MenuItem = {
  link: string;
  label: string;
};

const items: MenuItem[] = [
  {
    link: '/',
    label: 'Pokemon',
  },
  {
    link: '/',
    label: 'Items',
  },
  {
    link: '/',
    label: 'Moves',
  },
  {
    link: '/',
    label: 'Games',
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Button className="mr-6 flex items-center space-x-2 text-foreground" variant="link" asChild>
            <Link to={'/'} className="no-underline hover:no-underline">
              <Pokeball className="h-6 w-6" />
              {/* TODO Fix text */}
              <span className="hidden font-bold sm:inline-block">PokéDictionary</span>
            </Link>
          </Button>
          <NavigationMenu>
            <NavigationMenuList>
              {items.map((item, index) => {
                return (
                  <NavigationMenuItem key={`nav-item-link-${item.label}-${index}`}>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link to={item.link}>{item.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
