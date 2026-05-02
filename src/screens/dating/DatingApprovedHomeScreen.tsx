import { ComponentProps, useMemo, useState } from 'react';
import { typography } from '../../constants/theme';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  datingApprovedCategories,
  datingApprovedHero,
  datingEvents,
  datingProfiles,
  DatingEventItem,
  DatingProfileItem,
} from './datingData';
import { datingColors, datingCommonStyles } from './datingStyles';

function DatingProfileCard({
  item,
  onPress,
  onToggleFavorite,
}: {
  item: DatingProfileItem;
  onPress: () => void;
  onToggleFavorite: () => void;
}) {
  return (
    <Pressable
      style={[styles.profileCard, item.isHighlighted ? styles.profileCardHighlighted : null]}
      onPress={onPress}
    >
      <Image source={item.image} style={styles.profileImage} />
      <Pressable style={styles.heartButton} onPress={onToggleFavorite}>
        <Ionicons name={item.isFavorite ? 'heart' : 'heart-outline'} size={22} color={datingColors.white} />
      </Pressable>
      <View style={styles.profileNameBadge}>
        <Text style={styles.profileNameText}>{`${item.name}, ${item.age} лет`}</Text>
      </View>
    </Pressable>
  );
}

function DatingEventCard({
  item,
  onToggleFavorite,
}: {
  item: DatingEventItem;
  onToggleFavorite: () => void;
}) {
  return (
    <View style={styles.eventCard}>
      <View style={styles.eventImageWrap}>
        <Image source={item.image} style={styles.eventImage} />
        <View style={styles.eventDateBadge}>
          <Text style={styles.eventDateDay}>{item.day}</Text>
          <Text style={styles.eventDateMonth}>{item.month}</Text>
        </View>
        <Pressable style={styles.eventHeartButton} onPress={onToggleFavorite}>
          <Ionicons name={item.isFavorite ? 'heart' : 'heart-outline'} size={20} color={datingColors.white} />
        </Pressable>
        <View style={styles.eventViewsWrap}>
          <Ionicons name="eye-outline" size={16} color={datingColors.white} />
          <Text style={styles.eventViewsText}>{item.views}</Text>
        </View>
      </View>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventCity}>{item.city}</Text>
    </View>
  );
}

export function DatingApprovedHomeScreen({
  onOpenCatalog,
  onOpenBooks,
  onOpenEvents,
  onOpenSpecialists,
}: {
  onOpenCatalog: () => void;
  onOpenBooks: () => void;
  onOpenEvents: () => void;
  onOpenSpecialists?: () => void;
}) {
  const insets = useSafeAreaInsets();
  const [profiles, setProfiles] = useState(datingProfiles);
  const [events, setEvents] = useState(datingEvents);

  const highlightedProfiles = useMemo(() => profiles.slice(0, 4), [profiles]);

  return (
    <SafeAreaView style={datingCommonStyles.screen} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 + insets.bottom }}
      >
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>{datingApprovedHero.title}</Text>
          <Text style={styles.heroText}>{datingApprovedHero.text}</Text>
          <Pressable
            style={styles.heroButton}
            onPress={onOpenSpecialists ?? (() => console.log('pick specialist'))}
          >
            <Text style={styles.heroButtonText}>{datingApprovedHero.buttonText}</Text>
          </Pressable>
          <Image source={datingApprovedHero.image} style={styles.heroImage} />
        </View>

        <View style={styles.categoriesGrid}>
          {datingApprovedCategories.map((category) => (
            <Pressable
              key={category.id}
              style={styles.categoryCard}
              onPress={() => {
                if (category.id === 'books') {
                  onOpenBooks();
                  return;
                }

                console.log('open dating category', category.id);
              }}
            >
              <View style={styles.categoryIconCircle}>
                <Ionicons
                  name={category.icon as ComponentProps<typeof Ionicons>['name']}
                  size={18}
                  color={datingColors.white}
                />
              </View>
              <Text style={styles.categoryTitle}>{category.title}</Text>
            </Pressable>
          ))}
        </View>

        <Pressable style={styles.profilesHeaderPressable} onPress={onOpenCatalog}>
          <Text style={datingCommonStyles.sectionTitle}>Новые анкеты на сайте</Text>
        </Pressable>

        <View style={styles.profilesGrid}>
          {highlightedProfiles.map((profile) => (
            <DatingProfileCard
              key={profile.id}
              item={profile}
              onPress={onOpenCatalog}
              onToggleFavorite={() =>
                setProfiles((prev) =>
                  prev.map((item) =>
                    item.id === profile.id ? { ...item, isFavorite: !item.isFavorite } : item
                  )
                )
              }
            />
          ))}
        </View>

        <View style={styles.eventsHeader}>
          <Text style={datingCommonStyles.sectionTitle}>Ближайшие мероприятия</Text>
          <Pressable style={styles.moreButton} onPress={onOpenEvents}>
            <Text style={styles.moreButtonText}>Ещё</Text>
          </Pressable>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.eventsList}>
          {events.map((event) => (
            <DatingEventCard
              key={event.id}
              item={event}
              onToggleFavorite={() =>
                setEvents((prev) =>
                  prev.map((item) =>
                    item.id === event.id ? { ...item, isFavorite: !item.isFavorite } : item
                  )
                )
              }
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  hero: {
    marginTop: 12,
    height: 124,
    borderRadius: 12,
    backgroundColor: '#FF6F9A',
    overflow: 'hidden',
    paddingLeft: 22,
    paddingRight: 160,
    justifyContent: 'center',
  },
  heroTitle: {
    fontSize: 22,
    lineHeight: 24,
    ...typography.Inter[700],
    color: datingColors.white,
  },
  heroText: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 17,
    color: datingColors.white,
  },
  heroButton: {
    marginTop: 12,
    height: 34,
    borderRadius: 17,
    backgroundColor: datingColors.white,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  heroButtonText: {
    color: datingColors.pink,
    fontSize: 14,
    ...typography.Inter[700],
  },
  heroImage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 150,
    height: 124,
    resizeMode: 'contain',
  },
  categoriesGrid: {
    marginTop: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48.5%',
    height: 56,
    borderRadius: 12,
    backgroundColor: datingColors.pinkLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  categoryIconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: datingColors.pink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTitle: {
    marginTop: 4,
    fontSize: 14,
    ...typography.Inter[700],
    color: datingColors.dark,
  },
  profilesHeaderPressable: {
    marginTop: 14,
  },
  profilesGrid: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  profileCard: {
    width: '48.5%',
    aspectRatio: 0.78,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 8,
    backgroundColor: datingColors.pinkLight,
  },
  profileCardHighlighted: {
    borderWidth: 3,
    borderColor: datingColors.pink,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  profileNameBadge: {
    position: 'absolute',
    left: 8,
    bottom: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(58, 7, 24, 0.55)',
    paddingHorizontal: 10,
    height: 24,
    justifyContent: 'center',
  },
  profileNameText: {
    color: datingColors.white,
    fontSize: 13,
    ...typography.Inter[700],
  },
  eventsHeader: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  moreButton: {
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: datingColors.lightBorder,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreButtonText: {
    fontSize: 14,
    color: datingColors.dark,
    ...typography.Inter[600],
  },
  eventsList: {
    marginTop: 10,
    paddingRight: 6,
  },
  eventCard: {
    width: 180,
    marginRight: 10,
  },
  eventImageWrap: {
    position: 'relative',
  },
  eventImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  eventDateBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: datingColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventDateDay: {
    fontSize: 16,
    lineHeight: 18,
    ...typography.Inter[700],
    color: datingColors.dark,
  },
  eventDateMonth: {
    fontSize: 12,
    lineHeight: 14,
    color: datingColors.dark,
  },
  eventHeartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  eventViewsWrap: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventViewsText: {
    marginLeft: 4,
    fontSize: 12,
    color: datingColors.white,
    ...typography.Inter[700],
  },
  eventTitle: {
    marginTop: 8,
    fontSize: 15,
    ...typography.Inter[700],
    color: datingColors.dark,
  },
  eventCity: {
    marginTop: 2,
    fontSize: 14,
    color: datingColors.muted,
  },
});

