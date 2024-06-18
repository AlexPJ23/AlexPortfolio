import React from 'react';
import profilePic from '../../public/images/profileImage.jpg';
import Section from '../components/Section'
const HomePage: React.FC = () => {
    const section : [string, string][] = [
        ["About Me", "I am an aspiring full stack developer with a passion for creating ambitious web applications and exploring innovative technologies. Continuously seeking new challenges, I strive to exceed expectations and push the boundaries of what's possible in practically all domains of computing. My dedication to learning and growth fuels my drive to master both front-end and back-end development, ensuring seamless and efficient user experiences."],
        ["Skills and Technologies", "With a strong foundation in languages like JavaScript and Python, and frameworks such as React and Node.js, I am equipped to tackle complex problems and deliver robust solutions. I thrive in collaborative environments where I can contribute to and learn from a team, and I am always eager to stay ahead of industry trends and advancements. Additionally, I am deeply interested in cloud technology, particularly in hosting applications on AWS services and utilizing other cloud solutions to ensure scalability and availability of my applications.."],
        ["My Goals", "Whether it's optimizing performance, enhancing user interfaces, or integrating cutting-edge technologies, I am committed to crafting high-quality, scalable applications. My goal is to leave a positive impact on the digital landscape through innovative and user-centric development."],
    ];
    return (
        <div className= "flex justify-center items-center p-4">
            <div className="flex-shrink-0 text-center">
                <h2 className="text-4xl font-bold text-gray-800 p-2">Hey, I'm Alex!</h2>
                <img src={profilePic} alt="Profile" className="w-full max-w-xs h-auto rounded-full border-4 border-black" />
            </div>
            <div className="flex-grow pl-5">
                {
                    section.map((tuple, index) => (
                        <Section Title={tuple[0]} Description={tuple[1]} key={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default HomePage;
