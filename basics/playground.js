function makeFriendlyDates(arr) {

  var month = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
};


 function monthDiff(date1, date2) {
    var month2 = date2.getUTCFullYear() * 12 + date2.getUTCMonth();
    var month1 = date1.getUTCFullYear() * 12 + date1.getUTCMonth();
    return month2 - month1;
  }
  
   function dayDiff(date1, date2) {
    if(date2.getUTCMonth() === date1.getUTCMonth()){
      return date1.getUTCDate()-date2.getUTCDate();
    }
    return 0;
  }


    function getDay(num) {
      if (num % 10 === 1) {
        return '' + num + 'st';
      } else if (num % 10 === 2) {
        return '' + num + 'nd';
      } else if (num % 10 === 3 && num !== 13){
        return '' + num + 'rd';
      } else {
        return '' + num + 'th';
      }
    }

    var startDate = new Date(Date.UTC(
          arguments[0][0].substr(0,4), //year
          arguments[0][0].substr(5,2) - 1, // month
          arguments[0][0].substr(8,2)  // day   
        ));
    
    var endDate = new Date(Date.UTC(
          arguments[0][1].substr(0,4), //year
          arguments[0][1].substr(5,2) - 1, // month
          arguments[0][1].substr(8,2)  // day  
        ));

   
   var sameDay              = endDate.getTime() - startDate.getTime() === 0,
       sameMonth            = startDate.getUTCMonth() === endDate.getUTCMonth() && startDate.getUTCFullYear() === endDate.getUTCFullYear(),
       less12MonthsDiffYear = monthDiff(startDate, endDate) < 12 && startDate.getUTCFullYear() !== endDate.getUTCFullYear(),
       less12MonthsSameYear = monthDiff(startDate, endDate) < 12,
       sameMonthDiffYear    = monthDiff(startDate, endDate) <= 12 && dayDiff(startDate, endDate)>0;
   
   
    var sMonth = month[startDate.getUTCMonth()],
       sDay    = getDay(startDate.getUTCDate()),
       sYear  = (!sameDay && sameMonth || less12MonthsDiffYear) ? "" : ', ' + startDate.getUTCFullYear(), 
       eMonth = (sameDay || sameMonth) ? "" : month[endDate.getUTCMonth()],
       eDay   = (sameDay ) ? "" : getDay(endDate.getUTCDate()),
       eYear  = (sameDay || sameMonth || less12MonthsDiffYear || less12MonthsSameYear || sameMonthDiffYear) ? "" : ', ' + endDate.getUTCFullYear();
   
    var retStart = sMonth + ' ' + sDay + sYear,
        retEnd   = eMonth + ' ' + eDay + eYear,
        retDate  = [].concat(retStart);
        if (retEnd !== ' ') retDate.push(retEnd.trim());
        
        return retDate;
   

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

