import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  handleClick?: () => void;
  type: "button" | "submit";
}

export function Button({ children, handleClick, type }: IButton) {
  return (
    <button type={type} className="button" onClick={handleClick}>
      {children}
    </button>
  );
}
