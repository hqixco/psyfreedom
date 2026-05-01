import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

type ImageMessageProps = {
  sender: 'me' | 'other';
  image: ImageSourcePropType;
  text?: string;
  isSelected?: boolean;
  onLongPress?: () => void;
};

export function ImageMessage({ sender, image, text, isSelected = false, onLongPress }: ImageMessageProps) {
  const isMe = sender === 'me';

  return (
    <Pressable
      onLongPress={isMe ? onLongPress : undefined}
      delayLongPress={250}
      style={[
        styles.row,
        isMe ? styles.rowMe : styles.rowOther,
        isSelected ? styles.selectedRow : null,
      ]}
    >
      <View
        style={[
          text ? styles.imageWithTextContainer : null,
          !text ? styles.imageOnlyWrap : null,
          isMe ? styles.meBackground : styles.otherBackground,
        ]}
      >
        <Image source={image} style={text ? styles.imageWithText : styles.imageOnly} />
        {text ? <Text style={styles.caption}>{text}</Text> : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    marginBottom: 12,
  },
  rowMe: {
    alignSelf: 'flex-end',
  },
  rowOther: {
    alignSelf: 'flex-start',
  },
  selectedRow: {
    backgroundColor: '#D8F4FA',
    marginHorizontal: -20,
    paddingHorizontal: 20,
    alignSelf: 'stretch',
    alignItems: 'flex-end',
  },
  imageOnlyWrap: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageOnly: {
    width: 230,
    height: 210,
    borderRadius: 12,
    resizeMode: 'cover',
    backgroundColor: colors.cardLight,
  },
  imageWithTextContainer: {
    width: 230,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageWithText: {
    width: '100%',
    height: 210,
    resizeMode: 'cover',
    backgroundColor: colors.cardLight,
  },
  caption: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 15,
    color: colors.primaryDark,
  },
  meBackground: {
    backgroundColor: '#EAF8FA',
  },
  otherBackground: {
    backgroundColor: '#FFF8F4',
  },
});
