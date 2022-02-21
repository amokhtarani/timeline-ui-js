

function gregorianYearToPersianYear(str) {
    const date = new Date(Date.UTC(Number(str.split(" ")[0]), 1,0,0,0,0));
    const options = {year : 'numeric'};
    return date.toLocaleDateString('fa-IR', options);
  }
  function gregorianYearToArabicYear(str) {
    const date = new Date(Date.UTC(Number(str.split(" ")[0]), 1,0,0,0,0));
    const options = {year : 'numeric'};
    return date.toLocaleDateString('ar-SA', options);
  }
  
  export const Utils = {
    gregorianYearToPersianYear,
    gregorianYearToArabicYear
  }