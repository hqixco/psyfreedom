import { useState } from 'react';
import { BackChevronIcon } from '../../components/icons/BackChevronIcon';
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { datingEvents, DatingEventItem } from './datingData';
import { datingColors } from './datingStyles';
import { typography } from '../../constants/theme';

const gap = 10;
const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 32 - gap) / 2;

function DatingEventCard({
  item,
  onPress,
  onToggleFavorite,
}: {
  item: DatingEventItem;
  onPress: () => void;
  onToggleFavorite: () => void;
}) {
  const eventTitle = item.id === '1' ? 'Секреты счастливой жены' : item.title;
  const eventCity = item.id === '1' ? 'Москва' : item.city;
  const eventImage =
    item.id === '1' ? require('../../../assets/images/dating-event-card-1.png') : item.image;

  return (
    <Pressable style={styles.eventCard} onPress={onPress}>
      <View style={styles.imageWrapper}>
        <Image source={eventImage} style={styles.image} />
        <View style={styles.dateBadge}>
          <Text style={styles.dateDay}>{item.day}</Text>
          <Text style={styles.dateMonth}>{item.month}</Text>
        </View>
        <Pressable style={styles.heartButton} onPress={onToggleFavorite}>
          <Ionicons name={item.isFavorite ? 'heart' : 'heart-outline'} size={24} color={datingColors.white} />
        </Pressable>
        <View style={styles.viewsRow}>
          <Ionicons name="eye-outline" size={16} color={datingColors.white} />
          <Text style={styles.viewsText}>{item.views}</Text>
        </View>
      </View>
      <Text style={styles.title}>{eventTitle}</Text>
      <Text style={styles.city}>{eventCity}</Text>
    </Pressable>
  );
}

type DatingEventsScreenProps = {
  onBack: () => void;
  onOpenEvent: (eventId: string) => void;
};

export function DatingEventsScreen({ onBack, onOpenEvent }: DatingEventsScreenProps) {
  const insets = useSafeAreaInsets();
  const [events, setEvents] = useState(datingEvents);

  const toggleFavorite = (eventId: string) => {
    setEvents((prev) =>
      prev.map((item) => (item.id === eventId ? { ...item, isFavorite: !item.isFavorite } : item))
    );
  };

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
          <Text style={styles.headerTitle}>Мероприятия</Text>
        </View>

        <Text style={styles.sectionTitle}>Ближайшие мероприятия</Text>

        <View style={styles.grid}>
          {events.slice(0, 2).map((event) => (
            <DatingEventCard
              key={event.id}
              item={event}
              onPress={() => onOpenEvent(event.id)}
              onToggleFavorite={() => toggleFavorite(event.id)}
            />
          ))}
        </View>

        <View style={styles.controlsRow}>
          <Ionicons name="map-outline" size={28} color={datingColors.dark} />
          <Pressable style={styles.filtersButton} onPress={() => console.log('open dating event filters')}>
            <Text style={styles.filtersText}>Фильтры</Text>
            <Ionicons name="options-outline" size={24} color={datingColors.dark} />
          </Pressable>
        </View>

        <View style={styles.grid}>
          {events.slice(2).map((event) => (
            <DatingEventCard
              key={event.id}
              item={event}
              onPress={() => onOpenEvent(event.id)}
              onToggleFavorite={() => toggleFavorite(event.id)}
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
    color: datingColors.dark,
  },
  sectionTitle: {
    marginTop: 16,
    fontSize: 24,
    lineHeight: 30,
    ...typography.Inter[700],
    color: datingColors.dark,
  },
  grid: {
    marginTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  controlsRow: {
    marginTop: 4,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filtersButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filtersText: {
    marginRight: 8,
    fontSize: 16,
    ...typography.Inter[700],
    color: datingColors.dark,
  },
  eventCard: {
    width: cardWidth,
    marginBottom: 18,
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
});


