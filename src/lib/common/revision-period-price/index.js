export function revisionPeriodPrice(data = []) {
  try {
    let price = [];
    let fullYear = [];

    for (let i = 0; i < data.length; i++) {
      let period = 0;

      if (data[i].kvartal1 === true) period += 1;
      if (data[i].kvartal2 === true) period += 1;
      if (data[i].kvartal3 === true) period += 1;
      if (data[i].kvartal4 === true) period += 1;

      if (period === 1) {
        price[i] = 100000;
      }

      if (period === 2) {
        price[i] = 160000;
      }

      if (period === 3) {
        price[i] = 250000;
      }

      if (period === 4) {
        price[i] = 300000;

        fullYear = [...fullYear, i];
      }
    }

    let count = 0;

    for (let i = 0; i < fullYear.length; i++) {
      count += 1;
      if (count === 2) {
        price[i] = 270000;
        price[i - 1] = 270000;
      } else if (count === 3) {
        price[i] = 230000;
        price[i - 1] = 230000;
        price[i - 2] = 230000;
        count = 0;
      } else {
        price[i] = 300000;
      }
    }

    let x = 0;

    const totalPrice = price.map((i) => (x += i), (x = 0)).reverse()[0];

    return totalPrice || 0;
  } catch (error) {
    console.log(error);
  }
}
