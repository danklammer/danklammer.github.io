---
layout:         post
title:          "Inline SVG FTW!"
subtitle:       "Why using inline SVG for icons is so rad"
date:           2016-07-31
author:         Dan Klammer
color:          "77, 87, 114"
hero-image:     /img/articles/2016-07-31-inline-svg-ftw/inline-svg-ftw-hero.png
permalink:      /articles/inline-svg-ftw/
modulejs:
    - modules/bytesize-demo.js
---

In the last year or so, I took on a project to learn the intricacies of SVG, more specifically SVG `paths` and hand-coding them. I was inspired by the idea when I saw [Brent Jackson]'s [Geomicons], an minimal iconset built from the ground up for performance.

It's great, I can drop these few readable lines of code in my document, shave off a request, easily adjust the color and size with a single attribute or class, and modifiy any of these properties since they are accessible through the DOM. The flexibililty is fantastic!


After experiementing more, I realized SVG `stroke` is another property worth utilizing... and actually perfect for line icons. Not only can you limit the amount of points without having to outline a shape, you can simply change the weight with `stroke-width` as well as the shape of the line caps and the line joins with `stroke-linecap` and `stroke-linejoin`. And if you are feeling crazy you can set 

I ended up creating 75+ line icons using strictly `stroke`. Each icon is hand-coded along a 32x32 grid with a 2 point margin allowing for a maximum of 4px (or 12.5%) `stroke-width`. 4px seems small but it's relative to the 32x32 grid. While designing, I tried to place as few points as possible to keep the shapes simple but also to reduce on file size. Here is an example of one:

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


#### **There are a few caveats**

One of the bigger caveats is the antialiasing, especially for screens without subpixels. I draw each icon with a 2 point margin, meaning you can have a maximim stroke of 4px without going outside the `viewBox`. While I do recommend using an `overflow: visible` property regardless, I do not recommend going above that `stroke-width`.




#### **Give it a spin**

{% include modules/bytesize-demo.html %}

<div class="py4 align-center">
    <a href="https://github.com/danklammer/bytesize-icons" class="btn dim underline-none text-shadow-light box-shadow-light px3 py2 br6 pressable">
        Checkout the project on GitHub
    </a>
</div>

[Brent Jackson]: http://jxnblk.com/
[Geomicons]: http://geomicons.com/
[SVG spec]: https://www.w3.org/TR/SVG/
[code them by hand]: http://svgpocketguide.com/