---
layout:         post
title:          "SVG Icons FTW!"
subtitle:       "What I learned from creating an SVG iconset"
date:           2016-07-31
author:         Dan Klammer
color:          "77, 87, 114"
hero-image:     /img/articles/2016-07-31-svg-icons-ftw/svg-icons-ftw-hero.png
permalink:      /articles/svg-icons-ftw/
modulejs:
    - modules/bytesize-demo.js
---

All 75+ icons measure in at 9KB minified (2KB in SVGZ). Each icon is hand-coded along a 32x32 grid and uses stroke to allow for maximum style flexibility. Since these icons are using strictly `stroke`, you can adjust the weight (stroke-width), color, size, and if you want the edges to be round or square.

While designing and coding these icons, I tried to place as few points as possible to keep the shapes simple but also to reduce on file size.

<div class="align-center p2">
    <svg viewBox="0 0 32 32" width="128" height="128" fill="none">
      <path stroke="SlateGray" stroke-width="4%" stroke-linejoin="round"
        d="M2 4 L30 4 30 22 16 22 8 29 8 22 2 22 Z" />
    </svg>
</div>


{% highlight html %}
<svg viewBox="0 0 32 32" width="128" height="128" fill="none">
  <path stroke="SlateGray" stroke-width="4%" stroke-linejoin="round"
    d="M2 4 L30 4 30 22 16 22 8 29 8 22 2 22 Z" />
</svg>
{% endhighlight %}


Dropping these icons directly in your HTML gives you the ability to manipulate the icon properties since everything is accessible through the DOM. While you do miss out on the advantage of caching when linking to a remote file, you do shave off a request. And in this case, the filesize is so small a direct embed is the way to go.

### **Give it a spin**

{% include modules/bytesize-demo.html %}

<div class="py4 align-center">
    <a href="https://github.com/danklammer/bytesize-icons" class="btn dim underline-none text-shadow-light box-shadow-light px3 py2 br6 pressable">
        Checkout the project on GitHub
    </a>
</div>