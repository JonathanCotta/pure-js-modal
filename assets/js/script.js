"use strict";

window.onload = function () {
  modal("button[name='button__modal']");

  function what(arg) {
    if (arg) {
      console.log("yeeeesssss !!!");
    }
    else {
      console.log("nooooooooo !!!");
    }
  }

  confirmation("button[name='button__confirm']", what);

};


