import React, { useState, useEffect } from "react";
import axios from 'axios';

const WikiSearch = () => {

  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const wikiSearch = async () => {
      const { data } = await axios.get(
        'https://en.wikipedia.org/w/api.php',
        {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: term
          }
        });
      setResults(data.query.search);
    }

    if (term && !results.length) {
      wikiSearch();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) wikiSearch();
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      }
    }

  }, [term]);

  const renderedResults = results.map(result => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank">See more</a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>

        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search whatever u want</label>
          <input onChange={e => setTerm(e.target.value)} value={term} className="input" />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  )
}

export default WikiSearch;