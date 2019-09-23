// Gives you a template on how to write modular JS
// Simply export the module by its name
// Don't forget to import this module in the main.js file and to call it's init function!
// Use the settings object for attribute bindings or similar things
// Events go to the bindEvents function
// Todo: call super

var Utilities = {
  settings: {},
  init() {
    console.log("Initialize module Utilities ...");

    this.bindEvents();
  },

  bindEvents() {}
};

export { Utilities };
