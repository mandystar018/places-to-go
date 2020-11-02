//Business Logic//

function Place(location, activity, when) {
  this.location = location;
  this.activity = activity;
  this.when = when;
}

let kohTao = new Place("Koh Tao, Thailand", ["scuba diving", "snorkeling", "freediving"], "September 2011 - July 2013");
let london = new Place("London, England", ["castle exploring", "museums", "bar hopping"], "August 2013 - December 2013");

let wellington = new Place("Wellington, New Zealand", ["Road Trip", "Backpacking", "Hiking"], "February 2018- February 2019");
let HoiAn = new Place("Hoi An, Vietnam", ["Backpacking", "Road Trip", "Making lanterns", "Food hoping"], "April 2019");

let tableRockLake = new Place("Table Rock, Arkansas", ["boating", "intertubing", "fishing"], "Summer");
let MeramecCaverns = new Place("Jefferson County, MO", "caves", "all year");



//User Interface Logic//