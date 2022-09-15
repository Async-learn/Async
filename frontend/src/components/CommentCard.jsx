import React from 'react';

function CommentCard({ comment, name, occupation, url }) {
  return (
    <div>
      <div className='flex mb-[2.38rem]   md:mb-[4.88rem]   xl:w-full xl:gap-[3rem]   md:h-[10rem] h-[9.69rem] w-full'>

        <div className=' md:w-[10rem] md:h-[10rem]  w-[60px] h-[60px] md:mr-[3rem]   shrink-0 mr-4  mt-2   '>
          <img src={url} alt="img" className=' rounded-full border-2 border-[#001933] object-contain' />
        </div>

        <div className=' md:grid md:gap-[5rem]  grid-rows-2 '>
          <div className='md:text-[0.75rem]  mb-[.5rem]  lg:pb-4 md:mb-10  w-full '>
            <p className=' text-[0.7rem] md:text-[1.2rem] 2xl:text-[1.4rem] 2xl:leading-[2.8rem] leading-[1.5rem] '>{comment}</p>
          </div>

          <div>
            <h1 className=' md:text-[1.25rem] 2xl:text-[1.8rem] text-[0.88rem] font-[500]  border-t border-[#001933]  '>{name}</h1>
            <h2 className=' text-[10px] md:text-[.88rem] font-semibold 2xl:text-[1.2rem] text-[#576A7B]'>{occupation}</h2>
          </div>

        </div>
      </div>

    </div>
  );
}

export default CommentCard;
