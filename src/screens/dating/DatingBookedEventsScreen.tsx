import { useEffect } from 'react';
import { BackChevronIcon } from '../../components/icons/BackChevronIcon';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { datingBookedEvents, DatingBookedEvent } from './datingData';
import { typography } from '../../constants/theme';

type DatingBookedEventsScreenProps = {
  onBack: () => void;
  setBottomTabsVisible?: (visible: boolean) => void;
};

function BookedEventItem({
  item,
  onPress,
}: {
  item: DatingBookedEvent;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.bookedItem} onPress={onPress}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.name}>{item.title}</Text>
      <View style={styles.infoRow}>
        <Text style={styles.tickets}>{item.tickets}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
    </Pressable>
  );
}

export function DatingBookedEventsScreen({
  onBack,
  setBottomTabsVisible,
}: DatingBookedEventsScreenProps) {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (!setBottomTabsVisible) {
      return;
    }

    setBottomTabsVisible(false);
    return () => setBottomTabsVisible(true);
  }, [setBottomTabsVisible]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 + insets.bottom }}
      >
        <View style={styles.header}>
          <Pressable onPress={onBack} style={styles.backButton}>
            <BackChevronIcon color="#3A0718" />
          </Pressable>
          <Text style={styles.title}>Забронированные мероприятия</Text>
        </View>

        {datingBookedEvents.map((item) => (
          <BookedEventItem
            key={item.id}
            item={item}
            onPress={() => console.log('open booked event', item.id)}
          />
        ))}
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
    marginRight: 12,
  },
  title: {
    flex: 1,
    fontSize: 24,
    lineHeight: 30,
    ...typography.Inter[700],
    color: '#3A0718',
  },
  bookedItem: {
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F0E3E8',
  },
  date: {
    marginBottom: 8,
    fontSize: 15,
    lineHeight: 19,
    color: '#8A8A8A',
  },
  name: {
    fontSize: 18,
    lineHeight: 23,
    ...typography.Inter[700],
    color: '#3A0718',
  },
  infoRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  tickets: {
    marginRight: 12,
    fontSize: 15,
    color: '#3A0718',
  },
  price: {
    marginRight: 12,
    fontSize: 15,
    ...typography.Inter[700],
    color: '#3A0718',
  },
  status: {
    fontSize: 15,
    ...typography.Inter[700],
    color: '#F50057',
  },
});

