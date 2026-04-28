import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { theme, typography } from '../constants/theme';
import { SpecialistItem } from '../data/mockData';

type SpecialistCardProps = {
  item: SpecialistItem;
};

export function SpecialistCard({ item }: SpecialistCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.imageWrap}>
        <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image} style={styles.image} />
        <Pressable style={styles.heartBadge} onPress={() => setLiked((current) => !current)} hitSlop={10}>
          <HeartIcon liked={liked} />
        </Pressable>
        <View style={styles.ratingBadge}>
          <Text style={styles.ratingText}>{`\u2605 ${item.rating}`}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.specialization} numberOfLines={1}>
          {item.specialization}
        </Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
}

function HeartIcon({ liked }: { liked: boolean }) {
  return (
    <Svg width={20} height={19} viewBox="0 0 20 19" fill="none">
      <Path
        d="M10 18.35L8.55 17.03C3.4 12.36 0 9.27 0 5.5C0 2.41 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.08C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.41 20 5.5C20 9.27 16.6 12.36 11.45 17.03L10 18.35Z"
        fill={liked ? theme.pink : '#F5F9FD'}
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: theme.white,
  },
  imageWrap: {
    height: 180,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  heartBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  ratingBadge: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  ratingText: {
    color: theme.white,
    fontSize: 14,
    ...typography.Inter[400],
  },
  content: {
    paddingTop: 8,
    paddingHorizontal: 2,
  },
  name: {
    fontSize: 14,
    ...typography.Inter[600],
    color: '#064453',
    marginBottom: 3,
  },
  specialization: {
    fontSize: 14,
    color: theme.muted,
    marginBottom: 7,
    ...typography.Inter[400],
  },
  price: {
    fontSize: 16,
    ...typography.Inter[600],
    color: '#008CA3',
  },
});
