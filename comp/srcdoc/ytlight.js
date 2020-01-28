  let loadThumb = (entries, observer) => {
  
  let node = entries[0].target;
  if (!node.getAttribute('loaded')) {
    let split = entries[0].target.getAttribute("href").split("/");
    let ytId = split[split.length - 1];
    let thumbNode = document.createElement('img');
    let playImg = document.createElement('img');
    playImg.setAttribute('src','http://www.digital-web.com/wp-content/uploads/2014/01/youtube-1495277__340.png');
    playImg.setAttribute('class','ytlight__play');
    thumbNode.setAttribute('src', `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`);
    node.innerHTML = '';
    node.appendChild(thumbNode);
    node.appendChild(playImg);
    node.setAttribute('loaded',true)
  }
}
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  };
  let observer = new IntersectionObserver(loadThumb, options);
  
  const v = document.getElementsByClassName("ytlight");

  let n;
  for (n = 0; n < v.length; n++) {
    let split = v[n].getAttribute("href").split("/");
    
    if (split.length > 0) {
      observer.observe(v[n]);
      let ytId = split[split.length - 1];
      
      v[n].addEventListener('click', function(evt){
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

