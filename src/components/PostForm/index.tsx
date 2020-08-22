import React from "react";
import cx from "classnames";
import { StyPostForm } from "./style";

interface I_PostFrom {
  open: boolean;
}

const Index: React.FC<I_PostFrom> = (props) => {
  const { open } = props;

  return (
    <StyPostForm className={cx({ show: open })}>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </StyPostForm>
  );
};

export default Index;
