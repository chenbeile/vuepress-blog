---
sidebar: auto
---

# 介绍

<Bit/>

ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖轻量级的矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。

在项目中为了离线卡片的开发，需要多次使用echart图表，在项目过程中遇到了许多了问题，查了很多资料，踩了许多坑，现把echarts图表开发经验写成文档记录下来，同时总结一下项目开发的一些思路。

## 需求(project requirements)

VuePress 网站实际上是由 [Vue](http://vuejs.org/), [Vue Router](https://github.com/vuejs/vue-router) 和 [webpack](http://webpack.js.org/) 驱动的单页面应用程序。如果你以前使用过 Vue，那么在编写或开发自定义主题时（甚至可以使用 Vue DevTools 来调试你的自定义主题！），你会融入到熟悉的开发体验中！

在构建过程中，我们会创建应用程序的服务器渲染版本，并且实际上是通过访问每个路由，来渲染相应的 HTML。这种方式受到 [Nuxt](https://nuxtjs.org/) 的 `nuxt generate` 命令以及 [Gatsby](https://www.gatsbyjs.org/) 等其他项目的启发。

每个 markdown 文件都使用 [markdown-it](https://github.com/markdown-it/markdown-it) 编译为 HTML，然后作为 Vue 组件的模板进行处理。这允许你直接在 markdown 文件中使用 Vue，在需要嵌入动态内容时，这种使用方式非常有用。

## 特性(features)

- [Tab页签切换组件](./tab.md)，针对技术文档进行了优化
- 一个默认主题包括：
  - 响应式布局
  -built-in-search)
   - [Algolia 搜索](../default-theme-config/README.md#algolia-search)
  - 可定制的[导航栏](../default-theme-config/README.md#导航栏-navbar)和[侧边栏](../default-theme-config/README.md#侧边栏-sidebar)
  - [自动生成的 GitHub 链接和页面编辑链接](../default-theme-config/README.md#git-仓库和编辑链接)

## 待实现特性(todo)

VuePress 的开发仍在进行中。有几件目前不支持，但计划做的功能：

- 插件支持
- 博客支持

欢迎贡献！

## 为什么不使用下面这些工具？

### Nuxt

VuePress 能做的事情，Nuxt 也同样能够实现，但是，它是为构建应用程序而设计的。而 VuePress 专注于以内容为中心的静态网站，并且为开箱即用的技术文档，提供量身定制的功能。

### Docsify / Docute

二者都是伟大的项目，也都是以 Vue 驱动。但它们完全是运行时驱动(runtime-driven)的项目，因此不适合 SEO 优化。如果你不关心 SEO 优化，也不想因为安装依赖而扰乱心神，这些仍然是不错的选择。

### Hexo

Hexo 一直在为 Vue 文档提供服务 - 事实上，离我们的主站完全迁移到 VuePress，可能还要经过一段时间。其中最大的问题是，它的主题系统是非常静态和基于字符串的 - 我们确实需要利用 Vue 来实现布局和交互。此外，无法对 Hexo 的 markdown 渲染，进行极其灵活的配置。

### GitBook

我们大部分的子项目文档中已经使用了 GitBook。GitBook 的主要问题是有大量文件时，它的开发重载性能简直令人无法容忍。它的默认主题也只有一个非常有限的导航结构，并且主题系统也不是基于 Vue 的。GitBook 背后的团队也更注重将其打造为一个商业产品，而不是开源工具。
