import { MouseEventHandler } from "react";
export default interface OutlineButtonClearProps {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    id: string;
}
