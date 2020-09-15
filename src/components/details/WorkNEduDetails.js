const WorkNEduDetails = [
    {
        id : "010",
        type: "work",
        period: "Sept 2020 - Present",
        logo : "res/images/mhealth.png",
        link : "https://www.mhealthgroup.org/",
        title: "mHealth Research Group, Boston, MA",
        subtitle: "Graduate Research Assistant, Android Developer",
        secondary_text: "Android, Firebase, Camera",
        content: [
            "Developed android app to take pictures from both cameras at regular interval (~10 secs)",
            "Used background services to work with screen off and app closed",
            "Worked around doze mode while also tracking battery life",
            "Upload logs periodically and images when charging"
        ]
    }, {
        id : "009",
        type: "work",
        period: "June 2020 - Aug 2020",
        logo : "res/images/amazon.png",
        link : "https://en.wikipedia.org/wiki/Graphiq",
        title: "Graphiq, Amazon, Santa Barbara, CA",
        subtitle: "Intern, SDE",
        secondary_text: "AWS, AWS CDK, PHP",
        content: [
            "Built the new production ready background job scheduler for Graphiq using AWS CDK",
            "Enforced multi-layered security including VPCs, private subnets, IAM Auth and encryption",
            "Used AWS components like DynamoDB, SQS, Lamba, Step Function, API Gateway",
            "Wrote unit and integration tests with near 100% code coverage",
            "Compiled extensive documentation and Runbook"
        ]
    }, {
        id : "008",
        type: "work",
        period: "Jan 2020 - May 2020",
        logo : "res/images/wolters_kluwer.svg.png",
        link : "https://www.uptodate.com/home",
        title: "UpToDate, Wolters Kluwer, Waltham, MA",
        subtitle: "Intern, Web Developer",
        secondary_text: "Android Wear 2.0, Firebase, Wearables and sensors, DBSCAN, Differential Encoding",
        content: [
            "Worked in the core team on tickets including UI/UX enhancements(angular.js, jsp) and backend micro services(Java, Springboot)",
            "With 2 other interns, built a much needed data migration tool between databases(stage, prod, dev)",
            "Used node.js and express.js for backend, vue.js for frontend",
            "Added comprehensive documentation and unit tests",
            "Followed bi-weekly agile scrum-ban methodology",
            "Dockerized the core UpToDate application and compiled setup instructions document"
        ]
    }, {
        id : "007",
        type: "work",
        period: "Oct 2018 - Dec 2019",
        logo : "res/images/mhealth.png",
        link : "https://www.mhealthgroup.org/",
        title: "mHealth Research Group, Boston, MA",
        subtitle: "Graduate Research Assistant, Android Developer",
        secondary_text: "Android Wear 2.0, Firebase, Wearables and sensors, DBSCAN, Differential Encoding",
        content: [
            "In a team of 5, developed intelligent Android apps for phone and smartwatch to collect info, study and constructively affect user behavior of over 200 participants",
            "Used self-report methods, and device sensors like accelerometer and heart rate monitor for 24x7 data collection",
            "Made extensive use of Firebase for database, storage, authentication and crash analysis of TBs of data",
            "Leveraged machine learning for user data analysis and build context-sensitivity, DBSCAN for location clustering",
            "Reduced data storage and transfer over network by 65% using differential encoding"
        ]
    }, {
        id : "006",
        type: "school",
        period: "Sept 2018 - Present",
        logo : "res/images/neu.png",
        link : "https://www.northeastern.edu/",
        title: "Northeastern University, Boston, MA",
        subtitle: "Master of Science in Computer Science",
        secondary_text: "GPA: 4.0 / 4.0",
        content: [
            "Related courses: Large-Scale Parallel Data Processing, Information Retrieval, Data Mining Techniques, Programming Design Paradigm, Algorithms, Foundations of AI, Game AI"
        ]
    }, {
        id : "005",
        type: "work",
        period: "June 2017 - July 2018",
        logo : "res/images/samsung.png",
        link : "https://research.samsung.com/sri-n",
        title: "Samsung Research Institute, Noida, India",
        subtitle: "Engineer I, Codec Team, Media Services",
        secondary_text: "Android, Google ML kit, Mobile Video/Audio codec, FFMPEG",
        content: [
            "Supervised intern on design and development of Android app for auto camera mode selection with Google ML kit",
            "Developed gesture driven android app for ad-hoc video editing using FFMPEG",
            "Improved image storage efficiency by 50% with better encoding using CMake and Nokia HEVC library"
        ]
    }, {
        id : "004",
        type: "school",
        period: "Aug 2013 - May 2017",
        logo : "res/images/bits.png",
        link : "https://www.bits-pilani.ac.in/",
        title: "Birla Institute of Technology and Science(BITS) Pilani",
        subtitle: "B.E. (Hons.) in Electrical and Electronics Engineering",
        secondary_text: "GPA: 7.78 / 10",
        content: [
            "Related courses: Machine Learning, Object Oriented Programming, Data Structures and Algorithms, Discrete Mathematics, Operating Systems"
        ]
    }, {
        id : "003",
        type: "work",
        period: "June - Dec 2016",
        logo : "res/images/oracle.png",
        link : "https://www.oracle.com/in/index.html",
        title: "Oracle, Bangalore, India",
        subtitle: "Software Development Intern",
        secondary_text: "REST APIs, Java, Oracle JET(knockout js, jQuery, jQuery UI, promise), ADF, Swagger",
        content: [
            "Developed faster, lighter and more responsive app UI solution for Oracle Hyperion Planning",
            "Used OracleJET, a Javascript library bundle, to implement ad-hoc web pages and visualization generation",
            "Built and deployed secure Java REST APIs"
        ]
    }, {
        id : "002",
        type: "work",
        period: "June - Nov 2016",
        logo : "res/images/silicosense.png",
        link : "http://www.silicosense.com/",
        title: "SilicoSense Technologies, New Delhi, India",
        subtitle: "Software Development Intern",
        secondary_text: "REST APIs, PHP, PDO, mySQL, python, sqlite, bs4",
        content: [
            "Built web app backend coupled securely with REST APIs using PHP and PDO",
            "Created and managed SQL database schemas for app data",
            "Built web crawler to scrape, collate and store data using sqlite and BeautifulSoup4(bs4) libraries in python"
        ]
    }, {
        id : "001",
        type: "work",
        period: "May - July 2015",
        logo : "res/images/ircs.png",
        link : "http://www.indianredcross.org/ircs/index.php",
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