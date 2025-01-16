import { Links, Meta, Outlet, Scripts } from '@remix-run/react';
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

function log() {
  const firebaseConfig = {
    apiKey: "AIzaSyAvHJTVctjLml0Nm0iGECs2uNFUTIbOBGk",
    authDomain: "hitungperingkatfifa.firebaseapp.com",
    projectId: "hitungperingkatfifa",
    storageBucket: "hitungperingkatfifa.firebasestorage.app",
    messagingSenderId: "576900346065",
    appId: "1:576900346065:web:b21905dd6bdc74e4fa55f0",
    measurementId: "G-RRLTK0DVCK"
  };
  const analytics = typeof window !== 'undefined' ? getAnalytics(initializeApp(firebaseConfig)) : null;

  // const analytics = getAnalytics(initializeApp(firebaseConfig));
  if (analytics) {
    logEvent(analytics ,'screen_view');
  }
}

export default function App() {
  log();
  return (
    <html lang="en" data-theme="rivu">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
