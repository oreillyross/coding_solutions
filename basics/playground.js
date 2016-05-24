function makeFriendlyDates(arr) {

  var month = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
};


function parseDate(str) {
   var mdy = str.split('/');
   return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function daydiff(first, second) {
   return Math.round((second-first)/(1000*60*60*24));
}



    function getDay(num) {
      if (num % 10 === 1) {
        return '' + num + 'st';
      } else if (num % 10 === 2) {
        return '' + num + 'nd';
      } else if (num % 10 === 3){
        return '' + num + 'rd';
      } else {
        return '' + num + 'th';
      }
    }

    var start = arguments[0][0],
        end =   arguments[0][1],
        sYear  = parseInt(start.substr(0,4)),
        sMonth = month[parseInt(start.substr(5,2))],
        sDay   = getDay(parseInt(start.substr(9,2))),
        eYear  = (sYear === parseInt(end.substr(0,4))) ? "" : parseInt(end.substr(0,4)),
        eMonth = (parseInt(end.substr(5,2)) === parseInt(start.substr(5,2))) ? "" : month[parseInt(end.substr(5,2))],
        eDay   = getDay(parseInt(end.substr(9,2))),
        lessThanAYear = (daydiff(new Date(start), new Date(end)) < 31)

    var comma = (eMonth) && (!lessThanAYear) ? ', ' : "";
console.log(lessThanAYear)

    sYear = (lessThanAYear) ? "" : sYear;
    eYear = (lessThanAYear) ? "" : eYear;
    var startDate = sMonth + ' ' + sDay + comma + sYear,
        endDate   = eMonth + ' ' + eDay + comma + eYear;

    var dates = [].concat(startDate);
        dates.push(endDate.trim());

    return dates;

}

console.log(
makeFriendlyDates(["2016-07-01", "2016-07-04"]) // should return ["July 1st","4th"].
);
console.log(
makeFriendlyDates(["2016-12-01", "2017-02-03"]) // should return ["December 1st","February 3rd"].
);
console.log(
makeFriendlyDates(["2016-12-01", "2018-02-03"]) // should return ["December 1st, 2016","February 3rd, 2018"].
);
console.log(
makeFriendlyDates(["2017-03-01", "2017-05-05"]) // should return ["March 1st, 2017","May 5th"]
);
console.log(
makeFriendlyDates(["2018-01-13", "2018-01-13"]) // should return ["January 13th, 2018"].
);
console.log(
makeFriendlyDates(["2022-09-05", "2023-09-04"]) // should return ["September 5th, 2022","September 4th"].
);
console.log(
makeFriendlyDates(["2022-09-05", "2023-09-05"]) // should return ["September 5th, 2022","September 5th, 2023"].
);
