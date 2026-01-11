
export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
  schoolId: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
}

export interface GalleryItem {
  id: number;
  beforeUrl: string;
  afterUrl: string;
  alt: string;
}

export interface School {
  id: string;
  name: string;
  logoUrl: string;
}
