import { db } from "./db";

export const getUsers = () => db.getUsers();

export const loginUser = ({ email, password }) => db.findUser(email, password);

export const registerUser = ({ email, password }) =>
  db.addUser(email, password);
