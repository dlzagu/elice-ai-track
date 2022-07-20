import "./app.css";
import CoffeeMaker from "./CoffeeMaker";

function t(container, text) {
  container.innerText = text;
}

const CoffeeMakerComponent = () => {
  const currentMachineText = document.getElementById("current-machine-text");
  const coffeeBeanText = document.getElementById("coffee-bean-text");
  const coffeePowderText = document.getElementById("coffee-powder-text");
  const coffeeText = document.getElementById("coffee-text");

  const coffeeBeanInput = document.getElementById("coffee-bean-input");
  const makeCoffeeButton = document.getElementById("make-coffee-button");
  const addBeanButton = document.getElementById("add-bean-button");

  const checkStateButton = document.getElementById("check-state-button");

  const statusText = document.getElementById("status-text");

  const coffeeMaker = CoffeeMaker(200, 2, render);

  function render(maker) {
    const state = maker.getState();
    const { beans, beanPowder, coffee, currentMachine } = state;

    t(currentMachineText, `현재 남은 머신 대수 : ${currentMachine}`);
    t(coffeeBeanText, `남은 커피 콩 수 : ${beans}`);
    t(coffeePowderText, `남은 커피 파우더 : ${beanPowder}`);
    t(coffeeText, `남은 커피 : ${coffee}`);

    return Promise.resolve(maker);
  }

  addBeanButton.addEventListener("click", () => {
    const amount = Number(coffeeBeanInput.value);
    coffeeMaker.addBean(amount);
    coffeeBeanInput.value = "";
  });

  makeCoffeeButton.addEventListener("click", () => {
    // coffeeMaker를 구현 후에 잘 제조가 되는지 확인해보세요.
    coffeeMaker
      .prepareMachine()
      .then(render)
      .then((maker) => maker.grindBean())
      .then(render)
      .then((maker) => maker.brewPowder())
      .then(render)
      .then((maker) => maker.getCoffee())
      .then((coffee) => {
        t(statusText, `커피 ${coffee} g 제조가 완료되었습니다.`);
        render(coffeeMaker);
      })
      .catch((error) => {
        t(statusText, error.message);
        render(coffeeMaker);
      });
  });

  checkStateButton.addEventListener("click", () => {
    const state = coffeeMaker.getState();
    t(document.getElementById("status"), JSON.stringify(state, null, 2));
  });

  render(coffeeMaker);
};

const App = () => {
  CoffeeMakerComponent();
};

export default App;
