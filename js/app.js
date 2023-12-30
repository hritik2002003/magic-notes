console.log('welcome to easy note');
showNotes();
// if user adds a notes
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    //console.log(notesobj);
    showNotes();

})
function showNotes() {
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `<div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete</button>
        </div>
    </div>`

    });
    let notesElm = document.getElementById("notes");
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesobj.innerHTML = `Nothing To Show "Please Add Notes" `;
    }
}


// function to delete Node
function deleteNode(index) {
    console.log('I am deleting', index);

    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}
 let search= document.getElementById('searchTxt');
 search.addEventListener("input" , function(){
    let inputVal= search.value
    console.log('input event fired!',inputVal);
    let noteCards =document.getElementsByClassName('noteCard ');
    Array.from(noteCards).forEach(function(element){
        let cardTxt= element.getElementByTagName("p")[0].innerText;

        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        //console.log(cardTxt);
    })
 })