//view til vores produkter
import { price2Dkk } from '../../utils/index.js';
import {Button, Div, Form, Fragment, Heading, Image,Input, Link, Paragraph} from '../atoms/index.js';

// modtager en liste af produkter
export const ProductListView = (products, category) => {
  //opretter fragment(blank html tag)
  const element = Fragment();

  // looper igennem produkter
  products.forEach((product) => {
    //Destructure assignment fra product object
    const { imageUrl, name, price, slug, stockText, stockClass, teaser } =
      product;
    //opretter link box element
    const linkBox = Link(
      `?category=${category}&product=${slug}`,'', 'block mb-4 p-4 border rounded flex justify-between');

    // laver elementet for hvert produkt
    const imgCol = Div('pr-4'); //container for hvert produkt
    const img = Image(`http://localhost:4000${imageUrl}`, name, 'max-w-[200px]');
    img.loading = 'lazy'
    imgCol.append(img);

    // produkt info
    const infoCol = Div('flex-1 min-w-0'); // viser info om produkt
    const h2 = Heading(name, 2);
    const p = Paragraph();
    p.innerHTML = teaser; //Ses i konsollen
    infoCol.append(h2, p);

    // pris og lager status
    const priceCol = Div('shrink-0 w-[200px] text-right'); // viser pris
    const pricetext = Paragraph('text-xl font-bold');
    pricetext.textContent = price2Dkk(price)
    const  stockTxt = Paragraph(stockClass)
    stockTxt.textContent =  stockTxt;
    priceCol.append(pricetext, stockTxt);

   
    // tilføjer 3 kolonner til linkbox
    linkBox.append(imgCol, infoCol, priceCol);
    // Tilføjer link box til fragment element
    element.append(linkBox);
  });

  return element;
};

// modtager et enkelt produkt
export const ProductDetailsView = (product) => {
  const { id, name, imageUrl, description, price } = product;

  const element = Div('flex justify-between gap-4 p-4 border rounded-lg');

  const imagecol = Div ('shrink-0 w-[300px]')
  const img = Image(`http://localhost:4000${product.imageUrl}`, name);
  imagecol.append(img);

  // Produkt info
  const infoCol = Div('flex-1 min-w-0');
  const h3 = Heading(name, 3, 'font-bold mb-2');
  infoCol.append(h3);

  // Produkt beskrivelse
  const p = Paragraph();
  p.innerHTML = description;
  infoCol.append(p);

  const form = Form ('POST')
  const productId = Input(productId,'', 'hidden',id)
  const quantity = Input('quantity','','number',1)
  const button = Button ('Læg i kurv','submit')

  form.append(productId, quantity, button)
  infoCol.append(form)

  const priceCol = Div('text-2xl')
  priceCol.innerHTML = price2Dkk(price)

  element.append(imagecol,infoCol,priceCol)
  

  return element;
};
