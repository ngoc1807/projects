const bcrypt = require("bcryptjs");
const saltRounds = 10;

const hashPassword = (password) => {
  //   return new Promise((resolve) => {
  //     resolve(bcrypt.hashSync(password, saltRounds));
  //   });

  const result = bcrypt.hashSync(password, saltRounds);
  return result;
};

const checkPassword = (password, passwordDB) => {
  //   return new Promise((resolve, reject) => {
  //     bcrypt.compareSync(password, passwordDB, (data, error) => {
  //       if (err) reject(err);
  //       resolve(data);
  //     });
  //   });
  const result = bcrypt.compareSync(password, passwordDB);
  return result;
};

const randomArray = (v, k) => {
  const listId = v.map((i) => i.id);
  const resultSort = listId.sort(func);
  if (listId.length <= k) {
    return v;
  } else {
    const res = resultSort.slice(0, k);

    return finElementId(v, res);
  }
};
function func(a, b) {
  return 0.5 - Math.random();
}
const finElementId = (v, u) => {
  let a = [];
  u.forEach((element) => {
    const res = v.find((x) => x.id === +element);

    a.push(res);
  });

  return a;
};

module.exports = {
  randomArray,
  hashPassword,
  checkPassword,
};
