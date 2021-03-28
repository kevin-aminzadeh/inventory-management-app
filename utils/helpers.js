module.exports = {
  // Determine If The Given Component Name Matches The Current Route
  isActiveRoute: (baseUrl, componentName) => {
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
    return '';
  },

  getStockBadgeColour: (stockCount) => {
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
  },

  isInStock: (stockCount) => {
    // Convert input value to an integer in case a string value is passed to the function
    const count = parseInt(stockCount, 10);
    if (count === 0) {
      return 'Out of Stock';
    }
    return `${count} in Stock`;
  },
};
