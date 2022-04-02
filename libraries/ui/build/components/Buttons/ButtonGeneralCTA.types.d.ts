import { MouseEventHandler } from "react";
export default interface ButtonGeneralCTAProps {
    text: string;
    id: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
