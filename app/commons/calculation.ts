type CountryOptions = {
  [key: string]: { name: string; point: number; tag: string };
};
export const getPointResult = (countryOptions: CountryOptions, one: string, two: string, res: string, matchType: string) => {
  const matchTypes = getMatchTypes();
  const I = matchTypes[matchType]['bobot'];
  console.log(I, matchType);
  let WOne = 0;
  let WTwo = 0;
  if (res === 'countryOne') {
    WOne = 1
    WTwo = 0
  } else if (res === 'draw') {
    WOne = 0.5
    WTwo = 0.5
  } else {
    WOne = 0
    WTwo = 1
  }
  const drOne = (countryOptions[one]['point'] - countryOptions[two]['point']) * -1;
  const drTwo = (countryOptions[two]['point'] - countryOptions[one]['point']) * -1;
  const WeOne = 1 / ((10 ** (drOne/600)) + 1)
  const WeTwo = 1 / ((10 ** (drTwo/600)) + 1)
  const resultTeamOne = Math.round(((countryOptions[one]['point'] + I * (WOne - WeOne)) + Number.EPSILON) * 100) / 100;
  const resultTeamTwo = Math.round(((countryOptions[two]['point'] + I * (WTwo - WeTwo)) + Number.EPSILON) * 100) / 100;
  return {resultTeamOne, resultTeamTwo};
};

export const getMatchTypes = () => {
  return {
    friendly1: {
      label: 'Persahabatan',
      bobot: 5,
    },
    friendly2: {
      label: 'FIFA Match Day',
      bobot: 10,
    },
    groupNatL: {
      label: 'Fase Grup Nation League',
      bobot: 15,
    },
    playOffFinalNatL: {
      label: 'Play-Off / Fase Final Nation League',
      bobot: 25,
    },
    qualifConfOrWC: {
      label: 'Kualifikasi Kompetisi Sekonfederasi / Piala Dunia',
      bobot: 25,
    },
    confToQF: {
      label: 'Kompetisi Sekonfederasi sampai Quarter Final',
      bobot: 35,
    },
    confFromQF: {
      label: 'Kompetisi Sekonfederasi setelah Quarter Final',
      bobot: 40,
    },
    wcToQF: {
      label: 'Piala Dunia Sampai Quarter Final',
      bobot: 50,
    },
    wcFromQF: {
      label: 'Piala Dunia Setelah Quarter Final',
      bobot: 60,
    },
  };
};

export const getMatchResults = () => {
  return {
    countryOne: 'Tim Pertama Menang',
    countryTwo: 'Tim Kedua Menang',
    draw: 'Draw',
  };
};