import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-52 bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg px-5 mx-auto flex flex-col justify-center w-full pt-40'>
        <div className='pb-6 '>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'> About</p>
        </div>
        <p className='text-xl mt-20'>
        I am an enthusiastic software engineering student with a passion for creating innovative solutions, I have successfully completed a Higher National Diploma in Software Engineering. Currently, I am pursuing a degree BEng in Software Engineering and am eager to apply my skills and knowledge in a real-world setting. I am proficient in JavaScript, React and various web development technologies
        </p>
 
      </div>
    </div>
  )
}

export default About
