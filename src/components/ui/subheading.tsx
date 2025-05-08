import * as React from "react";
import { cn } from "@/lib/utils";

export interface SubheadingProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  align?: "left" | "center" | "right";
}

export const Subheading = React.forwardRef<
  HTMLParagraphElement,
  SubheadingProps
>(({ className, align = "left", ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-lg md:text-xl text-gray-600 dark:text-gray-300 [font-size:1.125rem_!important] leading-relaxed max-w-none mx-auto",
      align === "center" && "text-center !important",
      align === "right" && "text-right !important",
      
      className
    )}
    {...props}
  />
));
Subheading.displayName = "Subheading";

export default Subheading;
