import React, { FC } from "react";
import Facebook from "./Facebook";
import Google from "./Google";

export enum IconNames {
  Facebook = "Facebook",
  Google = "Google",
}

export interface IconsProps {
  color?: string;
  size?: string;
  opacity?: string;
  className?: string;
}

interface CustomIconsProps extends IconsProps {
  icon: keyof typeof iconMap;
}

const iconMap: Record<IconNames, FC<IconsProps>> = {
  [IconNames.Facebook]: Facebook,
  [IconNames.Google]: Google,
};

export const CustomIcons: FC<CustomIconsProps> = ({
  icon,
  color,
  size,
  opacity,
  className,
}) => {
  const IconComponent = iconMap[icon];

  if (IconComponent) {
    return (
      <IconComponent
        color={color}
        size={size}
        opacity={opacity}
        className={className}
      />
    );
  }

  return <></>;
};
