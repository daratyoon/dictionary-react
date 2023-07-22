import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definition}</p>
      <p>
        <i className="example">{props.meaning.example}</i>
      </p>
      <p>
        <Synonyms synonyms={props.meaning.synonyms} />
        <span> Antonyms(s):{props.meaning.antonyms}</span>
      </p>
    </div>
  );
}
