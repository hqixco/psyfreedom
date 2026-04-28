import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { theme, typography } from '../constants/theme';

const backgroundAsset = require('../../assets/dating-bg.png');

export function DatingBanner() {
  return (
    <ImageBackground
      source={backgroundAsset}
      style={styles.container}
      imageStyle={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <Text style={styles.title}>{'\u0417\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u0430'}</Text>
        <Text style={styles.subtitle}>
          {'\u041a\u043b\u0443\u0431 \u0434\u043b\u044f \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0439'}
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    marginTop: 24,
    height: 79,
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  backgroundImage: {
    borderRadius: 12,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    color: theme.white,
    fontSize: 24,
    lineHeight: 28,
    ...typography.Inter[700],
  },
  subtitle: {
    color: theme.white,
    fontSize: 14,
    marginTop: 4,
    ...typography.Inter[400],
  },
});
