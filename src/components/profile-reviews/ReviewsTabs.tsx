import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

export type ReviewsTabKey = 'written' | 'pending';

const tabs: Array<{ key: ReviewsTabKey; title: string }> = [
  { key: 'written', title: 'Оставленные' },
  { key: 'pending', title: 'Ждут отзыва' },
];

export function ReviewsTabs({
  activeTab,
  onChangeTab,
}: {
  activeTab: ReviewsTabKey;
  onChangeTab: (tab: ReviewsTabKey) => void;
}) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const active = tab.key === activeTab;
        return (
          <Pressable
            key={tab.key}
            style={[styles.tab, active ? styles.tabActive : styles.tabInactive]}
            onPress={() => onChangeTab(tab.key)}
          >
            <Text style={[styles.tabText, active ? styles.tabTextActive : styles.tabTextInactive]}>
              {tab.title}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 14,
    flexDirection: 'row',
    gap: 8,
  },
  tab: {
    height: 43,
    borderRadius: 24,
    paddingHorizontal: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: {
    backgroundColor: colors.primary,
  },
  tabInactive: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  tabText: {
    fontSize: 16,
    ...typography.Inter[600],
  },
  tabTextActive: {
    color: colors.white,
  },
  tabTextInactive: {
    color: colors.primaryDark,
  },
});
