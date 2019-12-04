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
    "revision": "2787d1003576b5363a04a78032ef0585"
  },
  {
    "url": "assets/css/1.styles.33a89936.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/2.styles.9cd38d4a.css",
    "revision": "27c433152cbe829319ee7413419f35a3"
  },
  {
    "url": "assets/css/3.styles.a255bec8.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/4.styles.9c13cb07.css",
    "revision": "09594ef5e62fec13f0dc32db260b1082"
  },
  {
    "url": "assets/css/5.styles.0c1b482e.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/6.styles.5d3d5079.css",
    "revision": "70410e197e5e83dd0344d35a300ed93f"
  },
  {
    "url": "assets/css/7.styles.af8a30bc.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.31340f40.css",
    "revision": "6dc6e49e7c11a1c583a944e6671b91ee"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.33a89936.js",
    "revision": "23b0ef31b776dad7e417b06ef338d054"
  },
  {
    "url": "assets/js/10.dcf07da9.js",
    "revision": "a5ec8002a601189694ec144d0025a0c4"
  },
  {
    "url": "assets/js/11.105dd228.js",
    "revision": "3eea42da167689a29dde6ecfd7ccfba4"
  },
  {
    "url": "assets/js/12.e5255117.js",
    "revision": "94c258ee72421bb41fe768ca1e5a194f"
  },
  {
    "url": "assets/js/13.c3b224f1.js",
    "revision": "3e0a17fb74599a4887bf297a5f1d1d4d"
  },
  {
    "url": "assets/js/14.5d9d3584.js",
    "revision": "6bf5f68b75517e202ffdbf458987d8e5"
  },
  {
    "url": "assets/js/15.0406e2c6.js",
    "revision": "cb7b74b3a725ec89041109b9a14dea9d"
  },
  {
    "url": "assets/js/16.b464f83a.js",
    "revision": "96ea11e4461a27a89fdcd23ee4521e1d"
  },
  {
    "url": "assets/js/17.1ba153ce.js",
    "revision": "f9bb8b7034acb65894308099ceefdd89"
  },
  {
    "url": "assets/js/18.b04bade7.js",
    "revision": "91d4d9b8cf87176eb8452f7e19693749"
  },
  {
    "url": "assets/js/19.60379887.js",
    "revision": "125a2571a0e315eabe2ad19996cbc766"
  },
  {
    "url": "assets/js/2.9cd38d4a.js",
    "revision": "6e0c28a1fbecfae613ae491f5c903dd1"
  },
  {
    "url": "assets/js/20.8a27f3f7.js",
    "revision": "1f32844fa432588bdb42e190fd393da8"
  },
  {
    "url": "assets/js/21.b9317eef.js",
    "revision": "f4793cb5ea7bbe11b009984a7e796d60"
  },
  {
    "url": "assets/js/22.7ac7cdc8.js",
    "revision": "679bc30a477aafb23e8f238b4760fb30"
  },
  {
    "url": "assets/js/23.af9a3e85.js",
    "revision": "7f3a99f48ca45c7ffb4194fa0b9aa8ca"
  },
  {
    "url": "assets/js/24.d405e7ed.js",
    "revision": "698585f9d2f079ae2c1613cc85707ce0"
  },
  {
    "url": "assets/js/25.b3e1e67f.js",
    "revision": "10a28b713895795b5047e664b9f6bf49"
  },
  {
    "url": "assets/js/26.9267a523.js",
    "revision": "ae5f6947bcad05c221bcb252b6609340"
  },
  {
    "url": "assets/js/27.3cb9b0bd.js",
    "revision": "d0ee0a87c88311f3698ee2c335755c04"
  },
  {
    "url": "assets/js/28.f0cb024d.js",
    "revision": "42755e9525cf4ebd2a16299b30c99b52"
  },
  {
    "url": "assets/js/29.2a2619b9.js",
    "revision": "86c85ab350915e89256af86992e8ac3f"
  },
  {
    "url": "assets/js/3.a255bec8.js",
    "revision": "4a3e55d217446fb94e349d1e03c82c54"
  },
  {
    "url": "assets/js/30.3a367a38.js",
    "revision": "97318ddf026200855cc345fd079b1f30"
  },
  {
    "url": "assets/js/31.149b5282.js",
    "revision": "4f1909257e36d92a3c6944fc36a818d4"
  },
  {
    "url": "assets/js/32.f4d25df1.js",
    "revision": "df6e123bca97ff5aa71b4698f5b6a195"
  },
  {
    "url": "assets/js/4.9c13cb07.js",
    "revision": "15333d771fca362db58d74122ca2c858"
  },
  {
    "url": "assets/js/5.0c1b482e.js",
    "revision": "b5e5fcc32c34f3bd5e23ce71b298c0bf"
  },
  {
    "url": "assets/js/6.5d3d5079.js",
    "revision": "5362da44ee8086dbba5bd8941573f09c"
  },
  {
    "url": "assets/js/7.af8a30bc.js",
    "revision": "09982e6d64ed39c46253a91a1d35e1aa"
  },
  {
    "url": "assets/js/8.f33d325d.js",
    "revision": "53e6c0e541eb36a8292e4200c6466b63"
  },
  {
    "url": "assets/js/9.fccc6ed8.js",
    "revision": "c3598d0dcec917ddd73aef12ebfbe479"
  },
  {
    "url": "assets/js/app.31340f40.js",
    "revision": "103556ae2e0e3941c4b2d0e0cdfa6a1a"
  },
  {
    "url": "config/index.html",
    "revision": "a298d66f2252d41a1d319c6c6a28900b"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "a70e28bf01f2ffbae09d02257d719329"
  },
  {
    "url": "guide/assets.html",
    "revision": "f49ab381933ed0d21afb2f7a059954e2"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "f99742ab477d24bd53ad192eaed2c918"
  },
  {
    "url": "guide/deploy.html",
    "revision": "f98baaa9bd6641be04eb37005869a33b"
  },
  {
    "url": "guide/es6.html",
    "revision": "3a603c3769fd19f3303f9a9331ce4add"
  },
  {
    "url": "guide/i18n.html",
    "revision": "0d299ba2ac5b4ed892851dda76945185"
  },
  {
    "url": "guide/index.html",
    "revision": "a69117a7c19dfabd3137fd6fe826f053"
  },
  {
    "url": "guide/jsBasics.html",
    "revision": "34e7ad046d23e9ec405620f891a16395"
  },
  {
    "url": "guide/markdown.html",
    "revision": "acd6c4f43b7287a57fb4e0866ca06f1d"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "6b9747684d7188126a71b568017f2a73"
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
    "revision": "d64b1d67558ba30b40f3de4c2268765d"
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
    "revision": "9d458adadc2acf2a6bca74677a16e640"
  },
  {
    "url": "vue/tab.html",
    "revision": "4859d424d54ac992a353c5e2565c8bca"
  },
  {
    "url": "zh/config/index.html",
    "revision": "b8af30200597c52155bbe7142b0bd6ca"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "03a663559dba5d48450fa97716abb578"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "3bb48e8fdabf96bdbad3c16eb7ae71de"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "f0e60f56616f2ad1d064d2f4a55414ad"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "81c92f78e669279ec804169e343c8141"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "f684217d66d54c70089179d69857d7cb"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "db672ccb519cae899f18b5e3593d5803"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "81806533dc03a559d10dfadf261f924e"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "201927761dfe969d4573793796816a1a"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "bbd5644552fc1b3e0174a27fd3b88a09"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "384ac24f6a153ac1f17b46765b5e6e26"
  },
  {
    "url": "zh/index.html",
    "revision": "034bddc9e0d0906781b6ffff4a5512e9"
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
