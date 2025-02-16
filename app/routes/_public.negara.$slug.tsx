import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import React from 'react';
import { countriesInId } from '~/commons/country-names-id';
import PointCalculationMethod from '~/components/article/point-calculation-method';
import { createCountryOptions, ParentData } from '~/components/homepage/hero';

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/data/fifa-country-rank.json`
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return {
      code: params.slug?.split('-')[0],
      data: json,
      baseUrl: process.env.BASE_URL,
      domain: process.env.DOMAIN,
    };
  } catch (error) {
    return {
      data: null,
      baseUrl: process.env.BASE_URL,
      domain: process.env.DOMAIN,
    };
  }
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    {
      title:
        'Peringkat FIFA ' +
        titleCase(countriesInId[data.code]['label']) +
        ' Terbaru',
    },
    {
      name: 'description',
      content:
        'Berikut adalah klasemen atau peringkat FIFA terbaru dari timnas ' +
        titleCase(countriesInId[data.code]['label'])
    },
  ];
};

export default function Index() {
  const { code, data } = useLoaderData<typeof loader>();
  const { countryOptions } = createCountryOptions(data);

  const month = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

  const d = new Date();
  const currentMonth = month[d.getMonth()];
  return (
    <>
      <div className="container">
        <div className="flex flex-wrap items-center h-screen -my-20">
          <div className="w-full px-4">
            <img
              className="mask mask-hexagon place-self-center mb-10"
              width={150}
              src={
                '/images/flags/' +
                countriesInId[code]['code2'].toLowerCase() +
                '.svg'
              }
              alt={'flag of ' + countriesInId[code]['label']}
            />
            <div className="text-center">
              <h1 className="mb-4 text-3xl font-bold text-sky-900 sm:text-4xl md:text-[40px] md:leading-[1.2] capitalize">
                Peringkat FIFA {countriesInId[code]['label']}
              </h1>
              <p className="mb-5 text-base text-body-color ">
                Peringkat FIFA timnas {countriesInId[code]['label']} terbaru yakni {currentMonth} {d.getFullYear()}{' '}adalah<br />
                <span className="text-primary text-3xl font-bold">#{countryOptions[code]['rank']}</span>
              </p>
              <Link to="/" className="btn place-self-center">Kembali</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
