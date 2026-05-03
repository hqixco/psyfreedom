import { Image, type ImageSourcePropType, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { colors, typography } from '../../constants/theme';
import type { ArticleTopic } from '../../data/journalData';

const defaultTopicBackground = require('../../../assets/images/coach-category-card-bg.png');
const parentsTopicBackground = require('../../../assets/article-topic-parents-bg.jpg');

type PopularArticleTopicsProps = {
  topics: ArticleTopic[];
  onPressTopic: (id: string) => void;
};

export function PopularArticleTopics({ topics, onPressTopic }: PopularArticleTopicsProps) {
  const { width } = useWindowDimensions();
  const cardWidth = Math.min(181, width - 32);

  return (
    <View>
      <Text style={styles.title}>Популярные темы статей</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.content}>
        {topics.map((topic, index) => (
          <View key={topic.id} style={index === topics.length - 1 ? undefined : styles.itemSpacer}>
            <Pressable style={[styles.card, { width: cardWidth }]} onPress={() => onPressTopic(topic.id)}>
              <Text style={styles.cardTitle}>{topic.title}</Text>
              <View style={styles.arrowBubble}>
                <Image source={require('../../../assets/images/arrow-forward.svg')} style={styles.arrowIcon} />
              </View>
              <Image
                source={getTopicBackground(topic)}
                style={styles.decor}
                resizeMode="cover"
              />
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

function getTopicBackground(topic: ArticleTopic): ImageSourcePropType {
  if (topic.id.startsWith('parents')) {
    return parentsTopicBackground;
  }

  return defaultTopicBackground;
}

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 16,
    marginTop: 18,
    fontSize: 24,
    lineHeight: 30,
    ...typography.Inter[700],
    color: colors.text,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  itemSpacer: {
    marginRight: 8,
  },
  card: {
    height: 124,
    borderRadius: 12,
    padding: 14,
    overflow: 'hidden',
    backgroundColor: colors.mintLight,
  },
  cardTitle: {
    fontSize: 14,
    lineHeight: 16,
    ...typography.Inter[600],
    color: colors.primaryDark,
    zIndex: 2,
  },
  arrowBubble: {
    position: 'absolute',
    left: 14,
    bottom: 12,
    width: 45,
    height: 22,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    zIndex: 1,
  },
  arrowIcon: {
    width: 20,
    height: 12,
  },
  decor: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
});

