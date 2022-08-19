
import React from 'react';
import CommentCard from './CommentCard';

const Comment = () => {
  const comments  = ([
    {
      comment: '“Async provides the ability to learn web development with ease and step by step guidance frombeginner to  milestone level."',
      name: 'John E, Dev Ops',
      occupation:'Freelance Developer',
      url:'/Frame 33.png'
    },
    {
      comment: '"Async provides the ability to learn web development with ease and step by step guidance frombeginner to  milestone level."',
      name: 'John E, Dev Ops',
      occupation: 'Freelance Developer',
      url:'/Frame 331.png'
    },
    {
      comment: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.”',
      name: 'Etieno M, Frontend Dev',
      occupation:'ASYNC',
      url:'/Frame 334.png'
    },
    {
      comment: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."',
      name: 'Etieno M, Frontend Dev',
      occupation:'ASYNC',
      url:'/Frame 332.png'
    },
  ]);
  return (
<<<<<<< HEAD:frontend/src/components/Comment.jsx
    
    <>
      <div className=' grid md:grid-cols-2  py-[1.25rem] md:px-[2.5rem] md:py-[4.25rem] px-[1.5rem] text-[#001933;] comment md:w-full w-full  md:h-[534px] xl:gap-x-[3rem] md:gap-x-[2rem] '>

=======
    <React.Fragment>
      <div className=' grid md:grid-cols-2  p-[68px] comment md:w-full  md:h-[534px]  '>
>>>>>>> 35c01692075b9f38419c4d4a78f7aab38e77b716:frontend/src/components/comment/Comment.jsx
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