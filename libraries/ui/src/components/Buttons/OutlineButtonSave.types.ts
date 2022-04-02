import { MouseEventHandler } from "react";

export default interface OutlineButtonSaveProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  id: string;
}
