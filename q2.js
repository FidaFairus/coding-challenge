var flight={
    flight_fare:null,
    booking_time:null
}
var read = require('readline-sync');
flight.flight_fare=read.questionFloat("Enter the Flight fare: ");
flight.booking_time=read.questionFloat("Enter the booking time in 24 hour format: ");
var time=flight.booking_time;
var price=flight.flight_fare
if(time>=6 & time<=9){
    var percentage = price*(10/100);
    var newprice =price+percentage;
    console.log("New fare:",newprice)
}
else if (time>9 & time<=17){
    var percentage = price*(20/100);
    var newprice =price+percentage;
    console.log("New fare:",newprice)
}
else if (time>17 & time<=23){
    var percentage = price*(7/100);
    var newprice =price+percentage;
    console.log("New fare:",newprice)
}
else {
    var percentage = price*(5/100);
    var newprice =price+percentage;
    console.log("New fare:",newprice)
}
