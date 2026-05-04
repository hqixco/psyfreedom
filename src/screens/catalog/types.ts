import { CatalogArticle, CatalogProduct, CatalogSpecialist } from '../../data/catalogData';

export type CatalogScreenNavigationProps = {
  bottomTabsHeight: number;
  onOpenCatalog: () => void;
  onOpenProducts: () => void;
  onOpenProductsSection?: (categoryId: string, title: string) => void;
  onOpenServices: (title?: string, topicId?: string) => void;
  onOpenServicesSection?: (categoryId: string, title: string) => void;
  onOpenJournal: () => void;
  onOpenProductDetails: (productId: string, isPurchased?: boolean, isFavorite?: boolean) => void;
  onOpenSpecialistDetails: (specialistId: string) => void;
  onOpenInstituteDetails?: (instituteId: string) => void;
  onOpenAssociationDetails?: (associationId: string) => void;
  onOpenArticleDetails: (articleId: string) => void;
  onOpenPaymentScreen?: (
    context?: {
      kind?: 'book' | 'course' | 'specialist' | 'test' | 'promo';
      price?: string;
    }
  ) => void;
  onBack: () => void;
  setBottomTabsVisible?: (visible: boolean) => void;
};

export type ProductScreenProps = CatalogScreenNavigationProps & {
  product: CatalogProduct;
  isPurchased?: boolean;
  isFavorite?: boolean;
};

export type SpecialistScreenProps = CatalogScreenNavigationProps & {
  specialist: CatalogSpecialist;
};

export type ArticleScreenProps = CatalogScreenNavigationProps & {
  article: CatalogArticle;
};
