"use strict";

window.onload = function () {
  modal("button[name='button__modal']");

  const action = (arg) => arg ? console.log("yeeeesssss !!!") : console.log("nooooooooo !!!");

  confirmation("button[name='button__confirm']", action);
};
