function storeProvision (array1, array2){
    let newArr = [product, quantity]
    for (let shopInfo of array1) {
        let [product, quantity] = shopInfo.split(`, `);
        if(array1.indexOf(shopInfo)%2 !==0){
            newArr.push(product)
        }else {
            newArr.push(Number(quantity))
        }
let shopListObj = {provision: product, stock: quantity}

console.log(shopListObj);
}
    
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
// storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
//     ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);