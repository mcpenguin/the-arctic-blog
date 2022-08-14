import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return <Html lang="en" prefix="og: http://ogp.me/ns#">

  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000031" />

    <meta name="description" content="Hi! I'm Marcus Chan, a 2B Computer Science student at the University of Waterloo :D" />

    // Global site tag (gtag.js) - Google Analytics
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-192467005-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());

      gtag('config', 'UA-192467005-1');
    </script>

    // Title
    <meta charSet="utf-8" />
    <title>Marcus Chan</title>

    // meta tags for LinkedIn + Discord
    <meta property="og:title" content="Marcus Chan" />
    <meta property="og:image" content="%PUBLIC_URL%/favicon/android-chrome-512x512.png" />
    <meta property="og:author" content="Marcus Chan" />
    <meta property="og:description" content="Hi! I'm Marcus Chan, a 2B Computer Science student at the University of Waterloo :D" />
    <meta property="og:url" content="http://marcus-chan.me" />

    // Meta Tag to make Website Without Scroll for Mobile
    <meta name="viewport" content="width=device-width, initial-scale = 1.0, 
        maximum-scale=1.0, user-scalable=no" />

    // Import Fonts
    <link rel="preconnect" href="https://fonts.gstatic.com" />
      // Nunitt
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&family=Roboto:wght@300;400&display=swap"
        rel="stylesheet" />
      // Nunito Sat
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400&display=swap" rel="stylesheet" />
      // Comic Neut
      <link href="https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap" rel="stylesheet" />
      // Quicksant
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap" rel="stylesheet" />
      // Montserrat
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Nunito+Sans:wght@200;300;400&display=swap" rel="stylesheet" />

    // Import Bootstrap CSS
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />

    // Import Font Awesome
    <script src="https://kit.fontawesome.com/dc797bf305.js" crossorigin="anonymous"></script>

    // Import Favicon
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
    // <link rel="manifest" href="favicon/site.webmanifest"

  </Head>

  <body>
    <Main />
    <NextScript />
  </body>

  </Html>
}
