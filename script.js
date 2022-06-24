//script that calculates the final cost of a product with tax.

let productName = prompt("Insert the name of the product: ");
let productCost = Number(prompt("Cost of the product: "));
let productQty = Number(prompt("Quantity of the product: "));
const productTax = 0.0875;

let generalCost = productCost*productQty;
console.log("Subtotal= $"+productCost+" x "+productQty);
console.log("Subtotal: " + generalCost);
let taxCost = (productTax*generalCost).toFixed(2);
console.log("Tax= " + productQty+" x "+productTax);
console.log("CA Tax: " + taxCost);
let finalCost = Number(taxCost)+Number(generalCost);
console.log("Total= " + taxCost+" + "+generalCost);
console.log("Total: " + finalCost);

document.write(`<div >
                
                    <h3>Macy's</h3>
                    <p>PURCHASE:</p>
                    <table>
                        <tr>
                            <th>${productName}</th>
                            <td>${productCost}</td>
                        </tr>
                        <tr>
                            <th>Quantity:</th>
                            <td>${productQty}</td>
                        </tr>
                        <tr>
                            <th>Subtotal:</th>
                            <td>${generalCost}</td>
                        </tr>
                        <tr>
                            <th>CA Tax:</th>
                            <td>${taxCost}</td>
                        </tr>
                        <tr>
                            <th>Total:</th>
                            <td>$${finalCost}</td>
                        </tr>
                    </table>
                    <p class="text-margin-topB">**************************************</p>
                    <em>Thanks for buying at Macy's</em>
                </div>
                `);