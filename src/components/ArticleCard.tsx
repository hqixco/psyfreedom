import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { theme, typography } from '../constants/theme';
import { ArticleItem } from '../data/mockData';

type ArticleCardProps = {
  item: ArticleItem;
};

export function ArticleCard({ item }: ArticleCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.imageWrap}>
        <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image} style={styles.image} />
        <Pressable style={styles.heartButton} onPress={() => setLiked((current) => !current)} hitSlop={10}>
          <ArticleHeartIcon liked={liked} />
        </Pressable>
        <View style={styles.viewsRow}>
          <EyeIcon />
          <Text style={styles.viewsText}>{item.views}</Text>
        </View>
      </View>

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.topic}>{item.topic}</Text>
    </View>
  );
}

function ArticleHeartIcon({ liked }: { liked: boolean }) {
  if (liked) {
    return (
      <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
          fill={theme.pink}
        />
      </Svg>
    );
  }

  return (
    <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.62 20.55C12.28 20.67 11.72 20.67 11.38 20.55C8.48 19.56 2 15.43 2 8.43C2 5.34 4.49 2.84 7.56 2.84C9.38 2.84 10.99 3.72 12 5.08C13.01 3.72 14.63 2.84 16.44 2.84C19.51 2.84 22 5.34 22 8.43C22 15.43 15.52 19.56 12.62 20.55Z"
        stroke={theme.white}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function EyeIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        d="M7.99995 10.8866C6.40661 10.8866 5.11328 9.59328 5.11328 7.99995C5.11328 6.40661 6.40661 5.11328 7.99995 5.11328C9.59328 5.11328 10.8866 6.40661 10.8866 7.99995C10.8866 9.59328 9.59328 10.8866 7.99995 10.8866ZM7.99995 6.11328C6.95995 6.11328 6.11328 6.95995 6.11328 7.99995C6.11328 9.03995 6.95995 9.88661 7.99995 9.88661C9.03995 9.88661 9.88661 9.03995 9.88661 7.99995C9.88661 6.95995 9.03995 6.11328 7.99995 6.11328Z"
        fill="white"
      />
      <Path
        d="M8.00022 14.0135C5.49355 14.0135 3.12688 12.5468 1.50021 10.0002C0.793548 8.90015 0.793548 7.10682 1.50021 6.00015C3.13355 3.45348 5.50022 1.98682 8.00022 1.98682C10.5002 1.98682 12.8669 3.45348 14.4935 6.00015C15.2002 7.10015 15.2002 8.89348 14.4935 10.0002C12.8669 12.5468 10.5002 14.0135 8.00022 14.0135ZM8.00022 2.98682C5.84688 2.98682 3.78688 4.28015 2.34688 6.54015C1.84688 7.32015 1.84688 8.68015 2.34688 9.46015C3.78688 11.7201 5.84688 13.0135 8.00022 13.0135C10.1535 13.0135 12.2135 11.7201 13.6535 9.46015C14.1535 8.68015 14.1535 7.32015 13.6535 6.54015C12.2135 4.28015 10.1535 2.98682 8.00022 2.98682Z"
        fill="white"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    marginRight: 10,
    backgroundColor: theme.white,
  },
  imageWrap: {
    width: 180,
    height: 182,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
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
    gap: 4,
  },
  viewsText: {
    color: theme.white,
    fontSize: 13,
    ...typography.Inter[400],
  },
  title: {
    marginTop: 12,
    fontSize: 14,
    color: theme.primaryDark,
    ...typography.Inter[700],
  },
  topic: {
    marginTop: 6,
    fontSize: 14,
    color: theme.muted,
    ...typography.Inter[400],
  },
});
