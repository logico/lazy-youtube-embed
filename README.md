# lazy-youtube-embed
![GitHub](https://img.shields.io/github/license/logico/lazy-youtube-embed?style=for-the-badge) ![GitHub package.json version](https://img.shields.io/github/package-json/v/logico/lazy-youtube-embed?style=for-the-badge)

A fast, lightweight, lazy load, progressive enhancement YouTube embed. 🤯

- **NO DEPENDENCIES**.
- Progressive enhancement: Uses the `a` tag instead `div` or custom element. Older or javascript disabled browsers can go to YouTube anyway.
- Lazy load: Load the video thumbnail using `IntersectionObserver API`.
- The quality of the thumbnail is decided using `Network Information API`.

## Install

```
$ npm install --save lazy-youtube-embed
```

Then with a module bundler like rollup or webpack, use as you would anything else:

```
// Using ES6 module
import lazyYoutubeEmbed from 'lazy-youtube-embed'
```

Or via CDN with script tag

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/logico/lazy-youtube-embed/dist/lazy-youtube-embed.css" />

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/lazy-youtube-embed@1.0.0/dist/lazy-youtube-embed.js" defer></script>
```

## Usage

In HTML add an `a` tag with the source to the YouTube video and `lazy-youtube-embed` class:

```
<a href="https://youtu.be/3vBwRfQbXkg" class="lazy-youtube-embed">HOW TO FUNK IN TWO MINUTES</a>
```

`lazy-youtube-embed` **must run after the DOM is loaded**.


## Comparison

These are test pages and results of performance. Faster to slower

1.- `Lazy YouTube Embed`.

[LAZY-YOUTUBE-EMBED TEST PAGE](https://lab.logico.ar/lazy-youtube-embed/lazy-youtube-embed/)

![lite-youtube-embed](comp/lazy-youtube-embed/lazy-youtube-embed.png)



2.- `Lite YouTube Embed` [repo](https://github.com/paulirish/lite-youtube-embed).

[LITE-YOUTUBE-EMBED TEST PAGE](https://lab.logico.ar/lazy-youtube-embed/lite-youtube-embed/)

![lite-youtube-embed](comp/lite-youtube-embed/lite-youtube-embed.png)



3.- `srcdoc` technique [css-tricks](https://css-tricks.com/lazy-load-embedded-youtube-videos/).

[SRCDOC TEST PAGE](https://lab.logico.ar/lazy-youtube-embed/srcdoc/)

![iframe](comp/srcdoc/srcdoc.png)



4.- AMP `<amp-youtube>` component [amp-youtube](https://amp.dev/es/documentation/components/amp-youtube/).

[AMP TEST PAGE](https://lab.logico.ar/lazy-youtube-embed/amp/)

![iframe](comp/amp/amp.png)



5.- `<iframe>` YouTube embed.

[IFRAME TEST PAGE](https://lab.logico.ar/lazy-youtube-embed/iframe/)

![iframe](comp/iframe/iframe.png)








