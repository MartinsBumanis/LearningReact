import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
return (
<div className="ui container comments">
   <CommentDetail 
   author="Sam" 
   timeAgo="Today at 4:00AM" 
   avatarImage={faker.image.avatar()} 
   commentText={faker.lorem.sentence()}
   />
   <CommentDetail 
   author="Alex" 
   timeAgo="Today at 7:00PM" 
   avatarImage={faker.image.avatar()} 
   commentText={faker.lorem.sentence()}
   />
   <CommentDetail 
   author="Jane" 
   timeAgo="Yesterday at 5:00AM" 
   avatarImage={faker.image.avatar()} 
   commentText={faker.lorem.sentence()}
   />
</div>

);

};

ReactDOM.render(<App />,document.querySelector('#root'))