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

  // Return The Correct Colour Class For Product Stock Level Pills Based on Stock Count
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

  // Return Product Stock Level Text Based on Stock Count
  isInStock: (stockCount) => {
    // Convert input value to an integer in case a string value is passed to the function
    const count = parseInt(stockCount, 10);
    if (count === 0) {
      return 'Out of Stock';
    }
    return `${count} in Stock`;
  },

  // Return The Appropriate Icon for Quick Details Row Component Based on Data Type
  getIcon: (dataType) => {
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
  },
};
