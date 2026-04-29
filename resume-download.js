const btn = document.querySelector("#resume-btn");

if (btn) {
  btn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "./Hritik Mittal Resume.pdf"; // Updated to match the actual file name in the project root
    link.download = "Hritik_Mittal_Resume.pdf"; // Set the desired file name for download
    document.body.appendChild(link); // Append the link to the body
    link.click();
    document.body.removeChild(link); // Remove the link after clicking
  });
} else {
  console.error("Resume button not found!");
}

