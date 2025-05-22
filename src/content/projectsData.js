

const ProjectsData = [
    {
        projectName: "Recipe App (In Progress)",
        techStack: "React, Node.js, Tailwind CSS (Planned), Firebase, Cloudinary, Git, GitHub",
        projectType: "Solo",
        description: [
        `
            A full-stack web app revolving around recipe documenting and cooking, built using React for frontend and
            Firebase for authentication and Firestore storage. 
        `,
        ` 
            Users can create accounts, add recipes with detailed information
            (ingredients, steps, tags, etc.), upload relevant images for the recipes that are securely stored through a
            Node.js backend integrated with Cloudinary, and store all their recipes in one place. The app also supports
            a search engine for finding stored recipes based on keyword or tags. 
        `,
        `
            The final feature in progress is the ability for users to create curated recipe collections.
        `
        ],
        imageNames: [
            { name: "recipe_app_asset_1.jpg", altText: "image of food on table" },
            { name: "recipe_app_asset_2.png", altText: "image of ingredients on counter next to someone cooking on stove"}
        ]
    },
    {
        projectName: "Mentor Finder",
        techStack: "Figma, Python (Flask), MongoDB Atlas, Git, GitHub",
        projectType: "Group",
        description: [
        `
            A full-stack web app that serves as an all-in-one professional networking platform dedicated to mentor-finding to help
            those early in their careers. The web app has features such as account creation, mentor/mentee search, community hubs, and
            forums. 
        `,
        `
            As one of the Back-End Enineers, I worked on integrating multi-filter search functionality to allow users to find mentors
            and mentees to connect with. In addition to this, I Implemented a community hub forum feature where users can create, search for, 
            and participate in community spaces related to their interests. MongoDB Atlas was utilized to store the real-time data related.
        `
        ],
        imageNames: [
            { name: "mentor_finder_asset_1.png", altText: "graphic of two people talking across a table"},
            { name: "mentor_finder_asset_2.png", altText: "graphic of person sitting with laptop with icons related to communication around them"}
        ]
    },
    {
        projectName: "Airplane Ticket Reservation System",
        techStack: "Figma, Python (Flask), HTML/CSS, SQL, MySQL Workbench, Git, GitHub ",
        projectType: "Group",
        description: [
        `
            A full-stack airplane ticket reservation website that simulated the user experience of airline staff
            managing the website and users using the website. As one of the Full-Stack Engineers, I helped integrate 
            interfaces and user flows for both types of users. 
        `,
        `
            Specifically, I integrated features for airline staff that allowed them to create & manage flights and planes 
            customers can purchase tickets of, run analytics on all existing users, and view collective data related. 
            For the customer experience, I integrated the features
            that generated and displayed data analytics based on their account data related to previous flights and tickets
            in order to help customers gain insight on their trip history.
        `
        ],
        imageNames: [
            { name:  "airplane_asset_1.jpg", altText: "graphic of plane tickets"},
            { name: "airplane_asset_2.jpg", altText: "graphic of airline staff standing with airplane overhead"}
        ]
    },
    {
        projectName: "EduFinance: A Personal Finance Management Tool",
        techStack: "Figma, HTML/CSS, JavaScript, Git, GitHub",
        projectType: "Group",
        description: 
        [`
            A product proposal and mock-up of a financial management tool catered towards Gen Z and their unique financial 
            wellness needs made as a final project as part of the Morgan Stanley x TechNYC Virtual Internship Program. 
            A full UX research and UI design process was conducted for this project. Specifically, we conducted UX research 
            and developed personas to understand the unique financial wellness needs of college students, as well as brainstormed 
            features of a personal financial management platform that can meet these needs. 
         `,
         `
            Using this research and concept planning, we designed a wireframe of the platform in Figma, in which I specifically designed 
            the interfaces for sections related to loans, expenses and earnings, and investing. In the final stages, we 
            developed parts of a high-fidelity web prototype of the platform to further develop UI designs and user flows,
            in which I specifically worked on implementing the interfaces for sections related to categorizing and graphing
            data about a user's earnings and expenses.

        `],
        imageNames: [
            { name: "edufinance_homepage.png", altText: "screenshot of homepage of finance tool EduFinance"},
            { name: "edufinance_stats.png", altText:"screenshot of stats page of finance tool EduFinance"}
        ],
        link: "https://github.com/codenamemadison/EduFinance"
    },
    {
        projectName: "Between Worlds",
        techStack: "Figma, GoDot, GDScript, Git, GitHub",
        projectType: "Group",
        description: [
        `
            Between Worlds is a combat integrated puzzle game with classic dungeon crawler puzzle mechanics. 
            You play as a hunter in a tundra landscape, and encounter a deer which has been corrupted by a mysterious alien entity. 
            You must navigate through combat and puzzles in different worlds to progress into the heart of the alien dungeon and 
            prevent the worlds from being corrupted.
        `,
        `
            I specifically helped with designing some of the puzzles and level designs, implementing five distinct types of enemy AI behaviors 
            that each brought challenge and variety to the gameplay, and helped integrate different enemies in the level design of the game so
            each enemy was utilized for both puzzle-solving and combat. In additon to this, I collaborated with teammates to optimize game balance 
            through iterative testing, design analysis, and playtesting. 
        `
        ],
        imageNames: [
            { name: "between_worlds_homepage.png", altText: "screenshot of homepage of Between Worlds game"},
            { name: "between_worlds_gameplay.png", altText: "screenshot of homepage of a level in Between Worlds game"}
        ],
        link: "https://not-absent.itch.io/between-worlds"
    },
        {
        projectName: "The Study Zone",
        techStack: "HTML/CSS, JavaScript, Git, GitHub",
        projectType: "Solo",
        description: [
        `
            'The Study Zone' is a website that serves as a place meant for productivity and focus. 
            It provides resources and information about different tools and resources that deal 
            with task management, focusing, and studying. It is aimed for students but also 
            anyone who needs help with managing their workload and with focusing.
        `
        ],
        imageNames: [
            { name: "study_zone_homepage.png", altText: "screenshot of homepage of Study Zone website"},
            { name: "study_zone_music.png", altText: "screenshot of music page of Study Zone website"},
        ],
        link: "https://codenamemadison.github.io/intro-to-web-dev-projects/midterm/index.html"
    }
    ,    {
        projectName: "College Time Capsule",
        techStack: "HTML/CSS, JavaScript, Procreate, Git, GitHub",
        projectType: "Solo",
        description: [
        `
            An interactive web art piece that serves a "time capsule" of memorabilia I've 
            collected over the years during college or objects that have had meaning to me 
            during my time at college.
        `,
        `
            The bigger concept was to explore the ways in which web dev and web design can be 
            used as a means for others to be able to easily be able to connect and understand 
            intimate moments and memories of our own lives. In this way, I hope viewers can 
            experience my own experiences as their own as close as possible.
        `,
        `
            Drawings were all made by me in Procreate.

        `
        ],
        imageNames: [
            { name: "time_capsule_menu.png", altText: "screenshot of menu page of Time Capsule website with drawings to click on"},
            { name: "time_capsule_sims.png", altText: "screenshot of part of page from Time Capsule website of Sims-like image of couch"}
        ],
        link: "https://codenamemadison.github.io/intro-to-web-dev-projects/final_project/"
    }
]

export default ProjectsData;

