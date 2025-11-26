let notes;

function setup() {
  createCanvas(400, 500);

  notes = [];

  let inputSetNote = createInput();
  inputSetNote.position(450, 25);
  let buttonSetNote = createButton('Create Note');
  buttonSetNote.position(625, 25);
  let buttonClear = createButton('clear');
  buttonClear.position(715, 25);
  let inputGPTAPI = createInput();
  inputGPTAPI.position(450, 55);
  let buttonSetChatApi = createButton('Aks GPT');
  buttonSetChatApi.position(625, 55);

  let botOutput = createElement('textarea');
  botOutput.position(450, 85);
  let apiKeyInput = createInput();
  
  


  addNote("This is a test note");
  addNote("This is a test note");
  addNote("This is a test note");
  
   
}

function addNote(_text) {
  notes.push(new Note(_text,notes.length));
  redraw();
}

function redraw() {
  background(240);
  for (let i = 0; i < notes.length; i++) {
    notes[i].display();
  }
}

class Note {
  constructor(text, index) {
    this.text = text;
    this.index = index;

    this.w = 150;
    this.h = 150;
    this.x = 10;
    this.y = 10 + (this.h + 10) * index;
    
    this.color = color(255, 255, 150);
    this.display();
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    fill(0);
    textSize(12);
    text(this.text, this.x + 10, this.y + 20, this.w - 20, this.h - 20);
  }
}