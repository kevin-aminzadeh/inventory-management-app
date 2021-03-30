const Handlebars = require('handlebars');

// Determine If The Given Component Name Matches The Current Route
const isActiveRoute = (baseUrl, componentName) => {
  if (baseUrl) {
    if (componentName.toLowerCase() !== 'dashboard') {
      if (baseUrl.toLowerCase().includes(componentName.toLowerCase())) {
        return 'active';
      }
    } else if (componentName.toLowerCase() === 'dashboard') {
      if (baseUrl === '/dashboard') {
        console.log('URL MATCHES');
        return 'active';
      }
    }
  }
  return '';
};

// Return The Correct Colour Class For Product Stock Level Pills Based on Stock Count
const getStockBadgeColour = (stockCount) => {
  // Convert input value to an integer in case a string value is passed to the function
  const count = parseInt(stockCount, 10);
  switch (true) {
    case count === 0:
      return 'danger';
    case count < 20:
      return 'warning';
    default:
      return 'success';
  }
};

// Return The Correct Colour Class For Order Status Pills
const getOrderStatusColour = (status) => {
  switch (status) {
    case 'pending':
      return 'warning';
    case 'cancelled':
      return 'danger';
    default:
      return 'success';
  }
};

// Return Product Stock Level Text Based on Stock Count
const isInStock = (stockCount) => {
  // Convert input value to an integer in case a string value is passed to the function
  const count = parseInt(stockCount, 10);
  if (count === 0) {
    return 'Out of Stock';
  }
  return `${count} in Stock`;
};

// Return The Appropriate Icon for Quick Details Row Component Based on Data Type
const getIcon = (dataType) => {
  switch (dataType) {
    case 'customer':
      return 'fa-user-plus';
    case 'order':
      return 'fa-receipt';
    case 'product':
      return 'fa-barcode';
    default:
      throw Error('Invalid Data Type');
  }
};

// Given a number, append its leading zeroes
const appendLeadingZeroes = (num) => {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
};

// Format date to DD-MM-YYYY format
const formatDate = (date) => {
  const newDate = new Date(date.setFullYear(date.getFullYear()));
  const formattedDate = `${appendLeadingZeroes(
    newDate.getDate()
  )}-${appendLeadingZeroes(newDate.getMonth())}-${newDate.getFullYear()}`;

  return formattedDate;
};

// Capitalize String
const capitalizeString = (string) =>
  string.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

// Concate a variable value and a string
const stringConcat = (variable, string) => `${variable} ${string}`;

// Return a boolean based on wether order status is pending or not
const orderIsPending = (status) => status === 'pending';

const toJSON = (data) => JSON.stringify(data);

module.exports = {
  isActiveRoute,
  getStockBadgeColour,
  getOrderStatusColour,
  isInStock,
  getIcon,
  formatDate,
  appendLeadingZeroes,
  capitalizeString,
  stringConcat,
  orderIsPending,
  toJSON,
};
