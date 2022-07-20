import { findUserByUsername, findAddressByUserId } from "./api";

const UserInput = () => {
  let value = "";
  let error = "";

  function getValue() {
    return value;
  }

  function getError() {
    return error;
  }

  function setValue(inputValue) {
    value = inputValue;
  }

  // 지시사항을 참고하여 searchAddress() 함수를 구현하세요.
  function searchAddress() {
    error = "";
    return findUserByUsername(value)
      .then((user) => findAddressByUserId(user.id)) // adress를 구하기 때문에 생략 가능
      .catch((e) => {
        error = e.message;
      });
  }

  return { getError, getValue, setValue, searchAddress };
};

export default UserInput;
