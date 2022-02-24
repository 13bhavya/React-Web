import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-3xl w-min h-min"
                        alt="hero"
                        src={require('../assets/pic-2.jpg')}
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 ml-20 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Bhavya.
                        <br className="hidden lg:inline-block" />I love to build smart
                        Apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Building is my passion, I build my skill, knowledge and will power, day by day to achieve my persisting goal.
                        I am a Coder, designer with currently working in a Banking sector. I utilize my day by working, reading, and exploring
                        new places.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 duration-300 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 duration-300 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;
