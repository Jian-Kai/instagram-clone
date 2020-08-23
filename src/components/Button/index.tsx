import React from "react";
import { StyButton } from "./style";

interface I_Button {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  type?: "button" | "reset" | "submit";
}

const Index: React.FC<I_Button> = (props) => {
  const { type = "button", children, onClick, disabled = false } = props;
  return (
    <StyButton
      backgroundColor="#0095f6"
      color="#ffffff"
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyButton>
  );
};

export default Index;
