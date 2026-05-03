import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { colors } from '../../constants/theme';

type ImageMessageProps = {
  sender: 'me' | 'other';
  image: ImageSourcePropType;
  text?: string;
  isSelected?: boolean;
  onLongPress?: () => void;
  rowStyle?: StyleProp<ViewStyle>;
  imageContainerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  captionStyle?: StyleProp<TextStyle>;
  selectedRowStyle?: StyleProp<ViewStyle>;
};

export function ImageMessage({
  sender,
  image,
  text,
  isSelected = false,
  onLongPress,
  rowStyle,
  imageContainerStyle,
  imageStyle,
  captionStyle,
  selectedRowStyle,
}: ImageMessageProps) {
  const isMe = sender === 'me';

  return (
    <Pressable
      onLongPress={isMe ? onLongPress : undefined}
      delayLongPress={250}
      style={[
        styles.row,
        isMe ? styles.rowMe : styles.rowOther,
        isSelected ? styles.selectedRow : null,
        rowStyle,
        isSelected ? selectedRowStyle : null,
      ]}
    >
      <View
        style={[
          text ? styles.imageWithTextContainer : null,
          !text ? styles.imageOnlyWrap : null,
          isMe ? styles.meBackground : styles.otherBackground,
          imageContainerStyle,
        ]}
      >
        <Image source={image} style={[text ? styles.imageWithText : styles.imageOnly, imageStyle]} />
        {text ? <Text style={[styles.caption, captionStyle]}>{text}</Text> : null}
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
