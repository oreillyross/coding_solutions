function makeFriendlyDates(str) {

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Convert a YYYY-MM-DD string into a date object.
  function convertDate(str) {
    // Split the dates to work independently.
    var dateStr = str.split('-');

    // Force the dates into Universal time to avoid issues due to timezones.
    return (new Date(Date.UTC(dateStr[0], dateStr[1] - 1, dateStr[2])));

  }

  // Handles the case of the day's endings.
  function dateEnding(val) {
    switch (val) {
      case 1:
      case 21:
      case 31:
        return val + 'st';
      case 2:
      case 22:
        return val + 'nd';
      case 3:
      case 23:
        return val + 'rd';
      default:
        return val + 'th';
    }
  }

  // Checks for the real difference in months to avoid errors
  function monthDiff(date1, date2) {
    var month2 = date2.getUTCFullYear() * 12 + date2.getUTCMonth();
    var month1 = date1.getUTCFullYear() * 12 + date1.getUTCMonth();
    return month2 - month1;
  }

  //day diff
  function dayDiff(date1, date2) {
    if(date2.getUTCMonth() === date1.getUTCMonth()){
      return date1.getUTCDate()-date2.getUTCDate();
    }
    return 0;
  }

  // Get's the right month string.
  function getMonth(date) {
    return months[date.getUTCMonth()];
  }

  function displayDate() {

    // Handles same day
    if (date2.getTime() - date1.getTime() === 0) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()) + ', ' + date1.getUTCFullYear()];
    }

    // Handles same month
    if (date1.getUTCMonth() === date2.getUTCMonth() && date1.getUTCFullYear() === date2.getUTCFullYear()) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()), dateEnding(date2.getUTCDate())];
    }

    // Handles more than a month of difference, but less than 12 months and different year
    if (monthDiff(date1, date2) < 12 && date1.getUTCFullYear() !== date2.getUTCFullYear() ) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate())];
    }

    // Handles same month but different year
    if (monthDiff(date1, date2) <= 12 && dayDiff(date1, date2)>0) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate())+', '+date1.getUTCFullYear(), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate())];
    }

    // Handles more than a month of difference, but less than 12 months and same year
    if (monthDiff(date1, date2) < 12) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate())+', '+date1.getUTCFullYear(), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate())];
    }

    // Handles cases with more than 12 months apaprt.
    return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()) + ', ' + date1.getUTCFullYear(), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate()) + ', ' + date2.getUTCFullYear()];
  }

  var date1 = convertDate(str[0]);
  var date2 = convertDate(str[1]);

  return displayDate();
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