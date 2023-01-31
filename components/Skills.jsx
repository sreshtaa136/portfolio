import React from 'react';
import Image from "next/image";


const Skills = () => {
    return (
        <div id='skills' className='max-w-[1240px] mx-auto px-2 py-16'>
            <div className='max-w-[1240px] flex flex-col justify-center h-full'>
                <h2 className='text-3xl font-semibold py-2 tracking-wide'>Tech Skills</h2>
                <h3 className='text-lg py-8 mb-3 uppercase tracking-widest font-semibold text-[#5337e2]'>Languages</h3>             
                <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>
                
                    <div className='p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/skills/java-logo.png' width='112' height='112' alt='java-logo' />
                            </div>
                            <div className='flex flex-col items-center justify-center mt-2'>
                                <h3 className='text-xl font-medium'>Java</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/skills/python-logo.png' width='112' height='112' alt='python-logo' />
                            </div>
                            <div className='flex flex-col items-center justify-center mt-2'>
                                <h3 className='text-xl font-medium'>Python</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/skills/html-logo.png' width='112' height='112' alt='html-logo' />
                            </div>
                            <div className='flex flex-col items-center justify-center mt-2'>
                                <h3 className='text-xl font-medium'>HTML</h3>
                            </div>
                        </div>
                    </div>                

                    <div className='p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/skills/php-logo.png' width='112' height='112' alt='php-logo' />
                            </div>
                            <div className='flex flex-col items-center justify-center mt-2'>
                                <h3 className='text-xl font-medium'>PHP</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/skills/css-logo.png' width='112' height='112' alt='css-logo' />
                            </div>
                            <div className='flex flex-col items-center justify-center mt-2'>
                                <h3 className='text-xl font-medium'>CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/skills/js-logo.png' width='112' height='112' alt='Javascript-logo' />
                            </div>
                            <div className='flex flex-col items-center justify-center mt-2'>
                                <h3 className='text-xl font-medium'>Javascript</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/skills/jsx-logo.png' width='112' height='112' alt='jsx-logo' />
                            </div>
                            <div className='flex flex-col items-center justify-center mt-2'>
                                <h3 className='text-xl font-medium'>JSX</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/skills/sql-logo.png' width='112' height='112' alt='sql-logo' />
                            </div>
                            <div className='flex flex-col items-center justify-center mt-2'>
                                <h3 className='text-xl font-medium'>SQL</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/skills/cpp-logo.png' width='112' height='112' alt='c++ logo' />
                            </div>
                            <div className='flex flex-col items-center justify-center mt-2'>
                                <h3 className='text-xl font-medium'>C++</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/skills/c-logo.png' width='112' height='112' alt='c-logo' />
                            </div>
                            <div className='flex flex-col items-center justify-center mt-2'>
                                <h3 className='text-xl font-medium'>C</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FRAMEWORKS */}
                <h3 className='text-lg py-8 mb-3 mt-8 uppercase tracking-widest font-semibold text-[#5337e2]'>Frameworks</h3>             
                <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>
                
                    <div className='p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/skills/spring-logo.png' width='112' height='112' alt='springboot-logo' />
                            </div>
                            <div className='flex flex-col items-center justify-center mt-2'>
                                <h3 className='text-xl font-medium'>Springboot</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/skills/react-logo.png' width='112' height='112' alt='react-logo' />
                            </div>
                            <div className='flex flex-col items-center justify-center mt-2'>
                                <h3 className='text-xl font-medium'>React</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/skills/flask-logo.png' width='112' height='112' alt='flask-logo' />
                            </div>
                            <div className='flex flex-col items-center justify-center mt-2'>
                                <h3 className='text-xl font-medium'>Flask</h3>
                            </div>
                        </div>
                    </div>                

                    <div className='p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/skills/tailwind-logo.png' width='112' height='112' alt='tailwind-logo' />
                            </div>
                            <div className='flex flex-col items-center justify-center mt-2'>
                                <h3 className='text-xl font-medium'>Tailwind CSS</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills