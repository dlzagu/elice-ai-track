const delayedResolve = (data, resolve) => setTimeout(() => resolve(data), 250);

const bitcoinAddressBuilder = (() => {
  const possibleCharacters =
    "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  const generateRandomNumber = (max, min = 0) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // P2PKH invoice address format
  const generateBitcoinAddress = () => {
    const selectionLength = possibleCharacters.length - 1;
    const addressLength = generateRandomNumber(34, 25);

    const generatedAddress = "1".concat(
      Array.from({ length: addressLength })
        .map(() => possibleCharacters[generateRandomNumber(selectionLength)])
        .join("")
    );

    return {
      bitcoinAddress: generatedAddress,
      bitcoinBalance: 100 + +(Math.random() * 100).toFixed(2),
    };
  };

  return {
    generateBitcoinAddress,
  };
})();

const users = [
  {
    email: "test1@example.com",
    password: "1234",
    bitcoinAddress: "1MsYFA2HyCiTQ1X2vPByirQo3i7HQ9yNvb",
    bitcoinBalance: 174.13,
  },

  {
    email: "tamara26@yahoo.com",
    password: "tamara",
    bitcoinAddress: "1c9y8xHAGc1CjFfX3eW5V85M9sJax6o",
    bitcoinBalance: 361.54,
  },

  {
    email: "antone87@gmail.com",
    password: "antone",
    bitcoinAddress: "1cKP3SVjSFwbGDYwJgeqfB4gYMEw",
    bitcoinBalance: 153.24,
  },
];

export const db = (() => {
  const getUsers = () =>
    new Promise((resolve) =>
      delayedResolve(
        users.map(({ password, ...rest }) => rest),
        resolve
      )
    );

  const addUser = (email, password) => {
    return new Promise((resolve, reject) => {
      const foundUser = users.find((user) => user.email === email);

      if (foundUser) {
        return reject(new Error("Email already exists."));
      }

      const newUser = {
        email,
        password,
        ...bitcoinAddressBuilder.generateBitcoinAddress(),
      };

      users.push(newUser);
      delayedResolve(newUser, resolve);
    });
  };

  const findUser = (email) => {
    return new Promise((resolve, reject) => {
      const foundUser = users.find((user) => user.email === email);

      if (!foundUser) {
        return reject(new Error("User not found"));
      }

      delayedResolve(foundUser, resolve);
    });
  };

  const transferBitcoin = (from, to, amount) => {
    return new Promise((resolve, reject) => {
      const fromUser = users.find((user) => user.bitcoinAddress === from);

      if (fromUser.bitcoinBalance < amount) {
        return reject(new Error("Insufficient balance."));
      }

      const toUser = users.find((user) => user.bitcoinAddress === to);

      fromUser.bitcoinBalance -= amount;
      toUser.bitcoinBalance += amount;

      delayedResolve({ success: true }, resolve);
    });
  };

  return {
    getUsers,
    addUser,
    findUser,
    transferBitcoin,
  };
})();
