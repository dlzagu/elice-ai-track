import { COFFEE_PER_BREW, BEANS_PER_BREW } from "./constants";
import { createAction, update, initializeState } from "./store";
import * as API from "./api";

function CoffeeMaker(initialBeans, maxMachine, onUpdate) {
  let state = initializeState(initialBeans, maxMachine);

  const closure = {
    grindBean,
    brewPowder,
    prepareMachine,
    getCoffee,
    getState,
    addBean,
  };

  async function prepareMachine() {
    if (state.currentMachine === 0) {
      // currentMachine 이 0일 경우 "남은 머신이 없습니다." 라는 에러 메시지를 반환합니다.
      return Promise.reject(new Error("남은 머신이 없습니다."));
    }

    if (state.beans === 0) {
      // beans 이 0일 경우 "커피 원두가 부족합니다." 라는 에러 메시지를 반환합니다.
      // 위의 예시를 참고하여 작성해보세요.
      return Promise.reject(new Error("커피 원두가 부족합니다."));
    }

    // prepareMachine 액션에 대하여 상태를 업데이트합니다.
    handleUpdate("prepareMachine");

    // 실제로 API를 호출합니다.
    await API.prepareMachine();

    // closure를 리턴합니다.
    return closure;
  }

  function handleUpdate(action, data) {
    state = update(state, createAction(action, data));
    onUpdate(closure);
    return closure;
  }

  async function grindBean() {
    // grindBean 액션을 호출합니다.
    handleUpdate("grindBean");
    // grindBean API를 기다리고 closure를 반환합니다.
    await API.grindBean();
    return closure;
  }

  async function brewPowder() {
    // beanPowder가 BEANS_PER_BREW보다 부족할 경우, "커피 가루가 부족합니다."라는 에러 메시지와 함께
    // promise를 reject 합니다.
    if (state.beanPowder < BEANS_PER_BREW) {
      return Promise.reject(new Error("커피 가루가 부족합니다."));
    }
    // brewPowder 액션을 호출합니다.
    handleUpdate("brewPowder");
    // brewPowder API를 기다리고 closure를 반환합니다.
    await API.brewPowder();
    return closure;
  }

  function getCoffee() {
    // coffee가 없을 경우 "브루잉 커피가 없습니다."라는 에러 메시지와 함께 promise를 reject 합니다.
    if (state.coffee < COFFEE_PER_BREW) {
      return Promise.reject(new Error("브루잉 커피가 없습니다."));
    }
    // coffee가 있다면 getCoffee 액션을 호출하고, COFFEE_PER_BREW를 리턴합니다.
    handleUpdate("getCoffee");
    return COFFEE_PER_BREW;
  }

  function getState() {
    return state;
  }

  function addBean(amount) {
    handleUpdate("addBeans", amount);
  }

  return closure;
}

export default CoffeeMaker;
