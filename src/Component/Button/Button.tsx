import { ReactNode } from "react";

export function Button({
  children,
  handleClick,
}: {
  children: ReactNode;
  handleClick: () => void;
}) {
  return (
    <button className="button" onClick={handleClick}>
      {children}
    </button>
  );
}
