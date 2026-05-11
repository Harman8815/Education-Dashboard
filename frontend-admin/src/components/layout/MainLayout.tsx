import React from 'react';
import { cn } from '@/lib/utils';

export interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const MainLayout = React.forwardRef<HTMLDivElement, MainLayoutProps>(
  ({ children, className, fullWidth = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'min-h-screen bg-background-main text-text-primary',
          fullWidth ? 'w-full' : 'container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

MainLayout.displayName = 'MainLayout';

export { MainLayout };
