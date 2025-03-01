import React, { useState } from "react";
import SplitPane, { Pane } from "../src";
import "../src/themes/default.scss";

export default {
  title: "Advanced",
};

export const AllowResize = () => {
  const [sizes, setSizes] = useState<(number | string)[]>(["20%", "auto"]);
  const [allowResize, setAllowResize] = useState(true);

  const layoutCSS = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={{ height: 500 }}>
      <p>Enable and disable resize</p>
      <div>
        <button onClick={() => setAllowResize(true)}>allow resize</button>
        <button onClick={() => setAllowResize(false)}>not allow resize</button>
      </div>
      <SplitPane sizes={sizes} onChange={setSizes} allowResize={allowResize}>
        <div style={{ ...layoutCSS, background: "#ddd" }}>Pane1</div>
        <div style={{ ...layoutCSS, background: "#d5d7d9" }}>Pane2</div>
      </SplitPane>
    </div>
  );
};
