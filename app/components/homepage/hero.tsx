import { useLoaderData, Link } from '@remix-run/react';
import { useState } from 'react';
import {
  getMatchTypes,
  getPointResult,
} from '~/commons/calculation';
import { countriesInId } from '~/commons/country-names-id';
type Ranking = {
  rankingItem: { countryCode: string; name: string; totalPoints: number };
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
  [key: string]: { name: string; point: number; tag: string };
};
const createCountryOptions = (countryRank: CountryRank) => {
  const countryOptions: CountryOptions = {};
  countryRank.rankings.map((item) => {
    countryOptions[item.rankingItem.countryCode] = {
      name: item.rankingItem.name,
      point: item.rankingItem.totalPoints,
      tag: item.tag.id,
    };
  });
  return countryOptions;
};

const getDiffPoint = (lastPoint: number, newPoint: number) => {
  const a = newPoint - lastPoint;
  return Math.abs(Math.round((a + Number.EPSILON) * 100) / 100);
};

export default function Hero({rankings}) {
  const [country1, setCountry1] = useState('');
  const [country2, setCountry2] = useState('');
  const [matchType, setMatchType] = useState('');
  const [teamOneWin, setTeamOneWin] = useState({});
  const [teamTwoWin, setTeamTwoWin] = useState({});

  const matchTypes = getMatchTypes();
  const countryOptions = createCountryOptions(rankings);

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
                Pilih negara yang akan bertanding dan hitung perolehan poin<br />
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
                          { key in countriesInId ? countriesInId[key]['label'] : countryOptions[key]['name']}
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
                          { key in countriesInId ? countriesInId[key]['label'] : countryOptions[key]['name']}
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
                          const oneWin = getPointResult(
                            countryOptions,
                            country1,
                            country2,
                            'countryOne',
                            matchType
                          );
                          setTeamOneWin(oneWin);
                          const twoWin = getPointResult(
                            countryOptions,
                            country1,
                            country2,
                            'countryTwo',
                            matchType
                          );
                          setTeamTwoWin(twoWin);
                          document.getElementById('my_modal_5').showModal();
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

      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          {matchType && country1 && country2 ? (
            <>
              <div className="flex w-full flex-col">
                <div className="card rounded-box grid place-items-center">
                  <img
                    className="mask mask-hexagon" 
                    width={150}
                    src={'/images/flags/' + countriesInId[country1]['code2'].toLowerCase() + '.svg'} alt={'flag of ' + countriesInId[country1]['label']} />
                  <h1 className="mb-2 text-2xl text-sky-900 text-center capitalize">
                    {countriesInId[country1]['label']}
                  </h1>
                  <div className="stats shadow">
                    <div className="stat place-items-center">
                      <div className="stat-figure text-green-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className="inline-block h-8 w-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                          />
                        </svg>
                      </div>
                      <div className="stat-title text-green-700">Menang</div>
                      <div className="stat-value text-green-700">
                        {getDiffPoint(
                          countryOptions[country1]['point'],
                          teamOneWin['resultTeamOne']
                        )}
                      </div>
                      <div className="stat-desc text-green-700">Poin</div>
                    </div>
                    <div className="stat place-items-center">
                      <div className="stat-figure text-rose-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className="inline-block h-8 w-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                          />
                        </svg>
                      </div>
                      <div className="stat-title text-rose-700">Kalah</div>
                      <div className="stat-value text-rose-700">
                        {getDiffPoint(
                          countryOptions[country1]['point'],
                          teamTwoWin['resultTeamOne']
                        )}
                      </div>
                      <div className="stat-desc text-rose-700">Poin</div>
                    </div>
                  </div>
                </div>
                <div className="divider">Vs</div>
                <div className="card rounded-box grid place-items-center">
                  <div className="stats shadow">
                    <div className="stat place-items-center">
                      <div className="stat-figure text-green-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className="inline-block h-8 w-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                          />
                        </svg>
                      </div>
                      <div className="stat-title text-green-700">Menang</div>
                      <div className="stat-value text-green-700">
                        {getDiffPoint(
                          countryOptions[country2]['point'],
                          teamTwoWin['resultTeamTwo']
                        )}
                      </div>
                      <div className="stat-desc text-green-700">Poin</div>
                    </div>
                    <div className="stat place-items-center">
                      <div className="stat-figure text-rose-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className="inline-block h-8 w-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                          />
                        </svg>
                      </div>
                      <div className="stat-title text-rose-700">Kalah</div>
                      <div className="stat-value text-rose-700">
                        {getDiffPoint(
                          countryOptions[country2]['point'],
                          teamOneWin['resultTeamTwo']
                        )}
                      </div>
                      <div className="stat-desc text-rose-700">Poin</div>
                    </div>
                  </div>
                  <h1 className="mt-2 text-2xl text-sky-900 text-center capitalize">
                    {countriesInId[country2]['label']}
                  </h1>
                  <img
                    className="mask mask-hexagon" 
                    width={150}
                    src={'/images/flags/' + countriesInId[country2]['code2'].toLowerCase() + '.svg'} alt={'flag of ' + countriesInId[country2]['label']} />
                </div>
              </div>
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
