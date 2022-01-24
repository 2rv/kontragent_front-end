export const performCompanyData = (data) => {
  const { req, egrDetails } = data;
  return {
    ...convertReq(req),
    ...convertEgrDetails(egrDetails),
  };
};

// конвертация req  ------------------------------------------------------------------

function convertReq(req) {
  const {
    inn,
    ogrn,
    briefReport: {
      summary: { redStatements, greenStatements, yellowStatements },
    },
    IP,
    UL,
  } = req;

  return {
    inn: inn,
    ogrn: ogrn,
    // redStatus: !!redStatements,
    // greenStatus: !!greenStatements,
    // yellowStatus: !!yellowStatements,
    ...convertReqIP(IP),
    ...convertReqUL(UL),
  };
}

function convertReqIP(IP) {
  if (!IP) return {};
  const {
    fio,
    okpo,
    okato,
    okfs,
    okogu,
    okopf,
    opf,
    oktmo,
    registrationDate,
    dissolutionDate,
    status,
  } = IP;

  return {
    fio: fio,
    okpo,
    okato,
    okfs,
    okogu,
    okopf,
    opf,
    oktmo,
    registrationDate,
    dissolutionDate,
    status: status.statusString,
    dissolved: status.dissolved,
  };
}

function convertReqUL(UL) {
  if (!UL) return {};
  const {
    kpp,
    okpo,
    okato,
    okfs,
    oktmo,
    okogu,
    okopf,
    opf,
    legalName,
    legalAddress,
    status,
    registrationDate,
    dissolutionDate,
    heads,
  } = UL;

  return {
    kpp,
    okpo,
    okato,
    okfs,
    oktmo,
    okogu,
    okopf,
    opf,
    shortName: legalName?.short,
    fullName: legalName?.full,
    date: legalName?.date,
    address: convertLegalAddress(legalAddress),
    status: status.statusString,
    dissolved: status.dissolved,
    registrationDate,
    dissolutionDate,
    heads,
  };
}

// конвертация egrDetails  ------------------------------------------------------------------

function convertEgrDetails(egrDetails) {
  const { inn, ogrn, focusHref, UL, IP } = egrDetails;
  return {
    ...convertEgrDetailsUL(UL),
    ...convertEgrDetailsIP(IP),
  };
}

function convertEgrDetailsUL(UL) {
  if (!UL) return {};
  const {
    okpo,
    pfrRegNumber,
    fssRegNumber,
    fomsRegNumber,
    activities: { principalActivity },
    regInfo,
    nalogRegBody,
    regBody,
    registrarOfShareholders,
    shareholders,
    statedCapital,
    foundersFL,
    foundersUL,
    foundersForeign,
    predecessors,
    successors,
    egrRecords,
    history,
  } = UL;

  return {
    pfr: pfrRegNumber,
    fss: fssRegNumber,
    foms: fomsRegNumber,
    mainActivity: {
      code: principalActivity.code,
      text: principalActivity.text,
      date: principalActivity.date,
    },
    capitalSum: statedCapital.sum,
    capitalDate: statedCapital.date,
    registrationInfoNalog: {
      code: nalogRegBody.nalogCode,
      name: nalogRegBody.nalogName,
      date: nalogRegBody.date,
    },
  };
}

function convertEgrDetailsIP(IP) {
  if (!IP) return {};
  const {
    okpo,
    pfrRegNumber,
    fssRegNumber,
    fomsRegNumber,
    okato,
    shortenedAddress,
    activities: { principalActivity },
    regInfo,
    nalogRegBody,
    regBody,
    egrRecords,
  } = IP;

  return {
    pfr: pfrRegNumber,
    fss: fssRegNumber,
    foms: fomsRegNumber,
    mainActivity: principalActivity,
    address: convertAddress(shortenedAddress),
  };
}

// другое  ------------------------------------------------------------------

function convertLegalAddress(data) {
  if (!data) return undefined;
  const { date, parsedAddressRF } = data;
  return {
    date: date,
    ...(convertAddress(parsedAddressRF) || {}),
  };
}
function convertAddress(addressData) {
  if (!addressData) return undefined;
  const {
    zipCode,
    regionCode,
    regionName,
    district,
    city,
    settlement,
    street,
    house,
    bulk,
    fiat,
  } = addressData;
  return {
    zipCode: zipCode,
    regionCode: regionCode,
    region: regionName && `${regionName.topoShortName} ${regionName.topoValue}`,
    city: city && `${city.topoShortName} ${city.topoValue}`,
    street: street && `${street.topoShortName} ${street.topoValue}`,
    house:
      house &&
      `${house.topoShortName} ${house.topoValue} ${
        bulk ? `,${bulk.topoShortName || ''} ${bulk.topoValue || ''}` : ''
      }`,
    settlement:
      settlement && `${settlement.topoShortName} ${settlement.topoValue}`,
    district: district && `${district.topoShortName} ${district.topoValue}`,
    fiat: fiat && `${fiat.topoShortName} ${fiat.topoValue}`,
  };
}
