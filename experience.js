const experiences = [
  {
  company: "PearlThoughts",
  logo: "images/pearlthoughts.jpg", // Make sure to add the logo image
  position: "Web Developer Intern",
  duration: "May 2025 – Jun 2025",
  description: `Developed a full-stack Hospital Management System using Next.js (frontend) and NestJS (backend).
  Implemented features like patient registration, doctor scheduling, appointment booking, and admin dashboards.

  Followed REST API standards, collaborated in agile teams, and gained hands-on experience with Node.js, TypeScript, Docker, and AWS.`,
  link: "https://www.linkedin.com/company/pearlthoughts/posts/?feedView=all",  // Add your certificate link if available
  linkText: "View Certificate"
},
  
    {
    company: "Rationarium Pvt. Ltd",
    logo: "images/ratationarium-logo.jpeg",
    position: "Front-end Developer",
    duration: "April 2023 – April 2024",
    description: "Working on real-time Angular applications in Web3 and integrating with digital wallets like MetaMask.",
    link: "https://www.linkedin.com/company/www.rationarium.com/",
    linkText: "View Company Website"
  },
  {
    company: "BasketHunt Pvt. Ltd",
    logo: "images/baskethunt.jpg",
    position: "IT & Web Developer Intern",
    duration: "24 April 2023 – 03 July 2023",
    description: "Worked on a real-time chat app using Node.js and Express with a team.",
    link: "https://www.linkedin.com/posts/hritik-mittal09_baskethunt-lor-completion-certificate-activity-7084194694502506496-rzYk?utm_source=share&utm_medium=member_desktop",
    linkText: "View Certificate"
  },
  {
    company: "Devtown Pvt. Ltd",
    logo: "images/devtown.png",
    position: "Full Stack Web Developer Intern",
    duration: "10 June – 5 October",
    description: "Worked on different projects including a Movie Browser application.",
    link: "https://cert.devtown.in/verify/Z1jsAoA",
    linkText: "View Certificate"
  },
  {
    company: "Twowaits Pvt. Ltd",
    logo: "images/wowaits.jpeg",
    position: "Python Developer Intern",
    duration: "1 Feb 2022 – 28 Feb 2022",
    description: "Built a voice assistant to perform manual computer tasks using voice commands.",
    link: "https://drive.google.com/file/d/1CcbbJcI6SE01w9xOWB2kdSc3NUCw8_0D/view",
    linkText: "View Certificate"
  }
];

const experienceSection = document.getElementById("experience-container");

const experienceCards = experiences.map(exp => `
  <div class="max-w-xs rounded overflow-hidden shadow-lg mx-4 my-4">
    <img class="w-full h-56 object-cover" src="${exp.logo}" alt="${exp.company}">
    <div class="px-6 py-4">
      <h3 class="text-xl font-bold mb-2">${exp.company}</h3>
      <p class="text-gray-700 mb-2">Position: ${exp.position}</p>
      <p class="text-gray-700 mb-2">Duration: ${exp.duration}</p>
      <p class="text-gray-700">${exp.description}</p>
    </div>
    <div class="px-6 py-4">
      <a href="${exp.link}" target="_blank"
         class="inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
         ${exp.linkText}
      </a>
    </div>
  </div>
`).join("");

experienceSection.innerHTML = experienceCards;
