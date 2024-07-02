"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className='mt-10'>
            <Fade direction='right'>
                <h2 className='text-blue-500 text-3xl mt-5 lg:mt-0 text-center font-bold mb-8'>Projects</h2>
            </Fade>
            <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Fade direction='left'>
            
                    <div className="bg-[#1a1a2e] rounded-2xl p-4 shadow-lg hover:scale-105 transition">
                        <Image src="/Screenshot 2024-06-26 221123.png" alt="12 Logo" width={500} height={500} className="rounded-2xl w-96 lg:h-64 h-52 mx-auto" />
                        <div className="flex justify-between items-center mt-4">
                            <Link href="https://loving-pets.netlify.app/" target='_blank'>
                                <span className="text-white text-lg font-semibold hover:underline hover:text-blue-500 cursor-pointer">Live</span>
                            </Link>
                            <div className="flex space-x-4">
                                <Link href="https://github.com/Monwar23/projects-12-client" target='_blank' title="ClientSide">
                                    <FaGithub className="text-white text-2xl hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
                                </Link>
                                <Link href="https://github.com/Monwar23/project-12-server" target='_blank' title="ServerSide">
                                    <FaGithub className="text-white text-2xl hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#1a1a2e] rounded-2xl p-4 shadow-lg hover:scale-105 transition">
                        <Image src="/Screenshot 2024-06-26 223623.png" alt="12 Logo" width={500} height={500} className="rounded-2xl w-96 lg:h-64 h-52 mx-auto" />
                        <div className="flex justify-between items-center mt-4">
                            <Link href="https://dinedash.netlify.app/" target='_blank'>
                                <span className="text-white text-lg font-semibold hover:underline hover:text-blue-500 cursor-pointer">Live</span>
                            </Link>
                            <div className="flex space-x-4">
                                <Link href="https://github.com/Monwar23/project-11-client" target='_blank' title="ClientSide">
                                    <FaGithub className="text-white text-2xl hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
                                </Link>
                                <Link href="https://github.com/Monwar23/project-11-server" target='_blank' title="ServerSide">
                                    <FaGithub className="text-white text-2xl hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
                                </Link>
                            </div>
                        </div>
                    </div>
            </Fade>
            <Fade direction='right'>
                <div className="bg-[#1a1a2e] rounded-2xl p-4 shadow-lg hover:scale-105 transition">
                    <Image src="/Screenshot 2024-06-26 224106.png" alt="12 Logo" width={500} height={500} className="rounded-2xl w-96 lg:h-64 h-52 mx-auto" />
                    <div className="flex justify-between items-center mt-4">
                        <Link href="https://arthive.netlify.app/" target='_blank'>
                            <span className="text-white text-lg font-semibold hover:underline hover:text-blue-500 cursor-pointer">Live</span>
                        </Link>
                        <div className="flex space-x-4">
                            <Link href="https://github.com/Monwar23/project-10-client" target='_blank' title="ClientSide">
                                <FaGithub className="text-white text-2xl hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
                            </Link>
                            <Link href="https://github.com/Monwar23/project-10-server" target='_blank' title="ServerSide">
                                <FaGithub className="text-white text-2xl hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade direction='left'>
                <div className="bg-[#1a1a2e] rounded-2xl p-4 shadow-lg hover:scale-105 transition">
                    <Image src="/Screenshot 2024-06-26 224432.png" alt="12 Logo" width={500} height={500} className="rounded-2xl w-96 lg:h-64 h-52 mx-auto" />
                    <div className="flex justify-between items-center mt-4">
                        <Link href="https://homespotter.netlify.app/" target='_blank' >
                            <span className="text-white text-lg font-semibold hover:underline hover:text-blue-500 cursor-pointer">Live</span>
                        </Link>
                        <div className="flex space-x-4">
                            <Link href="https://github.com/Monwar23/project-9" target='_blank' title="GitHub">
                                <FaGithub className="text-white text-2xl hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1a1a2e] rounded-2xl p-4 shadow-lg hover:scale-105 transition">
                    <Image src="/Screenshot 2024-06-26 224724.png" alt="12 Logo" width={500} height={500} className="rounded-2xl w-96 lg:h-64 h-52 mx-auto" />
                    <div className="flex justify-between items-center mt-4">
                        <Link href="https://book-vibes23.netlify.app/" target='_blank' >
                            <span className="text-white text-lg font-semibold hover:underline hover:text-blue-500 cursor-pointer">Live</span>
                        </Link>
                        <div className="flex space-x-4">
                            <Link href="https://github.com/Monwar23/project-8" target='_blank' title="GitHub">
                                <FaGithub className="text-white text-2xl hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade direction='right'>
                <div className="bg-[#1a1a2e] rounded-2xl p-4 shadow-lg hover:scale-105 transition">
                    <Image src="/Screenshot 2024-06-26 224853.png" alt="12 Logo" width={500} height={500} className="rounded-2xl w-96 lg:h-64 h-52 mx-auto" />
                    <div className="flex justify-between items-center mt-4">
                        <Link href="https://foodrecipe-1.netlify.app/" target='_blank' >
                            <span className="text-white text-lg font-semibold hover:underline hover:text-blue-500 cursor-pointer">Live</span>
                        </Link>
                        <div className="flex space-x-4">
                            <Link href="https://github.com/Monwar23/project-7" target='_blank' title="GitHub">
                                <FaGithub className="text-white text-2xl hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade direction='left'>
                <div className="bg-[#1a1a2e] rounded-2xl p-4 shadow-lg hover:scale-105 transition">
                    <Image src="/Screenshot 2024-06-26 225035.png" alt="12 Logo" width={500} height={500} className="rounded-2xl w-96 lg:h-64 h-52 mx-auto" />
                    <div className="flex justify-between items-center mt-4">
                        <Link href="https://dated-forum.netlify.app/" target='_blank' >
                            <span className="text-white text-lg font-semibold hover:underline hover:text-blue-500 cursor-pointer">Live</span>
                        </Link>
                        <div className="flex space-x-4">
                            <Link href="https://github.com/Monwar23/Project-6" target='_blank' title="GitHub">
                                <FaGithub className="text-white text-2xl hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1a1a2e] rounded-2xl p-4 shadow-lg hover:scale-105 transition">
                    <Image src="/Screenshot 2024-06-26 221601.png" alt="12 Logo" width={500} height={500} className="rounded-2xl w-96 lg:h-64 h-52 mx-auto" />
                    <div className="flex justify-between items-center mt-4">
                        <Link href="https://monwar23.github.io/project5/" target='_blank' >
                            <span className="text-white text-lg font-semibold hover:underline hover:text-blue-500 cursor-pointer">Live</span>
                        </Link>
                        <div className="flex space-x-4">
                            <Link href="https://github.com/Monwar23/project5" target='_blank' title="GitHub">
                                <FaGithub className="text-white text-2xl hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade direction='right'>
                <div className="bg-[#1a1a2e] rounded-2xl p-4 shadow-lg hover:scale-105 transition">
                    <Image src="/Screenshot 2024-06-26 225548.png" alt="12 Logo" width={500} height={500} className="rounded-2xl w-96 lg:h-64 h-52 mx-auto" />
                    <div className="flex justify-between items-center mt-4">
                        <Link href="https://monwar23.github.io/project3/" target='_blank' >
                            <span className="text-white text-lg font-semibold hover:underline hover:text-blue-500 cursor-pointer">Live</span>
                        </Link>
                        <div className="flex space-x-4">
                            <Link href="https://github.com/Monwar23/project3" target='_blank' title="GitHub">
                                <FaGithub className="text-white text-2xl hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                </div>
        
            </Fade >
            </div>
        </div >
    );
};

export default Projects;
