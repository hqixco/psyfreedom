import { Image, StyleSheet, Text } from 'react-native';
import { theme, typography } from '../constants/theme';

const backgroundAsset = require('../../assets/dating-bg.png');
const backgroundUri = Image.resolveAssetSource(backgroundAsset).uri;

export function DatingBanner() {
  return (
    <div style={styles.container as React.CSSProperties}>
      <Text style={styles.title}>{'\u0417\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u0430'}</Text>
      <Text style={styles.subtitle}>
        {'\u041a\u043b\u0443\u0431 \u0434\u043b\u044f \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0439'}
      </Text>
    </div>
  );
}

const styles = {
  container: {
    marginLeft: 18,
    marginRight: 18,
    marginTop: 24,
    height: 79,
    borderRadius: 12,
    overflow: 'hidden',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    backgroundImage: `url("${backgroundUri}")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
};
