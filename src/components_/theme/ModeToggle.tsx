import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from './useTheme';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const handleToggle = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center gap-3">
      <Sun className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
      <Switch
        checked={isDark}
        onCheckedChange={handleToggle}
        aria-label="Toggle theme"
      />
      <Moon className="h-5 w-5 text-slate-600 dark:text-slate-300" />
    </div>
  );
}