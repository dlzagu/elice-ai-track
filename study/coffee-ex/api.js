import { MACHINE_PREPARE_TIME, GRIND_TIME, BREW_TIME } from "./constants";

export const prepareMachine = (state) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("Machine prepared.");
      resolve();
    }, MACHINE_PREPARE_TIME);
  });

export const grindBean = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("bean grinded.");
      resolve();
    }, GRIND_TIME);
  });

export const brewPowder = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("coffee powder brewed.");
      resolve();
    }, BREW_TIME);
  });
