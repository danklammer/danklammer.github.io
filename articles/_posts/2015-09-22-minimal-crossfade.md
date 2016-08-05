---
layout:         post
title:          "Minimal Crossfade"
subtitle:       "Image crossfade with just a few lines of code"
date:           2015-09-22
author:         Dan Klammer
color:          "88, 86, 214"
color-alpha:    "0.86"
hero-image:     /img/articles/2015-09-22-minimal-crossfade/minimal-crossfade-hero.jpg
permalink:      /articles/minimal-crossfade/
modulecss:
    - modules/crossfade-demo.css
modulejs:
    - modules/crossfade-demo.js
---

I recently needed to crossfade images, showcasing app screens for a project. I looked around online for an ideal solution, and everything I found was way overkill or bloat. I just needed to smoothly faded a series of images into each other. That's it!

I ended up creating my own with this simple solution. Using javascript `setInterval`, every few seconds I move (or append) the top item in a list to the bottom, and then letting CSS do the rest.

In the CSS, I set all the items in the list to be stacked on top of each other using `position: absolute`. Then I set `opacity: 0` to all items, except the first-child and last-child. So the top and bottom items are the only two items visible. I also set the first-child (or top item) to have a slightly higher `z-index`, so they are now stacked in order. As soon as the top item is moved to the bottom, it loses it's priority `z-index` but is still visible (just underneath). The 2nd item is then moved to the top, acquiring the new styles of having `opacity: 1` and the higher `z-index`. We now have a working slide show.

Simply add `transition: opacity 1s ease` to the first-child and the 2nd item in the list will now fade on top of the item moved to the bottom.


#### **Demo:**

<div class="cf-demo center-block align-center py3">
  <ul id="crossfade" class="cf cf-layering">
    <li style="background: #FF1300">1</li>
    <li style="background: #FF9500">2</li>
    <li style="background: #0BD318">3</li>
    <li style="background: #007AFF">4</li>
    <li style="background: #5856D6">5</li>
    <li style="background: #EF4DB6">6</li>
  </ul>  
</div>

#### **Demo without styles:**

<div class="cf-demo center-block align-center py3">
  <ul id="crossfade-nolayer" class="cf">
    <li style="background: #FF1300">1</li>
    <li style="background: #FF9500">2</li>
    <li style="background: #0BD318">3</li>
    <li style="background: #007AFF">4</li>
    <li style="background: #5856D6">5</li>
    <li style="background: #EF4DB6">6</li>
  </ul>  
</div>


##### **HTML**

{% highlight html %}
<ul id="crossfade">
  <li style="background: #FF1300">1</li>
  <li style="background: #FF9500">2</li>
  <li style="background: #0BD318">3</li>
  <li style="background: #007AFF">4</li>
  <li style="background: #5856D6">5</li>
  <li style="background: #EF4DB6">6</li>
</ul>  
{% endhighlight %}


##### **Javascript**

{% highlight javascript %}
var crossfade = document.getElementById('crossfade');

setInterval(function() {
  var topItem = crossfade.firstChild;
  crossfade.appendChild(topItem);
}, 3000);
{% endhighlight %}



##### **Or if you're using jQuery**
{% highlight javascript %}
setInterval(function(){        
  $('#crossfade li:first-child').appendTo('#crossfade');
}, 3000);
{% endhighlight %}



##### **CSS**

{% highlight css %}
li {
  position: absolute;
  z-index: 1;
  opacity: 0;
}

li:first-child,
li:last-child {
  opacity: 1;
}

li:first-child {
  z-index: 2;
  transition: opacity 1s ease;
}
{% endhighlight %}