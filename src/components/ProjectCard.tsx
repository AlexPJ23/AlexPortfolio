import React from "react";

interface SectionProps {
  Title: string;
  Description: string;
  Tech_Stack: string;
  Link: string;
  Img: string;
}

const ProjectCard: React.FC<SectionProps> = ({Title, Description, Link, Img}) => {
const  alt_img = '../../public/images/markus-spiske-cvBBO4PzWPg-unsplash.png'
const classConfig = "rounded-lg border-2 border-gray-900 "
  return (
    <div className="flex flex-row items-center justify-start space-x-8">
      <div className="w-2/3">
        {
            Img === "" ?
                <img src={alt_img} alt="Project" className={classConfig} />
                :
                <img src={Img} alt="Project" className={classConfig} />
        }
  <div className="flex flex-row items-center justify-start space-x-4 my-4">
  {        
    
      Link === '' ? 
        <></>
        : <a href={Link} target="_blank" rel="noreferrer">
            <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Visit
            </button>
        </a>}
      </div>
    </div>
      <div className="w-2/3">
        <h2 className="text-2xl font-semibold text-gray-700">{Title}</h2>
        <p className="text-lg text-gray-800">{Description}</p>
      </div>
    </div>
    );
}


export default ProjectCard;
