import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  datingProfilePromoCards,
  datingUserProfileMock,
  DatingProfilePromoCard,
} from './datingData';

const datingProfileMenuItems = [
  { id: 'collections', title: 'Подборки' },
  { id: 'favorites', title: 'Избранное' },
  { id: 'requests', title: 'Заявки' },
  { id: 'booked', title: 'Забронированные' },
];

function MenuItem({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.menuItem} onPress={onPress}>
      <Text style={styles.menuText}>{title}</Text>
      <Ionicons name="chevron-forward" size={22} color="#3A0718" />
    </Pressable>
  );
}

function PromoCard({
  card,
  onPress,
}: {
  card: DatingProfilePromoCard;
  onPress: () => void;
}) {
  return (
    <View style={[styles.promoCard, card.highlighted ? styles.promoCardHighlighted : null]}>
      <Text style={styles.promoTitle}>{card.title}</Text>
      {card.subtitle ? <Text style={styles.promoSubtitle}>{card.subtitle}</Text> : null}

      {card.options.map((option, index) => (
        <View key={option.id} style={index === 0 ? styles.activeOptionRow : styles.optionRow}>
          <Text style={option.active ? styles.activeOptionText : styles.disabledOptionText}>
            {option.text}
          </Text>
          {option.badge ? <Text style={styles.optionBadge}>{option.badge}</Text> : null}
        </View>
      ))}

      <Pressable style={styles.promoButton} onPress={onPress}>
        <Text style={styles.promoButtonText}>{card.buttonText}</Text>
      </Pressable>
    </View>
  );
}

type DatingUserProfileScreenProps = {
  onOpenCollections: () => void;
  onOpenBookedEvents: () => void;
  onOpenEventRequests: () => void;
};

export function DatingUserProfileScreen({
  onOpenCollections,
  onOpenBookedEvents,
  onOpenEventRequests,
}: DatingUserProfileScreenProps) {
  const insets = useSafeAreaInsets();

  const handleMenuPress = (id: string) => {
    switch (id) {
      case 'collections':
        onOpenCollections();
        break;
      case 'favorites':
        console.log('open dating favorites');
        break;
      case 'requests':
        onOpenEventRequests();
        break;
      case 'booked':
        onOpenBookedEvents();
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}
      >
        <View style={styles.topArea}>
          <Pressable
            style={styles.settingsButton}
            onPress={() => console.log('open dating profile settings')}
          >
            <Ionicons name="settings-outline" size={28} color="#3A0718" />
          </Pressable>

          <View style={styles.profileRow}>
            <Image source={datingUserProfileMock.avatar} style={styles.avatar} />

            <View style={styles.nameBlock}>
              <Text style={styles.nameText}>Имя</Text>
              <Text style={styles.nameText}>Фамилия</Text>
            </View>
          </View>
        </View>

        <View style={styles.whiteSection}>
          {datingProfileMenuItems.map((item) => (
            <MenuItem key={item.id} title={item.title} onPress={() => handleMenuPress(item.id)} />
          ))}

          {datingProfilePromoCards.map((card) => (
            <PromoCard
              key={card.id}
              card={card}
              onPress={() => console.log(`buy dating promo ${card.id}`)}
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
    backgroundColor: '#FFFFFF',
  },
  topArea: {
    minHeight: 220,
    paddingHorizontal: 20,
    paddingTop: 32,
    backgroundColor: '#FFD6E4',
  },
  settingsButton: {
    position: 'absolute',
    right: 20,
    top: 58,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileRow: {
    marginTop: 34,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#FFF2F6',
    resizeMode: 'cover',
  },
  nameBlock: {
    marginLeft: 22,
    flex: 1,
  },
  nameText: {
    fontSize: 26,
    lineHeight: 30,
    fontWeight: '700',
    color: '#3A0718',
  },
  whiteSection: {
    marginTop: -28,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 24,
  },
  menuItem: {
    height: 54,
    borderRadius: 10,
    backgroundColor: '#FFF2F6',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  menuText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#3A0718',
  },
  promoCard: {
    marginTop: 28,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0E3E8',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  promoCardHighlighted: {
    marginTop: 14,
    borderColor: '#F50057',
  },
  promoTitle: {
    fontSize: 22,
    lineHeight: 27,
    fontWeight: '700',
    color: '#3A0718',
  },
  promoSubtitle: {
    marginTop: 4,
    fontSize: 16,
    lineHeight: 21,
    color: '#3A0718',
  },
  activeOptionRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  optionRow: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  activeOptionText: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700',
    color: '#3A0718',
  },
  disabledOptionText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
    color: '#C9C1C4',
  },
  optionBadge: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '700',
    color: '#F50057',
  },
  promoButton: {
    marginTop: 20,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F50057',
    alignItems: 'center',
    justifyContent: 'center',
  },
  promoButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
