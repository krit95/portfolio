const ProjectsDetails = [
    {
        id : "004",
        img_src : "res/images/rts_1.png",
        period: "Mar - Apr 2019",
        title: "Resource and Colony Management Simulator",
        subtitle: "Game AI course, NEU",
        keywords: "A*, Search-based classical planner, Iterative Depth A*, Memory Bound A*, Unity, C#",
        content: "Developed an AI that can build a plan to get to a target resources stockpile and income. Also built a small resource management game for the AI to play.\nUI built using Unity, scripting in C#.",
        links: [
            {
                display_text: "SOURCE CODE",
                url: "https://github.com/krit95/Capstone"
            }
        ]
    }, {
        id : "003",
        img_src : "res/images/emergency_caller_1.jpg",
        period: "Feb 2019",
        title: "Emergency Caller",
        subtitle: "Brickhack V, RIT, NY",
        keywords: "Android, FCM, node js, express js",
        content: "Built Emergency calling android app which rings callee phone even if on silent/vibrate by leveraging Firebase Cloud Messaging",
        links: [
            {
                display_text: "SOURCE CODE",
                url: "https://github.com/krit95/EmergencyCaller"
            }
        ]
    }, {
        id : "002",
        img_src : "res/images/nst_1.png",
        period: "Oct - Dec 2018",
        title: "Neural Style Transfer: Analysis and Improvement",
        subtitle: "Foundations of AI course, NEU",
        keywords: "CNN, VGG, Neural Style Transfer",
        content: "Studied, analyzed and reduced loss of neural style transfer using VGG network introduced by Gatys et. al.",
        links: [
            {
                display_text: "SOURCE CODE",
                url: "https://github.com/krit95/neural_style_transfer"
            }
        ]
    }, {
        id : "001",
        img_src : "res/images/rge_screenshot.webp",
        period: "Apr - July 2018",
        title: "Inventory showcase/management Android app",
        keywords: "Android, Firebase authentication, node js, express js, mongoDB",
        content: "Built android apps for SMEs to showcase and manage inventory. Used Firebase for user sign in and authentication, stored data in MongoDB Atlas with the REST APIs being served by a node JS server",
        links: [
            {
                display_text: "PLAY STORE LINK",
                url: "https://play.google.com/store/apps/details?id=com.tiklyo.bpih.rge"
            }
        ]
    }, 
]

export default ProjectsDetails;