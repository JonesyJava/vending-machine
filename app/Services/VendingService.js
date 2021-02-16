import { ProxyState } from "../AppState.js"
// import Customer from "../Models/CustomerMoney.js" <-- this is where the models file would import

class VendingService {
     // Console.log below makes sure everything is responding within my console!
    constructor(){
        console.log("VENDING SERVICE WORKING");
    }
// These are the functions for my money to decrement based on cost
    pepsi() {
        console.log ("PEPSI FROM SERVICE")
        ProxyState.money -= ProxyState.snacks.pepsi.cost
    }
    dew() {
        console.log ("MOUNTAIN DEW FROM SERVICE")
        ProxyState.money -= ProxyState.snacks.mountaindew.cost
     }

    sprite() {
        console.log ("Sprite FROM SERVICE")
        ProxyState.money -= ProxyState.snacks.sprite.cost
     }

     rootbeer() {
        console.log ("ROOTBEER FROM SERVICE")
        ProxyState.money -= ProxyState.snacks.rootbeer.cost
     }
     addDollar() {
         ProxyState.money++
     }
     addQuarter() {
         ProxyState.money += ProxyState.quarter
     }
}

export const vendingService = new VendingService()