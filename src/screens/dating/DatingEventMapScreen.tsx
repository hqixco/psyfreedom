import { useEffect } from 'react';
import { BackChevronIcon } from '../../components/icons/BackChevronIcon';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { datingMapMock } from './datingData';
import { typography } from '../../constants/theme';

type DatingEventMapScreenProps = {
  onBack: () => void;
  setBottomTabsVisible?: (visible: boolean) => void;
};

export function DatingEventMapScreen({ onBack, setBottomTabsVisible }: DatingEventMapScreenProps) {
  useEffect(() => {
    if (!setBottomTabsVisible) {
      return;
    }

    setBottomTabsVisible(false);
    return () => setBottomTabsVisible(true);
  }, [setBottomTabsVisible]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={onBack} style={styles.backButton}>
          <BackChevronIcon color="#3A0718" />
        </Pressable>
        <Text style={styles.title}>Показать на карте</Text>
      </View>

      <View style={styles.mapContainer}>
        <Image source={datingMapMock.image} style={styles.mapImage} />
        <View style={styles.marker}>
          <View style={styles.markerInner} />
          <View style={styles.markerTail} />
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
  header: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 20,
  },
  title: {
    fontSize: 26,
    lineHeight: 32,
    ...typography.Inter[700],
    color: '#3A0718',
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#F3F3F3',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  marker: {
    position: 'absolute',
    top: '25%',
    left: '57%',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F50057',
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerInner: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
  },
  markerTail: {
    position: 'absolute',
    bottom: -3,
    width: 8,
    height: 8,
    backgroundColor: '#F50057',
    transform: [{ rotate: '45deg' }],
  },
});

