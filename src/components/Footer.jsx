import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className='-mt-12 relative bottom-0 left-0 bg-[#1a1a2e] pt-6'>
           <ul className="flex justify-center space-x-4">
                        <li>
                            <Link href="https://www.facebook.com/monwarhossain.hossain.5" title="Facebook" target='_blank'>
                                <FaFacebookF className='text-lg hover:text-white text-blue-500' />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/monwar-hossain23/" title="LinkedIn" target='_blank'>
                                <FaLinkedinIn className='text-lg hover:text-white text-blue-500' />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/Monwar23" title="GitHub" target='_blank'>
                                <FiGithub className='text-lg hover:text-white text-blue-500' />
                            </Link>
                        </li>
                    </ul>
        <div className='pb-6 pt-3 text-sm text-center text-white bg-[#1a1a2e]'>
          © 2024-2025 Monwar Hossain. All rights reserved.
        </div>
      </footer>
    );
};

export default Footer;