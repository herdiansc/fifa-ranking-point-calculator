import { useLoaderData, Link, useSearchParams, useLocation } from '@remix-run/react';
import React, { useState } from 'react';
import { getMatchTypes, getPointResult } from '~/commons/calculation';
import { countriesInId } from '~/commons/country-names-id';
// import Confetti from '../confetti';
import Realistic from 'react-canvas-confetti/dist/presets/realistic';
type Ranking = {
  rankingItem: {
    countryCode: string;
    name: string;
    totalPoints: number;
    rank: number;
  };
  tag: { id: string };
};
type ParentData = {
  data: CountryRank;
  baseUrl: string;
};
type CountryRank = {
  rankings: Ranking[];
};
type CountryOptions = {
  [key: string]: { name: string; point: number; rank: number; tag: string };
};
const createCountryOptions = (countryRank: CountryRank) => {
  const countryOptions: CountryOptions = {};
  const countryPoints: number[] = [];
  countryRank.rankings.map((item) => {
    const name =
      item.rankingItem.countryCode in countriesInId
        ? countriesInId[item.rankingItem.countryCode]['label']
        : item.rankingItem.name;
    countryOptions[item.rankingItem.countryCode] = {
      name: name,
      point: item.rankingItem.totalPoints,
      rank: item.rankingItem.rank,
      tag: item.tag.id,
    };
    countryPoints.push(item.rankingItem.totalPoints);
  });
  return { countryOptions, countryPoints };
};

const getDiffPoint = (lastPoint: number, newPoint: number) => {
  const a = newPoint - lastPoint;
  return Math.abs(Math.round((a + Number.EPSILON) * 100) / 100);
};

export default function Hero() {
  const parentData = useLoaderData() as ParentData;
  const [searchParams, setSearchParams] = useSearchParams();
  const [matchType, setMatchType] = useState(
    searchParams.get('matchType') || ''
  );
  const [country1, setCountry1] = useState(searchParams.get('country1') || '');
  const [country2, setCountry2] = useState(searchParams.get('country2') || '');

  const [matchResult, setMatchResult] = useState('draw');
  const [matchPointResult, setMatchPointResult] = useState({});
  const [resultLabel, setResultLabel] = useState('pertandingan imbang');

  const [matchRankResult, setMatchRankResult] = useState({});
  const [isExploding, setIsExploding] = useState(false);

  const matchTypes = getMatchTypes();
  const { countryOptions, countryPoints } = createCountryOptions(
    parentData.data
  );

  console.log(country1, country2, matchType);

  const a = (mr) => {
    const mpr = getPointResult(
      countryOptions,
      country1,
      country2,
      mr,
      matchType
    );
    setMatchPointResult(mpr);

    console.log('mpr', mpr);
    const mrr = getNewRank(mpr);
    console.log('mrr', mrr);
    setMatchRankResult(mrr);

    document.getElementById('my_modal_5').showModal();
  };

  console.log('000');
  React.useEffect(() => {
    console.log('AAA');
    if (matchType && country1 && country2) {
      console.log('BBB');
      a('draw');
    }
  }, []);

  const handleCountryClick = (mr: string) => {
    if (mr === matchResult) {
      mr = 'draw';
      setIsExploding(false);
    } else {
      setIsExploding(true);
    }
    setMatchResult(mr);
    a(mr);
    if (mr === 'countryOne') {
      setResultLabel(countriesInId[country1]['label'] + ' menang');
    } else if (mr === 'countryTwo') {
      setResultLabel(countriesInId[country2]['label'] + ' menang');
    } else {
      setResultLabel('pertandingan imbang');
    }
  };

  const getBgColor = (curTeam: string, mr: string) => {
    if (mr === 'draw') {
      return 'bg-neutral-200';
    }
    if (curTeam === mr) {
      return 'bg-green-300';
    }
    return 'bg-rose-300';
  };

  const getStatFigure = (lastPoint: number, newPoint: number) => {
    // increase
    let dPath =
      'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941';
    if (lastPoint >= newPoint) {
      // decrease or stay
      dPath =
        'M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181';
    }
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="inline-block h-8 w-8"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={dPath} />
      </svg>
    );
  };

  const getStatDiff = (lastPoint: number, newPoint: number) => {
    let ret = {
      label: 'naik',
      color: 'text-green-700',
    };
    if (lastPoint >= newPoint) {
      ret = {
        label: 'turun',
        color: 'text-rose-700',
      };
    }
    return ret;
  };

  const getNewRank = (mpr) => {
    let newRankOne = 1;
    let newRankTwo = 1;
    for (const [key, value] of Object.entries(countryOptions)) {
      if (value.point > mpr['resultTeamOne']) {
        newRankOne++;
      }
      if (value.point > mpr['resultTeamTwo']) {
        newRankTwo++;
      }
      if (
        value.point < mpr['resultTeamOne'] &&
        value.point < mpr['resultTeamTwo']
      ) {
        break;
      }
    }

    let labelOne = 'tetap';
    let textColorOne = 'text-neutral-500';
    let iconOne = 'M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3';
    if (countryOptions[country1]['rank'] < newRankOne) {
      labelOne = 'turun';
      textColorOne = 'text-rose-700';
      iconOne =
        'M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181';
    }
    if (countryOptions[country1]['rank'] > newRankOne) {
      labelOne = 'naik';
      textColorOne = 'text-green-700';
      iconOne =
        'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941';
    }

    let labelTwo = 'tetap';
    let textColorTwo = 'text-neutral-500';
    let iconTwo = 'M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3';
    if (countryOptions[country2]['rank'] < newRankTwo) {
      labelTwo = 'turun';
      textColorTwo = 'text-rose-700';
      iconTwo =
        'M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181';
    }
    if (countryOptions[country2]['rank'] > newRankTwo) {
      labelTwo = 'naik';
      textColorTwo = 'text-green-700';
      iconTwo =
        'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941';
    }

    return {
      [country1]: {
        newRank: newRankOne,
        label: labelOne,
        textColor: textColorOne,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="inline-block h-8 w-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={iconOne} />
          </svg>
        ),
      },
      [country2]: {
        newRank: newRankTwo,
        label: labelTwo,
        textColor: textColorTwo,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="inline-block h-8 w-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={iconTwo} />
          </svg>
        ),
      },
    };
  };

  const getRankMeta = (countryCode: string, key: string) => {
    return countryCode in matchRankResult
      ? matchRankResult[countryCode][key]
      : '';
  };

  return (
    <div className="container">
      <div className="-mx-4 flex flex-wrap items-center">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="mx-auto max-w-[780px]">
              <h1 className="mb-6 text-5xl font-bold text-sky-900">
                Hitung Poin Peringkat FIFA
              </h1>
              <h2 className="mb-6 text-3xl text-sky-900">
                Pertandingan Berikut Ini
              </h2>
              <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-sky-900 sm:text-lg sm:leading-[1.44]">
                Pilih negara yang akan bertanding dan hitung perolehan poin
                <br />
                peringkat fifa setelahnya jika salah satu menang atau draw.
              </p>
              <select
                className="select select-bordered select-sm max-w-xs"
                value={matchType}
                onChange={(e) => setMatchType(e.target.value)}
              >
                <option>Pilih Jenis Pertandingan</option>
                {Object.keys(matchTypes).map((key) => {
                  return (
                    <option key={key} value={key}>
                      {matchTypes[key]['label']}
                    </option>
                  );
                })}
              </select>
              <div className="flex w-full">
                <div className="card rounded-box grid h-20 flex-grow place-items-center">
                  <select
                    className="select select-primary w-full max-w-xs select-lg capitalize"
                    value={country1}
                    onChange={(e) => setCountry1(e.target.value)}
                  >
                    <option>Pilih Tim Pertama</option>
                    {Object.keys(countryOptions).map((key) => {
                      return (
                        <option key={key} value={key} className="capitalize">
                          {countryOptions[key]['name']}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="divider divider-horizontal">Vs</div>
                <div className="card rounded-box grid h-20 flex-grow place-items-center">
                  <select
                    className="select select-primary w-full max-w-xs select-lg capitalize"
                    value={country2}
                    onChange={(e) => setCountry2(e.target.value)}
                  >
                    <option>Pilih Tim Kedua</option>
                    {Object.keys(countryOptions).map((key) => {
                      return (
                        <option key={key} value={key} className="capitalize">
                          {countryOptions[key]['name']}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <ul className="flex flex-wrap items-center justify-center my-5">
                <li>
                  <div className="flex w-full flex-col border-opacity-50">
                    <div className="card rounded-box grid place-items-center">
                      <button
                        className="btn btn-primary inline-flex items-center justify-center rounded-md px-7 py-[14px] text-center font-medium text-white shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                        onClick={() => {
                          const params = new URLSearchParams();
                          params.set('matchType', matchType);
                          params.set('country1', country1);
                          params.set('country2', country2);
                          setSearchParams(params, {
                            preventScrollReset: true,
                          });
                          a('draw');
                        }}
                        disabled={
                          !matchType || !country1 || !country2 ? 'disabled' : ''
                        }
                      >
                        Lihat Perolehan Poin
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-full">
          <form method="dialog">
            <button className="visible lg:invisible btn btn-sm btn-circle btn-ghost absolute right-3 top-3">
              ✕
            </button>
          </form>
          {matchType && country1 && country2 && matchRankResult ? (
            <>
              <h1 className="text-center text-xl text-sky-900 font-bold capitalize">
                {resultLabel}
              </h1>
              <p className="text-center text-xs italic mb-4 text-neutral-600">
                Klik salah satu bendera
              </p>

              <div className="flex w-full">
                {isExploding && <Realistic autorun={{ speed: 0.3 }} />}
                <div
                  className={
                    'focus:outline-none card p-4 ' +
                    getBgColor('countryOne', matchResult) +
                    ' rounded-box grid flex-grow place-items-center'
                  }
                  onClick={() => {
                    handleCountryClick('countryOne');
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 13 || event.key == 32) {
                      handleCountryClick('countryOne');
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <img
                    className="mask mask-hexagon"
                    width={150}
                    src={
                      '/images/flags/' +
                      countriesInId[country1]['code2'].toLowerCase() +
                      '.svg'
                    }
                    alt={'flag of ' + countriesInId[country1]['label']}
                  />
                  <h1 className="text-2xl text-sky-900 text-center capitalize">
                    {countriesInId[country1]['label']}
                  </h1>
                  <p className="text-xs text-sky-800">
                    Peringkat #{countryOptions[country1]['rank']}
                  </p>
                </div>
                <div className="divider divider-horizontal">Vs</div>
                <div
                  className={
                    'focus:outline-none card p-4 ' +
                    getBgColor('countryTwo', matchResult) +
                    ' rounded-box grid flex-grow place-items-center'
                  }
                  onClick={() => {
                    handleCountryClick('countryTwo');
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 13 || event.key == 32) {
                      handleCountryClick('countryTwo');
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <img
                    className="mask mask-hexagon"
                    width={150}
                    src={
                      '/images/flags/' +
                      countriesInId[country2]['code2'].toLowerCase() +
                      '.svg'
                    }
                    alt={'flag of ' + countriesInId[country2]['label']}
                  />
                  <h1 className="text-2xl text-sky-900 text-center capitalize">
                    {countriesInId[country2]['label']}
                  </h1>
                  <p className="text-xs text-sky-800">
                    Peringkat #{countryOptions[country2]['rank']}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1 pb-4">
                <div className="place-items-center py-2">
                  <div className="text-center text-sky-900 capitalize">
                    Statistik
                  </div>
                  <div className="flex w-full">
                    <div className="grid flex-grow place-items-center">
                      <div className="stats stats-vertical lg:stats-horizontal shadow drop-shadow-md">
                        <div className="stat place-items-center">
                          <div
                            className={
                              'stat-title capitalize text-sm ' +
                              getRankMeta(country1, 'textColor')
                            }
                          >
                            Peringkat
                          </div>
                          <div
                            className={
                              'stat-value text-lg ' +
                              getRankMeta(country1, 'textColor')
                            }
                          >
                            #{getRankMeta(country1, 'newRank')}
                          </div>
                          <div
                            className={
                              'stat-desc capitalize text-xs ' +
                              getRankMeta(country1, 'textColor')
                            }
                          >
                            {getRankMeta(country1, 'label')}
                          </div>
                        </div>
                        <div className={'stat place-items-center'}>
                          <div
                            className={
                              'stat-title capitalize text-sm ' +
                              getStatDiff(
                                countryOptions[country1]['point'],
                                matchPointResult['resultTeamOne']
                              ).color
                            }
                          >
                            Poin
                          </div>
                          <div
                            className={
                              'stat-value text-lg ' +
                              getStatDiff(
                                countryOptions[country1]['point'],
                                matchPointResult['resultTeamOne']
                              ).color
                            }
                          >
                            {getDiffPoint(
                              countryOptions[country1]['point'],
                              matchPointResult['resultTeamOne']
                            )}
                          </div>
                          <div
                            className={
                              'stat-desc capitalize text-xs ' +
                              getStatDiff(
                                countryOptions[country1]['point'],
                                matchPointResult['resultTeamOne']
                              ).color
                            }
                          >
                            {
                              getStatDiff(
                                countryOptions[country1]['point'],
                                matchPointResult['resultTeamOne']
                              ).label
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="place-items-center py-2">
                  <div className="text-center text-sky-900 capitalize">
                    Statistik
                  </div>
                  <div className="flex w-full">
                    <div className="grid flex-grow place-items-center">
                      <div className="stats stats-vertical lg:stats-horizontal shadow drop-shadow-md">
                      <div className="stat place-items-center">
                          <div
                            className={
                              'stat-title capitalize text-sm ' +
                              getRankMeta(country2, 'textColor')
                            }
                          >
                            Peringkat
                          </div>
                          <div
                            className={
                              'stat-value text-lg ' +
                              getRankMeta(country2, 'textColor')
                            }
                          >
                            #{getRankMeta(country2, 'newRank')}
                          </div>
                          <div
                            className={
                              'stat-desc capitalize text-xs ' +
                              getRankMeta(country2, 'textColor')
                            }
                          >
                            {getRankMeta(country2, 'label')}
                          </div>
                        </div>
                        <div className="stat place-items-center">
                          <div
                            className={
                              'stat-title capitalize text-sm ' +
                              getStatDiff(
                                countryOptions[country2]['point'],
                                matchPointResult['resultTeamTwo']
                              ).color
                            }
                          >
                            Poin
                          </div>
                          <div
                            className={
                              'stat-value text-lg ' +
                              getStatDiff(
                                countryOptions[country2]['point'],
                                matchPointResult['resultTeamTwo']
                              ).color
                            }
                          >
                            {getDiffPoint(
                              countryOptions[country2]['point'],
                              matchPointResult['resultTeamTwo']
                            )}
                          </div>
                          <div
                            className={
                              'stat-desc capitalize text-xs ' +
                              getStatDiff(
                                countryOptions[country2]['point'],
                                matchPointResult['resultTeamTwo']
                              ).color
                            }
                          >
                            {
                              getStatDiff(
                                countryOptions[country2]['point'],
                                matchPointResult['resultTeamTwo']
                              ).label
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-neutral-500 italic">* Asumsi tim lain belum bertanding</p>
              <p className="text-xs text-neutral-500 underline-offset-4">aa</p>
            </>
          ) : (
            ''
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
}
