'use strict';

var timeSlots = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];

var pikeStreet = {

  minCustumer: 22,
  maxCustumer: 44,
  minCookie: 22,
  maxCookie: 70,
  
  customersPerHour: [],

  cookiesSoldPerHour: [],

  totalcustomersAllDay: 0 ,

  totalcookiesAllDay: 0,

  render: function() {
    
    var ulEl = document.getElementById('pike');
    
    for (var i = 0; i < timeSlots.length; i++) {
      var customers =  Math.random() * (this.maxCustumer - this.minCustumer) + this.minCustumer;
      customers = Math.floor(customers);
      this.customersPerHour.push(customers);
      //stores total customers the day.
      this.totalcustomersAllDay += customers;
      
      var cookiesSold = Math.random() * (this.maxCookie - this.minCookie) + this.minCookie;
      cookiesSold = Math.floor(cookiesSold);
      this.cookiesSoldPerHour.push(cookiesSold);
      //Calculates total cookies sold that day.
      this.totalcookiesAllDay += cookiesSold;
      
      var liEl = document.createElement('li');
      liEl.textContent  = timeSlots[i] + " " + this.cookiesSoldPerHour + ' cookies sold and ' + this.customersPerHour + ' customers visted the store.';
      ulEl.appendChild(liEl);

      this.cookiesSoldPerHour = [];
      this.customersPerHour = [];
    }
    //Divide total cookies sold by 14 hours to get average cookies sold per hour.
    var averageCookiesPerHour = Math.floor(this.totalcookiesAllDay / 14);
    console.log(averageCookiesPerHour);
      //this.totalcookiesAllDay / 14hours = avg cookies sold per hour
     // Attempting to present totals data in 'p' element.
    var divEl = document.getElementById('totals1');
     
    var pEl = document.createElement('p');
    pEl.textContent = 'Today a total of ' + this.totalcookiesAllDay + ' cookies were sold at the Pike store.';
    divEl.appendChild(pEl);

    var pEl2 = document.createElement('p');
    pEl2.textContent = 'Today a total of ' + this.totalcustomersAllDay + ' customers visted the Pike store';
    divEl.appendChild(pEl2);

    var pEl3 = document.createElement('p');
    pEl3.textContent = ' Also an average of ' + averageCookiesPerHour + ' cookies were sold per hour.'
    divEl.appendChild(pEl3);
  }
}

var seatac = {

  minCustumer: 11,
  maxCustumer: 22,
  minCookie: 11,
  maxCookie: 55,

  customersPerHour: [],

  cookiesSoldPerHour: [],

  totalcustomersAllDay: 0 ,

  totalcookiesAllDay: 0,

  render: function() {
    
    var ulEl = document.getElementById('seatac');
    
    for (var i = 0; i < timeSlots.length; i++) {
      var customers =  Math.random() * (this.maxCustumer - this.minCustumer) + this.minCustumer;
      customers = Math.floor(customers);
      this.customersPerHour.push(customers);
      //Calculates total customers that day.
      this.totalcustomersAllDay += customers;
      
      var cookiesSold = Math.random() * (this.maxCookie - this.minCookie) + this.minCookie;
      cookiesSold = Math.floor(cookiesSold);
      this.cookiesSoldPerHour.push(cookiesSold);
      //Calculates total cookies sold that day.
      this.totalcookiesAllDay += cookiesSold;
      

      var liEl = document.createElement('li');
      liEl.textContent  = timeSlots[i] + " " + this.cookiesSoldPerHour + ' cookies sold and ' + this.customersPerHour + ' customers visted the store';
      ulEl.appendChild(liEl);

      this.cookiesSoldPerHour = [];
      this.customersPerHour = [];
    }
    //Divide total cookies sold by 14 hours to get average cookies sold per hour.
    var averageCookiesPerHour = Math.floor(this.totalcookiesAllDay / 14);
    console.log(averageCookiesPerHour);
    // Attempting to present totals data in 'p' element.
    var divEl = document.getElementById('totals2');
    var pEl = document.createElement('p');
    pEl.textContent = 'Today a total of ' + this.totalcookiesAllDay + ' cookies were sold at the Seatac store. ';
    divEl.appendChild(pEl);

    var pEl2 = document.createElement('p');
    pEl2.textContent = 'Today a total of ' + this.totalcustomersAllDay + ' customers visted the Seatac store';
    divEl.appendChild(pEl2);

    var pEl3 = document.createElement('p');
    pEl3.textContent = ' Also an average of ' + averageCookiesPerHour + ' cookies were sold per hour.'
    divEl.appendChild(pEl3);
  }
}

var seattleCenter = {

  minCustumer: 33,
  maxCustumer: 66,
  minCookie: 33,
  maxCookie: 55,

  customersPerHour: [],

  cookiesSoldPerHour: [],

  totalcustomersAllDay: 0,

  totalcookiesAllDay: 0,

  render: function() {
    
    var ulEl = document.getElementById('seattle-center');
    
    for (var i = 0; i < timeSlots.length; i++) {
      var customers =  Math.random() * (this.maxCustumer - this.minCustumer) + this.minCustumer;
      customers = Math.floor(customers);
      this.customersPerHour.push(customers);
      //Calculates total customers that day.
      this.totalcustomersAllDay += customers;
      
      var cookiesSold = Math.random() * (this.maxCookie - this.minCookie) + this.minCookie;
      cookiesSold = Math.floor(cookiesSold);
      this.cookiesSoldPerHour.push(cookiesSold);
      //Calculates total cookies sold that day.
      this.totalcookiesAllDay += cookiesSold;
      

      var liEl = document.createElement('li');
      liEl.textContent  = timeSlots[i] + " " +  this.cookiesSoldPerHour + ' cookies sold and ' + this.customersPerHour + ' customers visted the store';
      ulEl.appendChild(liEl);

      this.cookiesSoldPerHour = [];
      this.customersPerHour = [];
    }
    //Divide total cookies sold by 14 hours to get average cookies sold per hour.
    var averageCookiesPerHour = Math.floor(this.totalcookiesAllDay / 14);
    console.log(averageCookiesPerHour);
    // Attempting to present totals data in 'p' element.
    var divEl = document.getElementById('totals3');
    var pEl = document.createElement('p');
    pEl.textContent = 'Today a total of ' + this.totalcookiesAllDay + ' cookies were sold at the Seattle Center store.';
    divEl.appendChild(pEl);

    var pEl2 = document.createElement('p');
    pEl2.textContent = 'Today a total of ' + this.totalcustomersAllDay + ' customers visted the Seattle Center store';
    divEl.appendChild(pEl2);

    var pEl3 = document.createElement('p');
    pEl3.textContent = ' Also an average of ' + averageCookiesPerHour + ' cookies were sold per hour.'
    divEl.appendChild(pEl3);
  }
}

var capitalHill = {

  minCustumer: 23,
  maxCustumer: 46,
  minCookie: 23,
  maxCookie: 55,

  customersPerHour: [],

  cookiesSoldPerHour: [],

  totalcustomersAllDay: 0 ,

  totalcookiesAllDay: 0,

  render: function() {
    
    var ulEl = document.getElementById('capitol-hill');
    
    for (var i = 0; i < timeSlots.length; i++) {
      var customers =  Math.random() * (this.maxCustumer - this.minCustumer) + this.minCustumer;
      customers = Math.floor(customers);
      this.customersPerHour.push(customers);
      //Calculates total customers that day.
      this.totalcustomersAllDay += customers;
      
      var cookiesSold = Math.random() * (this.maxCookie - this.minCookie) + this.minCookie;
      cookiesSold = Math.floor(cookiesSold);
      this.cookiesSoldPerHour.push(cookiesSold);
      //Calculates total cookies sold that day.
      this.totalcookiesAllDay += cookiesSold;
      

      var liEl = document.createElement('li');
      liEl.textContent  = timeSlots[i] + " "  + this.cookiesSoldPerHour + ' cookies sold and ' + this.customersPerHour + ' customers visted the store';
      ulEl.appendChild(liEl);

      this.cookiesSoldPerHour = [];
      this.customersPerHour = [];
    }
    //Divide total cookies sold by 14 hours to get average cookies sold per hour.
    var averageCookiesPerHour = Math.floor(this.totalcookiesAllDay / 14);
    console.log(averageCookiesPerHour);
    
    // Attempting to present totals data in 'p' element.
    var divEl = document.getElementById('totals4');
    var pEl = document.createElement('p');
    pEl.textContent = 'Today a total of ' + this.totalcookiesAllDay + ' were sold';
    divEl.appendChild(pEl);

    var pEl2 = document.createElement('p');
    pEl2.textContent = 'Today a total of ' + this.totalcustomersAllDay + ' visted the store';
    divEl.appendChild(pEl2);

    var pEl3 = document.createElement('p');
    pEl3.textContent = ' Also an average of ' + averageCookiesPerHour + ' cookies were sold per hour.'
    divEl.appendChild(pEl3);
  }
}

var alki = {

  minCustumer: 23,
  maxCustumer: 46,
  minCookie: 23,
  maxCookie: 55,

  customersPerHour: [],

  cookiesSoldPerHour: [],

  totalcustomersAllDay: 0 ,

  totalcookiesAllDay: 0,

  render: function() {
    
    var ulEl = document.getElementById('alki');
    
    for (var i = 0; i < timeSlots.length; i++) {
      var customers =  Math.random() * (this.maxCustumer - this.minCustumer) + this.minCustumer;
      customers = Math.floor(customers);
      this.customersPerHour.push(customers);
      //Calculates total customers that day.
      this.totalcustomersAllDay += customers;
      
      var cookiesSold = Math.random() * (this.maxCookie - this.minCookie) + this.minCookie;
      cookiesSold = Math.floor(cookiesSold);
      this.cookiesSoldPerHour.push(cookiesSold);
      //Calculates total cookies sold that day.
      this.totalcookiesAllDay += cookiesSold;
      

      var liEl = document.createElement('li');
      liEl.textContent  = timeSlots[i] + " " + this.cookiesSoldPerHour + ' cookies sold and ' + this.customersPerHour + ' customers visted the store';
      ulEl.appendChild(liEl);

      this.cookiesSoldPerHour = [];
      this.customersPerHour = [];
    }
    //Divide total cookies sold by 14 hours to get average cookies sold per hour.
    var averageCookiesPerHour = Math.floor(this.totalcookiesAllDay / 14);
    console.log(averageCookiesPerHour);
    // Attempting to present totals data in 'p' element.
    var divEl = document.getElementById('totals5');
    var pEl = document.createElement('p');
    pEl.textContent = 'Today a total of ' + this.totalcookiesAllDay + ' were sold';
    divEl.appendChild(pEl);

    var pEl2 = document.createElement('p');
    pEl2.textContent = 'Today a total of ' + this.totalcustomersAllDay + ' visted the store';
    divEl.appendChild(pEl2);

    var pEl3 = document.createElement('p');
    pEl3.textContent = ' Also an average of ' + averageCookiesPerHour + ' cookies were sold per hour.'
    divEl.appendChild(pEl3);
  }
}
pikeStreet.render();
seatac.render();
seattleCenter.render();
capitalHill.render();
alki.render();
