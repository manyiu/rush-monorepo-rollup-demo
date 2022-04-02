import { MouseEventHandler } from "react";

export default interface SearchButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  id: string;
}
