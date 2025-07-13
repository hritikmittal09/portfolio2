const awards = [
  {
    title: "LeetCode",
    logo: "images/leetcode.png", // Make sure this image exists
    description: "Solved 200+ problems and earned multiple badges on data structures, algorithms.",
    link: "https://leetcode.com/u/hHRITIKMITTAL/", // Replace with your actual LeetCode profile
    linkText: "View Profile"
  },
  {
    title: "HackerRank",
    logo: "images/hackerrank.png", // Make sure this image exists
    description: "Earned certifications in Problem Solving, Python, SQL, and more.",
    link: "https://www.hackerrank.com/profile/hritikmittal77", // Replace with your actual HackerRank profile
    linkText: "View Certificates"
  }, 
   
  {
  title: "Technology Job Simulation",
  logo: "images/deloit.jpg", // Use a Deloitte logo image in your project
  description: "Completed the Deloitte Australia Technology Virtual Job Simulation Program.",
  link: "udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_dn3wSvDZ9tA8e8TdE_1752181083620_completion_certificate", // If you have a direct credential URL, use that instead
  linkText: "Show Credential"
}
  
];

window.addEventListener("DOMContentLoaded", () => {
  const awardSection = document.getElementById("award-container");

  if (awardSection) {
    const awardCards = awards.map(award => `
      <div class="max-w-xs rounded overflow-hidden shadow-lg mx-4 my-4 bg-white">
        <img class="w-full h-56 object-contain bg-gray-200" src="${award.logo}" alt="${award.title}">
        <div class="px-6 py-4">
          <h3 class="text-xl font-bold mb-2">${award.title}</h3>
          <p class="text-gray-700">${award.description}</p>
        </div>
        <div class="px-6 py-4">
          <a href="${award.link}" target="_blank"
             class="inline-block px-4 py-2  text-white rounded-full bg-black hover:bg-green-700">
             ${award.linkText}
          </a>
        </div>
      </div>
    `).join("");

    awardSection.innerHTML = awardCards;
  }
});
