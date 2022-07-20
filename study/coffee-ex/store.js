import { BEANS_PER_BREW, COFFEE_PER_BREW } from "./constants";

const initialState = {
  beans: 0,
  beanPowder: 0,
  coffee: 0,
  currentMachine: 0,
};

export const createAction = (type, payload) => ({ type, payload });

export function update(state, action) {
  switch (action.type) {
    // prepareMachine 액션에 대해 새로운 상태를 반환합니다.
    case "prepareMachine": {
      return {
        ...state,
        currentMachine: state.currentMachine - 1,
      };
    }
    // grindBean, brewPowder, addBeans, getCoffee 액션에 대한 행위를
    // 위의 예시를 참고하여 작성해보세요.
    case "grindBean": {
      return {
        ...state,
        beans: state.beans - 20,
        beanPowder: state.beanPowder + 20,
      };
    }

    case "brewPowder": {
      return {
        ...state,
        coffee: state.coffee + COFFEE_PER_BREW,
        beanPowder: state.beanPowder - 20,
      };
    }

    case "addBean": {
      return {
        ...state,
        beans: state.beans + action.payload,
      };
    }

    case "getCoffee": {
      return {
        ...state,
        currentMachine: state.currentMachine + 1,
      };
    }

    default:
      return state;
  }
}

export function initializeState(initialBeans, maxMachine) {
  return {
    ...initialState,
    beans: initialBeans,
    currentMachine: maxMachine,
  };
}
