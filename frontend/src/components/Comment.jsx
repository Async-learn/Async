
import { useState } from 'react';
import CommentCard from './CommentCard';

const Comment = () => {
  const [comments, setComments] = useState([
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
    
    <>
      <div className=' grid md:grid-cols-2  py-[1.25rem] md:px-[2.5rem] md:py-[4.25rem] px-[1.5rem] text-[#001933;] comment md:w-full w-full  md:h-[534px] xl:gap-x-[3rem] md:gap-x-[2rem] '>

        {
          comments.map((comment, key) => {
            return <CommentCard comment={ comment.comment}  name= {comment.name} occupation= {comment.occupation} url={comment.url} key={key}  />
          })
        }
      
     </div>
    </>
  )
}

export default Comment;