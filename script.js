// section 1
[
  { text: "Designer", icon: "fa-briefcase" },
  { text: "London, UK", icon: "fa-house" },
  { text: "ex@mail.com", icon: "fa-envelope" },
  { text: "1224435534", icon: "fa-phone" },
].forEach((element) => {
  let div = document.createElement("div");
  div.className = "d-flex align-items-center gap-3";
  div.innerHTML = `
        <i class="fa-solid text-green ${element.icon}"></i>
        <div>${element.text}</div>
    `;
  document.getElementById("section1").append(div);
});

// Skills
[
  { skill: "Adobe Photoshop", percent: 90 },
  { skill: "Photography", percent: 80 },
  { skill: "Illustrator", percent: 75 },
  { skill: "Media", percent: 50 },
].forEach((element) => {
  div = document.createElement("div");
  div.innerHTML = `
    <small>${element.skill}</small>
    <div
      class="progress rounded-5"
      style="height:18px"      
      role="progressbar"
      aria-label="Example with label"
      aria-valuenow="${element.percent}"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div class="progress-bar bg-green" style="width: ${element.percent}%">
        ${element.percent}%
      </div>
    </div>`;
  document.querySelectorAll("#section2 div")[1].append(div);
});

// Languages
[
  { laguage: "English", percent: 100 },
  { laguage: "Spanish", percent: 48 },
  { laguage: "German", percent: 25 },
].forEach((element) => {
  div = document.createElement("div");
  div.innerHTML = `
      <small>${element.laguage}</small>
      <div
        class="progress rounded-5"
        style="height:24px"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="${element.percent}"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar bg-green" style="width: ${element.percent}%">
        </div>
      </div>`;
  document.querySelectorAll("#section3 div")[1].append(div);
});
//footer social media

[
  "facebook",
  "instagram",
  "snapchat",
  "pinterest",
  "twitter",
  "linkedin",
].forEach((element) => {
  let a = document.createElement("a");
  a.className =
    "link-light link-opacity-50 link-opacity-100-hover text-decoration-none";
  a.innerHTML = `<i class="fa-brands fa-${element}  me-2"></i>`;
  a.href = "https://";

  document.getElementById("socialMedia").append(a);
});

//work experience
[
  {
    work: "Front End Developer / w3schools.com",
    duration: "Jan 2015 - Current",
    description:
      "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
  },
  {
    work: "Web Developer / something.com",
    duration: "Mar 2012 - Dec 2014",
    description:
      "Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
  },
  {
    work: "Graphic Designer / designsomething.com",
    duration: "Jun 2010 - Mar 2012",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
].forEach((element, i, arr) => {
  const div = document.createElement("div");
  div.className = `w-100 ${
    i === arr.length - 1 ? "" : "border-bottom"
  } p-3 d-flex flex-column gap-1`;
  div.innerHTML = `
    <h5 class="text-secondary">${element.work}</h5>
    <h6 class="fw-normal text-green"><i class="fa-regular fa-calendar-days text-green me-3"></i>${
      element.duration.includes("Current")
        ? element.duration.slice(0, element.duration.indexOf("Current")) +
          `<span class="badge bg-green  p-2 ">Current</span>`
        : element.duration
    }</h6>

    <p>${element.description}</p>
  `;
  document.getElementById("experience").append(div);
});

//education
[
  {
    place: "W3Schools.com",
    duration: "Forever",
    degree: "Web Development! All I need to know in one place",
  },
  {
    place: "London Business School",
    duration: "2013 - 2015",
    degree: "Master Degree",
  },
  {
    place: "School of Coding",
    duration: "2010 - 2013",
    degree: "Bachelor Degree",
  },
].forEach((element, i, arr) => {
  const div = document.createElement("div");
  div.className = `w-100 ${
    i === arr.length - 1 ? "" : "border-bottom"
  } p-3 d-flex flex-column gap-1`;
  div.innerHTML = `
    <h5 class="text-secondary">${element.place}</h5>
    <h6 class="fw-normal text-green"><i class="fa-regular fa-calendar-days me-3"></i>${element.duration}</h6>

  <p>${element.degree}</p>
`;
  document.getElementById("education").append(div);
});
