import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("", {
  variants: {
    level: {
      1: "scroll-m-20 text-display font-bold tracking-tight [font-size:2.75rem_!important]",
      2: "scroll-m-20 text-h1 font-bold tracking-tight [font-size:2.25rem_!important]",
      3: "scroll-m-20 text-h3 font-semibold [font-size:20px_!important]",
      4: "scroll-m-20 text-h4 font-semibold [font-size:1.25rem_!important]",
      5: "scroll-m-20 text-h5 font-semibold [font-size:1.125rem_!important]",
      6: "scroll-m-20 text-h6 font-semibold [font-size:1rem_!important]",
    },
    align: { left: "text-left", center: "text-center" },
  },
  defaultVariants: { level: 2, align: "left" },
});

// Определяем типы явно
interface CommonProps extends VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export type HeadingProps = CommonProps & Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof CommonProps>;

// Используем HTMLHeadingElement для ref, так как все h1-h6 элементы имеют этот тип
export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 2, as, className, align, ...props }, ref) => {
    const classes = cn(headingVariants({ level, align }), className);
    
    // Возвращаем соответствующий элемент на основе as или level
    if (as === 'h1' || (!as && level === 1)) {
      return <h1 ref={ref} className={classes} {...props} />;
    } else if (as === 'h2' || (!as && level === 2)) {
      return <h2 ref={ref} className={classes} {...props} />;
    } else if (as === 'h3' || (!as && level === 3)) {
      return <h3 ref={ref} className={classes} {...props} />;
    } else if (as === 'h4' || (!as && level === 4)) {
      return <h4 ref={ref} className={classes} {...props} />;
    } else if (as === 'h5' || (!as && level === 5)) {
      return <h5 ref={ref} className={classes} {...props} />;
    } else {
      return <h6 ref={ref} className={classes} {...props} />;
    }
  }
);

Heading.displayName = "Heading";
