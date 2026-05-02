import { useEffect, useState } from 'react';
import { BackChevronIcon } from '../../components/icons/BackChevronIcon';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { datingClubData } from './datingData';
import { datingColors, datingCommonStyles } from './datingStyles';
import { typography } from '../../constants/theme';

type DatingClubScreenProps = {
  onBack: () => void;
  onOpenQuestionnaire: () => void;
  setBottomTabsVisible?: (visible: boolean) => void;
};

export function DatingClubScreen({
  onBack,
  onOpenQuestionnaire,
  setBottomTabsVisible,
}: DatingClubScreenProps) {
  const insets = useSafeAreaInsets();
  const [openedId, setOpenedId] = useState<string | null>('who');

  useEffect(() => {
    if (!setBottomTabsVisible) {
      return;
    }

    setBottomTabsVisible(false);
    return () => setBottomTabsVisible(true);
  }, [setBottomTabsVisible]);

  return (
    <SafeAreaView style={datingCommonStyles.screen} edges={['top']}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 110 + insets.bottom }}
        >
          <View style={datingCommonStyles.header}>
            <Pressable onPress={onBack}>
              <BackChevronIcon color={datingColors.dark} />
            </Pressable>
            <Text style={datingCommonStyles.headerTitle}>{datingClubData.title}</Text>
          </View>

          <View style={styles.hero}>
            <Text style={styles.heroTitle}>{datingClubData.heroTitle}</Text>
            <Text style={styles.heroText}>{datingClubData.heroText}</Text>
            <Image source={datingClubData.heroImage} style={styles.heroImage} />
          </View>

          <View style={styles.accordion}>
            {datingClubData.accordion.map((item) => {
              const isOpen = openedId === item.id;

              return (
                <View key={item.id} style={styles.accordionItem}>
                  <Pressable
                    style={styles.accordionHeader}
                    onPress={() => setOpenedId((prev) => (prev === item.id ? null : item.id))}
                  >
                    <Text style={styles.accordionTitle}>{item.title}</Text>
                    <Ionicons
                      name={isOpen ? 'chevron-up' : 'chevron-down'}
                      size={22}
                      color={datingColors.dark}
                    />
                  </Pressable>

                  {isOpen ? (
                    <View style={styles.accordionContent}>
                      {item.blocks.map((block, index) => (
                        <View key={`${item.id}-${index}`}>
                          {block.title ? <Text style={styles.contentSubtitle}>{block.title}</Text> : null}
                          <Text style={styles.contentText}>{block.text}</Text>
                        </View>
                      ))}
                    </View>
                  ) : null}
                </View>
              );
            })}
          </View>
        </ScrollView>

        <View style={[datingCommonStyles.footer, { paddingBottom: 10 + insets.bottom }]}>
          <Pressable style={datingCommonStyles.primaryButton} onPress={onOpenQuestionnaire}>
            <Text style={datingCommonStyles.primaryButtonText}>Заполнить анкету</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: datingColors.white,
  },
  hero: {
    marginHorizontal: 16,
    marginTop: 16,
    height: 132,
    borderRadius: 12,
    backgroundColor: '#FF6F9A',
    overflow: 'hidden',
    paddingLeft: 22,
    paddingRight: 150,
    justifyContent: 'center',
  },
  heroTitle: {
    fontSize: 22,
    lineHeight: 27,
    ...typography.Inter[700],
    color: datingColors.white,
  },
  heroText: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 19,
    color: datingColors.white,
  },
  heroImage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 155,
    height: 132,
    resizeMode: 'contain',
  },
  accordion: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  accordionItem: {
    backgroundColor: datingColors.pinkLight,
    borderRadius: 12,
    marginBottom: 8,
    overflow: 'hidden',
  },
  accordionHeader: {
    minHeight: 58,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  accordionTitle: {
    flex: 1,
    fontSize: 19,
    lineHeight: 24,
    ...typography.Inter[700],
    color: datingColors.dark,
  },
  accordionContent: {
    paddingHorizontal: 16,
    paddingBottom: 18,
  },
  contentSubtitle: {
    fontSize: 18,
    lineHeight: 23,
    ...typography.Inter[700],
    color: datingColors.dark,
    marginTop: 8,
  },
  contentText: {
    fontSize: 17,
    lineHeight: 22,
    color: datingColors.dark,
    marginTop: 4,
  },
});

