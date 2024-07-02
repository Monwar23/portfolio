import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Education = () => {
    return (
        <div className='mt-10 px-6'>
            <Fade direction='right'>
                <h2 className='text-blue-500 text-3xl text-center font-bold mt-5 lg:mt-0 mb-8'>Education</h2>
            </Fade>
            <div className="flex flex-col items-center lg:flex-row lg:items-start">
                <Image 
                    src="/Monwar Image.jpg" 
                    alt="Profile Picture" 
                    width={500} 
                    height={500} 
                    className="rounded-2xl w-80 lg:h-96 h-64 border-4 border-blue-500 mb-6 lg:mb-0 lg:mr-10"
                />
                <Fade direction='left' className="lg:w-2/3">
                    <div className='text-center lg:text-left'>
                        <h3 className='text-xl text-blue-500 font-semibold'>University of Rajshahi</h3>
                        <p className='text-lg font-medium text-white'>B.Sc. in Computer Science and Engineering</p>
                        <p className='text-md text-white'>2019-2022</p>
                        <p className='text-base mt-4 text-white'>
                            During my time at University of Rajshahi, I developed a strong foundation in computer science and engineering principles. 
                            The rigorous curriculum and hands-on projects allowed me to gain expertise in various programming languages and technologies. 
                            I was actively involved in several research projects and collaborated with peers on innovative solutions to complex problems. 
                            This experience honed my skills in problem-solving, critical thinking, and teamwork, preparing me for a successful career in web development.
                        </p>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Education;
