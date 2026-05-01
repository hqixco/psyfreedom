import { ProductCharacteristicsSection } from './ProductCharacteristicsSection';

type ProductPromoInfoSectionProps = {
  items?: { label: string; value: string }[];
};

export function ProductPromoInfoSection({ items }: ProductPromoInfoSectionProps) {
  return <ProductCharacteristicsSection title="Информация" items={items} />;
}
