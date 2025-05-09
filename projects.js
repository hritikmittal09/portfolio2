const projects = [
    {
      title: "Virtual Assistant",
      image: "images/zera.webp",
      description: "The virtual assistant with a GUI developed in Python and Tkinter combines voice recognition capabilities with an intuitive graphical interface...",
      link: "https://www.linkedin.com/posts/hritik-mittal09_google-like-software-ugcPost-6979409782709366784-emnc?utm_source=share&utm_medium=member_desktop",
      linkText: "View Project"
    },
    {
      title: "Notes-Taking-App",
      image: "images/notes.webp",
      description: "JavaScript-based notes app with local storage for creating, editing, and retrieving notes efficiently and offline.",
      link: "https://hritikmittal09.github.io/task-manager/",
      linkText: "View Project"
    },
    {
      title: "Kudrat's Landing Page",
      image: "images/kudrat-img.jfif",
      description: "Landing page for a health & wellness brand with clean design, product highlights, and Instagram integration.",
      link: "https://kudrat.netlify.app/",
      linkText: "View Project"
    },
    {
      title: "Zomato Landing Page",
      image: "images/zomato.png",
      description: "HTML/CSS clone of Zomato’s landing page to demonstrate UI skills and frontend design precision.",
      link: "https://hritikmittal09.github.io/ZOMATO-LANDING-PAGE/",
      linkText: "View Project"
    },
    {
      title: "Electron.js + React Notes App",
      image: "images/electon-notes-app.jpg",
      description: "Cross-platform desktop app using Electron and React with a modern UI and real-time functionality.",
      link: "https://github.com/hritikmittal09/elele-react-notes-desktop-app",
      linkText: "View Project"
    },
    {
      title: "Recipe Generator (Angular)",
      image: "images/food app image.png",
      description: "Random recipe generator built with Angular that fetches and displays recipes dynamically.",
      link: "https://659982897241e3ed35627027--spontaneous-pie-0c4775.netlify.app/",
      linkText: "View Project"
    },
    {
      title: "Weather App (React Native)",
      image: "images/weather app.png",
      description: "Weather app that fetches data based on user’s phone location and shows real-time weather.",
      link: "https://github.com/hritikmittal09/react-nativeweatherapp",
      linkText: "View Project Repository"
    },
    {
      title: "Blog Website (MERN)",
      image: "images/blog.webp",
      description: "MERN stack blog platform to post, edit, and share development-related articles and findings.",
      link: "#", // Add actual link if live
      linkText: "Visit Blog"
    },
    {
      title: "Hoody.com E-commerce website",
      image: "images/hoody.com", // Make sure this image exists
      description: `I developed a Next.js ecommerce website for selling hoodies, where only the admin can manage product listings. 
        The site features secure Stripe payment integration and a clean, responsive user interface styled with DaisyUI. 
        This project showcases my ability to build scalable ecommerce solutions with full control over inventory and payments.`,
      link: "https://hoodycom.vercel.app/",
      linkText: "View Website"
    },
  ];
  
  const projectsSection = document.getElementById("projects-container");
  
  const projectCards = projects.map(p => `
    <div class="max-w-xs rounded overflow-hidden shadow-lg mx-4 my-4">
      <img class="w-full h-56 object-cover" src="${p.image}" alt="${p.title}">
      <div class="px-6 py-4">
        <h3 class="text-xl font-bold mb-2">${p.title}</h3>
        <p class="text-gray-700 text-sm">${p.description}</p>
      </div>
      <div class="px-6 py-4">
        <a href="${p.link}" target="_blank"
           class="inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
           ${p.linkText}</a>
      </div>
    </div>
  `).join("");
  
  projectsSection.innerHTML = projectCards;
  