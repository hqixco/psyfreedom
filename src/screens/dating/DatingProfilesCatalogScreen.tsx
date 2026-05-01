import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { datingCatalogHero, datingProfiles, DatingProfileItem } from './datingData';
import { datingColors } from './datingStyles';

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

export function DatingProfilesCatalogScreen({
  onBack,
  onOpenProfile,
}: {
  onBack: () => void;
  onOpenProfile: (profileId: string) => void;
}) {
  const insets = useSafeAreaInsets();
  const [profiles, setProfiles] = useState(datingProfiles);

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
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroTitle}>{datingCatalogHero.title}</Text>
          <Text style={styles.heroText}>{datingCatalogHero.text}</Text>
          <Image source={datingCatalogHero.image} style={styles.heroImage} />
        </View>

        <Text style={styles.title}>Новые анкеты на сайте</Text>

        <View style={styles.profilesGrid}>
          {profiles.slice(0, 2).map((profile) => (
            <DatingProfileCard
              key={profile.id}
              item={profile}
              onPress={() => onOpenProfile(profile.id)}
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

        <View style={styles.controlsRow}>
          <Ionicons name="map-outline" size={26} color={datingColors.dark} />
          <Pressable style={styles.filtersButton} onPress={() => console.log('open dating filters')}>
            <Text style={styles.filtersText}>Фильтры</Text>
            <Ionicons name="options-outline" size={22} color={datingColors.dark} />
          </Pressable>
        </View>

        <View style={styles.profilesGrid}>
          {profiles.slice(2).map((profile) => (
            <DatingProfileCard
              key={profile.id}
              item={profile}
              onPress={() => onOpenProfile(profile.id)}
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
    height: 56,
    justifyContent: 'center',
  },
  hero: {
    marginTop: 12,
    height: 104,
    borderRadius: 12,
    backgroundColor: '#FF6F9A',
    overflow: 'hidden',
    paddingLeft: 22,
    paddingRight: 150,
    justifyContent: 'center',
  },
  heroTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: datingColors.white,
  },
  heroText: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 17,
    color: datingColors.white,
  },
  heroImage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 145,
    height: 104,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 16,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: datingColors.dark,
  },
  controlsRow: {
    marginTop: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filtersButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filtersText: {
    fontSize: 16,
    fontWeight: '700',
    color: datingColors.dark,
    marginRight: 8,
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
    fontWeight: '700',
  },
});
