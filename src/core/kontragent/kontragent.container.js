import { KontragentComponent } from './kontragent.component';
export function KontragentContainer() {
  const kontragentInfoNotificationsFrameData = {
    warningsLong: [
      {
        header:
          'По состоянию на 2021-05-14 действовали ограничения на операции по банковским счетам организации, установленные ИФНС',
        content:
          'Это означает, что в отношении данной организации ИФНС отправляла в банки своё решение о частичном или полном прекращении расходных операций по счетам (ст. 76 НК РФ). В настоящий момент это решение может быть уже отменено, а расходные операции разрешены.',
      },
      {
        header:
          'По состоянию на 2021-05-14 действовали ограничения на операции по банковским счетам организации, установленные ИФНС',
        content:
          'Это означает, что в отношении данной организации ИФНС отправляла в банки своё решение о частичном или полном прекращении расходных операций по счетам (ст. 76 НК РФ). В настоящий момент это решение может быть уже отменено, а расходные операции разрешены.',
      },
      {
        header:
          'По состоянию на 2021-05-14 действовали ограничения на операции по банковским счетам организации, установленные ИФНС',
        content:
          'Это означает, что в отношении данной организации ИФНС отправляла в банки своё решение о частичном или полном прекращении расходных операций по счетам (ст. 76 НК РФ). В настоящий момент это решение может быть уже отменено, а расходные операции разрешены.',
      },
    ],
    warningsShort: [
      {
        header:
          'Выявлены совпадения по критериям фирм-однодневок, установленных действующим законодательством',
      },
      {
        header:
          'Выявлены совпадения по критериям фирм-однодневок, установленных действующим законодательством',
      },
      {
        header:
          'Выявлены совпадения по критериям фирм-однодневок, установленных действующим законодательством',
      },
    ],
  };

  const kontragentInfoHeaderFrameData = {
    company: {
      type: 'Общество с ограниченной ответственностью',
      name: '"Компания Гермес-Электро"',
    },
  };

  const kontragentInfoDataFrameData = {
    information: {
      foundation_date: '2011-10-19',
      phone_numbers:
        '8 (926) 435-34-77 , 8 (499) 792-25-93 , 8 (916) 562-97-83',
      capital: {
        sum: '20 000 руб.',
        contributors: [
          {
            name: 'Жуков Олег Юрьевич',
            contribution_currency: '10 000 руб.',
            contribution_percentage: '50%',
          },
          {
            name: 'Жуков Олег Юрьевич',
            contribution_currency: '10 000 руб.',
            contribution_percentage: '50%',
          },
        ],
      },
      enforcement_proceedings: 'Не найдено исполнительных производств',
      inn: '7729693780',
      kpp: '772901001',
      ogrn: '1117746830134',
      okpo: '37154287',
      address: '119530, РФ, Москва г, ш Очаковское, дом 32',
      ceo: 'Жуков Олег Юрьевич',
      founders: [
        {
          name: 'Василенко Владимир Николаевич',
          contribution_currency: '10 000 руб.',
          contribution_percentage: '50%',
        },
        {
          name: 'Василенко Владимир Николаевич',
          contribution_currency: '10 000 руб.',
          contribution_percentage: '50%',
        },
      ],
      finance: {
        year: '2020',
        account_balance: '48 928 000 руб.',
        revenue: '136 653 000 руб.',
        net_profit: '7 988 000 руб.',
      },
    },
  };

  const kontragentRatingRiskData = {
    companyType: 'Общество с ограниченной ответственностью ',
    companyName: '"Компания Гермес-Электро"',
    userRating: 5,
    generalRating: '3,5 Баллов',
    finances: '310 988.65 руб.',
    risk: '47 438.93 руб.',
  };

  return (
    <KontragentComponent
      kontragentRatingRiskData={kontragentRatingRiskData}
      kontragentInfoDataFrameData={kontragentInfoDataFrameData}
      kontragentInfoHeaderFrameData={kontragentInfoHeaderFrameData}
      kontragentInfoNotificationsFrameData={
        kontragentInfoNotificationsFrameData
      }
    />
  );
}
