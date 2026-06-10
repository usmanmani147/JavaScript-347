
let button1 = document.querySelector(`#btnsearch1`);

button1.addEventListener(`mouseover`, () => {
  button1.classList.add(`hovered`);
});

button1.addEventListener(`mouseout`, () => {
  button1.classList.remove(`hovered`);
}); 

button1.addEventListener(`click`, () => {
    window.open(`string-methods.html`, `_blank`);
});

//  uper code is for string methods button.


let button2 = document.querySelector(`#btnsearch2`);
button2.addEventListener(`mouseover`, () => {
  button2.classList.add(`hovered`);
});

button2.addEventListener(`mouseout`, () => {
  button2.classList.remove(`hovered`);
}); 
button2.addEventListener(`click`, () => {
  window.open(`object-methods.html`, `_blank`);
});

// uper code is for object methods button.

let button3 = document.querySelector(`#btnsearch3`);
button3.addEventListener(`mouseover`, () => {
  button3.classList.add(`hovered`);
});

button3.addEventListener(`mouseout`, () => {
  button3.classList.remove(`hovered`);
}); 
button3.addEventListener(`click`, () => {
  window.open(`array-methods.html`, `_blank`);
});

// uper code is for array methods button.

let button4 = document.querySelector(`#btnsearch4`);
button4.addEventListener(`mouseover`, () => {
  button4.classList.add(`hovered`);
});   
button4.addEventListener(`mouseout`, () => {
  button4.classList.remove(`hovered`);
});
button4.addEventListener(`click`, () => {
  window.open(`All-Examples.html`, `_blank`);
}); 

// uper code is for example's button.

let button5 = document.querySelector(`#btnsearch5`);   
button5.addEventListener(`mouseover`, () => {
  button5.classList.add(`hovered`);
});
button5.addEventListener(`mouseout`, () => {
  button5.classList.remove(`hovered`);
}); 
button5.addEventListener(`click`, () => {
  window.open(`dom-methods.html`, `_blank`);
});

// uper code is for DOM methods button. 

let button6 = document.querySelector(`#btnsearch6`);
button6.addEventListener(`mouseover`, () => {
  button6.classList.add(`hovered`);
});   
button6.addEventListener(`mouseout`, () => {
  button6.classList.remove(`hovered`);
});
button6.addEventListener(`click`, () => {
  window.open(`Events-Example.html`, `_blank `);
}); 

// uper code is for events example button. when the button is clicked,  

