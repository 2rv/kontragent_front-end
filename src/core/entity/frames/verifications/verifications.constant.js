export const VERIFICATIONS_LIST = [
  {
    id: 1,
    companyName: 'ООО "ТЕХЭЛЕКТРО МСК"',
    price: '20 000 руб.',
    time: '25.08.2021',
    paid: true,
    status: {
      title: 'ENTITY.VERIFICATIONS.STATUS.STANDART',
      id: 0,
    },
    info: {
      title: 'ENTITY.VERIFICATIONS.TYPE.DONE',
      id: 0,
    },
  },
  {
    id: 2,
    companyName: 'ООО "КАПСТРОЙЭНЕРОГОТЕХ"',
    price: '60 000 руб.',
    time: '06.08.2020',
    paid: false,
    status: {
      title: 'ENTITY.VERIFICATIONS.STATUS.STANDART',
      id: 0,
    },
    info: {
      title: 'ENTITY.VERIFICATIONS.TYPE.AWAITING_PAYMENT',
      id: 1,
    },
  },
  {
    id: 3,
    companyName: 'ООО "ФАЕР ГРУПП ЦЕНТР"',
    price: '50 000 руб.',
    time: '06.08.2020',
    paid: false,
    status: {
      title: 'ENTITY.VERIFICATIONS.STATUS.EXTENDED',
      id: 1,
    },
    info: {
      title: 'ENTITY.VERIFICATIONS.TYPE.PERFORMED',
      id: 2,
    },
  },
];
