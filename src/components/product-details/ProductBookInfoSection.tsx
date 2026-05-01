import { ProductCharacteristicsSection } from './ProductCharacteristicsSection';

type ProductBookInfoSectionProps = {
  items?: { label: string; value: string }[];
};

export function ProductBookInfoSection({ items }: ProductBookInfoSectionProps) {
  return <ProductCharacteristicsSection title="Характеристики" items={items} />;
}
