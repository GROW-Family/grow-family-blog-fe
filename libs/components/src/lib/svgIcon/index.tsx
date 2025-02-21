import { EnumSvgIcon, ISvgIconProps } from "./iconEnum";
import GoogleSvg from "./icons/google";

const render: Record<EnumSvgIcon, React.FC<ISvgIconProps>> = {
  [EnumSvgIcon.google]: GoogleSvg,
};

function SvgIconComponent({ icon, ...others }: ISvgIconProps) {
  const Component = render[icon] as React.FC<Omit<ISvgIconProps, "icon">>;
  return <Component {...others} />;
}

export default SvgIconComponent;
