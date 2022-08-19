import React from 'react';

function CommentCard({ comment, name, occupation, url }) {
  return (
    <div>
      <div className='flex  h-[160px]  mb-8 mr-[53px]  md:mb-[78px] 2xl:h-[160px] xl:h-[180px]'>
        <div className=' md:w-[160px]   w-[60px] h-[60px]   shrink-0 mr-4 md:mr-[48px] mt-2   '>
          <img src={url} alt="img" className=' rounded-full border-2 border-[#001933] object-contain' />
        </div>
        <div className=' grid gap-5 md:gap-20   grid-rows-2 p-2'>
          <div>
            <p className=' md:text-[14px]  border-b border-[#001933]  pb-6 md:pb-2 lg:pb-4 md:mb-10 pt-2'>{comment}</p>
          </div>

          <div>
            <h1 className=' md:text-xl text-[14px] font-semibold mb-1'>{name}</h1>
            <h2 className=' text-[10px]'>{occupation}</h2>
          </div>

        </div>
      </div>

    </div>
  );
}

export default CommentCard;
