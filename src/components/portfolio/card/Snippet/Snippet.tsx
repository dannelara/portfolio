import React, { useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface SnippetProps {
  code: string;
  language: string;
}

export const Snippet: React.FC<SnippetProps> = ({ code, language }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={vs2015}
      customStyle={{
        backgroundColor: "rgb(27, 27, 47, 0.9)",
        padding: 0,
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};
