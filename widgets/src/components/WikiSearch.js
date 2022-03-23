import React, { useState } from "react";

const WikiSearch = () => {

    const [term, setTerm] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search whatever u want</label>
                    <input onChange={e => setTerm(e.target.value)} value={term} className="input"/>
                </div>
            </div>
        </div>
    )
}

export default WikiSearch;