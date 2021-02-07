window.onload = function() {
  const bg_count = 5;
  bg_idx = 1 + Math.floor(Math.random() * bg_count)
  bg_cls = 'b' + bg_idx
  document
    .getElementById('main')
    .getElementsByClassName('bg')[0]
    .classList.add(bg_cls)
}