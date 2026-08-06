const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.textContent = open ? 'CLOSE' : 'MENU';
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = 'MENU';
}));

const logoUrl = 'https://hocom.tw/Uploads/Shop/109764ea-0865-4421-95c0-f63fa8b34617.png';
document.querySelectorAll('.brand').forEach(brand => {
  brand.innerHTML = `<img class="brand-logo" src="${logoUrl}" alt="\u91d1\u9091\u7cbe\u5bc6\u79d1\u6280\u6709\u9650\u516c\u53f8 Logo">`;
});
const productCards = [
  ['https://hocom.tw/Uploads/Album/s/357295_200502021011.jpg', '\u771f\u7a7a\u8154\u9ad4\u6ffa\u934d\u8a2d\u5099', '\u63d0\u4f9b\u771f\u7a7a\u8154\u9ad4\u6ffa\u934d\u8a2d\u5099\u7684\u88fd\u4f5c\u8207\u6574\u5408\u670d\u52d9\u3002'],
  ['https://hocom.tw/Uploads/Album/s/357295_949665768910.jpg', 'GIS \u57fa\u5efa\u88fd\u4f5c\u710a\u63a5', '\u6c23\u9ad4\u7d55\u7de3\u958b\u95dc\u8a2d\u5099\uff08GIS\uff09\u57fa\u5efa\u88fd\u4f5c\u8207\u710a\u63a5\u3002'],
  ['https://hocom.tw/Uploads/Album/s/357303_863585212066.jpg', '\u5ba2\u88fd\u5316\u91d1\u5c6c\u710a\u63a5', '\u5c08\u696d\u5ba2\u88fd\u6c2c\u710a\uff0fCO\u2082 \u4e0d\u93fd\u92fc\u3001\u78b3\u92fc\u710a\u63a5\u7522\u54c1\u3002']
];
document.querySelectorAll('.cards article').forEach((card, index) => {
  const [src, title, text] = productCards[index];
  const image = document.createElement('img');
  image.src = src; image.alt = title;
  card.prepend(image);
  card.querySelector('h3').textContent = title;
  card.querySelector('p').textContent = text;
});

