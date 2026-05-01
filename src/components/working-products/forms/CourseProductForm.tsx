import { ProductFileUpload } from '../ProductFileUpload';
import { ProductFormInput } from '../ProductFormInput';
import { ProductFormTextArea } from '../ProductFormTextArea';
import { WorkingProductFormValues } from '../../../data/workingProductsData';

export function CourseProductForm({
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
        label="Формат"
        value={values.courseFormat}
        onChangeText={(value) => onChange('courseFormat', value)}
        placeholder="Онлайн"
      />
      <ProductFormInput
        label="Кол-во мест"
        value={values.courseSeats}
        onChangeText={(value) => onChange('courseSeats', value)}
        placeholder="123"
      />
      <ProductFormInput
        label="Дата начала"
        value={values.courseStartDate}
        onChangeText={(value) => onChange('courseStartDate', value)}
        placeholder="ДД.ММ.ГГГГ"
      />
      <ProductFormInput
        label="Время прохождения"
        value={values.courseDuration}
        onChangeText={(value) => onChange('courseDuration', value)}
        placeholder="ЧЧ:ММ"
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
