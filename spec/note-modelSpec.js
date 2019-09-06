function testNewNoteCreation() {
  var note = new Note("My favorite language is JavaScript");
  assert.isTrue(note.text === "My favorite language is JavaScript");
};

testNewNoteCreation();

// function testGetNoteText() {
//   var note = new Note("My favorite language is JavaScript");
//   var getText = note.getNoteText();
//   assert.isTrue(getText === "My favorite language is JavaScript");
// };

// testGetNoteText();
function test(description, code_to_run) {
  console.log(description)
  try{
    code_to_run()
  } catch (error) {
    console.log(error)
    return "Fail"
  }
  return "Pass"
}

function display(text) {
  var div = document.getElementById("test_results")
  var html_text = document.createElement('p')
  html_text.innerText = test
  div.appendChild(html_text)
}

test('creating a note to display from long text', function() {
  var note = new Note('My next note is a lot longer.')
  if (note.htmlToDisplay().innerText != 'My next note is a lo'){
  console.log(note.htmlToDisplay().innerText);
  throw 'note does not have the right display'
  }
});