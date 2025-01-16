// section 1
[
  { text: "Web Developer", icon: "fa-briefcase" },
  { text: "Portsaid, Egypt", icon: "fa-house" },
  { text: "mohamedeltabei2000@gmail.com", icon: "fa-envelope" },
  { text: "01020210495", icon: "fa-phone" },
].forEach((element) => {
  let div = document.createElement("div");
  div.className = "d-flex align-items-center gap-3";
  div.innerHTML = `
        <i class="fa-solid ${element.icon}"></i>
        <div>${element.text}</div>
    `;
  document.getElementById("section1").append(div);
});

// section 2
[
  { skill: "Mongodb", percent: 48 },
  { skill: "Express", percent: 67 },
  { skill: "React", percent: 63 },
  { skill: "Nodejs", percent: 73 },
  { skill: ".Net", percent: 51 },
  { skill: "Bootstrap", percent: 85 },
  { skill: "OOP", percent: 83 },
  { skill: "JQuery", percent: 79 },
  { skill: "SQL", percent: 76 },
  { skill: "C#", percent: 78 },
  { skill: "Javascript", percent: 83 },
  { skill: "HTML", percent: 91 },
  { skill: "CSS", percent: 92 },
].forEach((element) => {
  div = document.createElement("div");
  div.innerHTML = `
    <small>${element.skill}</small>
    <div
      class="progress"
      role="progressbar"
      aria-label="Example with label"
      aria-valuenow="${element.percent}"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div class="progress-bar" style="width: ${element.percent}%">
        ${element.percent}%
      </div>
    </div>`;
  document.querySelectorAll("#section2 div")[1].append(div);
});

// section 3
[
  { laguage: "Arabic", percent: 100 },
  { laguage: "English", percent: 48 },
].forEach((element) => {
  div = document.createElement("div");
  div.innerHTML = `
      <small>${element.laguage}</small>
      <div
        class="progress"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="${element.percent}"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar" style="width: ${element.percent}%">
        </div>
      </div>`;
  document.querySelectorAll("#section3 div")[1].append(div);
});
