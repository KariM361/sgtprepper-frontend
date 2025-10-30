// Opretter et tomt fragment (en usynlig beholder til flere HTML-elementer)
// Bruges når man vil samle flere elementer uden at lave et ekstra <div>
export const Fragment = () => {
    
  const element = document.createDocumentFragment();
  return element;
};
//laver et div element(kan få klasserr på via Tailwind eller css)
export const Div = (className = '') => {
  const element = document.createElement('div');
  element.className = className;
  return element;
};
//laver et p element(afsnit)
export const Paragraph = (className = '') => {
  const element = document.createElement('p');
  element.className = className;
  return element;
};
//laver overskrift(fx. h1,h2,h3)
export const Heading = (text = '', num = 1, className = '') => {
  const element = document.createElement(`h${num}`);
  element.className = className;
  element.textContent = text;
  return element;
};
//laver en ul(liste)
export const Ul = (className = '') => {
  const element = document.createElement('ul');
  element.className = className;
  return element;
};
// laver en li(liste element)
export const Li = (className = '') => {
  const element = document.createElement('li');
  element.className = `${className}`;
  return element;
};
// to, skal have en ny værdi for hver et link
//laver et a element(link)
export const Link = (to, text = '', className = '') => {
  const element = document.createElement('a');
  element.href = to;
  element.innerText = text;
  element.className = className
  return element;
};
//laver et img element(billede)
export const Image = (src, title, className = '') => {
  const element = document.createElement('img');
  element.src = src;
  element.className = className;
  element.alt = title;
  element.title = title;
  return element;
};
//laver et form element
export const Form = (method = 'GET') => {
  const element = document.createElement('form');
  element.method = method;
  return element;
};

// Laver et <label>-element (etiket til formularfelt)
// Som standard får den Tailwind-klasser og et ':' efter teksten
export const Label = (
  title,
  id,
  className = "mr-4 inline block w-[120px] after:content-[':']"
) => {
  const element = document.createElement('label');
  element.htmlFor = id; //(for) sætter fokus på inputfeltet.
  element.innerText = title;
  element.className = className;

  return element;
};

// Laver et <input>-element (tekstfelt, passwordfelt osv.)
export const Input = (name, placeholder, type = 'text', value = '', className = 'border rounded p-2'
) => {
  const element = document.createElement('input');
  element.type = type;
  element.id = name;
  element.name = name;
  element.placeholder = placeholder;
  element.value = value;
  element.className = className;
  element.autocomplete = true; //browseren må foreslå tidliger input
  element.required = true; //feltet skal udfyldes
  return element;
};

// Laver et <button>-element (knap)
export const Button = (
  title,
  type = 'submit',
  className = ('bg-green-500 p-1 rounded shadow-md shadow-inset')
) => {
  const element = document.createElement('button');
  element.type = type;
  element.textContent = title
  element.className = className
  return element;
};
