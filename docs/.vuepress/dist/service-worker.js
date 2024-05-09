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
    "revision": "96eb20d2991187053c311e0f660c0179"
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
    "url": "assets/css/styles.2c835f9d.css",
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
    "url": "assets/js/app.2c835f9d.js",
    "revision": "7cbba708a18d15880c405c9480be6bd3"
  },
  {
    "url": "config/index.html",
    "revision": "900eb9f35b1dd189284f79424981fdaa"
  },
  {
    "url": "guide/es6.html",
    "revision": "3ac975b69522adf7dd280bf76563985e"
  },
  {
    "url": "guide/index.html",
    "revision": "51a608c8fd9773229fc77a046ac11744"
  },
  {
    "url": "guide/interview.html",
    "revision": "27e31ecade314664a007236d9d964164"
  },
  {
    "url": "guide/jsBasics.html",
    "revision": "cc33940bbe420a31c4d96082fe639e7b"
  },
  {
    "url": "guide/server.html",
    "revision": "812f2331b7ab43f9d3829c128089632d"
  },
  {
    "url": "guide/自己面试.html",
    "revision": "b76cca10e82c04cbf8d529dad708a7e4"
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
    "revision": "0f021b268558c8bbb4ca041a6e9b939f"
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
    "revision": "404531e62f7c9e275725abe50ab00ea2"
  },
  {
    "url": "vue/tab.html",
    "revision": "1d93a0c2d9ee671ff4e6d3049e278ba4"
  },
  {
    "url": "zh/config/index.html",
    "revision": "4e2dc78e71e753510ec1c17b788d3a92"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "ea3a0de6567d700533dea786f4acf006"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "fb21b82bd3962951c75d1dfc5ff6299a"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "2cdf468a902429c9ba540583581d39f7"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "edb90d59a9b1a11e2644da2a7540748a"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "9d62fdffbf48b310ae51fdc47027111f"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "52dc85ac12db8afa04296ef80409c5a5"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "1d3963d9e5b54047cb6249f8474b1514"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "d269e1cdf51127c76ffbff59129e18f3"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "de9ca4ba572448a459481fdf96f48e84"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "d83d732bf3d54ddbe76cf61bd9362a75"
  },
  {
    "url": "zh/index.html",
    "revision": "c3755538461e2370fa03d66a4f5ede38"
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
