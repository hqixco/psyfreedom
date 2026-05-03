import { Ionicons } from '@expo/vector-icons';
import { Image, ImageSourcePropType, Pressable, StyleSheet, View } from 'react-native';

type AttachmentPreviewProps = {
  source: ImageSourcePropType;
  onRemove: () => void;
};

export function AttachmentPreview({ source, onRemove }: AttachmentPreviewProps) {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
      <Pressable style={styles.closeButton} onPress={onRemove}>
        <Ionicons name="close" size={16} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 8,
    width: 80,
    height: 86,
    borderRadius: 8,
    overflow: 'visible',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  closeButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#07849A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
