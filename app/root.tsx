import { Links, Meta, Outlet, Scripts } from '@remix-run/react';

export default function App() {
  return (
    <html lang="en" data-theme="rivu">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />

        <script
          type="module" 
          dangerouslySetInnerHTML={{
            __html: `
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAvHJTVctjLml0Nm0iGECs2uNFUTIbOBGk",
    authDomain: "hitungperingkatfifa.firebaseapp.com",
    projectId: "hitungperingkatfifa",
    storageBucket: "hitungperingkatfifa.firebasestorage.app",
    messagingSenderId: "576900346065",
    appId: "1:576900346065:web:b21905dd6bdc74e4fa55f0",
    measurementId: "G-RRLTK0DVCK"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
    `,
          }}
        />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}


// export function HydrateFallback() {
//   return (
//     <>
//       <p>Loading...</p>
//       <Scripts />
//     </>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <Outlet />
//       <Scripts />
//     </>
//   );
// }
