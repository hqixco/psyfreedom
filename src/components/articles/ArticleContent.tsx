import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { ArticleContentBlock } from '../../data/articlesData';

type ArticleContentProps = {
  title: string;
  topic: string;
  content: ArticleContentBlock[];
};

export function ArticleContent({ title, topic, content }: ArticleContentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.topicChip}>
        <Text style={styles.topicText}>{topic}</Text>
      </View>

      <View style={styles.contentWrap}>
        {content.map((block, index) =>
          block.type === 'heading' ? (
            <Text key={`${block.type}-${index}`} style={styles.heading}>
              {block.text}
            </Text>
          ) : (
            <Text key={`${block.type}-${index}`} style={styles.paragraph}>
              {block.text}
            </Text>
          ),
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 14,
    marginBottom: 17,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  topicChip: {
    marginTop: 10,
    alignSelf: 'flex-start',
    height: 18,
    borderRadius: 360,
    backgroundColor: colors.cardLight,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicText: {
    fontSize: 12,
    ...typography.Inter[400],
    color: colors.primaryDark,
  },
  contentWrap: {
    marginTop: 28,
  },
  paragraph: {
    marginBottom: 22,
    fontSize: 16,
    lineHeight: 20,
    color: colors.primaryDark,
  },
  heading: {
    marginTop: 3,
    marginBottom: 16,
    fontSize: 20,
    lineHeight: 27,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
});

