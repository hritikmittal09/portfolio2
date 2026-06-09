const projects = [
  {
    title: "Ragfolio - AI Powered Portfolio",
    image: "images/ragfolio.png",
    description: `I built an AI-powered portfolio website using Retrieval-Augmented Generation (RAG) during the Haxos Workshop to create an interactive experience for visitors. 
    The platform allows users to ask questions about my skills, projects, and experience through a conversational AI interface. 
    It combines modern frontend technologies with intelligent context retrieval to deliver dynamic, personalized responses in real time. 
    This project showcases my expertise in full-stack development, AI integration, and building scalable, user-centric applications.`,
    link: "https://hritiks-ragfolio.onrender.com/",
    linkText: "View Website",
  },

  
  {
    title: "Zera virtual assistant",
    image: "images/zera.webp",
    description:
      "An AI-powered chatbot built using Large Language Models (LLMs), designed to simulate intelligent conversations. Developed with Python, it leverages modern NLP techniques to provide context-aware responses and a smooth interactive experience.",
    link: "https://github.com/hritikmittal09/chat-bot-LLm.git",
    linkText: "View Project",
  },
  {
    title: "Kudrat's Landing Page",
    image: "images/kudrat-img.jfif",
    description:
      "Landing page for a health & wellness brand with clean design, product highlights, and Instagram integration.",
    link: "https://kudrat.netlify.app/",
    linkText: "View Project",
  },
  {
    title: "Zomato Landing Page",
    image: "images/zomato.png",
    description:
      "HTML/CSS clone of Zomato's landing page to demonstrate UI skills and frontend design precision.",
    link: "https://hritikmittal09.github.io/ZOMATO-LANDING-PAGE/",
    linkText: "View Project",
  },

  {
    title: "Recipe Generator (Angular)",
    image: "images/food app image.png",
    description:
      "Random recipe generator built with Angular that fetches and displays recipes dynamically.",
    link: "https://659982897241e3ed35627027--spontaneous-pie-0c4775.netlify.app/",
    linkText: "View Project",
  },
  {
    title: "Weather App (React Native)",
    image: "images/weather app.png",
    description:
      "Weather app that fetches data based on user's phone location and shows real-time weather.",
    link: "https://github.com/hritikmittal09/react-nativeweatherapp",
    linkText: "View Project Repository",
  },
  {
    title: "Blog Website (MERN)",
    image: "images/blog.webp",
    description:
      "MERN stack blog platform to post, edit, and share development-related articles and findings.",
    link: "https://blog-by-hritik.netlify.app/",
    linkText: "Visit Blog",
  },
  {
    title: "Hoody.com E-commerce website",
    image: "images/hoody.com",
    description: `I developed a Next.js ecommerce website for selling hoodies, where only the admin can manage product listings. 
      The site features secure Stripe payment integration and a clean, responsive user interface styled with DaisyUI. 
      This project showcases my ability to build scalable ecommerce solutions with full control over inventory and payments.`,
    link: "https://hoodycom.vercel.app/",
    linkText: "View Website",
  },
];

const projectsSection = document.getElementById("projects-container");

const projectCards = projects
  .map(
    (p) => `
  <div class="max-w-xs rounded overflow-hidden shadow-lg mx-4 my-4 bg-white dark:bg-gray-800 transition flex flex-col">
    <img class="w-full h-56 object-cover" src="${p.image}" alt="${p.title}">
    <div class="px-6 py-4 flex-1">
      <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">${p.title}</h3>
      <p class="text-gray-700 dark:text-gray-300 text-sm">${p.description}</p>
    </div>
    <div class="px-6 py-4">
      <a href="${p.link}" target="_blank"
         class="inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
         ${p.linkText}</a>
    </div>
  </div>
`,
  )
  .join("");

projectsSection.innerHTML = projectCards;
