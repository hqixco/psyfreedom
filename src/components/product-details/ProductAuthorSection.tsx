import { ProductDetails } from '../../data/productDetailsData';
import { AuthorSection } from '../shared/AuthorSection';

type ProductAuthorSectionProps = {
  author?: ProductDetails['author'];
  onPressAuthor?: (author: NonNullable<ProductDetails['author']>) => void;
};

export function ProductAuthorSection({ author, onPressAuthor }: ProductAuthorSectionProps) {
  if (!author) {
    return null;
  }

  const canOpen = Boolean(onPressAuthor && (author.specialistId || author.instituteId));

  return (
    <AuthorSection
      author={author}
      onPress={canOpen ? () => onPressAuthor?.(author) : undefined}
    />
  );
}
