import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
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
  const [expanded, setExpanded] = useState(false);
  const visibleItemsCount = 3;

  const tabs = [
    { key: 'methods' as const, label: 'Методы работы' },
    { key: 'topics' as const, label: 'Темы' },
    { key: 'benefits' as const, label: 'Что дадут сессии' },
  ];

  const items =
    activeTab === 'methods' ? methods : activeTab === 'topics' ? topics : sessionBenefits;
  const visibleItems = expanded ? items : items.slice(0, visibleItemsCount);
  const canExpand = items.length > visibleItemsCount;

  return (
    <View style={styles.section}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsRow}
      >
        {tabs.map((tab) => {
          const active = tab.key === activeTab;
          return (
            <Pressable
              key={tab.key}
              style={[styles.tab, active ? styles.activeTab : styles.inactiveTab]}
              onPress={() => {
                setActiveTab(tab.key);
                setExpanded(false);
              }}
            >
              <Text style={[styles.tabText, active ? styles.activeText : styles.inactiveText]}>
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {visibleItems.map((item) => (
        <Text key={item} style={styles.item}>{`\u2022 ${item}`}</Text>
      ))}

      {canExpand ? (
        <Pressable onPress={() => setExpanded((value) => !value)}>
          <Text style={styles.link}>{expanded ? 'Свернуть' : 'Читать ещё'}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 62,
    marginHorizontal: 16,
  },
  tabsRow: {
    flexDirection: 'row',
    marginBottom: 14,
    paddingRight: 16,
  },
  tab: {
    height: 43,
    borderRadius: 360,
    paddingHorizontal: 21,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
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
    fontSize: 16,
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
    fontSize: 16,
    lineHeight: 20,
    color: colors.text,
  },
  link: {
    marginTop: 15,
    fontSize: 14,
    ...typography.Inter[400],
    color: colors.primary,
  },
});
