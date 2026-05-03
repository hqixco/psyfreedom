import { Image, StyleSheet, Text, View } from 'react-native';
import { theme, typography } from '../constants/theme';

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/splash-hero-image.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Psyfreedom</Text>
        <Text style={styles.footerText}>Версия 2.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 224,
    height: 72,
  },
  footer: {
    position: 'absolute',
    bottom: 36,
    alignItems: 'center',
  },
  footerText: {
    color: theme.white,
    fontSize: 11,
    lineHeight: 16,
    ...typography.Inter[400],
  },
});

