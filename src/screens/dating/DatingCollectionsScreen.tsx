import { useMemo, useState } from 'react';
import { BackChevronIcon } from '../../components/icons/BackChevronIcon';
import { typography } from '../../constants/theme';
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  datingCollectionsProfiles,
  datingCollectionsTabs,
  DatingCollectionProfileItem,
  DatingCollectionsTabId,
} from './datingData';
import { datingColors } from './datingStyles';

const gap = 10;
const cardWidth = (Dimensions.get('window').width - 32 - gap) / 2;

function CollectionsTabs({
  activeTab,
  onChange,
}: {
  activeTab: DatingCollectionsTabId;
  onChange: (tab: DatingCollectionsTabId) => void;
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabsContent}
      style={styles.tabsWrap}
    >
      {datingCollectionsTabs.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <Pressable
            key={tab.id}
            style={[styles.tabButton, isActive ? styles.tabButtonActive : null]}
            onPress={() => onChange(tab.id)}
          >
            <Text style={isActive ? styles.tabTextActive : styles.tabText}>{tab.title}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

function CollectionProfileCard({
  item,
  onPress,
  onToggleLike,
}: {
  item: DatingCollectionProfileItem;
  onPress: () => void;
  onToggleLike: () => void;
}) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={item.image} style={styles.cardImage} />

      {item.isDeleted ? <View style={styles.deletedOverlay} /> : null}

      {item.isDeleted ? (
        <View style={styles.deletedBadge}>
          <Text style={styles.deletedBadgeText}>Анкета удалена</Text>
        </View>
      ) : null}

      <Pressable style={styles.heartButton} onPress={onToggleLike}>
        <Ionicons
          name={item.isLiked ? 'heart' : 'heart-outline'}
          size={22}
          color={datingColors.pink}
        />
      </Pressable>

      <View style={styles.nameBadge}>
        <Text style={styles.nameBadgeText}>{`${item.name}, ${item.age} лет`}</Text>
      </View>
    </Pressable>
  );
}

export function DatingCollectionsScreen({
  onBack,
  onOpenProfile,
}: {
  onBack: () => void;
  onOpenProfile: (profileId: string) => void;
}) {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<DatingCollectionsTabId>('likesMe');
  const [profiles, setProfiles] = useState(datingCollectionsProfiles);

  const filteredProfiles = useMemo(
    () => profiles.filter((item) => item.tab === activeTab),
    [activeTab, profiles],
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 + insets.bottom }}
      >
        <View style={styles.header}>
          <Pressable onPress={onBack} style={styles.backButton}>
            <BackChevronIcon color={datingColors.dark} />
          </Pressable>
          <Text style={styles.headerTitle}>Подборки</Text>
        </View>

        <CollectionsTabs activeTab={activeTab} onChange={setActiveTab} />

        {filteredProfiles.length ? (
          <View style={styles.grid}>
            {filteredProfiles.map((item) => (
              <CollectionProfileCard
                key={item.id}
                item={item}
                onPress={() => {
                  if (item.isDeleted) {
                    console.log('profile deleted');
                    return;
                  }

                  onOpenProfile(item.id);
                }}
                onToggleLike={() =>
                  setProfiles((prev) =>
                    prev.map((profile) =>
                      profile.id === item.id ? { ...profile, isLiked: !profile.isLiked } : profile,
                    ),
                  )
                }
              />
            ))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>Пока пусто</Text>
            <Text style={styles.emptyText}>
              Здесь появятся анкеты, когда появятся новые симпатии или гости.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 20,
  },
  headerTitle: {
    fontSize: 26,
    lineHeight: 32,
    ...typography.Inter[700],
    color: '#3A0718',
  },
  tabsWrap: {
    marginTop: 14,
    marginBottom: 28,
  },
  tabsContent: {
    paddingRight: 16,
  },
  tabButton: {
    height: 48,
    borderRadius: 24,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#F50057',
    backgroundColor: '#FFFFFF',
  },
  tabButtonActive: {
    backgroundColor: '#F50057',
  },
  tabText: {
    fontSize: 17,
    ...typography.Inter[700],
    color: '#3A0718',
  },
  tabTextActive: {
    fontSize: 17,
    ...typography.Inter[700],
    color: '#FFFFFF',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: cardWidth,
    height: cardWidth * 1.35,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#FFF2F6',
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  nameBadge: {
    position: 'absolute',
    left: 8,
    bottom: 8,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(58, 7, 24, 0.55)',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameBadgeText: {
    fontSize: 13,
    ...typography.Inter[700],
    color: '#FFFFFF',
  },
  deletedOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.55)',
  },
  deletedBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(58, 7, 24, 0.45)',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deletedBadgeText: {
    fontSize: 13,
    ...typography.Inter[700],
    color: '#FFFFFF',
  },
  emptyState: {
    marginTop: 120,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  emptyTitle: {
    fontSize: 20,
    lineHeight: 26,
    ...typography.Inter[700],
    color: '#3A0718',
    textAlign: 'center',
  },
  emptyText: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 20,
    color: '#8A8A8A',
    textAlign: 'center',
  },
});

