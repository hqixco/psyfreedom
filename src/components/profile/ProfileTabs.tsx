import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

export type ProfileTabKey = 'profile' | 'settings' | 'info';

type ProfileTabsProps = {
  activeTab: ProfileTabKey;
  onChangeTab: (tab: ProfileTabKey) => void;
};

const tabs: Array<{ key: ProfileTabKey; title: string }> = [
  { key: 'profile', title: 'Профиль' },
  { key: 'settings', title: 'Настройки' },
  { key: 'info', title: 'Инфо' },
];

export function ProfileTabs({ activeTab, onChangeTab }: ProfileTabsProps) {
  return (
    <View style={styles.row}>
      {tabs.map((tab) => {
        const isActive = tab.key === activeTab;

        return (
          <Pressable
            key={tab.key}
            style={[styles.tab, isActive ? styles.tabActive : styles.tabInactive]}
            onPress={() => onChangeTab(tab.key)}
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
  row: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 18,
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
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  tabText: {
    fontSize: 17,
    ...typography.Inter[700],
  },
  tabTextActive: {
    color: colors.white,
  },
  tabTextInactive: {
    color: colors.primaryDark,
  },
});
