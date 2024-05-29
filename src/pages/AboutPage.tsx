import React from 'react';
import profileImage from '../../public/images/profileImage.jpg'

const AboutMePage: React.FC = () => {
  return (
    <div className="p-8 font-sans">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <div className="flex flex-col items-center mb-8">
        <img src={profileImage} alt="Alex P. Joseph" className="w-32 h-32 rounded-full mb-4"/>
        <p className="text-center">
          <strong>Alex P. Joseph</strong><br />
          <a href="mailto:Apj23@njit.edu" className="text-blue-500 hover:underline">Apj23@njit.edu</a><br />
          <a href="tel:+13479325781" className="text-blue-500 hover:underline">(347) 932-5781</a><br />
          <a href="https://github.com/AlexPJ23" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold">Flu Provider Location Page</h3>
            <p>
              <strong>Fullstack Developer</strong> – Coldfusion, Google Map API, Javascript, Postman, ExpressJS<br />
              <em>March 2024 – May 2024</em>
            </p>
            <p>Developed an interactive web application that displays flu vaccination providers nationwide enhancing user ability to locate nearby services through zipcode and address-based searches.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Sentiment Analysis (Finetuned)</h3>
            <p>
              <strong>Developer</strong> – Docker, Bert, TensorFlow, Feature Engineering Techniques<br />
              <em>February 2023 - May 2023</em>
            </p>
            <p>Using the pre-trained model BERT, finetuned the model to accurately recognize sentiment of a given text. This project required extensive knowledge of data processing, feature engineering, and literacy in machine learning libraries.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Weather App</h3>
            <p>
              <strong>Developer</strong> – XML/DOM, Python, PHP, Apache Web Server, MySQL, Bash<br />
              <em>April 2023 - May 2023</em>
            </p>
            <p>Developed a weather application using the LAMP stack which dynamically configured weather preferences for users based on end-users IP addresses. This project required extensive knowledge of web-scraping, building and parsing an API, constructing backend architecture, and object-oriented programming.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Feature Integration</h3>
            <p>
              <strong>Developer</strong> – REACT, Node.js, TypeScript, POSTMAN, MVC-Architecture, Jest<br />
              <em>September 2023 - Present</em>
            </p>
            <p>Contributed to an existing codebase by adding a new feature to the project. This feature was a game that closely resembled “Uno”. This application required literacy in industry-standard practices such as test-driven-development, MVC architectures, and frontend frameworks like React.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold">Prudential Financial</h3>
            <p>
              <strong>Associate Software Engineer</strong><br />
              <em>Sept. 2023 – Dec. 2023</em><br />
              Newark, NJ
            </p>
            <ul className="list-disc list-inside">
              <li>Designed and developed provisioning applications that emphasized skills in JDBC, MySQL, XML comprehension, and data extraction from API endpoints.</li>
              <li>Managed multiple development environments ensuring they are stable and up-to-date for continuous integration and delivery workflows.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Kornit Digital</h3>
            <p>
              <strong>IT Intern</strong><br />
              <em>June 2023 – Sept. 2023</em><br />
              Englewood, NJ
            </p>
            <ul className="list-disc list-inside">
              <li>Managed and maintained cloud infrastructure including maintenance on web, printer, and DHCP servers, as well as deployment of golden images for specified devices and deploying patches and software.</li>
              <li>Allocated role assignments for employees and ensured they are provided with the appropriate services and permission.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        <p>
          <strong>New Jersey Institute Of Technology</strong><br />
          <em>Graduation May 2024</em><br />
          BSc Computer Science, Newark, NJ
        </p>
        <p><strong>Relevant Courses:</strong> Guided Software Engineering, Data Mining, Big Data Systems, Intro. To Machine Learning</p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Links, Skills & Interests</h2>
        <p><strong>Data Science Projects:</strong> <a href="https://huggingface.co/APJ23" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://huggingface.co/APJ23</a></p>
        <p><strong>Skills:</strong> Python, C/C++, Java, BASH scripting, TypeScript, MySQL, XML/DOM, MPI, PHP</p>
        <p><strong>Development Tools:</strong> Basic Knowledge Of AWS IaaS (EC2, SageMaker, Lambda, etc.), Docker Containerization, ML Libraries (TensorFlow, PyTorch, Keras), Hadoop, Postman, Jest</p>
      </section>
    </div>
  );
};

export default AboutMePage;
