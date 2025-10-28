import { Heading } from '../atoms/index.js';
import { Ul, Li, Link } from '../atoms/index.js';

export const HeaderView = () => {
  const element = document.createElement('header');
  const h1 = Heading('sgt.Prepper');
  element.append(h1);
  return element;
};

export const NavBarView = (arrNavItems) => {
  const element = document.createElement('nav');
  element.className = 'bg-sky-950';
  const ul = Ul('flex');

  arrNavItems.forEach((item) => {
    const { url, title } = item; //destructure assignment

    const li = Li();
    const item1 = Link(url, title, `block p- 4 ${item.textColor}`);
    li.append(item1);
    ul.append(li);
  });

  element.append(ul);
  return element;
};

export const MainView = (title, content) => {
  const element = document.createElement('main');
  element.className = 'p-4 min-h-60';
  const h1 = Heading(title);
  element.append(h1, content);
  return element;
};

export const FooterView = () => {
  const element = document.createElement('footer');
  const image = document.createElement('img');
  image.src = 'images/Footer.png';
  element.append(image);
  element.innerHTML = '&copy; TECHCOLLEGE 2025';
  element.append(image);
  return element;
};
