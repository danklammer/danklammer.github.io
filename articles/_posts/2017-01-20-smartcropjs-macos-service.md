---
layout:         post
title:          "SmartCrop.js macOS Service"
subtitle:       "Automating content-aware image cropping"
date:           2017-01-20
author:         Dan Klammer
color:          "90, 64, 90"
color-alpha:    "0.6"
hero-image:     /img/articles/2017-01-20-smartcrop-js-macos-service/smartcrop-js-macos-service-hero.jpg
hero-position:  20%
permalink:      /articles/smartcrop-js-macos-service/
modulejs:
    - modules/plugin-zoomable.js
sitemap:
  lastmod: 2017-01-20
  priority: 0.7
  changefreq: 'monthly'
---

One day at work, I found myself cropping a batch of images for the blog section of our site; five different crop sizes for each image. I have a nice little template I use in Sketch that makes it relatively painless, but there had to be a better way...

That's when I discovered [SmartCrop.js], a content-aware image cropping javascript utility. It analyzes and identifies the focal point of an image and then determines the most optimal crop position based on your requested size. This thing is fantastic!

#### **Example photo**

![Surfer](/img/articles/2017-01-20-smartcrop-js-macos-service/smartcrop-js-macos-service-hero.jpg){:id: .zoomable }


#### **SmartCrop.js analyzes a square crop using the [Testbed tool]**

![Surfer Analyzed](/img/articles/2017-01-20-smartcrop-js-macos-service/surfer-analyzed.jpg){:id: .zoomable }



## CLI + Automator

The creator of [SmartCrop.js], Jonas Wagner, also wrote a [CLI version] that works hand in hand with ImageMagick, a powerful CLI image editor. These tools give us the flexibility to execute commands from within Automator.

Automator is an app designed to automate repeative tasks by creating workflows of specific events. We will be creating a Service that can be activated via the context-menu when right-clicking on an image; and then crops and resizes that image to our desired dimensions.


#### **Nice little service**

<p><video src="/img/articles/2017-01-20-smartcrop-js-macos-service/surfer-generate.mp4" autoplay loop class="zoomable"></video></p>


#### **Pretty smart crops**

![Surfer Crops](/img/articles/2017-01-20-smartcrop-js-macos-service/surfer-crops.jpg){:id: .zoomable }



## Let's make a SmartCrop.js macOS Service

#### **Step 1: Install Imagemagick**  
`brew install imagemagick`

#### **Step 2: Install SmartCrop-CLI**  
`npm install -g smartcrop-cli`

#### **Step 3: Open Automator and create a new Service**

A Service is ideal for this situation since we'll want the able to execute on an image from any directory.

![Automator - Create Service](/img/articles/2017-01-20-smartcrop-js-macos-service/automator-service.png){:id: .zoomable }


#### **Step 4: Configure your workflow**  

You will need to set up your workflow to only accept image files. Then add the ***Get Selected Finder Items*** and ***Run Shell Script*** actions. Make sure you set the bash script to **Pass input:** ***as arguments***.

![Automator - Run Shell](/img/articles/2017-01-20-smartcrop-js-macos-service/automator-run-shell.png){:id: .zoomable }


#### **Step 5: Write your bash script**  

You will need to first add `PATH=/usr/bin:/usr/local/bin export PATH` to make sure the PATH environment variable is properly set. It interprets two environment variables in case statements and sets arguments of the sort command accordingly. 

We will then have the script loop through all the selected images and run the smartcrop-cli commands. Make sure you point to the correct smartcrop-cli package location. You can find where your global npm packages are located by running `npm root -g`.


{% highlight bash %}
PATH=/usr/bin:/usr/local/bin export PATH

for img in "$@"; do
  filename=${img%.*}

  ~/.npm-packages/lib/node_modules/smartcrop-cli/smartcrop-cli.js "$img" --width 940 --height 350 --quality 80 "${filename}-article-940x350.jpg"

  ~/.npm-packages/lib/node_modules/smartcrop-cli/smartcrop-cli.js "$img" --width 470 --height 449 --quality 80 "${filename}-article-470x449.jpg"

  ~/.npm-packages/lib/node_modules/smartcrop-cli/smartcrop-cli.js "$img" --width 1024 --height 512 --quality 80 "${filename}-article-1024x512.jpg"

  ~/.npm-packages/lib/node_modules/smartcrop-cli/smartcrop-cli.js "$img" --width 1200 --height 1200 --quality 80 "${filename}-article-1200x1200.jpg"

  ~/.npm-packages/lib/node_modules/smartcrop-cli/smartcrop-cli.js "$img" --width 1080 --height 1080 --quality 80 "${filename}-article-1080x1080.jpg"

done;
{% endhighlight %}



[SmartCrop.js]: https://github.com/jwagner/smartcrop.js
[CLI version]: https://github.com/jwagner/smartcrop-cli
[smartcrop-cli]: https://github.com/jwagner/smartcrop-cli
[ImageMagick]: https://www.imagemagick.org/
[Testbed tool]: https://29a.ch/sandbox/2014/smartcrop/examples/testbed.html

