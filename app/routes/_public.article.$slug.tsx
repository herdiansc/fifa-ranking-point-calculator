import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import PointCalculationMethod from '~/components/article/point-calculation-method';

export const loader: LoaderFunction = ({params}) => {
  return params;
};

export const meta: MetaFunction = () => {
  return [
    { title: 'Artikel' },
    {
      name: 'description',
      content:
        'Pilih negara yang akan bertanding dan hitung perolehan poin peringkat fifa setelahnya jika salah satu menang atau draw.',
    },
  ];
};

const articleMaps = {
  'cara-perhitungan-poin-peringkat-fifa': <PointCalculationMethod />
};

const getArticleComponent = (slug) => {
  return articleMaps[slug];
};

export default function Index() {
  const { slug } = useLoaderData();
  return (
    <>
      {getArticleComponent(slug)}
    </>
  );
}
