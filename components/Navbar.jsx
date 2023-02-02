import React from 'react';
import Link from 'next/link';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';


const Navbar = () => {

    const[nav, setNav] = useState(false);
    const[shadow, setShadow] = useState(false);
    const[navBg, setNavBg] = useState('#f8fafb');
    const[linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter();

    const toggleNav = () => {
        setNav(!nav);
    };

    useEffect(()=> {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        }
        window.addEventListener('scroll', handleShadow);
    },[])

    useEffect(() => {
        if (
            router.asPath === '/weka' ||
            router.asPath === '/bookeroo' ||
            router.asPath === '/hello' ||
            router.asPath === '/vault' ||
            router.asPath === '/digitalQwirkle' ||
            router.asPath === '/findMyWay'
        ) {
            setNavBg('transparent');
            setLinkColor('#f8fafb');
        } else {
            setNavBg('#f8fafb');
            setLinkColor('#1f2937');
        }
    }, [router]);

    return (
        // w-full shadow-md left-0 py-5 flex mb-14
        <div style={{ backgroundColor: `${navBg}` }} className='fixed w-full shadow-md py-5 z-[100] h-16'>
            <ul style={{ color: `${linkColor}` }} className='hidden md:flex text-md tracking-widest justify-left'>                         
                <Link href='/#about'>
                <li className='text-md ml-48 hover:scale-105 duration-100'>About</li>
                </Link>
                <Link href='/#skills'>
                <li className='text-md ml-48 hover:scale-105 duration-100'>Skills</li>
                </Link>
                <Link href='/#projects'>
                <li className='text-md ml-48 hover:scale-105 duration-100'>Projects</li>
                </Link>                     
            </ul>

            {/* 000000, EDB5BD, 9C9CDD, BEDFD4 */}
            {/* <div className='hidden md:flex flex-row-reverse w-full'>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl hover:text-[#9C9CDD]'
                onClick={() => setDarkMode(!darkMode)} title='Dark Mode' />
            </div>   */}
            
            {/* burger menu icon */}
            <div onClick={toggleNav} className='md:hidden'>
                <AiOutlineMenu className='ml-8 text-xl' />
            </div>

            {/* hidden burger menu */}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[65%] sm:w-[50%] md:w-[25%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                                }>
                    <div>
                        <div className='flex flex-row-reverse w-full mb-12'>  
                            <div onClick={toggleNav} className='shadow-sm shadow-gray-400 cursor-pointer p-2 rounded-full'>
                                <AiOutlineClose className='text-xl'/>
                            </div>                                
                        </div>
                        <div className='p-10 flex flex-col'>
                            <ul>
                                <Link href='/#about'>
                                <li onClick={()=> setNav(false)} className='py-4 text-md'>About</li>
                                </Link>
                                <Link href='/#skills'>
                                <li onClick={()=> setNav(false)} className='py-4 text-md'>Skills</li>
                                </Link>
                                <Link href='/#projects'>
                                <li onClick={()=> setNav(false)} className='py-4 text-md'>Projects</li>
                                </Link>                                
                            </ul>
                            <div className='pt-28'>
                                <p className='uppercase tracking-widest'>Let's Connect</p>
                                <div className='text-3xl flex gap-x-4 mt-6 items-center justify-between w-full sm:w-[80%]'>
                                    <a 
                                    href='https://www.linkedin.com/in/sai-sreshtaa-turaga'
                                    target='_blank'
                                    rel='noreferrer'>
                                        <div className='rounded-full shadow-md shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <AiFillLinkedin/>
                                        </div>
                                    </a>
                                    <a 
                                    href='https://github.com/sreshtaa136'
                                    target='_blank'
                                    rel='noreferrer'>
                                        <div className='rounded-full shadow-md shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <AiFillGithub />
                                        </div>
                                    </a>
                                    <a 
                                    href='mailto:sreshtaa.t@gmail.com'
                                    target='_blank'
                                    rel='noreferrer'>
                                        <div className='rounded-full shadow-md shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <AiOutlineMail />
                                        </div>
                                    </a>                                                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar