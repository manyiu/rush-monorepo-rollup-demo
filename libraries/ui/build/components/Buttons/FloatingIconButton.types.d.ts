import { MouseEventHandler } from "react";
export default interface FloatingIconButtonProps {
    id: string;
    ariaLabel: string;
    src: string;
    alt: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
