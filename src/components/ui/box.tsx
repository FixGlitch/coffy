import React from "react";
import { cn } from "@/lib/utils";

type BoxProps = {
  children: React.ReactNode;
  className?: string;
  horizontal?: boolean; // Para dirección horizontal
  vertical?: boolean;   // Centrado vertical
  justify?: "start" | "center" | "end"; // Eje principal
  align?: "start" | "center" | "end";   // Eje transversal
};

const Box = ({
  children,
  className,
  horizontal = false,
  vertical = true,  // Vertical alineado por defecto
  justify = "center",
  align = "center",
}: BoxProps) => {
  return (
    <div
      className={cn(
        "flex min-h-screen", // Pantalla completa y flex
        horizontal ? "flex-row" : "flex-col", // Control de dirección
        vertical ? "items-center" : `items-${align}`, // Alineación vertical por defecto
        `justify-${justify}`, // Alineación en eje principal
        className // Clases adicionales
      )}
    >
      {children}
    </div>
  );
};

export default Box;
