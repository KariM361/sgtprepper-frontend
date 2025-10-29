import { Div, Heading, Input, Label, Paragraph } from '../atoms/index.js';
import { Ul, Li, Link } from '../atoms/index.js';

export const HeaderView = () => {
  const element = document.createElement('header');
  element.className = 'bg-slate-700 p-4 text-white flex justify-between';
  const h1 = Heading('Sgt.Prepper');
  element.append(h1);
  const p = Paragraph()
  const a = Link('/index.htm#/login','Login', 'block bg-slate-400 px-3 py-2 rounded-lg border border-slate-800')
  p.append(a)
  element.append(p)
  return element;
};

export const NavBarView = (arrNavItems) => {
  const element = document.createElement ('nav');
  element.className = 'bg-sky-950';
  const ul = Ul('flex');

  arrNavItems.forEach((item) => {
    const { url, title } = item; //destructure assignment

    const li = Li()
    const item1 = Link(url, title, `block p-4${item.textColor}`);
    li.append(item1);
    ul.append(li);
  });

  element.append(ul);
  return element;
};

export const MainView = (title, content) => {
  const element = document.createElement('main');
  element.className = 'p-4 min-h-60 container m-auto flex-grow';
  const h1 = Heading(title);
  element.append(h1, content);
  return element;
};

export const FooterView = () => {
  const element = document.createElement('footer');
  const image = document.createElement('img');
  image.src = 'images/Footer.png';
  element.append(image);
  ElementInternals.className = 'mt-auto h-[168px] p-4 bg bg center bg-no-repeat';
  element.innerHTML = '&copy; TECHCOLLEGE 2025';
  element.append(image);
  return element;
};
// FormGroup til at samle label og input
export const FormGroup = (title, name, placeholder, type, value) => {
  const element = Div ()
 const label = Label (title, name)
 const input = Input (name, placeholder, type, value)
 element.append(label, input)
 return element
}