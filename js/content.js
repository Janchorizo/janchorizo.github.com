window.onload = function() {
  const bg_count = 5;
  const bg_idx = 1 + Math.floor(Math.random() * bg_count);
  const bg_cls = 'b' + bg_idx;

  const colors = [
    'springgreen',
    'red',
    'blue',
    'blueviolet',
    'hotpink',
    'yellowgreen',
    'indianred'
  ];
  const color_idx = 0 + Math.floor(Math.random() * colors.length);

  document
    .getElementById('main')
    .getElementsByClassName('bg')[0]
    .classList.add(bg_cls);
  document
    .getElementById('me')
    .dataset['color'] = colors[color_idx];
  
  [...document.getElementById('main-toggle').children].forEach(
    a => a.addEventListener('click', () => document.getElementById('main').classList.toggle('projects'))
  );
}