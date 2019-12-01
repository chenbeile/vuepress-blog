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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cfcb0687fa832753fbe5af518cbb5f72"
  },
  {
    "url": "assets/css/0.styles.734fc1ad.css",
    "revision": "9ad3292415d67da211917771de945e82"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.867a78b9.js",
    "revision": "01ad0d788f1ae19d96967c70751cff36"
  },
  {
    "url": "assets/js/11.07cdc74c.js",
    "revision": "4ac015d2d19f8cd9bad6e7ce08c40cb3"
  },
  {
    "url": "assets/js/12.d59724c4.js",
    "revision": "b4b4424504f030d767a7ca82168c08f7"
  },
  {
    "url": "assets/js/13.0b35bfc1.js",
    "revision": "5f832fa4221563c9549b1b3772a47509"
  },
  {
    "url": "assets/js/14.781e4faf.js",
    "revision": "6595c8031eb2ed0d08df024a415d1a4c"
  },
  {
    "url": "assets/js/15.7130ad50.js",
    "revision": "43e09b7eae8427cc7c9a95ee20d2006a"
  },
  {
    "url": "assets/js/16.37cfb88c.js",
    "revision": "2b791e6f0467582434c2234388699ac8"
  },
  {
    "url": "assets/js/17.b1684473.js",
    "revision": "df46207a55c519f043fb5be13ecc1490"
  },
  {
    "url": "assets/js/18.ed20008f.js",
    "revision": "9ea2f0153d26575949c5b529b452bef9"
  },
  {
    "url": "assets/js/19.10bee9ae.js",
    "revision": "fc52079f80ce75ece219766025880490"
  },
  {
    "url": "assets/js/2.1b37ce37.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/20.29a12021.js",
    "revision": "0bb3542cf57103cf432930948f811a4d"
  },
  {
    "url": "assets/js/21.3f7965f6.js",
    "revision": "6cc4c1dd58d81cde24843964d94fe030"
  },
  {
    "url": "assets/js/22.6754a6a8.js",
    "revision": "746745024fa70dd01e32b49071ff5ce8"
  },
  {
    "url": "assets/js/23.b6f619ba.js",
    "revision": "50b733b8287812491f3317eeab9c4a0d"
  },
  {
    "url": "assets/js/24.ceae37db.js",
    "revision": "ca5723c42032374f53d43f9513ed11b2"
  },
  {
    "url": "assets/js/25.25d45637.js",
    "revision": "fee2e34cca3e4b9ca9d53b77c546ac48"
  },
  {
    "url": "assets/js/26.8a58f004.js",
    "revision": "71bb31267e9f4eb29bec62509325188d"
  },
  {
    "url": "assets/js/27.ae37a208.js",
    "revision": "a37df9b1b4e7f175142cce6da308e832"
  },
  {
    "url": "assets/js/28.0ebc1779.js",
    "revision": "f53724f99a4ae0558d2a59f143353a63"
  },
  {
    "url": "assets/js/29.52aaeebc.js",
    "revision": "ebaeadebdab0156aafa1590860c9e1a2"
  },
  {
    "url": "assets/js/3.5a592fff.js",
    "revision": "67aa7b2f89db18046b1cf3c9da2ab654"
  },
  {
    "url": "assets/js/30.15c60950.js",
    "revision": "5dd0b6bab65b8a542032a959dae9fd7d"
  },
  {
    "url": "assets/js/31.0a9ec24a.js",
    "revision": "eecd4c8e61c8cc219c7729ba99ebb870"
  },
  {
    "url": "assets/js/32.f087480b.js",
    "revision": "7da8b13c383b8397229ba3717381bd35"
  },
  {
    "url": "assets/js/33.51c30854.js",
    "revision": "32159dbe6e86cbb923e2e68846ce4386"
  },
  {
    "url": "assets/js/4.0790067b.js",
    "revision": "74b3b2cd22a5d4d155a5b676d1e7763f"
  },
  {
    "url": "assets/js/5.4765586c.js",
    "revision": "4b3da862502ef70c19e5bb00e0a1c29f"
  },
  {
    "url": "assets/js/6.970248ae.js",
    "revision": "c26cb61b19041b8224dfe6191805dd88"
  },
  {
    "url": "assets/js/7.72608863.js",
    "revision": "74ed7b1f97cb8706989aa8baf643b01b"
  },
  {
    "url": "assets/js/8.c4b9b315.js",
    "revision": "1ed91643895ceb9a981424df1100fdd8"
  },
  {
    "url": "assets/js/9.5688231f.js",
    "revision": "c79728e080f6f0dc7513d7d27dddf829"
  },
  {
    "url": "assets/js/app.25257df4.js",
    "revision": "7643e90d580048b71bf83e44db3b9910"
  },
  {
    "url": "config/index.html",
    "revision": "8ac821ba14f80b058c20853669c7460b"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "ce32a256f1705aea9d5cfb570971d020"
  },
  {
    "url": "guide/assets.html",
    "revision": "aa1a5c57270a3ed8f90c3c521dfebadf"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "367d2aecdeff87516acf6759e1f7740e"
  },
  {
    "url": "guide/deploy.html",
    "revision": "9970e0fb2b9f242ee820f6748e197df5"
  },
  {
    "url": "guide/es6.html",
    "revision": "89666fddc4a2a504340322681a6af7e5"
  },
  {
    "url": "guide/i18n.html",
    "revision": "0e091bd0ef29f564fe86734b4c4b4582"
  },
  {
    "url": "guide/index.html",
    "revision": "96d79945dfd1ae9f00a2b516efdede48"
  },
  {
    "url": "guide/jsBasics.html",
    "revision": "a927336b0f18fd0becece6ba794ab5ba"
  },
  {
    "url": "guide/markdown.html",
    "revision": "03885fd11b8f82ca89b9131c95e72281"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "d18bf20da83d1cb41ec9fe7963041da3"
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
    "revision": "f54451d46fbffeba64cb2f2974cac7ba"
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
    "revision": "25d4deb092b3c13bade2f838aa635939"
  },
  {
    "url": "vue/tab.html",
    "revision": "ed35c8f1600d398a922a80d305420ce4"
  },
  {
    "url": "zh/config/index.html",
    "revision": "2b367fc6a94374f62c2d4dacf3886d7e"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "998a10115bde547f8fe8962b42c7e6d6"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "e28be0650ad338461d7d91c4fe615961"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "6b26909375f87fe686884358f0118fdb"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "0fa4fb62c740b85636cfaa750ab5c00f"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "05cf23d24313233f23cecd3e3a187303"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "01a206be232b5d4c753bc5e61664a89a"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "2d5fec589404958804493e378c50e8e6"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "b95d8a5368674363e49258ee49ea6e68"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "522ae89a11834c2f8cf3be86ba9ad249"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "711f4bd56cea64f3870b3e135c92db61"
  },
  {
    "url": "zh/index.html",
    "revision": "ce82c21c13b9e94e125463c84e26cdbf"
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
