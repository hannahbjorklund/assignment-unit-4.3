console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function isFull(){
    if(basket.length < maxItems){
        return false;
    } else {
        return true;
    }
}

function addItem(item){
    if(!isFull()){
        basket.push(item);
        return true;
    } else {
        return false;
    }
}

function listItems(){
    for(let i = 0; i < basket.length; i++){
        console.log(basket[i]);
    }
}

function empty(){
    basket = [];
}

function removeItem(item){
    let index = basket.indexOf(item);
    if(index > -1){
        basket.splice(index, 1);
        return item;
    }
    return null;
}

//Testing addItem
console.log(`Basket is ${basket}`);
console.log("Adding 'apples' to the basket:", addItem('apples'));
console.log(`Basket is ${basket}`);

//Testing listItems
console.log("Adding more items to basket");
addItem('bread');
addItem('soda');
addItem('salami');
console.log("Listing all basket items:");
listItems();

//Testing empty
console.log("Emptying basket.")
empty();
console.log(`Basket is now ${basket}`);

//Testing isFull
console.log("Basket is empty. Checking isFull (expect false):", isFull());
addItem('cookies');
addItem('chocolate');
addItem('sushi');
addItem('crackers');
addItem('pickles');
console.log("Basket has 5 items. Checking isFull (expect true):", isFull());

//Testing removeItem
console.log(`Basket is ${basket}`);
console.log("Removing 'pickles' from the basket (expect 'pickles'):", removeItem('pickles'));
console.log("Removing 'banana' from basket (expect null):", removeItem('banana'));
console.log(`Basket is now ${basket}`);
empty();

// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
