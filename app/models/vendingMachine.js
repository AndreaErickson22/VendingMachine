import Snack from "./snack.js";




export default class VendingMachine {
  constructor() {
    this.snacks = {
      a1: new Snack('Reeces', 1.00),
      a2: new Snack('Twix', 1.00),
      a3: new Snack('Snickers', 1.50)
    }
    this.balance = 0
  }
}