/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d4722602ec23e91d2e31ceeabe703f5e"
  },
  {
    "url": "assets/css/0.styles.a82533d4.css",
    "revision": "b62f5a4e2ff6742cb027ba61e482822b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6c0dd5ca.js",
    "revision": "3c7820d23def08882c6b4d62b9156790"
  },
  {
    "url": "assets/js/11.bb86d2f9.js",
    "revision": "9426e94619bb0ccc6896bbfc2b833d83"
  },
  {
    "url": "assets/js/12.5e663ca4.js",
    "revision": "67f27f836b0cbc948cf35462eddfd7ac"
  },
  {
    "url": "assets/js/13.b984abd0.js",
    "revision": "6dcfb4af14a77dc5cfa6b1b5b9806419"
  },
  {
    "url": "assets/js/14.b03a58da.js",
    "revision": "9c9b6c483102fcacddfbde7b1ebfdbab"
  },
  {
    "url": "assets/js/15.6c6ae60f.js",
    "revision": "85450658cef8d2b3c6b9017edd3018af"
  },
  {
    "url": "assets/js/16.fea05cc9.js",
    "revision": "79ea02ebfc9388dda5513435c3391489"
  },
  {
    "url": "assets/js/2.163ee670.js",
    "revision": "7c23cc1175eef4919da569adec566cd9"
  },
  {
    "url": "assets/js/3.0f31d3ec.js",
    "revision": "f2c5b0a3e4c36e0fccf712b20d5fed68"
  },
  {
    "url": "assets/js/4.18323367.js",
    "revision": "3954530c2e8846938b053bc1f290e87e"
  },
  {
    "url": "assets/js/5.b315c784.js",
    "revision": "e013cfeadfbb9a252c996e3f1d591349"
  },
  {
    "url": "assets/js/6.1d1319c4.js",
    "revision": "fb039474278f3e8b5c5f70821628df7b"
  },
  {
    "url": "assets/js/7.c781437d.js",
    "revision": "47779bda1870bea5520fbfea0f74dd4c"
  },
  {
    "url": "assets/js/8.842a94eb.js",
    "revision": "faccfc7b5a5ef0203f079243daae6e54"
  },
  {
    "url": "assets/js/9.0d21ddf5.js",
    "revision": "907ab78c75f3a5d4d4ddeca9f599e576"
  },
  {
    "url": "assets/js/app.7f934088.js",
    "revision": "107849fce03d279a7e2da1702f63f772"
  },
  {
    "url": "css/css.html",
    "revision": "6eea4ed2c4b5e8a68dc702b64643f71a"
  },
  {
    "url": "css/index.html",
    "revision": "ac19a6e5dec277b2aeb7b23133426323"
  },
  {
    "url": "daily/day.html",
    "revision": "868321919f30dd6f72653036e63a133a"
  },
  {
    "url": "daily/index.html",
    "revision": "f8d37acce496fe7d457c72dfbe074be1"
  },
  {
    "url": "http/websocket.html",
    "revision": "8c37cdc8f32bcae6f805356fb2424af9"
  },
  {
    "url": "index.html",
    "revision": "0224221ec6478b5bb10b8d5ed4fbed5c"
  },
  {
    "url": "js/es6/es6.html",
    "revision": "99ba155bc53bea605d27f4eff1709871"
  },
  {
    "url": "js/index.html",
    "revision": "e8bfca9d00a03e6e24c36fffd5e2c034"
  },
  {
    "url": "js/Number/index.html",
    "revision": "790b03baceb72d2a213b99b82cd3edfc"
  },
  {
    "url": "logo.png",
    "revision": "c839755fe1fc1a86cc796fe7bb14be99"
  },
  {
    "url": "react-redux/index.html",
    "revision": "5be4ea92f1dc1c911b139ec45fdcd6c8"
  },
  {
    "url": "react-redux/Thefirstone.html",
    "revision": "bafb89f8e21bfea94337538f5f295377"
  },
  {
    "url": "react-redux/TheSecondChapter.html",
    "revision": "0315021ec0329ca5aa5a46160e1e079f"
  },
  {
    "url": "react/reactcycle.png",
    "revision": "a5aeb576536140c6ba6a9911681bb9bd"
  },
  {
    "url": "react/reactWenti1.gif",
    "revision": "9eecb7db59d16c80417c72d1e1f4fbf1"
  },
  {
    "url": "timg.jpeg",
    "revision": "200ee37c2f73fbb9c827120e3762721d"
  },
  {
    "url": "算法/index.html",
    "revision": "b0d1a99b41772ed1a5524f782b6ab0d3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
