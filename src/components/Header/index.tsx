import React from "react";
import { StyHeader, StyFixed } from "./style";

const Index = () => {
  return (
    <StyHeader>
      <div />
      <StyFixed>
        <div className="inside">
          <div className="logo">
            <img src="/instagram.png" alt="instagram-colne" />
          </div>
        </div>
      </StyFixed>
    </StyHeader>
  );
};

export default Index;
