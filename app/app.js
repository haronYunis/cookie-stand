'use strict';

var timeSlots = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];
var totalcustomers = 0;
var totalcookies = 0;
var cookiesPerHour = []


var tableId = document.getElementById('tableId');
var cookieForm = document.getElementById('cookie-form');
var trEl = document.createElement('tr');



function CookieStores(name, minCustomer, maxCustomer, minCookie, maxCookie, avgCookie) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.minCookie = minCookie;
  this.maxCookie = maxCookie;
  this.avgCookie = avgCookie;
  CookieStores.allStores.push(this);
}

CookieStores.allStores = [];


 

 

CookieStores.prototype.render = function () {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  tableId.appendChild(trEl);
  debugger;
  for (var i = 0; i < timeSlots.length; i++) {

    

    var customers = Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer * this.avgCookie;
    customers = Math.floor(customers);
    totalcustomers += customers;


    var cookiesSold = Math.random() * (this.maxCookie - this.minCookie +1) + this.minCookie * this.avgCookie;
    cookiesSold = Math.floor(cookiesSold);
    totalcookies += cookiesSold;
    console.log(totalcookies);
    cookiesPerHour.push(cookiesSold);


    var tdEl = document.createElement('td');
    tdEl.textContent = this.name + customers + ' customers & ' + cookiesSold + ' cookies sold.';

    trEl.appendChild(tdEl);
    tableId.appendChild(trEl);
}
  var tdEl = document.createElement('td');
  tdEl.textContent = totalcustomers + ' total customers today and ' + totalcookies + ' cookies sold.';
  trEl.appendChild(tdEl);
  tableId.appendChild(trEl);

  var tdEl = document.createElement('td');
  tdEl.textContent = this.avgCookie;
  trEl.appendChild(tdEl);
  tableId.appendChild(trEl);
}

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Names';
  trEl.appendChild(thEl);
  tableId.appendChild(trEl);
  
  for (var i = 0; i < timeSlots.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = timeSlots[i];
    trEl.appendChild(thEl);
  }
  
  var thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Totals';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = 'Average Cookies';
  trEl.appendChild(thEl);

  tableId.appendChild(trEl);
}

function makeFooterRow() {
  var tdEl = document.createElement('td');
    tdEl.textContent = ' ';
    trEl.appendChild(tdEl);
    tableId.appendChild(trEl);

  for(var i in timeSlots) {
    var tdEl = document.createElement('td');
    tdEl.textContent = 'Cookies sold this hour: ' + cookiesPerHour[i];
    trEl.appendChild(tdEl);
    tableId.appendChild(trEl);
  }
  var tdEl2 = document.createElement('td');
  tdEl2.textContent = totalcookies + ' total cookies sold today.';
  trEl.appendChild(tdEl2)
  tableId.appendChild(trEl);

  var tdEl3 = document.createElement('td');
  tdEl3.textContent =  'Average cookies sold ' + avgCookie;
  trEl.appendChild(tdEl3)
  tableId.appendChild(trEl);

}

function renderAllStores() {
  for(var i in CookieStores.allStores) {
    CookieStores.allStores[i].render();
  }
  makeFooterRow();
}

function newStore(e) {
  e.preventDefault();
  console.log(e.target.name.value);
  console.log(e.target.minCookie);
  var newName = e.target.name.value;
  var minCustomer = e.target.minCustomer.value;
  var maxCustomer = e.target.maxCustomer.value;
  var minCookie = e.target.minCookie.value;
  var maxCookie = e.target.maxCookie.value;
  var avgCookie = e.target.avgCookie.value;
  
  new CookieStores(newName,minCustomer,maxCustomer, minCookie, maxCookie, avgCookie);

  tableId.innerHTML = '';
  makeHeaderRow();
  renderAllStores();
}

new CookieStores('Pike Store:', 500, 800, 800, 1900, 6.3);
new CookieStores('Seatac Store:', 200, 450, 500, 850, 1.2);
new CookieStores('Seattle Center:', 250, 475, 550, 845, 3.7);
new CookieStores('Capitol Hill:', 1000, 2000, 2100, 3500, 2.3);
new CookieStores('Alki:', 400, 800, 400, 1200, 4.6);


cookieForm.addEventListener('submit', newStore);
makeHeaderRow();
renderAllStores();
















