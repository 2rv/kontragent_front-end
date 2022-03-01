export function convertRevisionPrice(props) {
  const { price, companyBalance, referalBalance, isUseReferalBalance } = props;

  let isExistComBal,
    isNoNExistComBal,
    amountCompanyBalance,
    resultCompanyBalance,
    amountReferalBalance,
    resultReferalBalance = 0;

  // вычисляем хватает ли реф баланса
  const isExistRefBal = referalBalance - price >= 0;

  // вычисляем хватает ли баланса компании
  if (isUseReferalBalance) {
    isExistComBal = companyBalance + referalBalance - price >= 0;
  } else isExistComBal = companyBalance - price >= 0;

  // вычисляем сколько нехватило баланса компании
  if (isUseReferalBalance) {
    isNoNExistComBal = price - (companyBalance + referalBalance);
  } else isNoNExistComBal = price - companyBalance;

  if (isUseReferalBalance) {
    amountCompanyBalance = isExistComBal
      ? isExistRefBal
        ? 0
        : price - referalBalance
      : companyBalance;
  } else amountCompanyBalance = isExistComBal ? price : companyBalance;

  resultCompanyBalance = isExistComBal
    ? companyBalance - amountCompanyBalance
    : 0;

  amountReferalBalance = isExistRefBal ? price : referalBalance;

  resultReferalBalance = isExistRefBal
    ? referalBalance - amountReferalBalance
    : 0;

  return {
    // сколько не хватило баланса компании
    isNoNExistComBal: isNoNExistComBal,
    // хватило ли нам баланса и реферального баланса
    isExistComBal: isExistComBal,
    //  сколько спишется с баланса компании
    amountCompanyBalance: amountCompanyBalance,
    //  сколько останется баланса компании
    resultCompanyBalance: resultCompanyBalance,
    //  сколько спишется с реферального баланса
    amountReferalBalance: amountReferalBalance,
    //  сколько останется реф баланса
    resultReferalBalance: resultReferalBalance,
  };
}

// // вычисляем хватает ли баланса компании
// const isExistComBal = value
// ? data[DATA_NAME.COMPANY_BALANCE] -
// 		data[DATA_NAME.COMPANY_BALANCE] -
// 		totalPrice >=
// 	0
// : data[DATA_NAME.COMPANY_BALANCE] - totalPrice >= 0;

// // вычисляем сколько нехватило баланса компании
// const isNoNExistComBal = totalPrice - data[DATA_NAME.COMPANY_BALANCE];

// // вычисляем сколько спишется с баланса компании если isExistComBal ? всю стоимость проверки : весь баланс компании
// const amountComBal = isExistComBal
// ? totalPrice
// : data[DATA_NAME.COMPANY_BALANCE];

// // вычисляем сколько останется баланса компании
// const resultComBal = isExistComBal
// ? data[DATA_NAME.COMPANY_BALANCE] - amountComBal
// : 0;

// // вычисляем хватает ли реф баланса
// const isExistRefBal = data[DATA_NAME.REFERAL_BALANCE] - totalPrice >= 0;

// // вычисляем сколько спишется с реферального баланса  если isExistComBal ? всю стоимость проверки : весь реф баланс
// const amountRefBal = isExistRefBal
// ? totalPrice
// : data[DATA_NAME.REFERAL_BALANCE];

// // вычисляем сколько останется реф баланса
// const resultRefBal = isExistRefBal
// ? data[DATA_NAME.REFERAL_BALANCE] - amountRefBal
// : 0;
