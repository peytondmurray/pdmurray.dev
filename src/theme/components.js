import React from "react";
import TeX from "@matejmazur/react-katex";
import Prism from "@theme-ui/prism";
import styled from "@emotion/styled";

import Centered from "../components/Centered";

const settings = {
  trust: (context) => ["\\htmlId", "\\href"].includes(context.command),
  macros: {
    "\\eqref": "\\href{###1}{(\\text{#1})}",
    "\\ref": "\\href{###1}{\\text{#1}}",
    "\\label": "\\htmlId{#1}{}",
  },
  strict: (errorCode) => (errorCode === "htmlExtension" ? "ignore" : "warn"),
};

const Pre = styled.div`
  pre {
    padding: 1em;
  }
`;

const components = {
  pre: Pre,
  code: Prism,
  div: (props) => {
    if (props?.className?.includes("math-display")) {
      return <TeX block math={props.children} settings={settings} />;
    } else if (props?.className?.includes("embedVideo-container")) {
      return <Centered {...props} />;
    }
    return <div {...props} />;
  },
  span: (props) => {
    if (props?.className?.includes("math-inline")) {
      return <TeX math={props.children} settings={settings} />;
    }
    return <span {...props} />;
  },
};
export default components;