import { Ionicons } from '@expo/vector-icons';
import { BackChevronIcon } from '../../components/icons/BackChevronIcon';
import { ActivityIndicator, Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { colors, typography } from '../../constants/theme';

type LocationPickerScreenProps = {
  onBack: () => void;
  onSelectLocation: (city: string) => void;
  bottomTabsHeight?: number;
};

export function LocationPickerScreen({ onBack, onSelectLocation, bottomTabsHeight = 0 }: LocationPickerScreenProps) {
  const insets = useSafeAreaInsets();
  const mapUrl = 'https://yandex.ru/maps/213/moscow/?ll=37.617761%2C55.755773&z=11';

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={onBack}>
          <BackChevronIcon color={colors.primaryDark} />
        </Pressable>
        <Text style={styles.headerTitle}>Выбрать местоположение</Text>
      </View>

      <Pressable style={styles.mapArea} onPress={() => onSelectLocation('Москва')}>
        {Platform.OS === 'web' ? (
          <Image source={require('../../../assets/images/map-moscow.jpg')} style={styles.webFallbackImage} resizeMode="cover" />
        ) : (
          <WebView
            source={{ uri: mapUrl }}
            style={styles.webview}
            startInLoadingState
            renderLoading={() => (
              <View style={styles.loaderWrap}>
                <ActivityIndicator size="large" color={colors.primary} />
                <Text style={styles.loaderText}>Загружаем карту Москвы</Text>
              </View>
            )}
          />
        )}
        <View style={styles.mapBadge}>
          <Ionicons name="location" size={18} color={colors.primary} />
          <Text style={styles.mapBadgeText}>Москва</Text>
        </View>
      </Pressable>

      <View style={[styles.card, { bottom: 24 + insets.bottom + bottomTabsHeight }]}>
        <Pressable style={styles.heartButton}>
          <Ionicons name="heart-outline" size={18} color="#9BC7D1" />
        </Pressable>

        <Image source={require('../../../assets/images/specialist-1.png')} style={styles.avatar} />

        <View style={styles.cardContent}>
          <Text style={styles.name}>Имя Фамилия</Text>
          <Text style={styles.specialization}>Специализация</Text>
          <Text style={styles.price}>от 1 200 ₽</Text>
          <View style={styles.tagsRow}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Отношения</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Семья</Text>
            </View>
          </View>
        </View>

        <Pressable style={styles.plusButton} onPress={() => onSelectLocation('Москва')}>
          <Ionicons name="add" size={24} color={colors.white} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  backButton: {
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 22,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  mapArea: {
    flex: 1,
    position: 'relative',
  },
  webview: {
    flex: 1,
  },
  webFallbackImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  loaderWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAF7FB',
  },
  loaderText: {
    marginTop: 12,
    fontSize: 14,
    color: colors.primaryDark,
  },
  mapBadge: {
    position: 'absolute',
    left: 16,
    top: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  mapBadgeText: {
    marginLeft: 6,
    fontSize: 14,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  card: {
    position: 'absolute',
    left: 16,
    right: 16,
    minHeight: 112,
    borderRadius: 18,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  heartButton: {
    position: 'absolute',
    top: 14,
    right: 16,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginRight: 12,
    backgroundColor: colors.cardLight,
  },
  cardContent: {
    flex: 1,
    paddingRight: 58,
  },
  name: {
    fontSize: 17,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  specialization: {
    marginTop: 2,
    fontSize: 14,
    color: colors.muted,
  },
  price: {
    marginTop: 4,
    fontSize: 18,
    ...typography.Inter[700],
    color: colors.primary,
  },
  tagsRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  tag: {
    height: 24,
    marginRight: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAF8FA',
  },
  tagText: {
    fontSize: 12,
    color: colors.primaryDark,
  },
  plusButton: {
    position: 'absolute',
    right: 12,
    bottom: 14,
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
});
