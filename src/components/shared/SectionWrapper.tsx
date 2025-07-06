import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SectionWrapper = React.forwardRef<HTMLDivElement, SectionWrapperProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('container mx-auto px-4 py-12 md:py-16 lg:py-20', className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper; 