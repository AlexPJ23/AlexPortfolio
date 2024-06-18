const projects :
{
    title: string;
    description: string;
    tech_stack: string;
    img: string ;
    link: string;
}[]  = 

[
    {
        title: 'Personal Portfolio Website',
        description: 'A personal portfolio website to showcase endeavors, projects, and blog posts.',
        tech_stack: 'MERN',
        img: '../../public/images/WebsiteScrnShot.png',
        link: 'https://github.com/AlexPJ23/AlexPortfolio'
    },
    {
        title: 'Uno Game Integration',
        description: ' Uno Game Integration into a robust codebase with a focus on code quality, testing, and documentation.',
        tech_stack: 'TS, React, Node, Express, Postman, Twillio',
        img: '../../public/images/ConveyTownImg.png',
        link: 'https://github.com/njit-cs-490-002-spring23/group-project-team-6'
    },
    {
        title: 'Andriod Apps',
        description: 'Various Android applications developed for Mobile Computing.',
        tech_stack: 'Kotlin',
        img: '../../public/images/54297b9f-3ab2-4199-921d-f5d73cabb117-0.png',
        link: 'https://github.com/AlexPJ23/CS388/branches'
    },
    {
        title: 'Influenza Visualizer',
        description: 'A mobile-friendly web application that visualizes CDC flu data.',
        tech_stack: 'React, Node, Express, MongoDB',
        img: '../../public/images/FluProviderLocationPage.png',
        link: 'https://github.com/yieric2/InfluenzaVisualizer/tree/main'
    },
    {
        title: 'NLP Multi-Task Classifier',
        description: 'A multi-task classifier that can predict the sentiment of a text.',
        tech_stack: 'React, Node, Express, MongoDB',
        img: '',
        link: 'https://huggingface.co/APJ23'
    }
];

export default projects;

