import { Link } from '@remix-run/react';
import { Pokeball } from '../icons';
import { Button, buttonVariants } from '../ui/button/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu/navigation-menu';
import { ModeToggle } from '../mode-toggle/mode-toggle';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet/sheet';
import { MenuIcon } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area/scroll-area';

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
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="mr-4 hidden md:flex">
          <Button className="mr-6 flex items-center space-x-2 text-foreground" variant="link" asChild>
            <Link to={'/'} className="no-underline hover:no-underline">
              <Pokeball className="size-6" />
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
        <Sheet>
          <SheetTrigger className={buttonVariants({ variant: 'ghost' })}>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>PokéDictionary</SheetTitle>
            </SheetHeader>
            <div className="relative my-4 h-[calc(100vh-8rem)] overflow-hidden pb-10 pl-6">
              <ScrollArea className="size-full">
                <div className="table min-w-full">
                  <div className="flex flex-col space-y-3">
                    {items.map((item, index) => {
                      return (
                        <Link key={`nav-item-link-${item.label}-${index}`} to={item.link}>
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </ScrollArea>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center justify-between space-x-2 md:flex-1 md:justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
