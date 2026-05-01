import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { ArticleTopic } from '../../data/journalData';

type PopularArticleTopicsProps = {
  topics: ArticleTopic[];
  onPressTopic: (id: string) => void;
};

export function PopularArticleTopics({ topics, onPressTopic }: PopularArticleTopicsProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Популярные темы статей</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.list}>
        {topics.map((topic) => (
          <Pressable key={topic.id} style={styles.card} onPress={() => onPressTopic(topic.id)}>
            <Image source={require('../../../assets/images/topic-bg.png')} style={styles.bg} resizeMode="cover" />
            <Text style={styles.cardTitle}>{topic.title}</Text>
            <View style={styles.arrowButton}>
              <Ionicons name="arrow-forward" size={16} color={colors.primary} />
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
  },
  title: {
    marginHorizontal: 16,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: colors.text,
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  card: {
    width: 180,
    height: 82,
    marginRight: 8,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 14,
    backgroundColor: colors.mintLight,
  },
  bg: {
    position: 'absolute',
    right: -8,
    bottom: -2,
    width: 88,
    height: 88,
    opacity: 0.25,
  },
  cardTitle: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  arrowButton: {
    width: 36,
    height: 20,
    marginTop: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});
