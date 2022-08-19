
import React from 'react';
import CommentCard from './CommentCard';

const Comment = () => {
  const comments  = ([
    {
      comment: '“Async provides the ability to learn web development with ease and step by step guidance frombeginner to  milestone level.’’',
      name: 'John E, Dev Ops',
      occupation:'Freelance Developer',
      url:'/Frame 33.png'
    },
    {
      comment: '“Async provides the ability to learn web development with ease and step by step guidance frombeginner to  milestone level.’’',
      name: 'John E, Dev Ops',
      occupation: 'Freelance Developer',
      url:'/Frame 331.png'
    },
    {
      comment: '““Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.”’’',
      name: 'Etieno M, Frontend Dev',
      occupation:'ASYNC',
      url:'/Frame 334.png'
    },
    {
      comment: '““Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.”’’',
      name: 'Etieno M, Frontend Dev',
      occupation:'ASYNC',
      url:'/Frame 332.png'
    },
  ]);
  return (
    <React.Fragment>
      <div className=' grid md:grid-cols-2  p-[68px] comment md:w-full  md:h-[534px]  '>
        {
          comments.map((comment, key) => {
            return (
              <CommentCard 
                key={ key }
                comment={ comment.comment }  
                name= { comment.name } 
                occupation= { comment.occupation } 
                url={ comment.url }  
              />
            )
          })
        }
      
     </div>
    </React.Fragment>
  )
}

export default Comment;