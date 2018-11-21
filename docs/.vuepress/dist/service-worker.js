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
    "revision": "f5853e64b2e33310dfcec23b1533f115"
  },
  {
    "url": "assets/css/0.styles.4568b041.css",
    "revision": "e0cf3df08a028ac5a6343d0dcc58705f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.be3cc0f8.js",
    "revision": "50ee686e49329239f278577e5ba0d781"
  },
  {
    "url": "assets/js/3.227b7216.js",
    "revision": "bb8ba28a7e366fad6315821e0b6599f1"
  },
  {
    "url": "assets/js/4.85f7a170.js",
    "revision": "e6ae5b2840c8983c9d207bc138095d46"
  },
  {
    "url": "assets/js/5.23dcb9f6.js",
    "revision": "ba2de543eea467208d2c53aa35de859a"
  },
  {
    "url": "assets/js/6.b6dcfe9b.js",
    "revision": "ceb1d1cc38fdb2aeb5931fae28024b12"
  },
  {
    "url": "assets/js/7.882f0c22.js",
    "revision": "a1b65284434678d516b199832cae6d0c"
  },
  {
    "url": "assets/js/app.4bbd9322.js",
    "revision": "81bdf40e2973f2b03c4d7eca19c4a1ff"
  },
  {
    "url": "css/index.html",
    "revision": "98752b0fa345bc11d03463135ff6cebd"
  },
  {
    "url": "daily/day.html",
    "revision": "e9ff8252033a30b6cb3cc24f8b0b4799"
  },
  {
    "url": "daily/index.html",
    "revision": "fee5b1a9f2c96510fdd9bd5ba3dfcfdd"
  },
  {
    "url": "index.html",
    "revision": "8648d134fac720810df4bd3eeb8f8314"
  },
  {
    "url": "logo.png",
    "revision": "c839755fe1fc1a86cc796fe7bb14be99"
  },
  {
    "url": "timg.jpeg",
    "revision": "200ee37c2f73fbb9c827120e3762721d"
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
