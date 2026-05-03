import { VideoJournalItem } from '../../data/videoJournalData';
import { AuthorSection } from '../shared/AuthorSection';

type VideoAuthorSectionProps = {
  author: VideoJournalItem['author'];
};

export function VideoAuthorSection({ author }: VideoAuthorSectionProps) {
  return <AuthorSection author={author} />;
}
