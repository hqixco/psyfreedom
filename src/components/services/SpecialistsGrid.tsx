import { StyleSheet, View } from 'react-native';
import { Specialist } from '../../data/servicesData';
import { SpecialistCard } from './SpecialistCard';

type SpecialistsGridProps = {
  specialists: Specialist[];
  cardWidth: number;
  onPressSpecialist: (id: string) => void;
};

export function SpecialistsGrid({ specialists, cardWidth, onPressSpecialist }: SpecialistsGridProps) {
  return (
    <View style={styles.grid}>
      {specialists.map((item) => (
        <SpecialistCard
          key={item.id}
          item={item}
          width={cardWidth}
          imageHeight={185}
          onPress={() => onPressSpecialist(item.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    marginTop: 10,
    marginHorizontal: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
