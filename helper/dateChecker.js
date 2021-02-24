function invalidDate(date) {
  date = +date || date;
  let newDate = new Date(date);
  if (String(newDate) === "Invalid Date") {
    return true;
  } else {
    return false;
  }
}

module.exports = invalidDate;
