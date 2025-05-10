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

export interface HeadingProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof headingVariants> {
  as?: React.ElementType; // если понадобится <Heading as="h3">
}

export const Heading = React.forwardRef<HTMLElement, HeadingProps>(
  (
    { level, as: Comp = `h${level}` as never, className, align, ...props },
    ref
  ) => (
    <Comp
      ref={ref}
      className={cn(headingVariants({ level, align }), className)}
      {...props}
    />
  )
);
Heading.displayName = "Heading";
