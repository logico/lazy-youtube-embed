class LazyYoutubeEmbed {
  constructor() {

    let loadThumb = (entries, observer) => {

      let node = entries[0].target;
      if (!node.getAttribute('loaded')) {
        let split = entries[0].target.getAttribute("href").split("/");
        let ytId = split[split.length - 1];
        let thumbNode = document.createElement('img');
        let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        let quality = 'sd';
        if (connection) {
          switch (connection.effectiveType) {
            case '4g': quality = 'maxres'; break;
            case '3g': quality = 'sd'; break;
            default: quality = 'hq';
          }
        }

        thumbNode.setAttribute('src', `https://img.youtube.com/vi/${ytId}/${quality}default.jpg`);
        thumbNode.setAttribute('alt',entries[0].target.innerText || entries[0].target.innerHTML);
        node.innerHTML = '';
        node.appendChild(thumbNode);

        let playImg = document.createElement('div');
        playImg.innerHTML = '<svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#FF0000"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg>';
        playImg.setAttribute('class', 'ytlight__play');
        node.appendChild(playImg);
        node.setAttribute('loaded', true)
      }
    }
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    let observer = new IntersectionObserver(loadThumb, options);

    const v = document.getElementsByClassName('lazy-youtube-embed');


    for (let n = 0, len = v.length; n < len; n++) {
      let split = v[n].getAttribute("href").split("/");

      if (split.length > 0) {
        observer.observe(v[n]);
        let ytId = split[split.length - 1];

        v[n].addEventListener('click', function(evt) {
          evt.preventDefault();
          let embed = document.createElement('iframe');
          embed.setAttribute('src', `https://www.youtube.com/embed/${ytId}?autoplay=1&fs=1&rel=0`);
          embed.setAttribute('frameborder', '0');
          embed.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen');
          embed.setAttribute('width', this.offsetWidth);
          embed.setAttribute('height', this.offsetHeight);
          this.innerHTML = '';
          this.appendChild(embed);
        }, false)
      }
    }
  }
  return;
}

new LazyYoutubeEmbed();
