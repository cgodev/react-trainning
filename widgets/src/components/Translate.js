import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'Africano',
        value: 'af'
    },
    {
        label: 'Arabe',
        value: 'ar'
    },
    {
        label: 'Hindú',
        value: 'hi'
    }
]

const label = 'Select a language'


const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={e => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown selected={language} onSelectedChange={setLanguage} options={options} label={label} />
            <hr/>
            <h1 className="ui header">Output</h1>
            <Convert language={language} text={text} />
        </div>
    );
};

export default Translate