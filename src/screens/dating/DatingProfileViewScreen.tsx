import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { datingColors } from './datingStyles';
import { datingProfileDetailsMock, DatingInfoRow, DatingProfileSection } from './datingData';

function InfoRow({ row, isLast = false }: { row: DatingInfoRow; isLast?: boolean }) {
  return (
    <View style={[styles.infoRow, !isLast ? styles.infoRowBorder : null]}>
      <Text style={styles.infoLabel}>{row.label}</Text>
      <Text style={styles.infoValue}>{row.value}</Text>
    </View>
  );
}

export function DatingProfileViewScreen({ onBack }: { onBack: () => void }) {
  const insets = useSafeAreaInsets();
  const [isFavorite, setIsFavorite] = useState(datingProfileDetailsMock.isFavorite);
  const [openedSectionId, setOpenedSectionId] = useState<string | null>('appearance');

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 + insets.bottom }}
      >
        <View style={styles.header}>
          <Pressable onPress={onBack}>
            <Ionicons name="chevron-back" size={24} color={datingColors.dark} />
          </Pressable>
          <Pressable onPress={() => setIsFavorite((prev) => !prev)}>
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={30}
              color={datingColors.pink}
            />
          </Pressable>
        </View>

        <View style={styles.photoContainer}>
          <Image source={datingProfileDetailsMock.photos[0]} style={styles.photo} />

          <View style={styles.dotsRow}>
            {datingProfileDetailsMock.photos.map((_, index) => (
              <View key={`dot-${index}`} style={index === 0 ? styles.dotActive : styles.dot} />
            ))}
          </View>

          <Pressable
            style={styles.messageButton}
            onPress={() => console.log('open dating chat', datingProfileDetailsMock.id)}
          >
            <Ionicons name="chatbubble" size={20} color={datingColors.pink} />
          </Pressable>
        </View>

        <View style={styles.profileBadge}>
          <View>
            <Text style={styles.profileName}>
              {datingProfileDetailsMock.name}, {datingProfileDetailsMock.age}
            </Text>
            <Text style={styles.profileZodiac}>{datingProfileDetailsMock.zodiac}</Text>
          </View>
          <Text style={styles.profileCity}>{datingProfileDetailsMock.city}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>О себе</Text>
          <Text style={styles.sectionText} numberOfLines={6}>
            {datingProfileDetailsMock.about}
          </Text>
        </View>

        <View style={styles.infoRowsWrap}>
          {datingProfileDetailsMock.infoRows.map((row, index) => (
            <InfoRow
              key={row.label}
              row={row}
              isLast={index === datingProfileDetailsMock.infoRows.length - 1}
            />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Мои мечты</Text>
          <Text style={styles.sectionText}>{datingProfileDetailsMock.dreams}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Интересы</Text>
          <View style={styles.tagsWrap}>
            {datingProfileDetailsMock.interests.map((tag) => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.accordionSection}>
          {datingProfileDetailsMock.sections.map((section) => {
            const isOpen = openedSectionId === section.id;

            return (
              <View key={section.id} style={styles.accordionItem}>
                <Pressable
                  style={styles.accordionHeader}
                  onPress={() => setOpenedSectionId((prev) => (prev === section.id ? null : section.id))}
                >
                  <Text style={styles.accordionTitle}>{section.title}</Text>
                  <Ionicons
                    name={isOpen ? 'chevron-up' : 'chevron-down'}
                    size={22}
                    color={datingColors.dark}
                  />
                </Pressable>

                {isOpen ? (
                  <View style={styles.accordionContent}>
                    {section.rows.map((row, index) => (
                      <InfoRow
                        key={`${section.id}-${row.label}`}
                        row={row}
                        isLast={index === section.rows.length - 1}
                      />
                    ))}
                  </View>
                ) : null}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: datingColors.white,
  },
  header: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  photoContainer: {
    marginTop: 4,
    height: 274,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: datingColors.pinkLight,
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dotsRow: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: datingColors.white,
  },
  dotActive: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: datingColors.pink,
  },
  messageButton: {
    position: 'absolute',
    right: 20,
    bottom: 12,
    width: 58,
    height: 28,
    borderRadius: 14,
    backgroundColor: datingColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileBadge: {
    marginTop: 8,
    backgroundColor: datingColors.pinkLight,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileName: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '700',
    color: datingColors.dark,
  },
  profileZodiac: {
    marginTop: 2,
    fontSize: 15,
    color: datingColors.dark,
  },
  profileCity: {
    fontSize: 15,
    fontWeight: '700',
    color: datingColors.dark,
  },
  section: {
    marginTop: 18,
  },
  sectionTitle: {
    fontSize: 22,
    lineHeight: 27,
    fontWeight: '700',
    color: datingColors.dark,
  },
  sectionText: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 21,
    color: datingColors.dark,
  },
  infoRowsWrap: {
    marginTop: 14,
  },
  infoRow: {
    minHeight: 24,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  infoRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F0E3E8',
  },
  infoLabel: {
    flex: 1,
    fontSize: 15,
    color: datingColors.dark,
  },
  infoValue: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: datingColors.dark,
    textAlign: 'right',
  },
  tagsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 8,
  },
  tag: {
    height: 22,
    borderRadius: 11,
    backgroundColor: '#FFD6E4',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
    color: datingColors.dark,
  },
  accordionSection: {
    marginTop: 20,
  },
  accordionItem: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F0E3E8',
    backgroundColor: datingColors.white,
    marginBottom: 6,
    overflow: 'hidden',
  },
  accordionHeader: {
    minHeight: 44,
    paddingHorizontal: 14,
    paddingVertical: 11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accordionTitle: {
    fontSize: 17,
    lineHeight: 21,
    fontWeight: '700',
    color: datingColors.dark,
  },
  accordionContent: {
    paddingHorizontal: 14,
    paddingBottom: 12,
  },
});
