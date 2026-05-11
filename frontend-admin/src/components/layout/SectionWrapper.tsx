import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const sectionWrapperVariants = cva(
  'relative overflow-hidden',
  {
    variants: {
      padding: {
        none: 'py-0',
        sm: 'py-12 sm:py-16',
        md: 'py-16 sm:py-20',
        lg: 'py-20 sm:py-24',
        xl: 'py-24 sm:py-32',
        '2xl': 'py-32 sm:py-40',
      },
      background: {
        none: 'bg-transparent',
        main: 'bg-background-main',
        secondary: 'bg-background-secondary',
        card: 'bg-background-card',
        gradient: 'bg-gradient-to-br from-background-main via-background-secondary to-background-card',
        accent: 'bg-gradient-to-br from-primary/5 to-accent/5',
      },
      brokenGrid: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      padding: 'lg',
      background: 'main',
      brokenGrid: false,
    },
  }
);

export interface SectionWrapperProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionWrapperVariants> {
  children: React.ReactNode;
  as?: 'section' | 'div' | 'article';
  id?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const SectionWrapper = React.forwardRef<HTMLDivElement, SectionWrapperProps>(
  ({ 
    className, 
    padding, 
    background, 
    brokenGrid, 
    as = 'section', 
    id, 
    containerSize = 'lg', 
    children, 
    ...props 
  }, ref) => {
    const containerClasses = {
      sm: 'container mx-auto px-4 sm:px-6 max-w-4xl',
      md: 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl',
      lg: 'container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl',
      xl: 'container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-8xl',
      full: 'w-full px-4 sm:px-6 lg:px-8 xl:px-12',
    };

    const brokenGridStyles = brokenGrid ? {
      transform: 'rotate(-1deg) translateX(-2rem)',
      margin: '0 -2rem',
    } : {};

    const Component = as;

    return (
      <Component
        ref={ref}
        id={id}
        className={cn(
          sectionWrapperVariants({ padding, background, brokenGrid }),
          className
        )}
        style={brokenGrid ? brokenGridStyles : undefined}
        {...props}
      >
        <div className={containerClasses[containerSize]}>
          {brokenGrid && (
            <div style={{ transform: 'rotate(1deg) translateX(2rem)' }}>
              {children}
            </div>
          )}
          {!brokenGrid && children}
        </div>
      </Component>
    );
  }
);

SectionWrapper.displayName = 'SectionWrapper';

export { SectionWrapper, sectionWrapperVariants };
