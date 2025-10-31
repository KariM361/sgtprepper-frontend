import { getList } from '../models/categoryModel.js';

export const getCategoryList = async () => {
  // Finder den nuværende URL (fx ?category=mad)
  const url = new URL(window.location.href);

  // Tjekker hvilken kategori der er valgt — hvis ingen, bruges "vand-og-vandrensning"
  const curCatergory =
    url.searchParams.get('category') || 'vand-og-vandrensning';

  // Henter alle kategorier fra API'et
  const data = await getList();

  // Går igennem hver kategori og laver et objekt med de værdier vi skal bruge
  const formattedCategories = data.map((item) => ({
    slug: item.slug,                            // fx "mad" eller "vand-og-vandrensning"
    title: item.title,                          // Navn der skal vises i menuen
    url: `/index.htm?category=${item.slug}`,    // Link til siden for den kategori
    textColor:
      curCatergory === item.slug // Farve hvis aktiv
        ? 'text-yellow-500'
        : 'text-white',
  }));
  // Returnerer listen klar til brug i menuen
  return formattedCategories;
};
