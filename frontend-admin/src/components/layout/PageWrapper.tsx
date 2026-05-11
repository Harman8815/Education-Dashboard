import React from 'react';
import { cn } from '@/lib/utils';

export interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const PageWrapper = React.forwardRef<HTMLDivElement, PageWrapperProps>(
  ({ children, className, maxWidth = 'full', ...props }, ref) => {
    const maxWidthClasses = {
      sm: 'max-w-4xl',
      md: 'max-w-6xl',
      lg: 'max-w-7xl',
      xl: 'max-w-8xl',
      '2xl': 'max-w-10xl',
      full: 'max-w-full',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'min-h-screen bg-background-main text-text-primary',
          maxWidthClasses[maxWidth],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PageWrapper.displayName = 'PageWrapper';

export { PageWrapper };
