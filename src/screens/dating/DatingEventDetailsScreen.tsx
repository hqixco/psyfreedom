import { useEffect, useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ShareIcon } from '../../components/icons/ShareIcon';
import { datingEventDetailsMock } from './datingData';

type DatingEventDetailsScreenProps = {
  eventId: string;
  onBack: () => void;
  onOpenMap: () => void;
  setBottomTabsVisible?: (visible: boolean) => void;
};

function EventInfoRow({ value }: { value: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoText}>{value}</Text>
    </View>
  );
}

function EventTextBlock({
  title,
  text,
  expanded,
  onToggle,
}: {
  title: string;
  text: string;
  expanded: boolean;
  onToggle: () => void;
}) {
  const previewText = useMemo(() => {
    if (expanded || text.length <= 170) {
      return text;
    }

    return `${text.slice(0, 170).trim()}...`;
  }, [expanded, text]);

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionText}>{previewText}</Text>
      <Pressable onPress={onToggle}>
        <Text style={styles.readMoreText}>{expanded ? 'Свернуть' : 'Читать ещё'}</Text>
      </Pressable>
    </View>
  );
}

function EventOrganizerCard() {
  return (
    <View style={styles.organizerCard}>
      <Image source={datingEventDetailsMock.organizer.avatar} style={styles.organizerAvatar} />
      <View>
        <Text style={styles.organizerName}>{datingEventDetailsMock.organizer.name}</Text>
        <Text style={styles.organizerRole}>{datingEventDetailsMock.organizer.role}</Text>
      </View>
    </View>
  );
}

export function DatingEventDetailsScreen({
  eventId,
  onBack,
  onOpenMap,
  setBottomTabsVisible,
}: DatingEventDetailsScreenProps) {
  const insets = useSafeAreaInsets();
  const [isFavorite, setIsFavorite] = useState(datingEventDetailsMock.isFavorite);
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [resultExpanded, setResultExpanded] = useState(false);

  useEffect(() => {
    if (!setBottomTabsVisible) {
      return;
    }

    setBottomTabsVisible(false);
    return () => setBottomTabsVisible(true);
  }, [setBottomTabsVisible]);

  const event = {
    ...datingEventDetailsMock,
    id: eventId || datingEventDetailsMock.id,
    isFavorite,
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 130 + insets.bottom }}
        >
          <View style={styles.header}>
            <Pressable onPress={onBack}>
              <Ionicons name="chevron-back" size={24} color="#3A0718" />
            </Pressable>

            <View style={styles.headerRight}>
              <Pressable onPress={() => console.log('share event', event.id)}>
                <ShareIcon size={24} color="#3A0718" />
              </Pressable>
              <Pressable onPress={() => setIsFavorite((prev) => !prev)}>
                <Ionicons
                  name={event.isFavorite ? 'heart' : 'heart-outline'}
                  size={30}
                  color={event.isFavorite ? '#F50057' : '#3A0718'}
                />
              </Pressable>
            </View>
          </View>

          <Image source={event.image} style={styles.image} />
          <Text style={styles.price}>{event.price}</Text>
          <Text style={styles.title}>{event.title}</Text>

          <View style={styles.infoBlock}>
            <EventInfoRow value={event.dateTime} />
            <View style={styles.addressRow}>
              <Text style={styles.address}>{event.address}</Text>
              <Pressable onPress={onOpenMap}>
                <Text style={styles.mapLink}>Показать на карте</Text>
              </Pressable>
            </View>
            <EventInfoRow value={event.participants} />
          </View>

          <EventTextBlock
            title="Описание"
            text={event.description}
            expanded={descriptionExpanded}
            onToggle={() => setDescriptionExpanded((prev) => !prev)}
          />
          <EventTextBlock
            title="Что вы получите"
            text={event.result}
            expanded={resultExpanded}
            onToggle={() => setResultExpanded((prev) => !prev)}
          />

          <EventOrganizerCard />
        </ScrollView>

        <View style={[styles.stickyButtons, { paddingBottom: 10 + insets.bottom }]}>
          <Pressable style={styles.inviteButton} onPress={() => console.log('invite to event', event.id)}>
            <Text style={styles.inviteButtonText}>Пригласить</Text>
          </Pressable>
          <Pressable style={styles.bookButton} onPress={() => console.log('book event', event.id)}>
            <Text style={styles.bookButtonText}>Забронировать</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  image: {
    marginTop: 6,
    width: '100%',
    height: 270,
    borderRadius: 12,
    resizeMode: 'cover',
    backgroundColor: '#FFF2F6',
  },
  price: {
    marginTop: 14,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '700',
    color: '#F50057',
  },
  title: {
    marginTop: 2,
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '700',
    color: '#3A0718',
  },
  infoBlock: {
    marginTop: 12,
  },
  infoRow: {
    marginTop: 4,
  },
  infoText: {
    fontSize: 16,
    lineHeight: 21,
    color: '#8A8A8A',
  },
  addressRow: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  address: {
    flex: 1,
    paddingRight: 12,
    fontSize: 16,
    lineHeight: 21,
    color: '#8A8A8A',
  },
  mapLink: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '700',
    color: '#F50057',
    textDecorationLine: 'underline',
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 21,
    lineHeight: 26,
    fontWeight: '700',
    color: '#3A0718',
  },
  sectionText: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 21,
    color: '#3A0718',
  },
  readMoreText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '700',
    color: '#F50057',
  },
  organizerCard: {
    marginTop: 24,
    height: 82,
    borderRadius: 12,
    backgroundColor: '#FFF2F6',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  organizerAvatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    resizeMode: 'cover',
    marginRight: 16,
  },
  organizerName: {
    fontSize: 17,
    lineHeight: 21,
    fontWeight: '700',
    color: '#3A0718',
  },
  organizerRole: {
    marginTop: 2,
    fontSize: 15,
    lineHeight: 19,
    color: '#8A8A8A',
  },
  stickyButtons: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  inviteButton: {
    height: 46,
    borderRadius: 23,
    backgroundColor: '#F50057',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  inviteButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  bookButton: {
    height: 46,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#F50057',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F50057',
  },
});
