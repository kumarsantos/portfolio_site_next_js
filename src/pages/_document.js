import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        {/* //This is for removing FOUC, this is used to remove flash during reload for dark or light mode , initially loading default light then dark so remove that glitch below code used*/}
        <Script id='theme-switcher' strategy='beforeIntractive'>
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }`}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
