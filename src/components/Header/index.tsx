import React from "react";
import { StyHeader, StyFixed } from "./style";

const Index = () => {
  return (
    <StyHeader>
      <div></div>
      <StyFixed>
        <div className="logo">
          <img src="/instagram.png" alt="instagram-colne" />
        </div>
      </StyFixed>
    </StyHeader>
  );
};

export default Index;
