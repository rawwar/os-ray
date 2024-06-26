import { Tooltip } from "@mui/material";
import React, { CSSProperties } from "react";

export const longTextCut = (text = "", len = 28) => (
  <Tooltip title={text}>
    <span>{text.length > len ? text.slice(0, len) + "..." : text}</span>
  </Tooltip>
);

export const jsonFormat = (str: string | object) => {
  const preStyle = {
    textAlign: "left",
    wordBreak: "break-all",
    whiteSpace: "pre-wrap",
  } as CSSProperties;
  if (typeof str === "object") {
    return <pre style={preStyle}>{JSON.stringify(str, null, 2)}</pre>;
  }
  try {
    const j = JSON.parse(str);
    if (typeof j !== "object") {
      return JSON.stringify(j);
    }
    return <pre style={preStyle}>{JSON.stringify(j, null, 2)}</pre>;
  } catch (e) {
    return str;
  }
};
