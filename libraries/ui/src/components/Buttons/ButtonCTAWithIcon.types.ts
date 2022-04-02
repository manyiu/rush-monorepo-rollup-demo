import { MouseEventHandler } from "react";

export default interface ButtonCTAWithIconProps {
  text: string;
  id: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
