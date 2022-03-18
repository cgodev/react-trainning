// Import the React and RactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from '@faker-js/faker';


// Create a react component
const App = () => {
    const date = new Date().toDateString();
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure want to do this?
                </div>
                
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" avatar={faker.image.avatar()} commentary={faker.git.commitMessage()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 4:45PM" avatar={faker.image.avatar()} commentary={faker.git.commitMessage()} />
            </ApprovalCard>    
            <ApprovalCard>
                <CommentDetail author="Carlos" timeAgo="Today at 4:45PM" avatar={faker.image.avatar()} commentary={faker.git.commitMessage()} />
            </ApprovalCard>    
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Today at 4:45PM" avatar={faker.image.avatar()} commentary={faker.git.commitMessage()} />
            </ApprovalCard>    
        </div>
    );
};

//Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)