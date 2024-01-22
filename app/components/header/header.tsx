import { Pokeball } from '../icons';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <div className="mr-6 flex items-center space-x-">
            <Pokeball />
            {/* TODO Fix here */}
            <span className="hidden font-bold sm:inline-block">PokéDictionary</span>
          </div>
        </div>
      </div>
    </header>
  );
}
