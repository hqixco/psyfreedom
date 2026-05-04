import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { HumorChips } from '../../components/humor/HumorChips';
import { HumorHeader } from '../../components/humor/HumorHeader';
import { HumorPostCard } from '../../components/humor/HumorPostCard';
import { colors } from '../../constants/theme';
import { HumorFilterType, HumorPost, humorChips, humorPosts } from '../../data/humorData';

type HumorScreenProps = {
  onBack: () => void;
  onOpenPost: (post: HumorPost) => void;
};

export function HumorScreen({ onBack, onOpenPost }: HumorScreenProps) {
  const insets = useSafeAreaInsets();
  const [activeType, setActiveType] = useState<HumorFilterType>('all');
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>(
    () => Object.fromEntries(humorPosts.map((post) => [post.id, Boolean(post.isLiked)])),
  );
  const [likesMap, setLikesMap] = useState<Record<string, number>>(
    () => Object.fromEntries(humorPosts.map((post) => [post.id, post.likes + (post.isLiked ? 1 : 0)])),
  );

  const visiblePosts = useMemo(() => {
    if (activeType === 'all') {
      return humorPosts;
    }

    return humorPosts.filter((post) => post.type === activeType);
  }, [activeType]);

  const toggleLike = (id: string) => {
    setLikedMap((current) => {
      const nextLiked = !current[id];
      setLikesMap((likesCurrent) => ({
        ...likesCurrent,
        [id]: Math.max(0, likesCurrent[id] + (nextLiked ? 1 : -1)),
      }));
      return { ...current, [id]: nextLiked };
    });
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, { paddingBottom: 100 + insets.bottom }]}
      >
        <HumorHeader onBack={onBack} />
        <HumorChips chips={humorChips} activeType={activeType} onSelect={setActiveType} />
        {visiblePosts.map((post) => (
          <HumorPostCard
            key={post.id}
            post={post}
            isLiked={likedMap[post.id] ?? Boolean(post.isLiked)}
            likes={likesMap[post.id] ?? post.likes}
            onToggleLike={() => toggleLike(post.id)}
            onPress={() => onOpenPost(post)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingTop: 0,
  },
});
