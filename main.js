// Define the task for a minion
const buyGroceries = (arrayOfFoodToBuy) => {
	// Code to buy groceries with money
	for (const food of arrayOfFoodToBuy) {
		console.log(`I bought ${food}`)
	}
}

// Tell the minion to perform the task with specific information
const items = ["Milk", "Onions", "Ketchup"]
buyGroceries(items)



const fillGasTank = (gallons) => {
    if (gallons > 15) {
        console.log("You cannot add this much gas to the tank")
    } else {
        console.log(`I filled the tank with ${gallons} of gas`)
    }
    
}

fillGasTank(11)
fillGasTank(24)