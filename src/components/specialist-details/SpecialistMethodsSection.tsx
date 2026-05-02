import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { SpecialistDetails } from '../../data/specialistDetailsData';

type TabKey = 'methods' | 'topics' | 'benefits';

type SpecialistMethodsSectionProps = Pick<SpecialistDetails, 'methods' | 'topics' | 'sessionBenefits'>;

export function SpecialistMethodsSection({
  methods,
  topics,
  sessionBenefits,
}: SpecialistMethodsSectionProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('methods');

  const tabs = [
    { key: 'methods' as const, label: 'Методы работы' },
    { key: 'topics' as const, label: 'Темы' },
    { key: 'benefits' as const, label: 'Что дадут сессии' },
  ];

  const items =
    activeTab === 'methods' ? methods : activeTab === 'topics' ? topics : sessionBenefits;

  return (
    <View style={styles.section}>
      <View style={styles.tabsRow}>
        {tabs.map((tab) => {
          const active = tab.key === activeTab;
          return (
            <Pressable
              key={tab.key}
              style={[styles.tab, active ? styles.activeTab : styles.inactiveTab]}
              onPress={() => setActiveTab(tab.key)}
            >
              <Text style={[styles.tabText, active ? styles.activeText : styles.inactiveText]}>
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {items.map((item) => (
        <Text key={item} style={styles.item}>{`\u2022 ${item}`}</Text>
      ))}

      <Pressable onPress={() => console.log('expand specialist methods')}>
        <Text style={styles.link}>Читать ещё</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 26,
    marginHorizontal: 16,
  },
  tabsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 14,
  },
  tab: {
    height: 34,
    borderRadius: 17,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8,
  },
  activeTab: {
    backgroundColor: colors.primary,
  },
  inactiveTab: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  tabText: {
    fontSize: 14,
  },
  activeText: {
    color: colors.white,
    ...typography.Inter[700],
  },
  inactiveText: {
    color: colors.primaryDark,
    ...typography.Inter[600],
  },
  item: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
  },
  link: {
    marginTop: 10,
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primary,
  },
});
