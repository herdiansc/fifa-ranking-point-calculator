import { Outlet } from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';

// import styles from "../styles/dist/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  // {
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  // },
  // {
  //   rel: 'stylesheet',
  //   href: '/css/swiper-bundle.min.css',
  // },
  // {
  //   rel: 'stylesheet',
  //   href: '/css/animate.css',
  // },
  {
    rel: 'stylesheet',
    href: '/css/tailwind.css',
  },
];

export default function PublicLayout() {
  return (
    <>
      <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
        <div className="container">
          <div style={{ justifySelf: 'center' }}>
            <div className="w-60 max-w-full px-4">
              <a href="/" className="text-center text-2xl block w-full py-5">
                <span className="text-primary font-light">Peringkat</span>{' '}
                <span className="text-sky-900 font-extrabold">FIFA</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Outlet />

      <footer className="gap-y-2 footer footer-center text-base-content rounded p-3 mt-auto">
        <div>
          <p className="text-xs">Kunjungi Aplikasi Lainnya:</p>
          <nav className="grid grid-flow-col gap-4">
            <a
              className="link link-hover" target="_blank" rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.waroong.android&hl=en"
            >
              Waroong
            </a>
            <a
              className="link link-hover" target="_blank" rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.oowang.android&hl=en"
            >
              Oowang
            </a>
          </nav>
        </div>
        <aside></aside>
      </footer>
    </>
  );
}
