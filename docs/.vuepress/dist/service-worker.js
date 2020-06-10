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
    "revision": "a14ad41e6ab80f14fa4c7af98914c846"
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
    "url": "assets/css/styles.424101be.css",
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
    "url": "assets/js/app.424101be.js",
    "revision": "4944e70c67dfa4c69aa4f40326908519"
  },
  {
    "url": "config/index.html",
    "revision": "8b738b97c058537c6dec65eaa044c653"
  },
  {
    "url": "guide/es6.html",
    "revision": "ac7e883d45b2c31292cb1cce6cbb24be"
  },
  {
    "url": "guide/index.html",
    "revision": "5f358734498bd54ebfe5b0378da93640"
  },
  {
    "url": "guide/jsBasics.html",
    "revision": "7ea0e0c263c3161912fa6f120a1618f2"
  },
  {
    "url": "guide/server.html",
    "revision": "9ceb140674fd4b8a470803e50cd3671a"
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
    "revision": "fc138d70b1b705376716a565c507aebe"
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
    "revision": "f4b18a702da90f7f2cf6948f05512a2f"
  },
  {
    "url": "vue/tab.html",
    "revision": "cfba616b42febeee7786adf201e6fbbf"
  },
  {
    "url": "zh/config/index.html",
    "revision": "eb4726d9cd1f52c0dfc7071bde976210"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "be216456293e9854665a870f53b770d1"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "fe9577bf3b3d7b79bb4a7c73fcdc754a"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "8c1dc58a3059c284eda675692bf94bac"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "c408e2e313d7abb35c8fcf45987a5c62"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "4f972b0322042d03f12c5f4ca3ffe38e"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "43bdd89875dcf20e8deddc85185862f0"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "c6d3eef377e571eb77c7f5c070ba3af3"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "9b6046772746d1f7d0ce32c32b774feb"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "cafc4733d695c986504f798d31e0202e"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "35357659c6a872590fe501d5ffafb97f"
  },
  {
    "url": "zh/index.html",
    "revision": "c9afb9ca071ae602cd98ab5766f81018"
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
