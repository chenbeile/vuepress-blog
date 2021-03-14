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
    "revision": "b909eaacc3edee3a668ed2f31cd17e3c"
  },
  {
    "url": "assets/css/1.styles.80910d5a.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/2.styles.0da5fd9a.css",
    "revision": "27c433152cbe829319ee7413419f35a3"
  },
  {
    "url": "assets/css/4.styles.0dafd21f.css",
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
    "url": "assets/css/styles.11b76bd0.css",
    "revision": "6dc6e49e7c11a1c583a944e6671b91ee"
  },
  {
    "url": "assets/img/refGetDom.fc1ee612.png",
    "revision": "fc1ee6125f2c85320d5e5ca1551a6582"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
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
    "url": "assets/js/1.80910d5a.js",
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
    "url": "assets/js/14.7314b241.js",
    "revision": "1f1e606a95b633e64069a7015ff9b7bd"
  },
  {
    "url": "assets/js/15.f12c9d14.js",
    "revision": "f8f03a095ea10768ae87db956c1ed8fb"
  },
  {
    "url": "assets/js/16.bcee0f62.js",
    "revision": "950844395a2e40b469488ce2e8db7717"
  },
  {
    "url": "assets/js/17.5ed79d69.js",
    "revision": "34b2f54be126b492f76e109472766ae7"
  },
  {
    "url": "assets/js/18.c81f2829.js",
    "revision": "1b78c0c317f8a08d3b82cfe8ebab6512"
  },
  {
    "url": "assets/js/19.7c7d2afb.js",
    "revision": "27dbaab1637ebcac8de2a25e9fcaf8b2"
  },
  {
    "url": "assets/js/2.0da5fd9a.js",
    "revision": "fd0dac51515b070c88c497f650a3eeb1"
  },
  {
    "url": "assets/js/20.b75c6ae4.js",
    "revision": "8ddd007196beb49de65db001f1fe6856"
  },
  {
    "url": "assets/js/21.dcf87665.js",
    "revision": "1b90d85579be07d7aa11cba12b54cf85"
  },
  {
    "url": "assets/js/22.fdc141ef.js",
    "revision": "600105d4fe2d288cc640f923bbecc139"
  },
  {
    "url": "assets/js/23.2f6937c2.js",
    "revision": "872ba4400ce458e5d4c163ceba09429f"
  },
  {
    "url": "assets/js/24.5be24d9a.js",
    "revision": "dc8fbde52b952ae6fea09b18bd925c15"
  },
  {
    "url": "assets/js/25.907a1e2e.js",
    "revision": "619c1ae736020e2d8d9fe42baad5f6b6"
  },
  {
    "url": "assets/js/26.133c68e8.js",
    "revision": "d2e0be1de1f74cd68fa84064adba6e4a"
  },
  {
    "url": "assets/js/3.ba244a62.js",
    "revision": "1812dfb30c6b36b3a7d660b6db51b002"
  },
  {
    "url": "assets/js/4.0dafd21f.js",
    "revision": "17aad93da300df942888f9d0c94da99b"
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
    "url": "assets/js/7.fdc8cefb.js",
    "revision": "faf85bd3513792b183fd2dc18c40e0fc"
  },
  {
    "url": "assets/js/8.0fb413e0.js",
    "revision": "eaf3751219caded3abac935a76c910cf"
  },
  {
    "url": "assets/js/9.483c43ab.js",
    "revision": "5f2a8e543b946f388642666f453013c4"
  },
  {
    "url": "assets/js/app.11b76bd0.js",
    "revision": "66aa0fd840d66df8a547a6fdad2dd7bb"
  },
  {
    "url": "config/index.html",
    "revision": "4bff2048f545a5d426945735871b3784"
  },
  {
    "url": "guide/es6.html",
    "revision": "952800a850e2a4afdd4d5624b1f3ca28"
  },
  {
    "url": "guide/index.html",
    "revision": "d56b6cb10e9506e299c6967d75d8beb8"
  },
  {
    "url": "guide/jsBasics.html",
    "revision": "1078fb39955f66e2ed223841f3bd83b3"
  },
  {
    "url": "guide/server.html",
    "revision": "8daba077fd2bba18768a440549d5cac9"
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
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "8ab2db44b3d83e7390d1d93c136d17a3"
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
    "revision": "052f137f4515e29a9752ddf52b8c1006"
  },
  {
    "url": "vue/tab.html",
    "revision": "6cab42ca07e578e3370bf07a5b66ecb8"
  },
  {
    "url": "zh/config/index.html",
    "revision": "0364acaee9b8f1389fa21f140eaae565"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "6b55d3f69caf5f263237e1d4ca6bc835"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "e10fba0e8887116899f47a2a656fed12"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "19e44304e27269d94e31f3602d4fdd94"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "2434b8c915b317d1b34064f96a0ef261"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "676ea66cd4cd21f0bc1401a084196250"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "181afcf5b4fa4d96af5ece34661287ed"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "36d828b2afc2696cf6e9b05e81206bce"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "7d6f45d919b54386079755d9d1bb50a9"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "65effce0ad5c8672b5e759ad9e724697"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "998bd1b74d578c8b13992ae2e40410ed"
  },
  {
    "url": "zh/index.html",
    "revision": "37cdaca3e59b259240ad473d1c7805f5"
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
