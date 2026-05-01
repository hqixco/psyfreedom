import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

type JournalHelpBannerProps = {
  onPress: () => void;
};

export function JournalHelpBanner({ onPress }: JournalHelpBannerProps) {
  return (
    <View style={styles.banner}>
      <Text style={styles.title}>{'Не можете найти\nрешение своей\nпроблемы?'}</Text>
      <Pressable style={styles.buttonWrap} onPress={onPress}>
        <View style={styles.arrowCapsule}>
          <Ionicons name="arrow-forward" size={16} color={colors.primary} />
        </View>
        <View style={styles.mainButton}>
          <Text style={styles.buttonText}>Напишите нам</Text>
        </View>
      </Pressable>
      <Image source={require('../../../assets/images/journal-help-girl.png')} style={styles.image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 146,
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 12,
    overflow: 'hidden',
    paddingLeft: 20,
    paddingTop: 18,
    paddingBottom: 16,
    paddingRight: 150,
    backgroundColor: colors.mintLight,
  },
  title: {
    width: 220,
    fontSize: 22,
    lineHeight: 24,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  buttonWrap: {
    marginTop: 18,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  arrowCapsule: {
    width: 36,
    height: 34,
    marginRight: -8,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  mainButton: {
    height: 34,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.white,
  },
  image: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 155,
    height: 145,
  },
});
