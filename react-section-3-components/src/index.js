import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import CommentDetails from './CommentDetails';

import faker from 'faker';
const App = () => {
    return (

        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h3>Warning !!!</h3>
                    <div>
                        Are you sure you want to do this ?
                    </div>
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetails author="Rado" timeAgo="Today at: 3:00PM" comment={faker.lorem.words()} avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetails author="Sam" timeAgo="Today at: 2:56PM" comment={faker.lorem.words()} avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetails author="Pesho" timeAgo="Today at: 7:00PM" comment={faker.lorem.words()} avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );

}

ReactDOM.render(<App />, document.querySelector('#root'))