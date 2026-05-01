import { StyleSheet, View } from 'react-native';
import { ProductFormInput } from '../ProductFormInput';
import { ProductFormTextArea } from '../ProductFormTextArea';
import { WorkingProductFormValues } from '../../../data/workingProductsData';

export function PromoCodeProductForm({
  values,
  onChange,
}: {
  values: WorkingProductFormValues;
  onChange: (field: keyof WorkingProductFormValues, value: string) => void;
}) {
  return (
    <>
      <View style={styles.row}>
        <View style={styles.field}>
          <ProductFormInput
            label="Срок действия"
            value={values.promoDateFrom}
            onChangeText={(value) => onChange('promoDateFrom', value)}
            placeholder="с ДД.ММ.ГГГГ"
          />
        </View>
        <View style={styles.field}>
          <ProductFormInput
            label=" "
            value={values.promoDateTo}
            onChangeText={(value) => onChange('promoDateTo', value)}
            placeholder="до ДД.ММ.ГГГГ"
          />
        </View>
      </View>
      <ProductFormInput
        label="Промокод"
        value={values.promoCode}
        onChangeText={(value) => onChange('promoCode', value)}
        placeholder="ZWE123Bhsk67"
      />
      <ProductFormTextArea
        label="Описание"
        value={values.description}
        onChangeText={(value) => onChange('description', value)}
        placeholder="Напишите описание"
      />
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  field: {
    flex: 1,
  },
});
