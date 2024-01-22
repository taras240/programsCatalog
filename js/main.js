const container = document.querySelector(".programs-container");
fetch("./src/programs-list.json")
  .then((resp) => resp.json())
  .then((programs) => createProgramElements(programs));
const createProgramElements = (programsArray) => {
  programsArray.forEach((program) => {
    let programElement = document.createElement("div");
    programElement.className = "program-card";
    programElement.innerHTML = `
          <div class="program-main-information">
          <img class="program-preview" src="./src/img/${program.preview}" alt=""></img>
          <div class="program-name">${program.name}</div>
          <div class="program-description">${program.description}</div>
      </div>
      <div class="program-links">
          <a href="${program.links[0]}" target="_blank"
          >до закачування</a
          >
      </div>
      `;
    container.appendChild(programElement);
  });
};
