import { Link, Outlet } from '@remix-run/react';
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
      <div className="navbar bg-base-100">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/article/cara-perhitungan-poin-peringkat-fifa">Rumus Peringkat FIFA</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-center text-2xl block w-full">
            <span className="text-primary font-light">Peringkat</span>{' '}
            <span className="text-sky-900 font-extrabold">FIFA</span>
          </Link>
        </div>
        <div className="navbar-end"></div>
      </div>
      {/* <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
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
      </div> */}

      <Outlet />

      <footer className="gap-y-2 footer footer-center text-base-content rounded p-3 mt-auto">
        <div>
          <p className="text-xs">Kunjungi Aplikasi Lainnya:</p>
          <nav className="grid grid-flow-col gap-4">
            <a
              className="link link-hover"
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.waroong.android&hl=en"
            >
              Waroong
            </a>
            <a
              className="link link-hover"
              target="_blank"
              rel="noreferrer"
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
