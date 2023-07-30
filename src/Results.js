import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="searchedWord">{props.results.word}</h2>
          <p className="wordPhonetic">{props.results.phonetic}</p>

          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <section>
                  <Meaning meaning={meaning} />
                </section>
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
