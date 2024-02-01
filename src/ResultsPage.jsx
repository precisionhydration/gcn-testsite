import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ResultsPage = () => {
  const [htmlState, setHtmlState] = useState("");
  const [javascriptState, setJavascriptState] = useState("");
  const [searchParams] = useSearchParams(); // react-router-dom v6
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSsr = async (resultId) => {
      try {
        const response = await fetch(
          `https://apigcnr.prhcdn.com/planner_results/${resultId}`
        );
        const { data } = await response.json();

        window.APP_STATE = data.data;
        setHtmlState(data.html);
        setJavascriptState(data.javascript);
        setLoading(false);
      } catch (e) {
        console.log("error: ", e);
      }
    };

    const resultId = searchParams.get("id");
    if (resultId) {
      getSsr(resultId);
    }
  }, []);

  useEffect(() => {
    if (javascriptState) {
      const newScript = document.createElement("script");
      newScript.text = javascriptState;
      document.body.appendChild(newScript);
      return () => document.body.removeChild(newScript);
    }
  }, [javascriptState]);

  if (loading) {
    return <div style={{ textAlign: "center" }}>loading...</div>;
  }

  return (
    <div
      id="result-page-root"
      dangerouslySetInnerHTML={{ __html: htmlState }}
    />
  );
};

export default ResultsPage;
