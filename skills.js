const skills =[
    {name:"Python", Image : "./images/python.png"},
    {name:"ANGULAR", Image : "./images/angular.png"},
    {name:"REACT.JS", Image : "./images/react.jpg"},
    {name:"HTML", Image : "./images/html.png"},
    {name:"JAVASCRIPT", Image : "./images/js.jpeg"},
    {name:"CSS ", Image : "./images/css.png"},
    {name:"DJANGO ", Image : "./images/django.png"},
    {name:"NODE.js ", Image : "./images/nodejs.png"},
    {name:"DOCKER", Image : "./images/docker.png"},
    {name:"SQL", Image : "./images/sqlSkill.jpg"},
    {name:"MONGO-DB", Image : "./images/mongodb.jpg"},

]
const skillSectionListId = document.getElementById('conveyor-content')
const skillList = skills.map((i)=>{
    return `<li class="conveyor-item m-2 text-center">
  <img class="w-24 h-24 rounded-full mx-auto" src="${i.Image}" alt="Skill ${i.name}">
  <p class="mt-2 text-sm font-medium">${i.name}</p>
</li>`
})


skillSectionListId.innerHTML =skillList

console.log(skillSectionListId);
