import * as ImagePicker from 'expo-image-picker';
import type { ImageSourcePropType } from 'react-native';

export async function pickImageFileName(fallbackName = 'document.jpg'): Promise<string | null> {
  const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (!permission.granted) {
    console.log('media library permission denied');
    return null;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 0.85,
  });

  if (result.canceled || !result.assets.length) {
    return null;
  }

  const asset = result.assets[0];
  const fileNameFromUri = asset.uri.split('?')[0].split('/').pop();

  return asset.fileName ?? fileNameFromUri ?? fallbackName;
}

async function requestImageSource(
  launch: () => Promise<ImagePicker.ImagePickerResult>,
): Promise<ImageSourcePropType | null> {
  const result = await launch();

  if (result.canceled || !result.assets.length) {
    return null;
  }

  return { uri: result.assets[0].uri };
}

export async function pickImageSource(): Promise<ImageSourcePropType | null> {
  const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (!permission.granted) {
    console.log('media library permission denied');
    return null;
  }

  return requestImageSource(() =>
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.85,
    }),
  );
}

export async function takePhotoSource(): Promise<ImageSourcePropType | null> {
  const permission = await ImagePicker.requestCameraPermissionsAsync();

  if (!permission.granted) {
    console.log('camera permission denied');
    return null;
  }

  return requestImageSource(() =>
    ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.85,
    }),
  );
}
