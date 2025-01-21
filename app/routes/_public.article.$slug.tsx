import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import React from 'react';
import PointCalculationMethod from '~/components/article/point-calculation-method';

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
    description: 'Bagaimana Cara Menghitung Peringkat FIFA, Penjelasan Lengkap, dan Contoh Perhitungannya',
  }
};

const articleComponents: ArticleComponents = {
  'PointCalculationMethod': <PointCalculationMethod />,
};

const getArticleMeta = (slug: string | undefined) => {
  if (!slug) {
    return false;
  }
  return articleMaps[slug];
};

const getArticleComponent = (component: string) => {
  return articleComponents[component];
};

export const loader: LoaderFunction = ({params}) => {
  const article = getArticleMeta(params.slug);
  if (!article) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
  return article;
};

export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [
    { title: data.title + ' | Artikel' },
    {
      name: 'description',
      content: data.description,
    },
  ];
};

export default function Index() {
  const article = useLoaderData<typeof loader>();
  return (
    <>
      {getArticleComponent(article.component)}
    </>
  );
}
