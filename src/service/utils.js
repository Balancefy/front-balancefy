export function formatDate (input) {
    var datePart = input.match(/\d+/g),
    year = datePart[0].substring(2), // get only two digits
    month = datePart[1], day = datePart[2];
  
    return day+'/'+month+'/'+year;
}

export let isInThePast = (date) => date.setHours(0, 0, 0, 0) <= new Date().toLocaleDateString("pt-br");