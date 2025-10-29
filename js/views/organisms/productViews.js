//view til vores produkter
import { price2Dkk } from '../../utils/index.js';
import { Div, Fragment, Heading, Image, Paragraph } from '../atoms/index.js';

// modtager en liste af produkter
export const ProductListView = (products) => {
  const element = Fragment();

  // looper igennem produkter
  products.forEach((product) => {
    const { imageUrl, name, price, slug, stockText, stockClass, teaser } =
      product;
  
      // laver elementet for hvert produkt
    const div = Div('flex justify-between gap-4 p-4 border rounded-lg'); //container for hvert produkt
    const img = Image(`http://localhost:4000${imageUrl}`, name,'max-w-[200px]');
    div.append(img);
   
    // produkt info
    const info = Div(); // viser info om produkt
    const h2 = Heading(name, 2);
    const p = Paragraph();
    p.innerHTML = teaser; //Ses i konsollen
    info.append(h2, p);
    div.append(info);
    
    // pris og lager status
    const cost = Div('text-right border'); // viser pris
    cost.innerText = price2Dkk(price);
    
    // lager status
    const stockElm = Paragraph(stockClass); // viser lager status
    stockElm.innerText = stockText;
    cost.append(stockElm);
    
    // link til produkt detaljer
    div.append(cost);
   
    element.append(div);
  });

  return element;
};
// modtager et enkelt produkt
export const ProductDetailsView = (product) => {
  const { id, name, imageUrl, description, price } = product;
  const element = Div('flex');
  const img = Image(`http://localhost:4000${product.imageUrl}`, name);
  element.append(img);
  
  // Produkt info
  const div1 = Div('flex-1 min-w-0');
  const h3 = Heading(name, 3, 'font-bold mb-2');
  div1.append(h3);
  
  // Produkt beskrivelse
  const p = Paragraph();
  p.innerHTML = description;
  div1.append(p);
  
  // Pris
  const priceSection = Paragraph();
  priceSection.innerHTML = price2Dkk(price);
  priceSection.append(priceSection);

  element.append(div1);

  return element;
};
