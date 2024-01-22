import type { MetaFunction } from '@remix-run/node';
import { ModeToggle } from '~/components/mode-toggle/mode-toggle';
import { Button } from '~/components/ui/button/button';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <>
      <Button variant="default" />
      <ModeToggle />
    </>
  );
}
