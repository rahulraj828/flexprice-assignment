import { Zap } from 'lucide-react';
import { Button } from './components/atoms/Button';

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-6">
        <Zap className="h-10 w-10 fill-current" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2">FlexPrice Component Library</h1>
      <p className="text-muted-foreground max-w-md mb-8">
        A professional React + TypeScript component system extracted from the FlexPrice billing platform.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => window.location.href = '/storybook'}>
          View Storybook
        </Button>
        <Button variant="secondary" onClick={() => window.open('https://github.com/flexprice/flexprice-front', '_blank')}>
          FlexPrice GitHub
        </Button>
      </div>
      <footer className="mt-16 text-sm text-muted-foreground">
        Built for the FlexPrice Frontend Intern Take-Home Assignment.
      </footer>
    </div>
  );
}

export default App;
