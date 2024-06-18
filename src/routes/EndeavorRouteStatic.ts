const endeavors =
[
    {
    _id: {
      "$oid": "666556710d2d89adfa389896"
    },
    title: "Build a Personal Portfolio Website",
    description: "Create a personal portfolio website to showcase projects, resume, and blog posts.",
    status: "COMPLETE",
    created_at: {
      date: new Date("2024-06-09T15:57:26.109Z").toLocaleDateString()
    },
    updated_at: {
      date: new Date().toISOString()
    },
    priority: 2,
    type: "personal",
    tasks: [
      "Design the layout",
      "Implement Tailwind and React infrastructure to handle the frontend",
      "Configure TypeScript for type safety",
      "Create a Node.js backend to serve the site",
      "Develop several pages for projects, resume, and blog posts",
      'Develop Layouts for each page',
      "Deploy the website to a hosting service"
    ]
  },
  {
    _id: {
      "$oid": "6665dd11757dc558bccdcdf7"
    },
    title: "Building a DApp",
    description: "Develop an innovative decentralized application using blockchain technology.",
    status: "not started",
    created_at: {
      date: new Date("2024-06-09T16:49:21.243Z").toLocaleDateString()
    },
    updated_at: {
      date: new Date().toISOString()
    },
    priority: 3,
    type: "educational",
    tasks: [
      "Research blockchain tech",
      "Articulate/Design the smart contract",
      "Develop backend infrastructure",
      "Develop frontend interface",
      "Deploy App"
    ]
  },
  {
    _id: {
      "$oid": "6665dec4757dc558bccdcdf8"
    },
    title: "Developing an iOS App",
    description: "Create a mobile application for iOS devices to solve a specific problem or provide a useful service.",
    status: "not started",
    created_at: {
      date: new Date("2024-06-09T16:56:36.562Z").toLocaleDateString()
    },
    updated_at: {
      date: new Date().toISOString()
    },
    priority: 3,
    type: "educational",
    tasks: [
      "Define app concept and features",
      "Design app UI/UX",
      "Implement app logic in Swift",
      "Integrate backend services if needed",
      "Test app on different iOS devices",
      "Optimize app performance",
      "Publish app to App Store"
    ]
  },
  {
    _id: {
      "$oid": "6665def8757dc558bccdcdf9"
    },
    title: "AWS Solution Architect Certification",
    description: "Prepare for and pass the AWS Certified Solutions Architect - Associate exam.",
    
    status: "in-progress",
    created_at: {
      date: new Date("2024-06-09T16:57:28.263Z").toLocaleDateString()
    },
    updated_at: {
      date: new Date().toISOString()
    },
    priority: 3,
    type: "educational",
    tasks: [
      "Study AWS services and their use cases",
      "Practice with AWS console and services",
      "Take practice exams to assess readiness",
      "Register for the certification exam",
      "Take and pass the certification exam"
    ]
  },
  {
    _id: {
      "$oid": "6665e00a757dc558bccdcdfa"
    },
    title: "Training a Large Language Model (LLM) to Mimic My Speech Patterns",
    description: "Train a large language model to adopt my speech patterns and writing style, aiming for a personalized AI assistant.",
    
    status: "not started",
    created_at: {
      date: new Date("2024-06-09T17:02:02.381Z").toLocaleDateString()
    },
    updated_at: {
      date: new Date().toISOString()
    },
    priority: 3,
    type: "personal",
    tasks: [
      "Research natural language processing (NLP) techniques",
      "Collect and preprocess a dataset of my writings and speech samples",
      "Utilize Hadoop for distributed processing of the dataset",
      "Train the language model using AWS services such as SageMaker and S3",
      "Fine-tune the model to improve mimicry accuracy",
      "Evaluate the model's performance and adjust as needed",
      "Deploy the model for personal use"
    ]
  },
  {
    _id: {
      "$oid": "6665e03d757dc558bccdcdfb"
    },
    title: "Learning Spanish",
    description: "Learn to speak, read, and write in Spanish fluently.",
    
    status: "in progress",
    created_at: {
      date: new Date("2024-06-09T17:02:53.079Z").toLocaleDateString()
    },
    updated_at: {
      date: new Date().toISOString()
    },
    priority: 2,
    type: "educational",
    tasks: [
      "Enroll in a beginner Spanish course or use online resources like Duolingo or Babbel",
      "Practice speaking with native Spanish speakers or language exchange partners",
      "Learn basic grammar and vocabulary through study and practice exercises",
      "Immerse yourself in the language by watching Spanish movies, TV shows, and listening to Spanish music",
      "Take intermediate and advanced courses to further improve proficiency",
      "Travel to a Spanish-speaking country for immersive language practice"
    ]
  },
  {
    _id: {
      "$oid": "6665e0cf757dc558bccdcdfd"
    },
    title: "Deep Literacy in Cybersecurity",
    description: "Achieve a comprehensive understanding of cybersecurity principles, practices, and tools.",
    
    status: "not started",
    created_at: {
      date: new Date("2024-06-09T17:05:19.339Z").toLocaleDateString()
    },
    updated_at: {
      date: new Date().toISOString()
    },
    priority: 3,
    type: "professional",
    tasks: [
      "Enroll in Udemy courses covering fundamental and advanced cybersecurity topics",
      "Study cryptography, network security, ethical hacking, and security protocols",
      "Complete hands-on labs and exercises to apply theoretical knowledge",
      "Participate in Capture The Flag (CTF) competitions to test skills",
      "Earn relevant certifications such as CompTIA Security+, Certified Ethical Hacker (CEH), or Certified Information Systems Security Professional (CISSP)",
      "Stay updated with the latest cybersecurity trends and technologies"
    ]
  },
  {
    _id: {
      "$oid": "6665e117757dc558bccdcdfe"
    },
    title: "Reading Achievement",
    description: "Set and achieve reading goals to broaden knowledge and enhance personal growth.",
    
    status: "in progress",
    created_at: {
      date: new Date("2024-06-09T17:06:31.194Z").toLocaleDateString()
    },
    updated_at: {
      date: new Date().toISOString()
    },
    priority: 2,
    type: "personal",
    tasks: [
      "Set a yearly reading goal (e.g., number of books or pages)",
      "Create a reading list of diverse genres and topics",
      "Read regularly and consistently, setting aside dedicated time each day",
      "Write brief summaries or reflections after completing each book",
      "Join a book club or online reading community for discussion and motivation",
      "Explore different formats such as audiobooks or e-books for convenience",
      "Track progress and celebrate milestones"
    ]
  },
]

const endeavors_count = endeavors.length;


export interface endeavor_model {
    _id: { $oid: string };
    title: string;
    description: string;
    status: string;
    created_at: { date: string };
    updated_at: { date: Date };
    priority: 1 | 2 | 3 | 4 | 5;
    type: string;
    tasks: string[];
  }

export { endeavors, endeavors_count};