---
layout:         post
title:          "SVG Stroke FTW!"
subtitle:       "The flexibility of using SVG stroke for web icons"
date:           2016-08-04
author:         Dan Klammer
color:          "77, 87, 114"
hero-image:     /img/articles/2016-08-04-svg-stroke-ftw/svg-stroke-ftw-hero.png
permalink:      /articles/svg-stroke-ftw/
modulejs:
    - modules/bytesize-demo.js
---

In the last year or so, I took on a project to [learn the intricacies of SVG], more specifically SVG `paths` and hand-coding them. I was inspired by the idea when I saw [Brent Jackson]'s [Geomicons], a minimal iconset built from the ground up for performance.

It's great, I can drop these few readable lines of code in my document, shave off a request, easily adjust the color and size with a single attribute or class, and modify any of these properties since they are accessible through the DOM. The flexibility is fantastic!

After experimenting more, I learned SVG `stroke` is another property definitely worth utilizing... and perfect for line icons. Not only can you limit the amount of points on a path without having to outline a shape, you can simply change the weight with `stroke-width` as well as the shape of the line caps and the line joins with `stroke-linecap` and `stroke-linejoin`. 

I ended up creating 75+ line icons using strictly `stroke` to define the shape. Each icon is hand-coded along a 32x32 grid with a 2 point margin allowing for a maximum of 4px (or 12.5%) `stroke-width`. 4px seems small but it's relative to the 32x32 grid. I tried to place as few points as possible to keep the shapes simple but also to reduce on file size.

<div class="align-center p2">
    <svg viewBox="0 0 32 32" width="128" height="128" fill="none">
      <path stroke="SlateGray" stroke-width="1px" stroke-linejoin="round"
        d="M2 4 L30 4 30 22 16 22 8 29 8 22 2 22 Z" />
    </svg>
</div>

{% highlight html %}
<svg viewBox="0 0 32 32" width="128" height="128" fill="none">
  <path stroke="SlateGray" stroke-width="1px" stroke-linejoin="round"
    d="M2 4 L30 4 30 22 16 22 8 29 8 22 2 22 Z" />
</svg>
{% endhighlight %}


<h4 class="pt6"><strong>There are a few caveats</strong></h4>

One of the bigger caveats is the antialiasing, especially for screens without subpixels. If you want to pixel-hint as much as possible, I recommend using `stroke-width` increments of 0.5px or 1.5625%. Regardless of what size you set the `stroke-width`, I recommend using `overflow: visible` incase the linecap edge falls just outside the `viewBox`.

By nature line icons are not meant to be tiny. I recommend not going any smaller than 24px in width/height.

While you do miss out on caching when using these icons inline, but since they have such a small footprint I believe it's ok for them to be loaded with the HTML each time. Some people may disagree, but it really comes down to what kind of site you have and how many icons you plan to use. If you do want to utilize the cache, you are able to link the SVG externally and then render the icon with SVG `use`. You can learn more about the `use` tag on [CSS-Tricks].


#### **Give it a spin**

{% include modules/bytesize-demo.html %}

<div class="py4 align-center">
    <a href="https://github.com/danklammer/bytesize-icons" class="btn dim underline-none text-shadow-light box-shadow-light px3 py2 br6 pressable">
        Checkout the project on GitHub
    </a>
</div>

[learn the intricacies of SVG]: http://svgpocketguide.com/
[Brent Jackson]: http://jxnblk.com/
[Geomicons]: http://geomicons.com/
[SVG spec]: https://www.w3.org/TR/SVG/
[CSS-Tricks]: https://css-tricks.com/svg-use-with-external-reference-take-2/