import { Button } from './Button';
import { Logo } from './Logo';

export const Header: React.FC = () => {

  return (
    <header className="py-8">
      <main className="bg-zinc-800 rounded py-4 px-6 shadow-md flex justify-between items-center">
        <Logo />

        <Button>
          Botão
        </Button>
      </main>
    </header>
  );
};
