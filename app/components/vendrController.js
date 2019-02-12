import VendrService from "./vendrservice.js";

//Private

let vendrService = new VendrService()
//Public

function draw() {
  console.log(4)
  let b = vendrService.Balance
  if (b < 0) {
    document.querySelector('h1').style.color = 'red';
  } else {
    document.querySelector('h1').style.color = 'black';
  }
  document.getElementById('bal').innerText = b.toFixed(2)
  console.log(6)

}

function drawMessage() {
  //retrieve the targetItem from the servive
  //customize a message with info from the targetItem
  //drop that message into the innerHTML of an element on the DOM
  let snack = vendrService.TargetSnack
  let message = `Enjoy your ${snack.name} for only $${snack.price}.`
  document.querySelector("#mes").innerHTML = message;
}

export default class VendrController {
  constructor() {
    console.log('Vendr Controller')
    draw()
  }
  addQuarter() {
    console.log(1)
    vendrService.addQuarter()
    console.log(3)
    draw()
  }
  addDollar() {
    vendrService.addDollar()
    draw()
  }
  setTargetItem(itemNumber) {
    vendrService.setTargetItem(itemNumber)
    drawMessage()
  }
}

// function draw1() {
//   console.log(9)
//   addMessage() {
//     venderService.addMessage()
//     draw1()
//   }