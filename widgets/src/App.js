import React, { useState } from 'react';
import Accordion from './components/Accordion';
import WikiSearch from './components/WikiSearch';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Router from './components/Router';
import Header from './components/Header';


const items = [
    {
        title: 'What is React?',
        content: 'React is a front end js library'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite js library among engineers'
    },
    {
        title: 'What is React Again?',
        content: 'React is a front end js library'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Yellow',
        value: 'yellow'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
]


export default () => {

    const [selected, setSelected] = useState(options[0]);
    return (
        <div className='ui container'>
            <Header />
            <Router path={'/'}>
                <Accordion items={items} />
            </Router>

            <Router path={'/list'}>
                <WikiSearch />
            </Router>

            <Router path={'/dropdown'}>
                <Dropdown
                    label={'Select a color'}
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected} 
                />
            </Router>

            <Router path={'/translate'}>
                <Translate />
            </Router>
        </div>
    )

    
}