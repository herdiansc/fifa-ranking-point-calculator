import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import React from 'react';
import { countriesInId } from '~/commons/country-names-id';
import PointCalculationMethod from '~/components/article/point-calculation-method';
import { createCountryOptions, ParentData } from '~/components/homepage/hero';

type ArticleDetail = {
  component: string; //React.ReactNode;
  title: string;
  description: string;
};
type ArticleMaps = {
  [key: string]: ArticleDetail;
};
type ArticleComponents = {
  [key: string]: React.ReactNode;
};
const articleMaps: ArticleMaps = {
  'cara-perhitungan-poin-peringkat-fifa': {
    component: 'PointCalculationMethod', //<PointCalculationMethod />,
    title: 'Cara Perhitungan Poin dan Peringkat FIFA',
    description:
      'Bagaimana Cara Menghitung Peringkat FIFA, Penjelasan Lengkap, dan Contoh Perhitungannya',
  },
};

const articleComponents: ArticleComponents = {
  PointCalculationMethod: <PointCalculationMethod />,
};

const getArticleMeta = (slug: string | undefined) => {
  if (!slug) {
    return false;
  }
  return articleMaps[slug];
};

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
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
        'Berikut adalah peringkat FIFA terbaru dari timnas ' +
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
        <div className="flex flex-wrap items-center h-screen">
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
                Peringkat FIFA timnas {countriesInId[code]['label']} terbaru yakni {currentMonth} {d.getFullYear()}{' '}adalah {countryOptions[code]['rank']}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
