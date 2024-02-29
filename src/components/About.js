import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-20'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'> About</p>
        </div>
        <p className='text-xl mt-20'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus atque dolorum fugit eaque vero facere molestias. Consequatur nobis, expedita totam cupiditate ad accusamus, ipsa illo commodi laudantium rerum saepe? Odit laudantium itaque nostrum exercitationem accusamus commodi dolor reprehenderit sed, saepe voluptas cum quas quae ab aspernatur voluptatem tenetur totam a?
        </p>
        <br />
        <p className='text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusantium impedit ad consectetur voluptatum repudiandae nobis, corrupti neque quod esse fugit atque inventore saepe similique! Dolorum, eveniet optio. Harum obcaecati placeat nisi temporibus odio exercitationem suscipit dignissimos perspiciatis corporis debitis at, inventore dicta nulla rerum esse vitae illo, ratione tempora?
        </p>
      </div>
    </div>
  )
}

export default About
