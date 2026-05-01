import { ProductFileUpload } from '../ProductFileUpload';
import { ProductFormInput } from '../ProductFormInput';
import { ProductFormTextArea } from '../ProductFormTextArea';
import { WorkingProductFormValues } from '../../../data/workingProductsData';

export function TestProductForm({
  values,
  onChange,
  onAttachFile,
}: {
  values: WorkingProductFormValues;
  onChange: (field: keyof WorkingProductFormValues, value: string) => void;
  onAttachFile: () => void;
}) {
  return (
    <>
      <ProductFormInput
        label="Ссылка на тест"
        value={values.testLink}
        onChangeText={(value) => onChange('testLink', value)}
        placeholder="ZWE123Bhsk67"
      />
      <ProductFormTextArea
        label="Описание"
        value={values.description}
        onChangeText={(value) => onChange('description', value)}
        placeholder="Напишите описание"
      />
      <ProductFileUpload
        title="Загрузите файл"
        description={'Размер документа не должен превышать 25 Мб.\nФормат: .jpeg, .jpg, .png'}
        fileName={values.attachedFileName}
        onPress={onAttachFile}
      />
    </>
  );
}
