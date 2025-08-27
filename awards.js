const awards = [
  {
    title: "LeetCode",
    logo: "images/leetcode.png", // Make sure this image exists
    description: "Solved 200+ problems and earned multiple badges on data structures, algorithms.",
    link: "https://leetcode.com/u/hHRITIKMITTAL/", 
    linkText: "View Profile"
  },
  {
    title: "HackerRank",
    logo: "images/hackerrank.png",
    description: "Earned certifications in Problem Solving, Python, SQL, and more.",
    link: "https://www.hackerrank.com/profile/hritikmittal77",
    linkText: "View Certificates"
  }, 
  {
    title: "Technology Job Simulation",
    logo: "images/deloit.jpg",
    description: "Completed the Deloitte Australia Technology Virtual Job Simulation Program.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_dn3wSvDZ9tA8e8TdE_1752181083620_completion_certificate.pdf",
    linkText: "Show Credential"
  },
  {
    title: "AWS Educate Introduction to Cloud 101",
    logo: "images/awscloudtraing-101 .png",
    description: "Completed the AWS Educate Introduction to Cloud 101 program, gaining foundational skills in AWS cloud services and cloud computing concepts.",
    link: "https://www.credly.com/earner/earned/badge/f8c0c06b-e806-44cd-98e2-73f67e667aff",
    linkText: "Show Credential"
  },
  {
    title: "AWS Educate Introduction to Cloud storage",
    logo: "images/aws-educate-getting-started-with-storage.png",
    description: "Completed the AWS Educate Introduction to Cloud storage program, gaining foundational skills in AWS cloud services and cloud computing concepts.",
    link: "https://www.credly.com/badges/624c6b3e-9f2c-4078-ae84-1eb6432e69c6/whatsapp",
    linkText: "Show Credential"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    logo: "images/OCI-ai-fundations .jpeg",
    description: "The Oracle Cloud Infrastructure (OCI) AI Foundations certification introduces learners to AI and ML fundamentals, focusing on their practical use within OCI. It’s beginner-friendly and requires no prior technical experience.",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E533DE5350F95FC8FC4D3016C2CF516334FB2CE7CCFCC5597412EC6BD70E87A7",
    linkText: "Show Credential"
  }, {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    logo: "images/oci cloud.jpeg",
    description: "The OCI Foundations certification validates fundamental knowledge of Oracle Cloud Infrastructure (OCI), covering core services such as compute, storage, networking, databases, security, and cloud governance. It focuses on foundational-level cloud concepts without requiring hands-on technical experience.",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E9527EEBF6188A297BD79128F35A82508F347BEDB3A1E6D1943CC8FB987A2FF3",
    linkText: "Show Credential"
  }
];

window.addEventListener("DOMContentLoaded", () => {
  const awardSection = document.getElementById("award-container");

  if (awardSection) {
    const awardCards = awards.map(award => `
      <div class="max-w-xs rounded overflow-hidden shadow-lg mx-4 my-4 bg-white dark:bg-gray-800 transition">
        <img class="w-full h-56 object-contain bg-gray-200 dark:bg-gray-700" src="${award.logo}" alt="${award.title}">
        <div class="px-6 py-4">
          <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">${award.title}</h3>
          <p class="text-gray-700 dark:text-gray-300">${award.description}</p>
        </div>
        <div class="px-6 py-4">
          <a href="${award.link}" target="_blank"
             class="inline-block px-4 py-2 text-white rounded-full bg-black hover:bg-green-700 transition">
             ${award.linkText}
          </a>
        </div>
      </div>
    `).join("");

    awardSection.innerHTML = awardCards;
  }
});
