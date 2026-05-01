import { StyleSheet, TextInput, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { colors } from '../../constants/theme';

const searchIconXml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.92871 0.5C13.584 0.500054 17.3574 4.27344 17.3574 8.92871C17.3574 11.0153 16.5994 12.925 15.3438 14.3965L15.043 14.748L15.3701 15.0742L19.4365 19.1338C19.5207 19.2177 19.5201 19.354 19.4375 19.4365C19.3536 19.5207 19.2173 19.5201 19.1348 19.4375L15.0664 15.377L14.7402 15.0518L14.3887 15.3496C12.9178 16.6013 11.0119 17.3574 8.92871 17.3574C4.27344 17.3574 0.500054 13.584 0.5 8.92871C0.5 4.2734 4.2734 0.5 8.92871 0.5ZM8.92871 0.928711C4.51041 0.928711 0.928711 4.51041 0.928711 8.92871C0.928765 13.347 4.51044 16.9287 8.92871 16.9287C11.1357 16.9287 13.1333 16.0352 14.5811 14.5898C16.0319 13.1413 16.9287 11.1395 16.9287 8.92871C16.9287 4.51044 13.347 0.928765 8.92871 0.928711Z" stroke="#A9A9A9"/>
</svg>`;

type CatalogSearchProps = {
  value: string;
  onChangeText: (value: string) => void;
  onSubmit?: () => void;
  onFocus?: () => void;
};

export function CatalogSearch({ value, onChangeText, onSubmit, onFocus }: CatalogSearchProps) {
  return (
    <View style={styles.searchWrapper}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Найти на сайте"
        placeholderTextColor={colors.primaryDark}
        style={styles.searchInput}
        returnKeyType="search"
        onSubmitEditing={onSubmit}
        onFocus={onFocus}
      />
      <View style={styles.searchIcon}>
        <SvgXml xml={searchIconXml} width={20} height={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    marginHorizontal: 16,
    marginTop: 8,
    position: 'relative',
  },
  searchInput: {
    height: 44,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 22,
    paddingLeft: 18,
    paddingRight: 44,
    backgroundColor: colors.white,
    fontSize: 15,
    color: colors.primaryDark,
  },
  searchIcon: {
    position: 'absolute',
    top: 10,
    right: 14,
  },
});
