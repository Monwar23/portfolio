import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Skills = () => {
    return (
        <div className="skills-section relative z-10">
            <h2 className='text-blue-500 text-3xl text-center font-bold mb-8'>Skills</h2>
            <div>
              
               <div className='flex gap-10'>
               <Fade direction="left">
               <div className='bg-[#1a1a2e] rounded-md'>
                    <h2 className='border border-blue-500 text-white bg-gradient-to-r from-green-400 to-blue-500 p-2 text-center font-bold'>Frontend</h2>
                    <div className='grid grid-cols-3 gap-6 p-5 text-white'>
                        <div className='text-center'>
                            <Image src="/HTML-5-Badge-Logo.png" alt="HTML Logo" width={500} height={500} className="rounded-2xl w-20 h-16 mx-auto" />
                            <p className="mt-2">HTML</p>
                        </div>
                        <div className='text-center'>
                            <Image src="/png-transparent-css-hd-logo.png" alt="CSS Logo" width={500} height={500} className="rounded-2xl w-16 h-16 mx-auto" />
                            <p className="mt-2">CSS</p>
                        </div>
                        <div className='text-center'>
                            <Image src="/png-clipart-javascript-logo-computer-icons-vue-js-angle-text.png" alt="JavaScript Logo" width={500} height={500} className="rounded-2xl w-16 h-16 mx-auto" />
                            <p className="mt-2">JavaScript</p>
                        </div>
                        <div className='text-center'>
                            <Image src="/Tailwind_CSS_Logo.svg_GkNDLAs.webp" alt="Tailwind CSS Logo" width={500} height={500} className="rounded-2xl w-16 h-16 mx-auto" />
                            <p className="mt-2">Tailwind CSS</p>
                        </div>
                        <div className='text-center'>
                            <Image src="/png-clipart-bootstrap-logo-thumbnail-tech-companies.png" width={500} height={500} alt="Bootstrap Logo" className="rounded-2xl w-16 h-16 mx-auto" />
                            <p className="mt-2">Bootstrap</p>
                        </div>
                        <div className='text-center'>
                            <Image src="/React_(web_framework)-Logo.wine.png" alt="React Logo" width={500} height={500} className="rounded-2xl w-20 h-16 mx-auto" />
                            <p className="mt-2">React</p>
                        </div>
                    </div>
                </div>
</Fade>
<Fade direction="right">
                <div>
                <div className='bg-[#1a1a2e] rounded-md min-w-[400px]'>
                    <h2 className='border border-blue-500 text-white bg-gradient-to-r from-green-400 to-blue-500 p-2 text-center font-bold'>Backend</h2>
                    <div className='grid grid-cols-3 gap-6 p-5 text-white'>
                        <div className='text-center'>
                            <Image src="/node-js-icon-454x512-nztofx17.png" alt="Node Logo" width={500} height={500} className="rounded-2xl w-16 h-16 mx-auto" />
                            <p className="mt-2">Node</p>
                        </div>
                        <div className='text-center'>
                            <Image src="/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="Express Logo" width={500} height={500} className="rounded-2xl w-16 h-16 mx-auto" />
                            <p className="mt-2">Express</p>
                        </div>
                        <div className='text-center'>
                            <Image src="/png-clipart-firebase-cloud-messaging-google-developers-software-development-kit-google-angle-triangle.png" alt="Firebase Logo" width={500} height={500} className="rounded-2xl w-16 h-16 mx-auto" />
                            <p className="mt-2">Firebase</p>
                        </div>
                        <div className='text-center'>
                            <Image src="/mongodb-icon.svg" alt="MongoDB Logo" width={500} height={500} className="rounded-2xl w-16 h-16 mx-auto" />
                            <p className="mt-2">MongoDB</p>
                        </div>
                        <div className='text-center'>
                            <Image src="/mysql-logo-11609369802ki7rjpbtse.png" width={500} height={500} alt="MySQL Logo" className="rounded-2xl w-16 h-16 mx-auto" />
                            <p className="mt-2">MySQL</p>
                        </div>
                        <div className='text-center'>
                            <Image src="/0_eeeO936i7XECDRzV.png" alt="JWT Logo" width={500} height={500} className="rounded-2xl w-20 h-16 mx-auto" />
                            <p className="mt-2">JWT</p>
                        </div>
                    </div>
                </div>
                </div>
                </Fade>
               </div>
               <Fade direction="bottom">
                <div className='mt-10 flex justify-center'>
                <div className='bg-[#1a1a2e] rounded-md min-w-[400px]'>
                    <h2 className='border border-blue-500 text-white bg-gradient-to-r from-green-400 to-blue-500 p-2 text-center font-bold'>Tools</h2>
                    <div className='grid grid-cols-3 gap-6 p-5 text-white'>
                        <div className='text-center'>
                            <Image src="/png-clipart-github-logo-computer-icons-source-code-github-white-cat-like-mammal.png" alt="github Logo" width={500} height={500} className="rounded-2xl w-16 h-16 mx-auto" />
                            <p className="mt-2">GitHub</p>
                        </div>
                        <div className='text-center'>
                            <Image src="/png-transparent-visual-studio-code-hd-logo.png" alt="VsCode Logo" width={500} height={500} className="rounded-2xl w-16 h-16 mx-auto" />
                            <p className="mt-2">VS Code</p>
                        </div>
                        <div className='text-center'>
                            <Image src="/png-transparent-netlify-hd-logo.png" alt="Netlify Logo" width={500} height={500} className="rounded-2xl w-16 h-16 mx-auto" />
                            <p className="mt-2">Netlify</p>
                        </div>
                        <div className='text-center'>
                            <Image src="/vercel-icon-512x449-3422jidz.png" alt="Vercel Logo" width={500} height={500} className="rounded-2xl w-16 h-16 mx-auto" />
                            <p className="mt-2">Vercel</p>
                        </div>
                        
                    </div>
                </div>
                </div>
                </Fade>
            </div>
        </div>
    );
};

export default Skills;
