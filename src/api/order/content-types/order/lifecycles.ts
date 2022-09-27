const getRandomNumber = (min = 1, max = 10) => {
  return Math.ceil(Math.random() * (max - min + 1));

};
export default {
  beforeCreate(event) {
    const date = new Date();
    console.log(date);
    event.params.data.code = `${date.getFullYear()}${date.getMonth() + 1
    }${date.getDate()}-${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}`;
  }
};
