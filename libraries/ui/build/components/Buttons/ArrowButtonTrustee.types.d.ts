import { MouseEventHandler, ReactNode } from "react";
export default interface ArrowButtonTrusteeProps {
    id: string;
    ariaLabel: string;
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
