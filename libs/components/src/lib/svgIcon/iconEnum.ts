export enum EnumSvgIcon {
  google,
}

export interface ISvgIconProps {
  icon: EnumSvgIcon;
  className?: string;
  fill?: string;
  stroke?: string;
  width?: number;
  height?: number;
}
