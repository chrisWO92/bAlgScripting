export {
    createCodeElement
};


function addElement(tag, id, parentElement) {
    // crea un nuevo div
    // y añade contenido
    let newDiv = document.createElement(tag);
    newDiv.setAttribute("id", id);
    newDiv.classList.add("text-primary");
    //var newContent = document.createTextNode(text);
    //newDiv.appendChild(newContent); //añade texto al div creado.
  
    // añade el elemento creado y su contenido al DOM
    let currentDiv = document.getElementById(parentElement);
    currentDiv.appendChild(newDiv);
  
    return newDiv;
  }
  
  const createCodeElement = (arr, id, parentElement) => {
    let divElement = addElement('div', id, parentElement);
    divElement.classList.add("bg-light", "p-3", "mb-3", "rounded");
    let codeElement = document.createElement("code");
    for (line of arr.split("\n")) {
      //let codeLine = document.createElement("p");
      let codeLine = document.createElement('span');
      codeLine.setAttribute("white-space","pre-wrap");
      codeLine.innerHTML = `${line}<br>`;
      codeLine.classList.add("d-block", "text-info");
      if (/^\s\s(\w|\W)/.test(line)){
        codeLine.classList.add("ms-3");
      }
      if (/^\s\s\s\s(\w|\W)/.test(line)){
        codeLine.classList.add("ms-5");
      }
      codeElement.appendChild(codeLine);
    }
    divElement.appendChild(codeElement)
    let currentDiv = document.getElementById(parentElement);
    currentDiv.appendChild(divElement);
  }