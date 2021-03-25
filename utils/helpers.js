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
};
