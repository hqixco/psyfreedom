import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { CreateProductButton } from '../../components/working-products/CreateProductButton';
import { CreateProductHeader } from '../../components/working-products/CreateProductHeader';
import { ProductFormInput } from '../../components/working-products/ProductFormInput';
import { ProductTopicSelect } from '../../components/working-products/ProductTopicSelect';
import { ProductTypeSelect } from '../../components/working-products/ProductTypeSelect';
import { BookProductForm } from '../../components/working-products/forms/BookProductForm';
import { CourseProductForm } from '../../components/working-products/forms/CourseProductForm';
import { PromoCodeProductForm } from '../../components/working-products/forms/PromoCodeProductForm';
import { TestProductForm } from '../../components/working-products/forms/TestProductForm';
import { colors } from '../../constants/theme';
import {
  createProductInitialValues,
  ProductTopicId,
  productTypeLabelMap,
  WorkingProduct,
  WorkingProductFormValues,
} from '../../data/workingProductsData';

function mapProductToForm(product: WorkingProduct): WorkingProductFormValues {
  return {
    ...createProductInitialValues,
    title: product.title.replace(/\n/g, ' '),
    productType: product.type === 'videoLesson' ? 'course' : product.type,
    price: product.price,
  };
}

export function CreateProductScreen({
  mode,
  product,
  onBack,
  onSubmit,
  setBottomTabsVisible,
}: {
  mode: 'create' | 'edit';
  product?: WorkingProduct | null;
  onBack: () => void;
  onSubmit: (values: WorkingProductFormValues) => void;
  setBottomTabsVisible?: (visible: boolean) => void;
}) {
  const insets = useSafeAreaInsets();
  const [values, setValues] = useState<WorkingProductFormValues>(
    product ? mapProductToForm(product) : createProductInitialValues
  );
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isTopicsOpen, setIsTopicsOpen] = useState(false);

  useEffect(() => {
    if (!setBottomTabsVisible) {
      return;
    }

    setBottomTabsVisible(false);
    return () => setBottomTabsVisible(true);
  }, [setBottomTabsVisible]);

  useEffect(() => {
    setValues(product ? mapProductToForm(product) : createProductInitialValues);
  }, [mode, product]);

  const updateField = (field: keyof WorkingProductFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const toggleTopic = (topic: ProductTopicId) => {
    setValues((prev) => ({
      ...prev,
      topics: prev.topics.includes(topic)
        ? prev.topics.filter((item) => item !== topic)
        : [...prev.topics, topic],
    }));
  };

  const attachMockFile = () => {
    setValues((prev) => ({ ...prev, attachedFileName: 'product-file.jpg' }));
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <KeyboardAvoidingView style={styles.keyboard} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 110 + insets.bottom }}
          >
            <CreateProductHeader onBack={onBack} />

            <ProductFormInput
              label="Название товара"
              value={values.title}
              onChangeText={(value) => updateField('title', value)}
              placeholder="Название товара"
            />

            <ProductTypeSelect
              value={values.productType}
              open={isTypeOpen}
              onToggleOpen={() => setIsTypeOpen((prev) => !prev)}
              onSelect={(value) => setValues((prev) => ({ ...prev, productType: value }))}
            />

            <ProductTopicSelect
              value={values.topics}
              open={isTopicsOpen}
              onToggleOpen={() => setIsTopicsOpen((prev) => !prev)}
              onToggleTopic={toggleTopic}
            />

            <ProductFormInput
              label="Стоимость"
              value={values.price}
              onChangeText={(value) => updateField('price', value)}
              placeholder="0 ₽"
            />

            {values.productType === 'course' ? (
              <CourseProductForm values={values} onChange={updateField} onAttachFile={attachMockFile} />
            ) : null}

            {values.productType === 'book' ? (
              <BookProductForm values={values} onChange={updateField} onAttachFile={attachMockFile} />
            ) : null}

            {values.productType === 'test' ? (
              <TestProductForm values={values} onChange={updateField} onAttachFile={attachMockFile} />
            ) : null}

            {values.productType === 'promoCode' ? (
              <PromoCodeProductForm values={values} onChange={updateField} />
            ) : null}
          </ScrollView>

          <CreateProductButton
            label={mode === 'edit' ? 'Сохранить изменения' : 'Создать товар'}
            onPress={() => {
              if (!values.productType) {
                console.log('product type required');
                return;
              }
              onSubmit(values);
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export function mapFormToWorkingProduct(values: WorkingProductFormValues, productId?: string): WorkingProduct {
  const type = values.productType ?? 'course';

  return {
    id: productId ?? `working-product-${Date.now()}`,
    title: values.title,
    type,
    typeLabel: productTypeLabelMap[type],
    price: values.price,
    image: require('../../../assets/images/product-devichnik.png'),
    status: 'published',
  };
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  keyboard: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
