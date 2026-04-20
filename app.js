const showModal = document.querySelector(".modal-add");
const showModalEdit = document.querySelector(".modal-edit");
const btnSend = document.querySelector(".btn-send");
const btnDeleteAll = document.querySelector(".btn-delete");
const btnCloseAdd = document.querySelector(".modal__window-close");
const btnCloseEdit = document.querySelector(".modal__window-close-edit");
const btnAddNote = document.querySelector(".btn-add-note");
const input = document.querySelector(".notes__modal-window-input");
const textArea = document.querySelector("#textArea");
const notesBoard = document.querySelector(".notes__board");
const btnNoteClose = document.getElementById("notes__board-note-close");
const errorInfo = document.querySelector(".heading-error");
const selectID = document.querySelector("#select-id");
const note = document.querySelector(".notes__board-note");
let category = document.querySelector("#category")
let selectedValue;

let cardId = 0;


let counter = 0;

const textylia = (self) => {
    kokos = "";
    self.textContent = kokos;
    console.log(kokos);
}

const modalShow = () => {
    showModal.style.display = "block"
};
const hideModal = () => {
    showModal.style.display = "none"
}

const editNote = () => {
    showModalEdit.style.display = "block";
    textylia();
}
const hideModalEdit = () => {
    showModalEdit.style.display = "none";
}
const deleteNote = (self) => {
    self.parentNode.remove();
    counter--;
    console.log(counter);
    if(counter >= 5) {
        notesBoard.style.justifyContent = "space around"
    } else {
    notesBoard.style.justifyContent = "";
    }
    
}

const addNote2 = () => {
    let inputValue = input.value;
    let textAreaValue = textArea.value;
    if(inputValue == "" || textAreaValue == "" || category.options[category.selectedIndex].value == 0){
        errorInfo.style.display = "block";
        return;
    } else {  
    const nodeDivTxt = `
    <button class="notes__board-note-close" onclick="deleteNote(this)"><i class="fa-solid fa-xmark"></i></button>
    <h1>${inputValue}</h1>
    <p>${textAreaValue}<button class="notes__board-note-edit" onclick="editNote(this)"><i class="fa-solid fa-pen"></i></button></p>`;

     const div1 = document.createElement("div");
     div1.classList.add("notes__board-note");
        div1.innerHTML = nodeDivTxt;
        checkColor(div1);
        notesBoard.appendChild(div1);
    counter++;
    console.log(counter);
    }
    
    if(counter >= 5) {
        notesBoard.style.justifyContent = "space-around";
    }


    console.log(selectedValue);
    showModal.style.display = "none";
    errorInfo.style.display = "none"
    input.value = "";
    textArea.value = "";
    category.selectedIndex = 0
}
const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].value;
}
const deleteAllNotes = () => {
    let notes = document.querySelectorAll(".notes__board-note");
    counter = 0
    console.log(counter);
    counter.textContent = 0;
    notes.forEach(note => {
        note.remove();
    })
    notesBoard.style.justifyContent = "";
}
const checkColor = note => {
    switch(selectedValue) {
        case "1":
            note.style.backgroundColor = "rgb(189, 0, 79)";
            break;
        case "2":
            note.style.backgroundColor = "rgb(12, 224, 222)"
            break;
        case "3":
            note.style.backgroundColor = "rgb(0, 189, 6)"
            break;
    }
}

btnSend.addEventListener("click", modalShow);
btnCloseAdd.addEventListener("click", hideModal);
btnCloseEdit.addEventListener("click", hideModalEdit);
btnAddNote.addEventListener("click", addNote2);
btnDeleteAll.addEventListener("click", deleteAllNotes);



