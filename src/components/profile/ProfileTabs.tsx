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
    marginBottom: 15,
    alignSelf: 'flex-start',
  },
  tab: {
    height: 43,
    borderRadius: 360,
    paddingHorizontal: 22,
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
