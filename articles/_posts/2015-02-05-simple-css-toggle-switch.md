---
layout:         post
title:          "Simple CSS Toggle Switch"
subtitle:       "Create a toggle switch with only a checkbox"
date:           2015-02-05
author:         Dan Klammer
color:          "53, 181, 75"
color-alpha:    "0.86"
hero-image:     /img/articles/2015-02-05-simple-css-toggle-switch/simple-css-toggle-switch-hero.png
permalink:      /articles/simple-css-toggle-switch/
modulecss:
    - modules/toggleswitch-demo.css
---

I recently discovered that by adding `appearance: none` to Form Elements, that it essentially *unlocks* the ability to use `:before` and `:after` styles. Which means you can do more with just a plain old input field without any supplemental HTML.

I was able to turn a checkbox into a nice little toggle switch.

 *Update: Pseudo classes are only enabled on webkit browsers.*

#### **Check it out:**

<div class="align-center p2"><input class="toggle" type="checkbox" /></div>


##### **HTML**

{% highlight html %}
<input class="toggle" type="checkbox" />
{% endhighlight %}


##### **CSS**

{% highlight css %}
.toggle {
  -webkit-appearance: none;
  appearance: none;
  width: 62px;
  height: 32px;
  display: inline-block;
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #707070;
  transition: background-color ease 0.3s;
}

.toggle:before {
  content: "on off";
  display: block;
  position: absolute;
  z-index: 2;
  width: 28px;
  height: 28px;
  background: #fff;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  font: 10px/28px Helvetica;
  text-transform: uppercase;
  font-weight: bold;
  text-indent: -22px;
  word-spacing: 37px;
  color: #fff;
  text-shadow: -1px -1px rgba(0,0,0,0.15);
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
}

.toggle:checked {
  background-color: #4CD964;
}

.toggle:checked:before {
  left: 32px;
}
{% endhighlight %}
