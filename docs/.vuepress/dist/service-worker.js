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
    "revision": "d01fb44be87875c66c69cb0076517125"
  },
  {
    "url": "assets/css/1.styles.aa53c7e1.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/2.styles.33d0e36f.css",
    "revision": "27c433152cbe829319ee7413419f35a3"
  },
  {
    "url": "assets/css/3.styles.54ee44e1.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/4.styles.115976e9.css",
    "revision": "09594ef5e62fec13f0dc32db260b1082"
  },
  {
    "url": "assets/css/6.styles.006b3237.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/7.styles.e06d14b9.css",
    "revision": "70410e197e5e83dd0344d35a300ed93f"
  },
  {
    "url": "assets/css/8.styles.1e862c18.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.d697d4bf.css",
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
    "url": "assets/js/1.aa53c7e1.js",
    "revision": "666cf2a4fef5319b12c1f5e4ba450427"
  },
  {
    "url": "assets/js/10.50dde0d0.js",
    "revision": "5f9d9d9f4e6e58e427d3128358e62676"
  },
  {
    "url": "assets/js/11.6b297f9c.js",
    "revision": "52cf369678a02f1e702fc0ca730be8a0"
  },
  {
    "url": "assets/js/12.00457e2c.js",
    "revision": "f193b73eddfe39f4ca1692e67038a5c5"
  },
  {
    "url": "assets/js/13.fb965648.js",
    "revision": "9622a07f9022f0f1dccb49cefd058931"
  },
  {
    "url": "assets/js/14.0194c10b.js",
    "revision": "cb3264e018aba1dc254ab9ac98261c16"
  },
  {
    "url": "assets/js/15.efdc5149.js",
    "revision": "e22710b5a9cffdae36d5d26dbf91e2a1"
  },
  {
    "url": "assets/js/16.c45da472.js",
    "revision": "0a75fc22b83bce07efb8d8e0fbf34711"
  },
  {
    "url": "assets/js/17.dde63367.js",
    "revision": "574ae3413d5519635070f23136216ff5"
  },
  {
    "url": "assets/js/18.ea0342ad.js",
    "revision": "0a84fe8b76d8cd2f53e7f06f9704d0a7"
  },
  {
    "url": "assets/js/19.75df8400.js",
    "revision": "4b5471b44e70ac5404501fa319e4a66c"
  },
  {
    "url": "assets/js/2.33d0e36f.js",
    "revision": "8870968def08f84087684b0bcf9cc24f"
  },
  {
    "url": "assets/js/20.8e93221b.js",
    "revision": "7ed796320bc4646a192b1de6c3eca262"
  },
  {
    "url": "assets/js/21.1a0984f4.js",
    "revision": "1dc4a6cf750e3cc30530fdc260be07d6"
  },
  {
    "url": "assets/js/22.b4930e0f.js",
    "revision": "03da92353ff43dcacbe1a710c00bab04"
  },
  {
    "url": "assets/js/23.2c807edc.js",
    "revision": "3887ab97e6c1a187c9c43bd58ba2b840"
  },
  {
    "url": "assets/js/24.8ab22f8d.js",
    "revision": "41e303a65f627d901a81b23537d35081"
  },
  {
    "url": "assets/js/25.6de64bad.js",
    "revision": "7da0a7217657a6e1ca27976e8dd15189"
  },
  {
    "url": "assets/js/26.95a891ab.js",
    "revision": "0f708f44add51de5731ffc4beaea4e2d"
  },
  {
    "url": "assets/js/27.a0a151be.js",
    "revision": "c80f43d319aa042b44b06ac481d4ff41"
  },
  {
    "url": "assets/js/28.c7714655.js",
    "revision": "4b6f77cc272ecaf0691cc844a018778a"
  },
  {
    "url": "assets/js/29.883cc32d.js",
    "revision": "129c0a0a9fc32869b8ba213fbd355be7"
  },
  {
    "url": "assets/js/3.54ee44e1.js",
    "revision": "64fffecc4561ee4569c9d00992021e63"
  },
  {
    "url": "assets/js/30.9523617d.js",
    "revision": "958cb91232e663c85e0015841e75d5a7"
  },
  {
    "url": "assets/js/31.deef16f9.js",
    "revision": "f1d099d747cbaabf85524cd72696397a"
  },
  {
    "url": "assets/js/32.6ec9b62e.js",
    "revision": "1726498e0d25441ef9eb3ce5d53241c3"
  },
  {
    "url": "assets/js/4.115976e9.js",
    "revision": "25d680e83f42e7ba291a437f21f12b78"
  },
  {
    "url": "assets/js/5.eb66771e.js",
    "revision": "f2b0dc72751cc9b62d070d6efef51a01"
  },
  {
    "url": "assets/js/6.006b3237.js",
    "revision": "2d8b336fa755f404777401510cd395a7"
  },
  {
    "url": "assets/js/7.e06d14b9.js",
    "revision": "288499c1e7c635bae2a908fb6470ca4f"
  },
  {
    "url": "assets/js/8.1e862c18.js",
    "revision": "2fe79bc32afd9f3fb985c9aff527c884"
  },
  {
    "url": "assets/js/9.7667def5.js",
    "revision": "104646786bcd103c108dabf9a0355850"
  },
  {
    "url": "assets/js/app.d697d4bf.js",
    "revision": "3bf124c37ca9b956fb2d3c9344c6748a"
  },
  {
    "url": "config/index.html",
    "revision": "efa21b8905867091aa2dceebb6641abc"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "c491164df2ff4dfe7f97138363a609e8"
  },
  {
    "url": "guide/assets.html",
    "revision": "0dc3fb2c378342d988b4326927f76408"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "036e320cc39f23b8739367f9dc907a43"
  },
  {
    "url": "guide/deploy.html",
    "revision": "a2fab59a59eab2dcca51c4cd62c5809f"
  },
  {
    "url": "guide/es6.html",
    "revision": "401221005d5eb2ca48893c9ea871296f"
  },
  {
    "url": "guide/i18n.html",
    "revision": "5f1dc75d86811fa4fc2716a4cf708f77"
  },
  {
    "url": "guide/index.html",
    "revision": "6125ba25f4fb344509758e40acc3802d"
  },
  {
    "url": "guide/jsBasics.html",
    "revision": "88002e6ebda287ab51f02db5f65abe6c"
  },
  {
    "url": "guide/markdown.html",
    "revision": "adbeb2b7f4bd4a5f2ad563928bef370e"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "6cf2b5d9bd8235b1b5893ea645781b82"
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
    "revision": "8f7a1d6f8f96665e289a6d8e78fe58d0"
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
    "revision": "de4acd0d46389e5886cb8530801a033f"
  },
  {
    "url": "vue/tab.html",
    "revision": "44ecc9639af04add2056a1f7effffe9d"
  },
  {
    "url": "zh/config/index.html",
    "revision": "18a5e47749aa1fdbc64571dd691fc206"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "96656728ad5592da6474c9a1eda34729"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "a5ae21dfb493aa4ef0207bb52960555a"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "b0c37c6de4e801933b9773cf26b47e72"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "a7956eff76175ae10173940b2e123fa2"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "ad0696fb3abddaee4077af2ba02cf02c"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "635d2beb683412e7d96de182e04a1300"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "1fb502c7a98bd8ef085f7828d8405cb0"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "87be8fb8a38491cbb3015c50964de211"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "4874a408135ed86df9d62fb5945cb58c"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "1524ef7f94e7752a404dc630481e4442"
  },
  {
    "url": "zh/index.html",
    "revision": "603e1f389dc7d6266e32dd4e1c1148e5"
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
