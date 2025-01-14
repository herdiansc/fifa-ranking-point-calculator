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
    href: '/fifa-ranking-point-calculator/css/tailwind.css',
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
                <span className="text-primary font-light">Peringkat</span> <span className="text-sky-900 font-extrabold">FIFA</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Outlet />

      {/* <footer
        className="wow fadeInUp relative z-10 dark:bg-dark"
        data-wow-delay=".15s"
      >
        <div className="border-t border-[#8890A4] border-opacity-40 py-8">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-2/3 lg:w-1/2">
                <div className="my-1">
                  <div className="-mx-3 flex items-center justify-center md:justify-start">
                    <a
                      href="/"
                      className="px-3 text-base text-gray-800 hover:text-white hover:underline"
                    >
                      Privacy policy
                    </a>
                    <a
                      href="/"
                      className="px-3 text-base text-gray-800 hover:text-white hover:underline"
                    >
                      Legal notice
                    </a>
                    <a
                      href="/"
                      className="px-3 text-base text-gray-800 hover:text-white hover:underline"
                    >
                      Terms of service
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/3 lg:w-1/2">
                <div className="my-1 flex justify-center md:justify-end">
                  <p className="text-base text-gray-800">
                    Designed and Developed by
                    <a
                      href="https://tailgrids.com"
                      rel="nofollow noopner"
                      className="text-gray-800 hover:underline"
                    >
                      TailGrids and UIdeck
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
}
