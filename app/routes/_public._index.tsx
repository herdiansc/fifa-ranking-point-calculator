import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import React from 'react';
import Hero from '~/components/homepage/hero';

// export const loader: LoaderFunction = async () => {
//   try {
//     const response = await fetch(`${process.env.BASE_URL}/data/fifa-country-rank.json`);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     return {data: json, baseUrl: process.env.BASE_URL};
//   } catch (error) {
//     return {data: null, baseUrl: process.env.BASE_URL};
//   }
// };

export const meta: MetaFunction = () => {
  return [
    { title: 'PUBLIC' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const [rankings, setRankings] = React.useState();
  React.useEffect(() => {
    const a = async () => {
      const response = await fetch(`/data/fifa-country-rank.json`);
      const body = await response.json();
      setRankings(body)
    };
    a();
  });
  return (
    <>
      <div
        id="home"
        className="relative overflow-hidden dark:bg-dark pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        {rankings ? <Hero rankings={rankings} /> : null }
        {/* <Hero rankings={rankings} /> */}
      </div>
    </>
  );
}

