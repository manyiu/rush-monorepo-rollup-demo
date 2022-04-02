import { MouseEventHandler, ReactNode } from "react";
export default interface DashBoardButtonProps {
    id: string;
    text: string;
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
