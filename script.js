// loading
var el = document.getElementById('loading'),
    i = 0,
    load = setInterval(function() {
      i = ++i % 4;
      el.innerHTML = Array(i + 1).join('.');
}, 600);

