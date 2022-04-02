import { MouseEventHandler, ReactNode } from "react";
export default interface ArrowButtonMPFAProps {
    id: string;
    ariaLabel: string;
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
