import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { theme, typography } from '../constants/theme';
import { TopicItem } from '../data/mockData';

type TopicCardProps = {
  item: TopicItem;
  width: number;
  onPress: () => void;
};

export function TopicCard({ item, width, onPress }: TopicCardProps) {
  const isAllTopics = Boolean(item.isAllTopics);
  const hasCustomGradient = Boolean(item.gradientColors);
  const cardStyle = [
    styles.card,
    { width, backgroundColor: hasCustomGradient ? 'transparent' : item.backgroundColor },
    isAllTopics && styles.allTopicsCard,
  ];

  const content = (
    <>
      {item.gradientColors ? (
        <LinearGradient
          colors={item.gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.cardGradient}
        />
      ) : null}

      {isAllTopics ? (
        <>
          <View style={styles.plusWrap}>
            <PlusIcon />
          </View>
          <Text style={styles.allTopicsText}>{item.title}</Text>
        </>
      ) : (
        <>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.arrowButton}>
            <ArrowIcon />
          </View>
        </>
      )}
    </>
  );

  if (item.image) {
    return (
      <Pressable onPress={onPress}>
        <ImageBackground
          source={item.image}
          style={cardStyle}
          imageStyle={styles.backgroundImage}
          resizeMode="contain"
        >
          {content}
        </ImageBackground>
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress} style={cardStyle}>
      {content}
    </Pressable>
  );
}

function ArrowIcon() {
  return (
    <Svg width={18} height={11} viewBox="0 0 20 12" fill="none">
      <Path
        d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM19.2803 6.05328C19.5732 5.76039 19.5732 5.28551 19.2803 4.99262L14.5074 0.219648C14.2145 -0.073245 13.7396 -0.073245 13.4467 0.219648C13.1538 0.512542 13.1538 0.987415 13.4467 1.28031L17.6893 5.52295L13.4467 9.76559C13.1538 10.0585 13.1538 10.5334 13.4467 10.8263C13.7396 11.1191 14.2145 11.1191 14.5074 10.8263L19.2803 6.05328ZM0.75 5.52295V6.27295H18.75V5.52295V4.77295H0.75V5.52295Z"
        fill="#05728F"
      />
    </Svg>
  );
}

function PlusIcon() {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      <Path
        d="M20 5.6001V34.4001"
        stroke="#033542"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.6001 20H34.4001"
        stroke="#033542"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 124,
    marginBottom: 8,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 8,
    overflow: 'hidden',
  },
  backgroundImage: {
    borderRadius: 12,
  },
  cardGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  allTopicsCard: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: 0,
  },
  plusWrap: {
    marginBottom: 6,
  },
  title: {
    fontSize: 14,
    lineHeight: 14,
    color: theme.primaryDark,
    ...typography.Inter[600],
    maxWidth: '95%',
  },
  arrowButton: {
    marginTop: 'auto',
    alignSelf: 'flex-start',
    width: 42,
    height: 20,
    borderRadius: 999,
    backgroundColor: theme.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  allTopicsText: {
    fontSize: 12,
    color: theme.primaryDark,
    ...typography.Inter[400],
    textAlign: 'center',
  },
});
