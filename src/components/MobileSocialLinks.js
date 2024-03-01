import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa' 
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const MobileSocialLinks = () => {

        const links =[
        {
            id:1,
            child:(
                <>
               <FaLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/chamindu-yasintha-676266241/',
            style:'rounded-bl-md rounded-tl-md'
        },
        {
            id:2,
            child:(
                <>
                <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/chamindu0',
            
        },
        {
            id:3,
            child:(
                <>
                <HiOutlineMail size={30}/>
                </>
            ),
            href:'mailto:igcysenarathna@gmail.com',
            
        },
        {
            id:4,
            child:(
                <>
                 <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:'/resume.pdf',
            download:true,
            style:'rounded-br-md rounded-tr-md'
            
        },

    ]


    return(
  

        <div  className='flex flex-row  justify-center  bg-gradient-to-b from-black to-gray-800 p-12 text-white h-40 '>
        
            {links.map(({id,child,href,style,download})=>(
            <div key={id} className={"msm:hidden lg:hidden  lg:flex items-stretch pt-5 w-20 h-20 px-4 mb-[-100px] hover:mt-[-50px] hover:rounded-md duration-300  bg-gray-500 "  + style}>
                <a href={href}
                className='flex  text-white'
                download={download}
                target='_blank'
                rel='noreferrer'
                >
                <>
                {child}
                </>
                </a>
            </div>        
            
            ))}

        
        </div> 
   
    )
  
}

export default MobileSocialLinks