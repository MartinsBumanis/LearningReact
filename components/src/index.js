import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
return (
<div className="ui container comments">
<ApprovalCard>
    <div>
        <h4>Warning!</h4>
    Are you sure you want to quit?
    </div>
</ApprovalCard>
    
    <ApprovalCard>
   <CommentDetail 
   author="Sam" 
   timeAgo="Today at 4:00AM" 
   avatarImage={faker.image.avatar()} 
   commentText={faker.lorem.sentence()}
   />
   </ApprovalCard>

   <ApprovalCard>
   <CommentDetail 
   author="Alex" 
   timeAgo="Today at 7:00PM" 
   avatarImage={faker.image.avatar()} 
   commentText={faker.lorem.sentence()}
   />
   </ApprovalCard>

   <ApprovalCard>
   <CommentDetail 
   author="Jane" 
   timeAgo="Yesterday at 5:00AM" 
   avatarImage={faker.image.avatar()} 
   commentText={faker.lorem.sentence()}
   />
   </ApprovalCard>
</div>

);

};

ReactDOM.render(<App />,document.querySelector('#root'))