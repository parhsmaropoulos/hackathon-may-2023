import { useState } from "react";
import ResultSection from "./result";
import { fetchResultsForTextInput } from "../data/fetcher";
import logo from "../logo.png";

function MainPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState({});

  async function seachForResults(text: string) {
    let res = await fetchResultsForTextInput(text);
    if (res) {
      setResult(res.body);
    }
  }
  return (
    <div className="container max-width">
      <div className="section" style={{ backgroundColor: "#F1F1F1" }}>
        <div className="has-text-centered">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </div>
      <div className="section" style={{ backgroundColor: "#F8F8F8" }}>
        <div className="columns has-text-centered">
          <div className="column"></div>
          <div className="column is-three-fifths">
            <div className="is-size-6 has-text-left mb-5 has-text-weight-semibold is-family-sans-serif">
              What are you looking for:
            </div>
            <textarea
              placeholder={`Example: " want to go camping for a weekend with \nmy family of 4. I have a budget of 200 euros.\nWhat do I need to buy?"`}
              onChange={(e) => setText(e.target.value)}
              value={text}
              className="textarea has-fixed-size"
              rows={5}
            ></textarea>
            <br />
            <button
              className="button is-fullwidth is-size-6 has-text-left md-5 has-text-weight-semibold is-family-sans-serif"
              onClick={() => seachForResults(text)}
              style={{ backgroundColor: "#FF9F68" }}
            >
              Search
            </button>
          </div>
          <div className="column "></div>
        </div>
      </div>
      <div className="section" style={{ backgroundColor: "#F1F1F1" }}>
        {ResultSection(result)}
      </div>
    </div>
  );
}

export default MainPage;
