(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{174:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("以下指南基于几个共同的假设：")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),e("ol",[e("li",[e("p",[t._v("确保你已经安装了 "),e("a",{attrs:{href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("firebase-tools"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),t._m(15)]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),e("ol",[e("li",[e("p",[t._v("首先先安装好 "),e("a",{attrs:{href:"https://www.npmjs.com/package/surge",target:"_blank",rel:"noopener noreferrer"}},[t._v("surge"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),t._m(22),t._v(" "),t._m(23)]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),e("ol",[e("li",[e("p",[t._v("首先要安装 "),e("a",{attrs:{href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("Heroku CLI"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("在这里"),e("OutboundLink")],1),t._v("创建一个 Heroku 账号。")])]),t._v(" "),t._m(26)]),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),e("p",[t._v("这就是你项目的配置，请参考 "),e("a",{attrs:{href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"}},[t._v("heroku-buildpack-static"),e("OutboundLink")],1),t._v(" 了解更多。")]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),e("hr"),t._v(" "),e("blockquote",[e("p",[t._v("原文："),e("a",{attrs:{href:"https://vuepress.vuejs.org/guide/deploy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://vuepress.vuejs.org/guide/deploy.html"),e("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署","aria-hidden":"true"}},[this._v("#")]),this._v(" 部署")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("将文档放置在项目的 "),e("code",[t._v("docs")]),t._v(" 目录中；")]),t._v(" "),e("li",[t._v("使用默认的构建输出位置（"),e("code",[t._v(".vuepress/dist")]),t._v("）。")]),t._v(" "),e("li",[t._v("VuePress 是在项目本地的依赖中安装的，并且配置如下的 npm scripts:")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"docs:build"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"github-页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-页面","aria-hidden":"true"}},[this._v("#")]),this._v(" GitHub 页面")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[e("p",[t._v("在 "),e("code",[t._v("docs/.vuepress/config.js")]),t._v(" 设置正确的 "),e("code",[t._v("base")]),t._v("。")]),t._v(" "),e("p",[t._v("如果你打算部署到 "),e("code",[t._v("https://<USERNAME>.github.io/")]),t._v("，就可以省略这一步，因为 "),e("code",[t._v("base")]),t._v(" 默认为 "),e("code",[t._v('"/"')]),t._v("。")]),t._v(" "),e("p",[t._v("如果你打算部署到 "),e("code",[t._v("https://<USERNAME>.github.io/<REPO>/")]),t._v("（也就是说你的仓库地址是 "),e("code",[t._v("https://github.com/<USERNAME>/<REPO>")]),t._v("），设置 base 为 "),e("code",[t._v('"/<REPO>/"')]),t._v("。")])]),t._v(" "),e("li",[e("p",[t._v("在你的项目中，创建一个有以下内容的 "),e("code",[t._v("deploy.sh")]),t._v(" 文件（对高亮行适当注释），然后运行它完成部署：")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 终止一个错误")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v(" -e\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 构建")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 进入生成的构建文件夹")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 如果你是要部署到自定义域名")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("# echo 'www.example.com' > CNAME")]),t._v("\n\n"),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add -A\n"),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 如果你想要部署到 https://<USERNAME>.github.io")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 如果你想要部署到 https://<USERNAME>.github.io/<REPO>")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),t._v("\n\n"),e("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" -\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("你可以在你的 CI 中，设置每次 push 代码时自动运行上述脚本。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"gitlab-页面和-gitlab-ci"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-页面和-gitlab-ci","aria-hidden":"true"}},[this._v("#")]),this._v(" GitLab 页面和 GitLab CI")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[e("p",[t._v("在 "),e("code",[t._v("docs/.vuepress/config.js")]),t._v(" 设置正确的 "),e("code",[t._v("base")]),t._v("。")]),t._v(" "),e("p",[t._v("如果你打算部署到 "),e("code",[t._v("https://<USERNAME>.gitlab.io/")]),t._v("，就可以省略这一步，因为 "),e("code",[t._v("base")]),t._v(" 默认为 "),e("code",[t._v('"/"')]),t._v("。")]),t._v(" "),e("p",[t._v("如果你打算部署到 "),e("code",[t._v("https://<USERNAME or GROUP>.gitlab.io/<REPO>/")]),t._v("（也就是说你的仓库地址是 "),e("code",[t._v("https://gitlab.com/<USERNAME>/<REPO>")]),t._v("），设置 base 为 "),e("code",[t._v('"/<REPO>/"')]),t._v("。")])]),t._v(" "),e("li",[e("p",[t._v("在 "),e("code",[t._v(".vuepress/config.js")]),t._v(" 中设置 "),e("code",[t._v("dest")]),t._v(" 到 "),e("code",[t._v("public")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("在你项目的根目录下创建一个名为 "),e("code",[t._v(".gitlab-ci.yml")]),t._v(" 的文件，无论何时你提交更改，它都会帮助你自动构建和部署：")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("9.11.1\n\n"),e("span",{attrs:{class:"token key atrule"}},[t._v("pages")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{attrs:{class:"token key atrule"}},[t._v("cache")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{attrs:{class:"token key atrule"}},[t._v("paths")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" node_modules/\n\n  "),e("span",{attrs:{class:"token key atrule"}},[t._v("script")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm install\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run docs"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n  "),e("span",{attrs:{class:"token key atrule"}},[t._v("artifacts")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{attrs:{class:"token key atrule"}},[t._v("paths")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" public\n  "),e("span",{attrs:{class:"token key atrule"}},[t._v("only")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"netlify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#netlify","aria-hidden":"true"}},[this._v("#")]),this._v(" Netlify")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("在 Netlify 中, 从 GitHub 创建一个新项目，使用以下设置：")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("strong",[t._v("构建命令：")]),t._v(" "),e("code",[t._v("npm run docs:build")]),t._v(" or "),e("code",[t._v("yarn docs:build")])]),t._v(" "),e("li",[e("strong",[t._v("发布目录：")]),t._v(" "),e("code",[t._v("docs/.vuepress/dist")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("点击部署按钮！")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"google-firebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-firebase","aria-hidden":"true"}},[this._v("#")]),this._v(" Google Firebase")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("在你项目的根目录下创建 "),s("code",[this._v("firebase.json")]),this._v(" 和 "),s("code",[this._v(".firebaserc")]),this._v("，写入以下内容：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("firebase.json")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{attrs:{class:"token property"}},[t._v('"hosting"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{attrs:{class:"token property"}},[t._v('"public"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"./docs/.vuepress/dist"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{attrs:{class:"token property"}},[t._v('"ignore"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v(".firebaserc")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{attrs:{class:"token string"}},[t._v('"projects"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{attrs:{class:"token string"}},[t._v('"default"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"<YOUR_FIREBASE_ID>"')]),t._v("\n "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("执行 "),s("code",[this._v("yarn docs:build")]),this._v(" 或 "),s("code",[this._v("npm run docs:build")]),this._v(" 之后，使用 "),s("code",[this._v("firebase deploy")]),this._v(" 命令来部署。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"surge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#surge","aria-hidden":"true"}},[this._v("#")]),this._v(" Surge")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("运行 "),s("code",[this._v("yarn docs:build")]),this._v(" 或 "),s("code",[this._v("npm run docs:build")]),this._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("要部署到 surge, 运行 "),s("code",[this._v("surge docs/.vuepress/dist")]),this._v(" 命令。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你也可以通过 "),s("code",[this._v("surge docs/.vuepress/dist yourdomain.com")]),this._v(" 来部署到 [自定义域名(http://surge.sh/help/adding-a-custom-domain)。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"heroku"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#heroku","aria-hidden":"true"}},[this._v("#")]),this._v(" Heroku")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("运行 "),s("code",[this._v("heroku login")]),this._v(" 并填写你的 Heroku 证书：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("heroku login\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("在你的项目根目录中，创建一个名为 "),s("code",[this._v("static.json")]),this._v(" 的文件，里面有下述内容：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("static.json")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"root"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"./docs/.vuepress/dist"')]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"5"}},[s("li",[this._v("配置 Heroku 的 git 远程仓库：")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("# 版本变化")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add "),e("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{attrs:{class:"token string"}},[t._v('"My site ready for deployment."')]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 用指定的名称创建一个新的 heroku 应用")]),t._v("\nheroku apps:create example\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 为静态站点设置构建包(buildpack)")]),t._v("\nheroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"6"}},[s("li",[this._v("部署你的站点")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("# 发布站点")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push heroku master\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 打开一个浏览器去opens a browser to view the Dashboard version of Heroku CI")]),t._v("\nheroku "),e("span",{attrs:{class:"token function"}},[t._v("open")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="deploy.md";s.default=n.exports}}]);