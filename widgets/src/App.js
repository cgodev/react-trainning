import React from 'react';
import Accordion from './components/Accordion';

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
        title: 'What is React?',
        content: 'React is a front end js library'
    }
]

export default () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    )
}