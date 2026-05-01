import { ScrollView } from 'react-native';
import { cooperationStories } from '../../data/cooperationData';
import { StoryCard } from './StoryCard';

export function StoriesSection() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
    >
      {cooperationStories.map((story) => (
        <StoryCard
          key={story.id}
          image={story.image as number}
          title={story.title}
          subtitle={story.subtitle}
        />
      ))}
    </ScrollView>
  );
}
