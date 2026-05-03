import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';
import { ProductDetails } from '../../data/productDetailsData';

const retryButtonIcon = require('../../../assets/Vecto222r.svg');

type Metric = {
  label: string;
  value: number;
};

type Description = {
  title: string;
  text: string;
};

type TestResultViewProps = {
  title: string;
  resultTitle: string;
  metrics: Metric[];
  summary: string;
  descriptions: Description[];
  author: NonNullable<ProductDetails['author']>;
  onRetry: () => void;
};

export function TestResultView({
  title,
  resultTitle,
  metrics,
  summary,
  descriptions,
  author,
  onRetry,
}: TestResultViewProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, { paddingBottom: 170 + insets.bottom }]}
      >
        <Text style={styles.title}>{title}</Text>

        <View style={styles.resultsPanel}>
          <Text style={styles.resultTitle}>{resultTitle}</Text>

          {metrics.map((metric) => (
            <View key={metric.label} style={styles.metricBlock}>
              <View style={styles.metricRow}>
                <Text style={styles.metricLabel}>{metric.label}</Text>
                <Text style={styles.metricValue}>{`${metric.value}%`}</Text>
              </View>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${metric.value}%` }]} />
              </View>
            </View>
          ))}
        </View>

        <Text style={styles.summary}>{summary}</Text>

        {descriptions.map((item) => (
          <View key={item.title} style={styles.descriptionBlock}>
            <Text style={styles.descriptionTitle}>{item.title}</Text>
            <Text style={styles.descriptionText}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={[styles.footerShell, { paddingBottom: 16 + insets.bottom }]}>
        <Pressable style={styles.retryButton} onPress={onRetry}>
          <Image source={retryButtonIcon} style={styles.retryButtonIcon} resizeMode="contain" />
          <Text style={styles.retryButtonText}>Пройти тест еще раз</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  title: {
    fontSize: 20,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  resultTitle: {
    marginTop: 0,
    marginBottom: 6,
    fontSize: 16,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  resultsPanel: {
    marginTop: 24,
    padding: 19,
    paddingBottom: 25,
    borderRadius: 12,
    backgroundColor: '#F5F9FD',
  },
  metricBlock: {
    marginTop: 19,
  },
  metricRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metricLabel: {
    fontSize: 14,
    ...typography.Inter[400],
    color: colors.primaryDark,
  },
  metricValue: {
    marginLeft: 4,
    fontSize: 14,
    ...typography.Inter[400],
    color: colors.primaryDark,
  },
  progressTrack: {
    height: 2,
    marginTop: 8,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#A8C1C8',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
    backgroundColor: '#05728F',
  },
  summary: {
    marginTop: 24,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: colors.primaryDark,
  },
  descriptionBlock: {
    marginTop: 20,
  },
  descriptionTitle: {
    fontSize: 14,
    ...typography.Inter[400],
    color: colors.primaryDark,
  },
  descriptionText: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 22,
    color: colors.primaryDark,
  },
  authorSection: {
    marginTop: 36,
  },
  sectionTitle: {
    fontSize: 24,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  authorCard: {
    marginTop: 14,
    padding: 14,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorAvatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    marginRight: 14,
    backgroundColor: colors.white,
  },
  authorContent: {
    flex: 1,
  },
  authorName: {
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  authorRole: {
    marginTop: 2,
    fontSize: 14,
    color: colors.muted,
  },
  authorMetaRow: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorMetaText: {
    marginLeft: 6,
    fontSize: 14,
    color: colors.primaryDark,
  },
  footerShell: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: '#F5F9FD',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  retryButton: {
    height: 42,
    borderRadius: 360,
    backgroundColor: '#05728F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  retryButtonIcon: {
    width: 18,
    height: 18,
  },
  retryButtonText: {
    fontSize: 14,
    ...typography.Inter[600],
    color: '#ffffff',
  },
});
