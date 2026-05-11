import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headingVariants = cva(
  'font-bold tracking-tight',
  {
    variants: {
      size: {
        h1: 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
        h2: 'text-3xl md:text-4xl lg:text-5xl',
        h3: 'text-2xl md:text-3xl lg:text-4xl',
        h4: 'text-xl md:text-2xl lg:text-3xl',
        h5: 'text-lg md:text-xl lg:text-2xl',
        h6: 'text-base md:text-lg lg:text-xl',
      },
      color: {
        primary: 'text-text-primary',
        secondary: 'text-text-secondary',
        muted: 'text-text-muted',
        primaryGradient: 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent',
        secondaryGradient: 'bg-gradient-to-r from-secondary to-cyan-400 bg-clip-text text-transparent',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
      },
    },
    defaultVariants: {
      size: 'h2',
      color: 'primary',
      weight: 'bold',
    },
  }
);

const textVariants = cva(
  'leading-relaxed',
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
      },
      color: {
        primary: 'text-text-primary',
        secondary: 'text-text-secondary',
        muted: 'text-text-muted',
        primaryGradient: 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent',
        secondaryGradient: 'bg-gradient-to-r from-secondary to-cyan-400 bg-clip-text text-transparent',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
    },
    defaultVariants: {
      size: 'base',
      color: 'secondary',
      weight: 'normal',
    },
  }
);

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div';
  children: React.ReactNode;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, color, weight, as, children, ...props }, ref) => {
    const TagName = as || 'h2';
    
    if (TagName === 'h1') {
      return (
        <h1
          ref={ref}
          className={cn(headingVariants({ size: size || 'h1', color, weight, className }))}
          {...props}
        >
          {children}
        </h1>
      );
    }
    
    if (TagName === 'h2') {
      return (
        <h2
          ref={ref}
          className={cn(headingVariants({ size: size || 'h2', color, weight, className }))}
          {...props}
        >
          {children}
        </h2>
      );
    }
    
    if (TagName === 'h3') {
      return (
        <h3
          ref={ref}
          className={cn(headingVariants({ size: size || 'h3', color, weight, className }))}
          {...props}
        >
          {children}
        </h3>
      );
    }
    
    if (TagName === 'h4') {
      return (
        <h4
          ref={ref}
          className={cn(headingVariants({ size: size || 'h4', color, weight, className }))}
          {...props}
        >
          {children}
        </h4>
      );
    }
    
    if (TagName === 'h5') {
      return (
        <h5
          ref={ref}
          className={cn(headingVariants({ size: size || 'h5', color, weight, className }))}
          {...props}
        >
          {children}
        </h5>
      );
    }
    
    return (
      <h6
        ref={ref}
        className={cn(headingVariants({ size: size || 'h6', color, weight, className }))}
        {...props}
      >
        {children}
      </h6>
    );
  }
);

Heading.displayName = 'Heading';

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, color, weight, as = 'p', children, ...props }, ref) => {
    if (as === 'span') {
      return (
        <span
          ref={ref as React.Ref<HTMLSpanElement>}
          className={cn(textVariants({ size, color, weight, className }))}
          {...props}
        >
          {children}
        </span>
      );
    }
    
    if (as === 'div') {
      return (
        <div
          ref={ref as React.Ref<HTMLDivElement>}
          className={cn(textVariants({ size, color, weight, className }))}
          {...props}
        >
          {children}
        </div>
      );
    }
    
    return (
      <p
        ref={ref}
        className={cn(textVariants({ size, color, weight, className }))}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = 'Text';

const GradientText = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    from?: 'primary' | 'secondary';
    to?: 'accent' | 'cyan-400';
  }
>(({ className, from = 'primary', to = 'accent', children, ...props }, ref) => {
  const gradientClass = from === 'primary' 
    ? 'from-primary to-accent' 
    : 'from-secondary to-cyan-400';
    
  return (
    <span
      ref={ref}
      className={cn(`bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`, className)}
      {...props}
    >
      {children}
    </span>
  );
});

GradientText.displayName = 'GradientText';

export { Heading, Text, GradientText, headingVariants, textVariants };
