const WorkNEduDetails = [
  {
    id: "012",
    type: "work",
    period: "Dec 2022 - Present",
    logo: "res/images/amazon.png",
    link: "https://aws.amazon.com/what-is/artificial-general-intelligence/",
    title: "AGI, Santa Barbara, CA",
    subtitle: "SDE II, Amazon Knowledge Graph Vending",
    secondary_text: "MapReduce, PySpark, AWS EMR, AWS Neptune, AWS CDK",
    content: [
      "Developed PySpark scripts to process and ingest data into AWS Neptune, improving data pipeline efficiency by 90% for 100GB+ datasets in the Alexa Knowledge ecosystem.",
      "Performed away team work where I leveraged my expertise to setup their pipelines and integrate with the rest of the services in the organization, reducing lead time by 75%",
      "Implemented integration of Background Jobs system with Graphiq Knowledge Sandboxes, facilitating local testing by Software Development Engineers (SDEs) and Knowledge Engineers (KEs).",
      "Successfully migrated over 150 Background Jobs from PHP7 to PHP8, aligning with the latest standards and bolstering security measures.",
    ]
  }, {
    id: "011",
    type: "work",
    period: "Feb 2021 - Dec 2022",
    logo: "res/images/amazon.png",
    link: "https://en.wikipedia.org/wiki/Graphiq",
    title: "Amazon Alexa, Santa Barbara, CA",
    subtitle: "SDE I, Graphiq Platform",
    secondary_text: "AWS, AWS CDK, PHP, Typescript",
    content: [
      "Successfully migrated of over 150 Graphiq Background Jobs from legacy EC2 managed instances to AWS ECS as a pivotal accomplishment. This migration yielded substantial enhancements in security measures and introduced streamlined deployment automation, thereby establishing a significantly more stable and maintainable system.",
      "Pioneered the development and execution of change mechanisms enabling seamless annual live upgrades for the five foundational databases of Graphiq's Knowledge Graph. This strategic initiative was executed while ensuring uninterrupted production traffic flow, achieving downtime of under 5 minutes.",
      "Architected a robust Gamma stage infrastructure utilizing AWS CDK, specifically for critical data stores including MySQL Aurora databases and AWS Opensearch domains. This encompassed end-to-end implementation, integrating comprehensive CI/CD processes. The resulting environment became a cornerstone for KEs and SDEs, facilitating easier development and rigorous testing.",
    ]
  }, {
    id: "010",
    type: "work",
    period: "Sept 2020 - Dec 2020",
    logo: "res/images/mhealth.png",
    link: "https://www.mhealthgroup.org/",
    title: "mHealth Research Group, Boston, MA",
    subtitle: "Graduate Research Assistant, Android Developer",
    secondary_text: "Android, Firebase, Camera API",
    content: [
      "Designed and engineered an Android application catering to the capture of images from front, rear, and external USB camera(s) at defined intervals for a study.",
      "Implemented background services to enable seamless functionality even when the device's screen is off or the app is closed, ensuring uninterrupted image capture.",
      "Addressed the challenges posed by doze mode, ensuring the app's continued operation while optimizing battery consumption.",
      "Incorporated intelligent mechanisms to upload logs at regular intervals, and images exclusively when the device is connected to a charging source. This approach minimizes potential disruptions while ensuring data integrity."
    ]
  }, {
    id: "009",
    type: "work",
    period: "June 2020 - Aug 2020",
    logo: "res/images/amazon.png",
    link: "https://en.wikipedia.org/wiki/Graphiq",
    title: "Graphiq, Amazon, Santa Barbara, CA",
    subtitle: "Intern, SDE",
    secondary_text: "AWS, AWS CDK",
    content: [
      "Spearheaded the development of a cutting-edge, production-ready background job scheduler for Graphiq by harnessing the power of AWS CDK.",
      "Implemented a robust multi-layered security framework, encompassing crucial components such as Virtual Private Clouds (VPCs), private subnets, IAM Authentication, and data encryption mechanisms.",
      "Leveraged an array of AWS services, including DynamoDB, SQS (Simple Queue Service), Lambda, Step Functions, and API Gateway, to architect a comprehensive and efficient job scheduling system.",
      "Crafted a suite of unit and integration tests, resulting in an impressive code coverage of nearly 100%. This rigorous testing approach ensured the reliability and stability of the scheduler.",
      "Compiled extensive documentation, including a comprehensive Runbook, to empower seamless operation and maintenance of the system, providing crucial insights into its functionalities and troubleshooting guidelines."
    ]
  }, {
    id: "008",
    type: "work",
    period: "Jan 2020 - May 2020",
    logo: "res/images/wolters_kluwer.svg.png",
    link: "https://www.uptodate.com/home",
    title: "UpToDate, Wolters Kluwer, Waltham, MA",
    subtitle: "Intern, Web Developer",
    secondary_text: "Android Wear 2.0, Firebase, Wearables and sensors, DBSCAN, Differential Encoding",
    content: [
      "Dockerized the fundamental UpToDate application and authored comprehensive setup documentation.",
      "Collaborated within the core team to address tickets encompassing UI/UX improvements (Angular.js, JSP) and backend microservices development (Java, Spring Boot).",
      "Developed a new data migration tool for seamless inter-database transitions (stage, prod, dev) alongside two fellow interns.",
      "Leveraged Node.js and Express.js to craft the backend and Vue.js for the frontend. Delivered a holistic solution complete with thorough documentation and robust unit tests.",
      "Adhered to a bi-weekly Agile Scrum-ban methodology, ensuring iterative and efficient project progress."
    ]
  }, {
    id: "007",
    type: "work",
    period: "Oct 2018 - Dec 2019",
    logo: "res/images/mhealth.png",
    link: "https://www.mhealthgroup.org/",
    title: "mHealth Research Group, Boston, MA",
    subtitle: "Graduate Research Assistant, Android Developer",
    secondary_text: "Android Wear 2.0, Firebase, Wearables and sensors, DBSCAN, Differential Encoding",
    content: [
      "Part of team of 5 in the development of sophisticated Android applications tailored for both smartphones and smartwatches. These were pivotal in the comprehensive data collection, analysis, and positive user behavior reinforcement of more than 200 participants, as part of an NIH-funded study.",
      "Employed a combination of self-report methodologies and device sensors, such as accelerometers and heart rate monitors, to achieve round-the-clock data collection capabilities.",
      "Leveraged Firebase as a comprehensive backend solution, covering database management, storage, authentication, and crash analysis. This encompassed handling substantial daily data loads ranging from 10-20 GB.",
      "Achieved a 65% reduction in data storage requirements and network transfers through the strategic implementation of differential encoding techniques. This optimization significantly contributed to efficient data management and enhanced app performance.",
    ]
  }, {
    id: "006",
    type: "school",
    period: "Sept 2018 - Dec 2020",
    logo: "res/images/neu.png",
    link: "https://www.northeastern.edu/",
    title: "Northeastern University, Boston, MA",
    subtitle: "Master of Science in Computer Science",
    secondary_text: "GPA: 4.0 / 4.0",
    content: [
      "Related courses: Large-Scale Parallel Data Processing, Information Retrieval, Data Mining Techniques, Programming Design Paradigm, Algorithms, Foundations of AI, Game AI"
    ]
  }, {
    id: "005",
    type: "work",
    period: "June 2017 - July 2018",
    logo: "res/images/samsung.png",
    link: "https://research.samsung.com/sri-n",
    title: "Samsung Research Institute, Noida, India",
    subtitle: "Engineer I, Codec Team, Media Services",
    secondary_text: "Android, Google ML kit, Mobile Video/Audio codec, FFMPEG",
    content: [
      "Provided mentorship and guidance to an intern throughout the design and development stages of an Android application. This app focused on implementing an auto camera mode selection feature, utilizing Google ML Kit for intelligent decision-making.",
      "Led the creation of a gesture-driven Android application tailored for ad-hoc video editing. This initiative harnessed the power of FFMPEG to offer a versatile and user-friendly video editing solution.",
      "Innovated by significantly enhancing image storage efficiency, achieving an impressive 50% improvement. This optimization was achieved by leveraging advanced encoding techniques, specifically through CMake and the Nokia HEVC library."
    ]
  }, {
    id: "004",
    type: "school",
    period: "Aug 2013 - May 2017",
    logo: "res/images/bits.png",
    link: "https://www.bits-pilani.ac.in/",
    title: "Birla Institute of Technology and Science(BITS) Pilani",
    subtitle: "B.E. (Hons.) in Electrical and Electronics Engineering",
    secondary_text: "GPA: 7.78 / 10",
    content: [
      "Related courses: Machine Learning, Object Oriented Programming, Data Structures and Algorithms, Discrete Mathematics, Operating Systems"
    ]
  }, {
    id: "003",
    type: "work",
    period: "June - Dec 2016",
    logo: "res/images/oracle.png",
    link: "https://www.oracle.com/in/index.html",
    title: "Oracle, Bangalore, India",
    subtitle: "Software Development Intern",
    secondary_text: "REST APIs, Java, Oracle JET(knockout js, jQuery, jQuery UI, promise), ADF, Swagger",
    content: [
      "Developed faster, lighter and more responsive app UI solution for Oracle Hyperion Planning",
      "Used OracleJET, a Javascript library bundle, to implement ad-hoc web pages and visualization generation",
      "Built and deployed secure Java REST APIs"
    ]
  }, {
    id: "002",
    type: "work",
    period: "June - Nov 2016",
    logo: "res/images/silicosense.png",
    link: "http://www.silicosense.com/",
    title: "SilicoSense Technologies, New Delhi, India",
    subtitle: "Software Development Intern",
    secondary_text: "REST APIs, PHP, PDO, mySQL, python, sqlite, bs4",
    content: [
      "Built web app backend coupled securely with REST APIs using PHP and PDO",
      "Created and managed SQL database schemas for app data",
      "Built web crawler to scrape, collate and store data using sqlite and BeautifulSoup4(bs4) libraries in python"
    ]
  }, {
    id: "001",
    type: "work",
    period: "May - July 2015",
    logo: "res/images/ircs.png",
    link: "http://www.indianredcross.org/ircs/index.php",
    title: "Indian Red Cross Society, New Delhi, India",
    subtitle: "Software Development Intern",
    secondary_text: "Django, HTML5, CSS3, js, sqlite, python, TkInter",
    content: [
      "Developed website for data collection using HTML5, CSS3 and JS",
      "Developed the back-end using Django and SQL Database",
      "Developed User Interface using Python for searching and printing relevant data"
    ]
  }
]

export default WorkNEduDetails;
