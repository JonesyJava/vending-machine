import { vendingService } from "../Services/VendingService.js"
import { ProxyState } from "../AppState.js"

// Private - Not for the User to Access
// "Customer-Money" is from HTML
// innerText = ProxyState.money.toString() is referencing money on appstate which is set to 100
function _draw() {
    let moneyElem = document.getElementById("customer-money")
    moneyElem.innerText = ProxyState.money.toString()
}





// Public within the EXPORT
export default class VendingController{
    // "MONEY" is from APPSTATE
    // _draw is from ABOVE FUNCTION which decrements
    constructor(){
        console.log("VENDING CONTROLLER WORKING")
        ProxyState.on("money", _draw)
    }

    // PEPSI using SERVICE
    pepsi() {
        console.log("PURCHASED PEPSI")
        vendingService.pepsi()
    }
    // MOUNTAIN DEW using SERVICE
    dew() {
        console.log("PURCHASED MOUNTAIN DEW")
        vendingService.dew()
    }
     // ROOTBEER using SERVICE
    sprite() {
        console.log("PURCHASED SPRITE")
        vendingService.sprite()
    }
     // ROOTBEER using SERVICE
    rootbeer() {
        console.log("PURCHASED ROOT BEER")
        vendingService.rootbeer()
    }

    addDollar(){
        vendingService.addDollar()
    }

    addQuarter(){
        vendingService.addQuarter()
    }
}