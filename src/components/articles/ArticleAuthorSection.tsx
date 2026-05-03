import { ArticleDetails } from '../../data/articlesData';
import { AuthorSection } from '../shared/AuthorSection';

type ArticleAuthorSectionProps = {
  author: ArticleDetails['author'];
};

export function ArticleAuthorSection({ author }: ArticleAuthorSectionProps) {
  return <AuthorSection author={author} />;
}
