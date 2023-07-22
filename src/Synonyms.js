import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return <div className="Synonyms">Hello from synonyms</div>;
  } else {
    return null;
  }
}
