import React from "react";
import { StyAvatar } from "./style";

interface I_Avatar {
  imgUrl: string;
  name: string;
  size?: number;
}

const Index: React.FC<I_Avatar> = (props) => {
  const { imgUrl, name, size = 20 } = props;

  return (
    <StyAvatar size={size}>
      <img src={imgUrl} alt={name} />
    </StyAvatar>
  );
};

export default Index;
