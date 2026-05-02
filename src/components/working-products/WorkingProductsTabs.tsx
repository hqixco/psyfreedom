import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

export type WorkingProductsTabKey = 'published' | 'archived';

export function WorkingProductsTabs({
  activeTab,
  onChangeTab,
}: {
  activeTab: WorkingProductsTabKey;
  onChangeTab: (tab: WorkingProductsTabKey) => void;
}) {
  return (
    <View style={styles.container}>
      {[
        { id: 'published', title: 'Опубликованные' },
        { id: 'archived', title: 'Архивные' },
      ].map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <Pressable
            key={tab.id}
            style={[styles.tab, isActive ? styles.tabActive : styles.tabInactive]}
            onPress={() => onChangeTab(tab.id as WorkingProductsTabKey)}
          >
            <Text style={[styles.tabText, isActive ? styles.tabTextActive : styles.tabTextInactive]}>
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
    marginTop: 12,
    flexDirection: 'row',
    gap: 8,
  },
  tab: {
    flex: 1,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: {
    backgroundColor: colors.primary,
  },
  tabInactive: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  tabText: {
    fontSize: 16,
    ...typography.Inter[700],
  },
  tabTextActive: {
    color: colors.white,
  },
  tabTextInactive: {
    color: colors.primaryDark,
  },
});
