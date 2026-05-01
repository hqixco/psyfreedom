import { ProductFileUpload } from '../ProductFileUpload';
import { ProductFormInput } from '../ProductFormInput';
import { ProductFormTextArea } from '../ProductFormTextArea';
import { WorkingProductFormValues } from '../../../data/workingProductsData';

export function BookProductForm({
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
      <ProductFormInput label="Формат" value={values.bookFormat} onChangeText={(value) => onChange('bookFormat', value)} placeholder="Аудио" />
      <ProductFormInput label="Жанр" value={values.bookGenre} onChangeText={(value) => onChange('bookGenre', value)} placeholder="Научная литература" />
      <ProductFormInput label="Кол-во страниц" value={values.bookPages} onChangeText={(value) => onChange('bookPages', value)} placeholder="245" />
      <ProductFormInput label="Длительность" value={values.bookDuration} onChangeText={(value) => onChange('bookDuration', value)} placeholder="4:25:10" />
      <ProductFormInput label="Издатель" value={values.bookPublisher} onChangeText={(value) => onChange('bookPublisher', value)} placeholder="Альпина Диджитал" />
      <ProductFormInput label="Год издания" value={values.bookPublishYear} onChangeText={(value) => onChange('bookPublishYear', value)} placeholder="2013г." />
      <ProductFormInput label="ISBN" value={values.bookIsbn} onChangeText={(value) => onChange('bookIsbn', value)} placeholder="978-5-4461-1594-5" />
      <ProductFormInput label="Возрастное ограничение" value={values.bookAgeLimit} onChangeText={(value) => onChange('bookAgeLimit', value)} placeholder="16+" />
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
