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
    "revision": "3565dc9591ef889b74c5fbb0283211e7"
  },
  {
    "url": "assets/css/0.styles.dcf02c12.css",
    "revision": "eea763ede21f053392739689dc0de9ec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.466e95a1.js",
    "revision": "3a7d22f3652be00e20424405aaae5d1e"
  },
  {
    "url": "assets/js/11.90ebe80c.js",
    "revision": "5af8a330a072a877210f1a1beeb831d1"
  },
  {
    "url": "assets/js/12.5cc71ea2.js",
    "revision": "fd6c0992eeb4df8ad64edca7ffb60c5c"
  },
  {
    "url": "assets/js/13.fbb98881.js",
    "revision": "8aa323b87c51847d2d28be82d0ae06ca"
  },
  {
    "url": "assets/js/14.fa2818bf.js",
    "revision": "e715ca8fe70b1949db708180b2a09e03"
  },
  {
    "url": "assets/js/15.0609d6e9.js",
    "revision": "c635a0b9b816c38437f221e043396f3f"
  },
  {
    "url": "assets/js/16.3b9495dc.js",
    "revision": "6eddbfba9d37374ed3ffccc43430bb07"
  },
  {
    "url": "assets/js/17.24e89053.js",
    "revision": "45ebec801eb285d53fc66fb488852bc1"
  },
  {
    "url": "assets/js/18.aa7f3af8.js",
    "revision": "e8306d11797bb5de52b8df2f9a77d5dd"
  },
  {
    "url": "assets/js/19.88d12d09.js",
    "revision": "e21346bbae4761a796e96849f5c13d88"
  },
  {
    "url": "assets/js/2.1b37ce37.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/20.3562e915.js",
    "revision": "30950cc5f5c321489347a203080f7513"
  },
  {
    "url": "assets/js/21.4c9937c4.js",
    "revision": "a53819fd540fc1e68c937191a83258fe"
  },
  {
    "url": "assets/js/22.704cc189.js",
    "revision": "a57304abb5eeb613da7dce5beae43579"
  },
  {
    "url": "assets/js/23.cbf80d80.js",
    "revision": "bfeab1a2eb9b7fcc8d199c7d3cc11ccb"
  },
  {
    "url": "assets/js/24.58e48f0e.js",
    "revision": "83100e2526e0f4769a75c6de10d17454"
  },
  {
    "url": "assets/js/25.1ad4cd70.js",
    "revision": "d69597c6934208804e7462b019f46c22"
  },
  {
    "url": "assets/js/26.5d650ac5.js",
    "revision": "70fc73b6a32d623d2fa3eeefe8fe9279"
  },
  {
    "url": "assets/js/27.e31b69cc.js",
    "revision": "4883493e9691137bf2889b50b20ea28f"
  },
  {
    "url": "assets/js/28.03927a2a.js",
    "revision": "1367b370da62a5f64707311ff7d6318a"
  },
  {
    "url": "assets/js/29.3f931ed7.js",
    "revision": "6b0c11483fe918d83964e8a3a60d9d37"
  },
  {
    "url": "assets/js/3.65ea4fa9.js",
    "revision": "be3cc62cfc611dafc154a45971de8d08"
  },
  {
    "url": "assets/js/30.d6e6dc69.js",
    "revision": "efe6aaf3bb8dcd6a59852b4f79768670"
  },
  {
    "url": "assets/js/31.3b212069.js",
    "revision": "7375611c584635bbcc6495baeff79429"
  },
  {
    "url": "assets/js/32.fa8feb48.js",
    "revision": "f262d53ffcb3cc768c8d3186ba374844"
  },
  {
    "url": "assets/js/33.a6d6b41f.js",
    "revision": "0a7f8ba8bd391ed85409b2dfd2e0384f"
  },
  {
    "url": "assets/js/4.0c259641.js",
    "revision": "b50befdbefa59c4a8b034f875ba6da4a"
  },
  {
    "url": "assets/js/5.d6b7ec2e.js",
    "revision": "00dd761b105a8fc645f2445058bcf52c"
  },
  {
    "url": "assets/js/6.e70b9666.js",
    "revision": "1770d9d83fef152aa91c9fcbc404743d"
  },
  {
    "url": "assets/js/7.06a9de35.js",
    "revision": "aeec43ae4416f19eed795179eb91297e"
  },
  {
    "url": "assets/js/8.d6a463bf.js",
    "revision": "3fadd77ec4fae2c244a68084d075f835"
  },
  {
    "url": "assets/js/9.b8ae89b4.js",
    "revision": "8e531bbe70bedf552e8e07ec1f48e9c6"
  },
  {
    "url": "assets/js/app.915e4527.js",
    "revision": "8bf9e1af0f0519135e274b0b4de962cb"
  },
  {
    "url": "config/index.html",
    "revision": "9196637ae2ea9f5328aee5dbb9ef6733"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "73c5300463f63d5d7632e7dd2463fedb"
  },
  {
    "url": "echarts/index.html",
    "revision": "b36d0972b687bb5ecf36ac0400567f94"
  },
  {
    "url": "echarts/tab.html",
    "revision": "721e63aea1c226e1b2345f86f9625177"
  },
  {
    "url": "guide/assets.html",
    "revision": "eb93d1bbe72409c6949baf6a0fbfbb33"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "747a50bfc9441c1dbc6f838cb476fcaf"
  },
  {
    "url": "guide/deploy.html",
    "revision": "ad5d1142f68a3ff837bd7711edfc06dc"
  },
  {
    "url": "guide/es6.html",
    "revision": "c7441ab3826c710c5abdb6436f431331"
  },
  {
    "url": "guide/i18n.html",
    "revision": "bce73106e77c3ca184bce22f94383ea3"
  },
  {
    "url": "guide/index.html",
    "revision": "4d6dab2d9dd97459b1004d7752365034"
  },
  {
    "url": "guide/jsBasics.html",
    "revision": "13eb88af71cad1af2e6636e04ac807f4"
  },
  {
    "url": "guide/markdown.html",
    "revision": "7f9a7f1348a76afc67925df7c3b61dbf"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "abc8deec77dd318c51e72cbeef5b3003"
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
    "revision": "405135f4042491611607be72b00eed57"
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
    "url": "zh/config/index.html",
    "revision": "5b87ba3642dc0c84e80ca13affe813c3"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "d52bb633f1866a47352f936e4a2e593b"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "62a69b5dab894268f6715c863fe40d07"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "f7e5f5cfdcc21f1fbbae290021b246d0"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "63a215b393b4f9916624c2af788107d3"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "ac15fd6fd11d1a5b4b3749821eb9c42c"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "45f98677da58c21f94906f189f31135d"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "5c590c56a9eaedc6aaaa8e6a7e032a41"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "f86dccb419a866d2994c63e133e9acc5"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "c39d80fe9f8dd29f80e958d5ebe8d5cd"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "9e38601fc9a746133a0cccc5a0c5a2ff"
  },
  {
    "url": "zh/index.html",
    "revision": "24457f4aa0acb8173655081ab69ba145"
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
