import type { Product } from '../data/productsData';
import type { Specialist } from '../data/servicesData';

type SortableCatalogItem = {
  id: string;
  price: string;
  rating: string;
  isTop?: boolean;
};

function hasSortToken(sortOption: string, tokens: string[]) {
  const normalizedOption = sortOption.toLowerCase();

  return tokens.some((token) => normalizedOption.includes(token.toLowerCase()));
}

function getNumberFromText(value: string) {
  const normalizedValue = value.replace(/\s/g, '').replace(',', '.');
  const match = normalizedValue.match(/\d+(?:\.\d+)?/);

  return match ? Number(match[0]) : 0;
}

function getNewestWeight(id: string, index: number) {
  const numbers = id.match(/\d+/g);

  return numbers ? Number(numbers[numbers.length - 1]) : index;
}

function sortCatalogItems<T extends SortableCatalogItem>(items: T[], selectedSort: string) {
  const indexedItems = items.map((item, index) => ({ item, index }));

  if (hasSortToken(selectedSort, ['цена', 'цене', 'С†РµРЅ'])) {
    return indexedItems
      .sort((a, b) => getNumberFromText(a.item.price) - getNumberFromText(b.item.price) || a.index - b.index)
      .map(({ item }) => item);
  }

  if (hasSortToken(selectedSort, ['рейтинг', 'рейтингу', 'популяр', 'СЂРµР№С‚', 'РїРѕРїСѓР»'])) {
    return indexedItems
      .sort((a, b) => getNumberFromText(b.item.rating) - getNumberFromText(a.item.rating) || a.index - b.index)
      .map(({ item }) => item);
  }

  if (hasSortToken(selectedSort, ['нов', 'РЅРѕРІ'])) {
    return indexedItems
      .sort((a, b) => getNewestWeight(b.item.id, b.index) - getNewestWeight(a.item.id, a.index) || b.index - a.index)
      .map(({ item }) => item);
  }

  if (hasSortToken(selectedSort, ['топ', 'С‚РѕРї'])) {
    return indexedItems
      .sort((a, b) => Number(Boolean(b.item.isTop)) - Number(Boolean(a.item.isTop)) || a.index - b.index)
      .slice(0, 10)
      .map(({ item }) => item);
  }

  return items;
}

export function sortProductsByOption(items: Product[], selectedSort: string) {
  return sortCatalogItems(items, selectedSort);
}

export function sortSpecialistsByOption(items: Specialist[], selectedSort: string) {
  return sortCatalogItems(items, selectedSort);
}
