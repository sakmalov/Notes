console.log("interface");
// when user clicks the SAVE button
// document.getElementById('demo').onclick = function changeContent(){}
document.getElementById('create_button').onclick = function(){
    //get text from text area
    //document.getElementById("myTextarea").value;
    var textarea = document.getElementById('note_input');
    var text = textarea.value
    //create a note from that text
    var note = new Note(text);
    //get the htmldisplay from that note
    var htmlToDisplay = note.htmlToDisplay();
    //add it to the page
        //find the place to add it (the parent)
    var notesDiv = document.getElementById('notes');
        //append it
    notesDiv.appendChild(htmlToDisplay)
    //remove it from the text area
    textarea.value = '';

    console.log(htmlToDisplay);
}
