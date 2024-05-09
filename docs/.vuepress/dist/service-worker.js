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
    "revision": "e55f370cf45063013a58c05717d615ab"
  },
  {
    "url": "assets/css/1.styles.e3286bb3.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/2.styles.a77fdcee.css",
    "revision": "882b90210428a5e19925166993d2352d"
  },
  {
    "url": "assets/css/4.styles.60768e10.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/5.styles.b59c6c07.css",
    "revision": "70410e197e5e83dd0344d35a300ed93f"
  },
  {
    "url": "assets/css/6.styles.66e35c59.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.70f0fe50.css",
    "revision": "9e7efbf4b2d130d7ac9a8cf692adf323"
  },
  {
    "url": "assets/img/refGetDom.fc1ee612.png",
    "revision": "fc1ee6125f2c85320d5e5ca1551a6582"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/img/vue_is.539084d1.png",
    "revision": "539084d14c00fa03af1098c6694e77f4"
  },
  {
    "url": "assets/img/vue_is2.3af45d28.png",
    "revision": "3af45d28977e7f14c1174e7e82e4c998"
  },
  {
    "url": "assets/js/1.e3286bb3.js",
    "revision": "c2e3de9cec18385db1042cf7f0377295"
  },
  {
    "url": "assets/js/10.6f286002.js",
    "revision": "2d49f7d732a8d6a1fbc97d54be7d3c24"
  },
  {
    "url": "assets/js/11.d1329707.js",
    "revision": "473e755f37cc61d518bc45358a004338"
  },
  {
    "url": "assets/js/12.3e93928b.js",
    "revision": "38ee1944e98aaebb975ec36d2cf39acb"
  },
  {
    "url": "assets/js/13.ed14cc98.js",
    "revision": "6c43bc329898512900500fe4349dfbe5"
  },
  {
    "url": "assets/js/14.453ae7dc.js",
    "revision": "58778cec96814bb2cb59b92350c3313b"
  },
  {
    "url": "assets/js/15.82bf67f2.js",
    "revision": "b2f84498e0c88e1e57dfb8c3951a3a16"
  },
  {
    "url": "assets/js/16.a6b755ae.js",
    "revision": "8f2d719cd46e074bc5d5bc69b9b0ed58"
  },
  {
    "url": "assets/js/17.6b4c516a.js",
    "revision": "fc9b7d547ff42f9894e695f25058d8a1"
  },
  {
    "url": "assets/js/18.4f7ae11e.js",
    "revision": "60c50c81632f150d8014192ecbd45394"
  },
  {
    "url": "assets/js/19.2a96b699.js",
    "revision": "eb3058a88f4c634c2fdd370844f7a806"
  },
  {
    "url": "assets/js/2.a77fdcee.js",
    "revision": "96c8d8f1efd388d99729b5d3fe996eb0"
  },
  {
    "url": "assets/js/20.9ae0cb5a.js",
    "revision": "f642b675fa3c64319c230da3cb9589d4"
  },
  {
    "url": "assets/js/21.c4f90f02.js",
    "revision": "62d0b7f57c71d3f155d15061b3206460"
  },
  {
    "url": "assets/js/22.9c001ed1.js",
    "revision": "fb659182f009fde34979b38936152fad"
  },
  {
    "url": "assets/js/23.dae35735.js",
    "revision": "dcb88b3fa5d9ab557f28c6dbff686c7a"
  },
  {
    "url": "assets/js/24.6f87d46b.js",
    "revision": "111545e11d4c24dfeea32c52c0382251"
  },
  {
    "url": "assets/js/25.2d0579af.js",
    "revision": "8d601c2bb150e67977cb8d765bf35a3c"
  },
  {
    "url": "assets/js/26.c43bcca3.js",
    "revision": "0a6f64917d18f324a2ebd9d84025c599"
  },
  {
    "url": "assets/js/27.b8eb569c.js",
    "revision": "3335ca33c254448020804d94c4c7aea8"
  },
  {
    "url": "assets/js/28.e9bc56df.js",
    "revision": "fce91960d5a314141af44227d5067e25"
  },
  {
    "url": "assets/js/3.7e3cf8f9.js",
    "revision": "722c13f43ecb7bd8ebea06904cc86f76"
  },
  {
    "url": "assets/js/4.60768e10.js",
    "revision": "b46ad5bfbfcfff5857c21f454d686e53"
  },
  {
    "url": "assets/js/5.b59c6c07.js",
    "revision": "beaa0cb4fc16b92a5decedff3ded6364"
  },
  {
    "url": "assets/js/6.66e35c59.js",
    "revision": "fc26687a551ccaf14fbfe028d267af7f"
  },
  {
    "url": "assets/js/7.f3b68680.js",
    "revision": "faf85bd3513792b183fd2dc18c40e0fc"
  },
  {
    "url": "assets/js/8.8a2b87fd.js",
    "revision": "eaf3751219caded3abac935a76c910cf"
  },
  {
    "url": "assets/js/9.9004b6bb.js",
    "revision": "5f2a8e543b946f388642666f453013c4"
  },
  {
    "url": "assets/js/app.70f0fe50.js",
    "revision": "8edc1428c4f70633ac4128936248c011"
  },
  {
    "url": "config/index.html",
    "revision": "a31e3601b88f0248c310766957c8246a"
  },
  {
    "url": "guide/es6.html",
    "revision": "d03656f5290da27cd030d801f171a36a"
  },
  {
    "url": "guide/index.html",
    "revision": "59e704c471d3d209f7b4d551dd34b37e"
  },
  {
    "url": "guide/interview.html",
    "revision": "334b24bdfd63f543a12c12e33c1c7a39"
  },
  {
    "url": "guide/jsBasics.html",
    "revision": "6a915bc373f2299b232313d90a7a359d"
  },
  {
    "url": "guide/server.html",
    "revision": "2ddf6713716c60016c559b8559549b40"
  },
  {
    "url": "guide/自己面试.html",
    "revision": "52a570bae4a73cc22ab3952ae1a0d41f"
  },
  {
    "url": "hero.png",
    "revision": "2de6824dc0734fff8454cb2a2705090b"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "a278cf5123f27efc69d77176c42ead74"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "vue/index.html",
    "revision": "f90a927b9603d07230928941cd3f4325"
  },
  {
    "url": "vue/tab.html",
    "revision": "ef0d037b3e47ece910fabf849d181b51"
  },
  {
    "url": "zh/config/index.html",
    "revision": "789f3a8342d8b0b94b25de57241f54ff"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "0c28a8cff90fc20222b4a2756b6e70a8"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "662a621c3708c3173244a066b44eba24"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "be89441ba0165c66f82df64e2f80e546"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "203619a12b41fee43a32fba8b40768a2"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "10878999c37a44b25ae076f5dc4bc1f9"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "6a0ef1a4bacd9b799aa9a974d5a34b33"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "de84b37838bc333d9499e40569be1571"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "1a97256a7697def640ef81af14bbb4ac"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "253d0189dd3c7c22bd3c8bcda3243757"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "8db5efc7f98e0b67fb950bef2fc2fb4b"
  },
  {
    "url": "zh/index.html",
    "revision": "3ef9e5be869703e21a2b37d5ce7326b5"
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
