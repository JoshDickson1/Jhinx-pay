import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
        <p className="text-lg font-medium text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;