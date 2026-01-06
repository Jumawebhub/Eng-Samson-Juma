import ResumePDF from "./Juma Samson Odhiambo cv (1).pdf";
import default_avatar from "../../assets/images/baseImages/default_avatar.svg";
import KloudGin from ".././../assets/images/data/KloudGin.png";
import Freelance from ".././../assets/images/data/Freelance.png";
import PayPal from ".././../assets/images/data/PayPal.jpeg";

const user = {
	firstName: "Samson",
	lastName: "Juma",
	userImage: default_avatar,
	resume: ResumePDF,
	email: "samson2020odhiambo@gmail.com",
	linkedIn: "samson-juma-62679b358",
	gitHub: "jumawebhub",
	twitter: "E",
	whatsapp: "+254791430850",
	aboutMe: {
		intro: " I'm a Full Stack Software Development Engineer from Kenya.",
		description:
			"I enjoy taking up complex problems and converting to an usable format. My major domains are Web Development (React / Angular / Node) and Software Development (Java / Python).Full stack engineer | Laravel | Php | JavaScript / Java leading software Developer and Engineer with 6 years of work experience leading developing teams in different settings (include remote international teams). I enjoy coding testing, and intergration . Seeking anew challenges and opportunities to leverage. I am certified and having successfully worked with service – oriented(SOA)architectures and web services. Holds a BSC in applied computer science in my recents study certification",
		outro: "When I'm not developing any stuff , you will find me re-watching an episode of The Office or exploring a new place.",
	},
	experiences: [
		{
			organization: "SasaKazi Kenya",
			organizationPicture: PayPal,
			isCurrent: true,
			startDate: "Dec 2022",
			endDate: "July 2024",
			positions: [
				{
					positionName: "Software Engineer 2",
					startDate: "Dec 2022",
					endDate: " July 2024",
					isPresent: true,
					description:
						"Working as part of the Identity Engineering Team, responsible for the development and maintaining  Web application  and Native experiences. Implemented a long-term architecture for platform convergence in existing node modules, automating tenant onboarding and reducing onboarding time significantly. Migrated legacy C++ components to Node modules with updated UI, improving performance and design aesthetics. Developed an internal tool tailored for efficient upgrades and verification of internal framework versions across multiple micro-services, saving manual effort and reducing the risk of errors. Technologies: ReactJS, JavaScript, Node, GraphQL, Java, RESTful web services, Swift, MySQL Built full-stack Project Management App on Microsoft Azure using .NET Core, React.js & SQLServer• Implemented secure RESTful APIs with Keycloak OAuth2 and achieved 40% faster release cycles via CI/CD Optimized database performance resulting in 25% cost reduction",
				},
			],
		},
		{
			organization: "Eldohub",
			organizationPicture: KloudGin,
			isCurrent: false,
			startDate: "May 2023",
			endDate: "Aug 2023",
			positions: [
				{
					positionName: "Software Engineer Intern",
					startDate: "May 2023",
					endDate: " Aug 2023",
					isPresent: true,
					description:
						"During this time, I worked on the redesigning and development of the new UI for the product using AngularJS.I also developed multiple APIs to support the GIS feature and also worked on the configuration of the GIS in the product.",
				},
				{
					positionName: "Associate Software Engineer",
					startDate: "May 2023",
					endDate: "Aug 2023",
					isPresent: false,
					description:
						"During this time, I designed and developed multiple APIs for the EAM Module and Inventory Management Module. For the EAM module, I also developed and implemented APIs for supporting new features in the product such as Asset Criticality, Purchase Order, and Material Order modules.",
				},
				{
					positionName: "Trainee Engineer",
					startDate: "June 2023",
					endDate: "Aug 2023",
					isPresent: false,
					description:
						"During this time, I developed and implemented the User Management Module including the development of the supporting APIs and configuration of the UI for the dashboard using Java and KloudGin Platform. I also worked on the API documentation using Swagger API.",
				},
			],
		},
		{
			organization: "Freelance Developer",
			startDate: "2021",
			endDate: "Present",
			organizationPicture: Freelance,
			isCurrent: false,
			positions: [
				{
					positionName: "Fullstack Developer",
					startDate: "2021",
					endDate: "Present",
					isPresent: false,
					description:
						"I was a freelance developer during my Bachelor's degree where I worked with different established companies like Prelude, Ediolon and Youngster's Worldwide. and Fivver",
				},
			],
		},
	],
	education: [
		{
			instituteName:
				"Chuka University ",
			degree: "Bachelor's Degree in AppliedComputer Science and Engineering",
			year: " Sept 2020 -  April 2024",
			id: 1,
		},
		{
			instituteName: "AWS Ajira",
			degree: "AWSCloud Practitioner",
			year: "2023",
			id: 2,
		},
		{
			instituteName: "AZURE MICROSOFT",
			degree: "Microsoft Azure Fundamentals (AZ-900)",
			year: "2024",
			id: 3,
		},
	],
	projects: [
		{
			projectName: "Business Portfolio ",
			description:
				"Business Portfolio for SPANS Venture.",
			madeWith: ["React", "Node", "Firebase", "Firestore"],
			link: "https://spans-venture.vercel.app/",
		},
		{
			projectName: "Drilling services ",
			description:
				"Drilling services is a platform where users can get drilling services.",
			madeWith: ["React", "Node", "Firebase", "Firestore"],
			link: "https://cavlor-hydro-co-ltd.vercel.app/",
		},
		{
			projectName: "Musili Homes",
			description:
				"Musili Homes is a real estate platform where users can buy and sell their properties.",
			madeWith: ["React", "Java", "Firebase", "Firestore"],
			link: "https://musili-homes-lyart.vercel.app/",
		},
		{
			projectName: "Business Consaultancy Agency",
			description:
				"Business Consaultancy Agency is a platform where users can get consaultancy services.",
			madeWith: ["PHP", "MySQL", "AJAX", "JS"],
			link: "https://fastserveconsultancy.co.ke/",
		},
		{
			projectName: "Gilbert MWENDA J.S.S",
			description:
				"A school website for Gilbert MWENDA J.S.S.",
			madeWith: ["React", "Node", "Firebase"],
			link: "https://gilbert-mwenda-j-s-s.vercel.app/",
		},
		{
			projectName: "POWER BIKES ANDRIOD APP",
			description:
				"Power Bikes is an Android app that allows users to rent and sell their bikes.",
			madeWith: ["Flutter", "Dart", "Firebase"],
			link: "https://iter-bus.firebaseapp.com/",
		},
		{
			projectName: "Consultancy Websites",
			description:
				"I developed multiple websites for different companies.",
			madeWith: [
				"PHP",
				"MySQL",
				"BlockChain",
				"HTML",
				"CSS",
				"JavaScript",
			],
			link: "https://github.com/jumawebhub",
		},
		{
			projectName: "Flight Ticket Saver",
			description:
				"A flight booking system which was dealing with the bumping of seats with the help of Etherium Smart Contract. This was a project for IATA Hackathon.",
			madeWith: ["Python", "DJANGO", "HTML", "CSS", "JavaScript"],
			link: "https://github.com/jumawebhub",
		},
	],
	skills: [
		{
			name: "Language Proficiency",
			values: [
				"ReactJS",
				"JavaScript",
				"Node",
				"Python",
				"Java",
				"PHP",
				"C#",
				"HTML",
				"CSS",
			],
		},
		{
			name: "Tools/IDE Proficiency",
			values: ["VSCode", "XCode", "Git", "PyCharm", "Eclipse", "IntelliJ IDEA", "Postman"],
		},
		{
			name: "Database Proficiency",
			values: ["MySQL", "MongoDB", "Firestore"],
		},
	],
};

export default user;
