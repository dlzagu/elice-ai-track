const express = require("express");

const coffeeMakerRouter = express.Router();
const constants = require("./constants");

const initState = {
  beans: 200,
  beanPowder: 0,
  coffee: 0,
  currentMachine: 2,
};

let currentState = { ...initState };

coffeeMakerRouter.post("/init", (req, res, next) => {
  currentState = { ...initState };
  res.status(200);
  res.send(initState);
});

coffeeMakerRouter.post("/grindBean", (req, res, next) => {
  currentState["beans"] -= constants.BEANS_PER_BREW;
  currentState["beanPowder"] += constants.POWDER_PER_BREW;
  res.status(200);
  res.send({
    beans: currentState["beans"],
    beanPowder: currentState["beanPowder"],
  });
});

coffeeMakerRouter.post("/brewPowder", (req, res, next) => {
  currentState["beanPowder"] -= constants.POWDER_PER_BREW;
  currentState["coffee"] += 1;
  res.status(200);
  res.send({
    beanPowder: currentState["beanPowder"],
    coffee: currentState["coffee"],
  });
});

coffeeMakerRouter.post("/prepareMachine", (req, res, next) => {
  currentState["currentMachine"] -= 1;
  res.status(200);
  res.send({
    currentMachine: currentState["currentMachine"],
  });
});

coffeeMakerRouter.get("/coffee", (req, res, next) => {
  currentState["currentMachine"] += 1;
  currentState["coffee"] -= 1;
  res.status(200);
  res.send({
    currentMachine: currentState["currentMachine"],
    coffee: currentState["coffee"],
  });
});

coffeeMakerRouter.get("/status", (req, res, next) => {
  res.status(200);
  res.send(currentState);
});

module.exports = coffeeMakerRouter;
