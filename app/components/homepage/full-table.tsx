import { Link, useLoaderData } from '@remix-run/react';
import { ParentData } from './hero';
// import { countriesInId } from '~/commons/country-names-id';
import React from 'react';
import { countriesInId } from '~/commons/country-names-id';

export default function FullTable() {
  const parentData = useLoaderData() as ParentData;
  const [restItemsClass, setRestItemsClass] = React.useState('hidden');
  return (
    <>
      <section className="pb-10 pt-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                <h2 className="mb-3 text-sky-900 text-3xl font-bold sm:text-4xl md:text-[35px] md:leading-[1.2]">
                  Daftar Peringkat FIFA Semua Negara
                </h2>
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="text-center">Peringkat</th>
                        <th>Negara</th>
                        <th>Total Poin</th>
                      </tr>
                    </thead>
                    <tbody>
                      {parentData.data.rankings.map((item, index) => {
                        console.log(
                          'BBB',
                          countriesInId[item.rankingItem.countryCode]
                        );
                        return (
                          <tr
                            key={index}
                            className={index > 4 ? restItemsClass : ''}
                          >
                            <td className="text-center">
                              {item.rankingItem.rank}
                            </td>
                            <td>
                              {/* <Link to={"/negara/" + item.rankingItem.countryCode + "-" + item.rankingItem.name.toLowerCase()}> */}
                                <div className="flex items-center gap-3">
                                  <div className="avatar">
                                    {typeof countriesInId[
                                      item.rankingItem.countryCode
                                    ] !== 'undefined' ? (
                                      <div className="mask mask-squircle h-12 w-12">
                                        <img
                                          className="mask mask-hexagon"
                                          width={150}
                                          src={
                                            '/images/flags/' +
                                            countriesInId[
                                              item.rankingItem.countryCode
                                            ]['code2'].toLowerCase() +
                                            '.svg'
                                          }
                                          alt={
                                            'flag of ' +
                                            countriesInId[
                                              item.rankingItem.countryCode
                                            ]['label']
                                          }
                                        />
                                      </div>
                                    ) : null}
                                  </div>
                                  <div>
                                    <div className="font-bold capitalize">
                                      {typeof countriesInId[
                                        item.rankingItem.countryCode
                                      ] != 'undefined'
                                        ? countriesInId[
                                            item.rankingItem.countryCode
                                          ]['label']
                                        : item.rankingItem.name}
                                    </div>
                                  </div>
                                </div>
                              {/* </Link> */}
                            </td>
                            <td>{item.rankingItem.totalPoints}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan={3}>
                          <button
                            className="btn"
                            onClick={() => {
                              setRestItemsClass(
                                restItemsClass === 'hidden' ? '' : 'hidden'
                              );
                            }}
                          >
                            {restItemsClass === 'hidden'
                              ? 'Tampilkan Semua'
                              : 'Tampilkan Sedikit'}
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
