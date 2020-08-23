import React from "react";
import { StyInput } from "./style";

interface I_Input {
  label?: string;
  placeholder?: string;
  type?: string;
  defaultValue?: string;
  onChange: (v: string) => void;
}

const Index: React.FC<I_Input> = (props) => {
  const { label, type = "text", defaultValue, onChange, ...other } = props;

  const [input, setInput] = React.useState("");

  React.useEffect(() => {
    onChange(input);
  }, [input]);

  return (
    <StyInput>
      {!!label && <label htmlFor={`_input_${label}`}>{label}</label>}
      <input
        type={type}
        id={`_input_${label}`}
        defaultValue={defaultValue}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        {...other}
      />
    </StyInput>
  );
};

export default Index;
