"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Leoela Waltrick
   Date:   04/15/2026
   Filename: tc_cart.js
	
*/

   /*Running Total*/
   var orderTotal = 0;

   /*Start HTML table*/
 var cartHTML = "<table>" +
   "<tr>" +
   "<th>Item</th>" +
   "<th>Description</th>" +
   "<th>Price</th>" +
   "<th>Qty</th>" +
   "<th>Total</th>" +
   "</tr>";

   /* Loop through items in order */
   for (var i = 0; i < item.length; i++) {

   /* Add item image */
  cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='item' /></td>";

   /* Add description, price, quantity ordered */
   cartHTML += "<td>" + itemDescription[i] + "</td>";
   cartHTML += "<td>$" + itemPrice[i].toFixed(2) + "</td>";
   cartHTML += "<td>" + itemQty[i] + "</td>";

   /* Calculate item cost */
   var itemCost = itemPrice[i] * itemQty[i];

   /* Add item cost to table */
   cartHTML += "<td>$" + itemCost.toFixed(2) + "</td></tr>";

   /* Add to running total */
   orderTotal += itemCost;
   }
    
   /* Add the subtotal row to the table */
   cartHTML += "<tr>" +
   "<td colspan='4'>Subtotal</td>" +
   "<td>$" + orderTotal.toFixed(2) + "</td>" +
   "</tr></table>";
   
   /* Display in page */
    document.getElementById("cart").innerHTML = cartHTML;