import { MouseEventHandler } from "react";
export default interface ClearButtonProps {
    text: string;
    id: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
