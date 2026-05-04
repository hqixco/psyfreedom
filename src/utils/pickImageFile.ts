import * as ImagePicker from 'expo-image-picker';

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
