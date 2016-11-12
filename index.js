const hypernova = require('hypernova/server');

hypernova({
  devMode: true,

  getComponent(name) {
    console.log(name);
    if (name === 'MyComponent.js') {
      return require('./app/MyComponent.js');
    }
    return null;
  },

  port: 3030,
});
