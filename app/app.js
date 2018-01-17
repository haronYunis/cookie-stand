'use strict';

var timeSlots = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];
var totalcustomers = 0;
var totalcookies = 0;
var tableId = document.getElementById('tableId');
var trEl = document.createElement('tr');

var storeHolder = [];

function CookieStores(name, minCustomer, maxCustomer, minCookie, maxCookie,) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.minCookie = minCookie;
  this.maxCookie = maxCookie;

 }

 CookieStores.prototype.render = function() {
   var trEl = document.createElement('tr');
   for (var i = 0; i < timeSlots.length; i++) { 
    
    var customers =  Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
    customers = Math.floor(customers);
    totalcustomers += customers;
  
    
    var cookiesSold = Math.random() * (this.maxCookie - this.minCookie) + this.minCookie;
    cookiesSold = Math.floor(cookiesSold);
    totalcookies += cookiesSold;
    

    var tdEl = document.createElement('td');
    tdEl.textContent = this.name + customers + ' customers & ' + cookiesSold + ' cookies sold';
  
    trEl.appendChild(tdEl);
    tableId.appendChild(trEl);
   }
   var tdEl = document.createElement('td');
   tdEl.textContent = totalcustomers + ' total customers today and ' + totalcookies + ' cookies sold';
   trEl.appendChild(tdEl);
   tableId.appendChild(trEl);
 }

 function makeHeaderRow() {
  var trEl = document.createElement('tr');
   for(var i=0; i < timeSlots.length; i++) {
     var thEl = document.createElement('th');
     thEl.textContent = timeSlots[i];
     trEl.appendChild(thEl);
     tableId.appendChild(trEl);
   } 
   var thEl = document.createElement('th');
   thEl.textContent = 'Totals';
   trEl.appendChild(thEl);
 }
 var pike = new CookieStores('Pike Store: ',22,44,22,70);
 var seatac = new CookieStores('Seatac Store: ', 15, 33, 30, 40);
 var seattleCenter = new CookieStores('Seattle Center: ', 25, 75, 25, 105);
 var capitalHill = new CookieStores('Capitol Hill: ', 20, 55, 20, 40);
 var alki = new CookieStores('Alki: ', 40, 65, 40, 75);

makeHeaderRow();
pike.render();
seatac.render();
seattleCenter.render();
capitalHill.render();
alki.render();















