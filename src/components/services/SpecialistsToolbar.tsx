import { Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants/theme';

type SpecialistsToolbarProps = {
  selectedSort: string;
  onOpenSort: () => void;
  onOpenFilter: () => void;
};

export function SpecialistsToolbar({ selectedSort, onOpenSort, onOpenFilter }: SpecialistsToolbarProps) {
  return (
    <View style={styles.toolbar}>
      <Pressable style={styles.button} onPress={onOpenSort}>
        <SortIcon />
        <Text style={styles.buttonText}>{selectedSort}</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={onOpenFilter}>
        <Text style={styles.buttonText}>Фильтры</Text>
        <FilterIcon />
      </Pressable>
    </View>
  );
}

function SortIcon() {
  return (
    <View style={styles.sortIcon}>
      <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path d="M5 8H19" stroke="#033542" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5 12H14" stroke="#033542" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5 16H11" stroke="#033542" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </View>
  );
}

function FilterIcon() {
  return (
    <View style={styles.iconRight}>
      <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
        <Path d="M18.999 22.7495C18.589 22.7495 18.249 22.4095 18.249 21.9995V10.9995C18.249 10.5895 18.589 10.2495 18.999 10.2495C19.409 10.2495 19.749 10.5895 19.749 10.9995V21.9995C19.749 22.4095 19.409 22.7495 18.999 22.7495Z" fill="#033542" />
        <Path d="M18.999 7.74951C18.589 7.74951 18.249 7.40951 18.249 6.99951V1.99951C18.249 1.58951 18.589 1.24951 18.999 1.24951C19.409 1.24951 19.749 1.58951 19.749 1.99951V6.99951C19.749 7.40951 19.409 7.74951 18.999 7.74951Z" fill="#033542" />
        <Path d="M12 22.7495C11.59 22.7495 11.25 22.4095 11.25 21.9995V16.9995C11.25 16.5895 11.59 16.2495 12 16.2495C12.41 16.2495 12.75 16.5895 12.75 16.9995V21.9995C12.75 22.4095 12.41 22.7495 12 22.7495Z" fill="#033542" />
        <Path d="M12 13.7495C11.59 13.7495 11.25 13.4095 11.25 12.9995V1.99951C11.25 1.58951 11.59 1.24951 12 1.24951C12.41 1.24951 12.75 1.58951 12.75 1.99951V12.9995C12.75 13.4095 12.41 13.7495 12 13.7495Z" fill="#033542" />
        <Path d="M5.00098 22.7495C4.59098 22.7495 4.25098 22.4095 4.25098 21.9995V10.9995C4.25098 10.5895 4.59098 10.2495 5.00098 10.2495C5.41098 10.2495 5.75098 10.5895 5.75098 10.9995V21.9995C5.75098 22.4095 5.41098 22.7495 5.00098 22.7495Z" fill="#033542" />
        <Path d="M5.00098 7.74951C4.59098 7.74951 4.25098 7.40951 4.25098 6.99951V1.99951C4.25098 1.58951 4.59098 1.24951 5.00098 1.24951C5.41098 1.24951 5.75098 1.58951 5.75098 1.99951V6.99951C5.75098 7.40951 5.41098 7.74951 5.00098 7.74951Z" fill="#033542" />
        <Path d="M7 11.7495H3C2.59 11.7495 2.25 11.4095 2.25 10.9995C2.25 10.5895 2.59 10.2495 3 10.2495H7C7.41 10.2495 7.75 10.5895 7.75 10.9995C7.75 11.4095 7.41 11.7495 7 11.7495Z" fill="#033542" />
        <Path d="M21.001 11.7495H17.001C16.591 11.7495 16.251 11.4095 16.251 10.9995C16.251 10.5895 16.591 10.2495 17.001 10.2495H21.001C21.411 10.2495 21.751 10.5895 21.751 10.9995C21.751 11.4095 21.411 11.7495 21.001 11.7495Z" fill="#033542" />
        <Path d="M13.999 13.7505H9.99902C9.58902 13.7505 9.24902 13.4105 9.24902 13.0005C9.24902 12.5905 9.58902 12.2505 9.99902 12.2505H13.999C14.409 12.2505 14.749 12.5905 14.749 13.0005C14.749 13.4105 14.409 13.7505 13.999 13.7505Z" fill="#033542" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    marginHorizontal: 0,
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    height: 34,
    borderRadius: 17,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 14,
    color: colors.primaryDark,
  },
  sortIcon: {
    marginRight: 3,
  },
  iconRight: {
    marginLeft: 6,
  },
});
