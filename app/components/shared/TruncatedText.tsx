"use client";
import TextTruncate from "react-text-truncate";

const TruncatedText = ({ text, lines }: { text: string; lines: number }) => {
  return (
    <TextTruncate
      line={lines}
      element="span"
      truncateText="…"
      text={text}
    />
  );
};

export default TruncatedText;