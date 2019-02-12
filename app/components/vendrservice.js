//PRIVATE
import VendingMachine from '../models/vendingMachine.js'

//private variables
let vm = new VendingMachine()
let _targetSnack = {}


//PUBLIC
export default class VendrService {
  constructor() {
    //add this.snack()

  }
  get Balance() {
    console.log(5)
    console.log('someone got the balance')
    return vm.balance
  }

  get TargetSnack() {
    return _targetSnack
  }

  addQuarter() {
    console.log(2)
    vm.balance += .25
  }
  addDollar() {
    vm.balance += 1

  }
  setTargetItem(itemNumber) {
    _targetSnack = vm.snacks[itemNumber]
  }
}


// get Snacks() {
//   if (vm.balance <= price)
//   return
