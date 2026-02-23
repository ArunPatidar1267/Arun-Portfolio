export const certificatesData = [
  {
    id: 'aws',
    title: 'AWS Academy Cloud Architecting',
    issuer: 'AWS Academy',
    description: '60 hours | Issued: August 2025',
    type: 'pdf',
    file: '/pdfs/certificates/AWS.pdf',
    verifyLink: 'https://www.credly.com/go/EYBVQs95',
    icon: 'aws'
  },
  {
    id: 'oracle-architect',
    title: 'Oracle Cloud Infrastructure 2025 Certified Architect Associate',
    issuer: 'Oracle University',
    description: 'Issued: October 2025 | Valid until 2027',
    type: 'image',
    file: '/certificates/oracle-architect1.jpg',
    icon: 'database'
  },
  {
    id: 'oracle-foundations',
    title: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle University',
    description: 'Issued: August 2025 | Valid until 2027',
    type: 'pdf',
    file: '/pdfs/certificates/Oracle Foundations Associate.pdf',
    icon: 'certificate'
  },
  {
    id: 'google-cloud',
    title: 'Google Cloud Career Launchpad',
    issuer: 'Google Cloud',
    description: 'Cloud Engineer Track | Sep 2025',
    type: 'image',
    file: '/certificates/google-cloud1.jpg',
    certificateId: '7Mao7t9d',
    icon: 'google'
  },
  {
    id: 'research-paper',
    title: 'Research Paper Publication',
    issuer: 'JETIR Journal',
    description: 'Impact Factor: 7.95 | May 2025',
    type: 'image',
    file: '/certificates/research-paper1.jpg',
    paperLink: 'http://www.jetir.org/view?paper=JETIRGV06052',
    icon: 'file-alt'
  },
  {
    id: 'copyright',
    title: 'Copyright Registration',
    issuer: 'Government of India',
    description: 'Certificate No: LD-20250167208',
    type: 'pdf',
    file: '/pdfs/certificates/copyright.pdf',
    icon: 'copyright'
  }
];

export const projectsData = [
  {
    id: 1,
    title: 'GLOBON: Real-Time Carbon Footprint Calculator',
    duration: '6 Months',
    role: 'Frontend Developer',
    description: 'A real-time carbon footprint tracking system that generates Air Quality Index of user\'s current location through GPS.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'GPS Integration'],
    paperLink: 'http://www.jetir.org/view?paper=JETIRGV06052'
  },
  {
    id: 2,
    title: 'Session Tracking System',
    duration: '6 Months',
    role: 'Frontend Developer',
    description: 'Web-based application for RAMSITA Conference 2025 to track paper submissions, session schedules, and participation.',
    technologies: ['MERN Stack', 'React.js', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    id: 3,
    title: 'Course Architecture CSIT',
    duration: '2 Months',
    role: 'Frontend Developer',
    description: 'Web platform providing CSIT students with academic resources including notes, study materials, and faculty details.',
    technologies: ['HTML/CSS', 'JavaScript', 'MySQL', 'Academic Portal']
  }
];

export const achievementsData = [
  {
    id: 1,
    title: 'Naukri Campus Young Turks 2025',
    description: 'Scored 95.72 percentile in India\'s largest skill contest, recognized by leading industry experts.',
    percentile: '95.72',
    icon: 'trophy'
  },
  {
    id: 2,
    title: 'Letter of Appreciation',
    description: 'Received from Chairperson of AITR, Indore for successful live project implementation.',
    icon: 'award'
  },
  {
    id: 3,
    title: 'DBMS Project Exhibition Competition',
    description: 'Secured top position for the project "Course Architecture" at CSIT, AITR.',
    icon: 'medal'
  },
  {
    id: 4,
    title: 'Conference Presentations',
    description: 'Presented research paper at various International Conferences including IC13.',
    icon: 'microphone'
  }
];

export const experienceData = [
  {
    id: 1,
    date: 'May 2025 - Present',
    title: 'DevOps Trainee - Dira Techno',
    description: 'Selected for 3-month internship as DevOps Trainee starting 15 Sept 2025. Will work as active member of DevOps team through all stages of DevOps lifecycle.',
    type: 'full-time'
  },
  {
    id: 2,
    date: '3 Months | 2025',
    title: 'Google Cloud Career Launchpad - APAC',
    description: 'Gained hands-on experience in GCP services including Compute Engine, Cloud Storage, and IAM. Completed labs and projects focused on cloud deployment, security, and scalability.'
  },
  {
    id: 3,
    date: '2.5 Months | 2025',
    title: 'DevOps Trainee - Infosys',
    description: 'Deepened expertise in DevOps tools with focus on Docker, Jenkins, Kubernetes. Implemented CI/CD pipelines using Jenkins and Docker in training projects.'
  },
  {
    id: 4,
    date: '3 Months | 2024',
    title: 'MERN Stack Developer Trainee - IIT Ropar',
    description: 'Collaborated with development team to design and build full-stack applications using MERN stack. Resolved issues and optimized project workflows.'
  },
  {
    id: 5,
    date: '1 Month | 2024',
    title: 'Cloud Computing Trainee - ICT Academy',
    description: 'Designed and deployed cloud resources on AWS (EC2, S3, Lambda) as part of IC Academy Cloud Training.'
  }
];

export const skillsData = {
  cloud: [
    { name: 'Amazon Web Services', important: true },
    { name: 'EC2, IAM, S3, VPC, CloudFront', important: false },
    { name: 'Google Cloud Platform', important: true },
    { name: 'Compute Engine, IAM, Cloud Storage', important: false },
    { name: 'Oracle Cloud Infrastructure', important: true }
  ],
  devops: [
    { name: 'Docker', important: true },
    { name: 'Jenkins', important: true },
    { name: 'Kubernetes', important: true },
    { name: 'Terraform', important: true },
    { name: 'Ansible', important: true },
    { name: 'Git & GitHub', important: false },
    { name: 'CI/CD Pipelines', important: false }
  ],
  developer: [
    { name: 'Trivy Scan', important: true },
    { name: 'SonarQube', important: true },
    { name: 'Sentry', important: false },
    { name: 'Burp Suite', important: false },
    { name: 'ELK Stack,', important: true },
    { name: 'Prometheus', important: false },
    { name: 'Grafana', important: false },
    { name: 'Loki', important: false }
  ]
};

export const resumeUrl = '/pdfs/Arun-Patidar.pdf';