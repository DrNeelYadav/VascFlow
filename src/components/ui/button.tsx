import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none',
  {
    variants: {
      variant: {
        default:
          'bg-[#1A73E8] text-white hover:bg-[#1765CC] active:bg-[#1557B0] shadow-xs',
        destructive:
          'bg-[#FCE8E6] text-[#C5221F] hover:bg-[#FAD2CF] border border-[#F5C2C7]',
        outline:
          'border border-[#DADCE0] bg-[#FFFFFF] text-[#3C4043] hover:bg-[#F8F9FA] hover:text-[#202124]',
        secondary:
          'bg-[#FFFFFF] text-[#3C4043] hover:bg-[#F8F9FA] hover:text-[#202124] border border-[#DADCE0] shadow-xs',
        ghost:
          'text-[#5F6368] hover:bg-[#F1F3F4] hover:text-[#202124]',
        link:
          'text-[#1A73E8] underline-offset-4 hover:underline',
        cathlab:
          'bg-[#F8F9FA] text-[#202124] border border-[#DADCE0] hover:bg-[#F1F3F4]',
        glow:
          'bg-[#1A73E8] text-white shadow-sm hover:bg-[#1765CC]',
      },
      size: {
        default: 'h-8 px-3.5 py-1.5',
        sm: 'h-7 rounded-full px-2.5 text-[11px]',
        lg: 'h-9 rounded-full px-4 text-sm',
        icon: 'h-8 w-8 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
