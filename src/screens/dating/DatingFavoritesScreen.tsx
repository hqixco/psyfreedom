import { useState } from 'react';
import { BackChevronIcon } from '../../components/icons/BackChevronIcon';
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { datingFavoriteEvents, DatingEventItem } from './datingData';
import { datingColors } from './datingStyles';
import { typography } from '../../constants/theme';

const gap = 10;
const cardWidth = (Dimensions.get('window').width - 32 - gap) / 2;

function FavoriteEventCard({
  item,
  onRemove,
}: {
  item: DatingEventItem;
  onRemove: () => void;
}) {
  return (
    <Pressable style={styles.card} onPress={() => console.log('open favorite event', item.id)}>
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.image} />

        <View style={styles.dateBadge}>
          <Text style={styles.dateDay}>{item.day}</Text>
          <Text style={styles.dateMonth}>{item.month}</Text>
        </View>

        <Pressable style={styles.heartButton} onPress={onRemove}>
          <Ionicons name="heart" size={24} color={datingColors.pink} />
        </Pressable>

        <View style={styles.viewsRow}>
          <Ionicons name="eye-outline" size={16} color={datingColors.white} />
          <Text style={styles.viewsText}>{item.views}</Text>
        </View>
      </View>

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.city}>{item.city}</Text>
    </Pressable>
  );
}

export function DatingFavoritesScreen({ onBack }: { onBack: () => void }) {
  const insets = useSafeAreaInsets();
  const [favoriteEvents, setFavoriteEvents] = useState(datingFavoriteEvents);

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
          <Text style={styles.headerTitle}>Избранное</Text>
        </View>

        {favoriteEvents.length ? (
          <View style={styles.grid}>
            {favoriteEvents.map((item) => (
              <FavoriteEventCard
                key={item.id}
                item={item}
                onRemove={() => setFavoriteEvents((prev) => prev.filter((event) => event.id !== item.id))}
              />
            ))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>В избранном пока пусто</Text>
            <Text style={styles.emptyText}>
              Добавляйте мероприятия и анкеты в избранное, чтобы быстро вернуться к ним позже.
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
    backgroundColor: datingColors.white,
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 26,
    lineHeight: 32,
    ...typography.Inter[700],
    color: datingColors.dark,
  },
  grid: {
    marginTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: cardWidth,
    marginBottom: 24,
  },
  imageWrapper: {
    width: cardWidth,
    height: cardWidth * 0.88,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: datingColors.pinkLight,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dateBadge: {
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
  dateDay: {
    fontSize: 20,
    lineHeight: 21,
    ...typography.Inter[700],
    color: datingColors.dark,
  },
  dateMonth: {
    fontSize: 12,
    lineHeight: 14,
    color: datingColors.muted,
  },
  heartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  viewsRow: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewsText: {
    marginLeft: 4,
    fontSize: 15,
    ...typography.Inter[700],
    color: datingColors.white,
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 20,
    ...typography.Inter[700],
    color: datingColors.dark,
  },
  city: {
    marginTop: 2,
    fontSize: 15,
    lineHeight: 19,
    color: datingColors.muted,
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
    color: datingColors.dark,
    textAlign: 'center',
  },
  emptyText: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 20,
    color: datingColors.muted,
    textAlign: 'center',
  },
});

