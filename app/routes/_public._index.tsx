import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import Hero from '~/components/homepage/hero';

export const loader: LoaderFunction = async () => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/data/fifa-country-rank.json`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return {data: json, baseUrl: process.env.BASE_URL, domain: process.env.DOMAIN};
  } catch (error) {
    return {data: null, baseUrl: process.env.BASE_URL, domain: process.env.DOMAIN};
  }
};

export const meta: MetaFunction = () => {
  return [
    { title: 'Hitung Poin Peringkat FIFA' },
    { name: 'description', content: 'Pilih negara yang akan bertanding dan hitung perolehan poin peringkat fifa setelahnya jika salah satu menang atau draw.' },
  ];
};

export default function Index() {
  return (
    <>
      <div
        id="home"
        className="relative overflow-hidden dark:bg-dark pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <Hero />
      </div>
    </>
  );
}

