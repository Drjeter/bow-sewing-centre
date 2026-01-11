
import type { Product, Service, GalleryItem, School } from './types';

// ==========================================
// 1. SOCIAL MEDIA LINKS
// ==========================================
// Replace these URLs with the direct links to your Instagram profiles or DM links.
export const UNIFORMS_INSTAGRAM_URL = "https://www.instagram.com/your_uniforms_account";
export const SERVICES_INSTAGRAM_URL = "https://www.instagram.com/your_services_account";

// ==========================================
// 2. SCHOOLS CONFIGURATION
// ==========================================
// Add your local schools here. 
// For 'logoUrl', upload your image to a host (like Imgur) and paste the link here.
export const SCHOOLS: School[] = [
  { id: 'st-marys-primary', name: "St. Mary's Primary School", logoUrl: 'https://picsum.photos/seed/stmarys/200' },
  { id: 'bow-secondary-school', name: 'Bow Secondary School', logoUrl: 'https://picsum.photos/seed/bowsecondary/200' },
  { id: 'parkside-academy', name: 'Parkside Academy', logoUrl: 'https://picsum.photos/seed/parkside/200' },
];

export const UNIFORM_CATEGORIES = ['Shirts', 'Trousers', 'Skirts', 'Blazers', 'Sportswear', 'Accessories'];

// ==========================================
// 3. PRODUCT INVENTORY
// ==========================================
// 'schoolId' must match the 'id' you defined in the SCHOOLS list above.
export const UNIFORM_PRODUCTS: Product[] = [
  // St. Mary's Primary Items
  { id: 1, name: 'White School Shirt', description: 'Long-sleeve, easy iron.', price: '£12.00', category: 'Shirts', imageUrl: 'https://picsum.photos/400/500?random=1', schoolId: 'st-marys-primary' },
  { id: 3, name: 'Navy Pleated Skirt', description: 'Classic pleated design.', price: '£14.00', category: 'Skirts', imageUrl: 'https://picsum.photos/400/500?random=3', schoolId: 'st-marys-primary' },
  { id: 5, name: 'PE T-Shirt', description: 'Breathable cotton fabric.', price: '£8.00', category: 'Sportswear', imageUrl: 'https://picsum.photos/400/500?random=5', schoolId: 'st-marys-primary' },

  // Bow Secondary Items
  { id: 2, name: 'Grey School Trousers', description: 'Durable, adjustable waist.', price: '£15.00', category: 'Trousers', imageUrl: 'https://picsum.photos/400/500?random=2', schoolId: 'bow-secondary-school' },
  { id: 4, name: 'Black School Blazer', description: 'With embroidered logo option.', price: '£35.00', category: 'Blazers', imageUrl: 'https://picsum.photos/400/500?random=4', schoolId: 'bow-secondary-school' },
  { id: 6, name: 'School Tie', description: 'Striped design for local schools.', price: '£6.00', category: 'Accessories', imageUrl: 'https://picsum.photos/400/500?random=6', schoolId: 'bow-secondary-school' },

  // Parkside Academy Items
  { id: 7, name: 'V-Neck Jumper', description: 'Navy wool blend.', price: '£18.00', category: 'Blazers', imageUrl: 'https://picsum.photos/400/500?random=7', schoolId: 'parkside-academy' },
  { id: 8, name: 'Sports Shorts', description: 'Lightweight and comfortable.', price: '£10.00', category: 'Sportswear', imageUrl: 'https://picsum.photos/400/500?random=8', schoolId: 'parkside-academy' },
];

// ==========================================
// 4. SERVICES LIST
// ==========================================
export const ALTERATION_SERVICES: Service[] = [
    { id: 1, name: 'Alterations', description: 'Perfecting the fit of your everyday garments.' },
    { id: 2, name: 'Dressmaking', description: 'Creating custom dresses from scratch to your design.' },
    { id: 3, name: 'Bridal Alterations', description: 'Ensuring your wedding dress is absolutely perfect.' },
    { id: 4, name: 'Hemming', description: 'Shortening trousers, skirts, and dresses to the right length.' },
    { id: 5, name: 'Resizing', description: 'Taking garments in or letting them out for a flawless fit.' },
    { id: 6, name: 'Repairs', description: 'Mending tears, holes, and seams to extend garment life.' },
    { id: 7, name: 'Zip Replacement', description: 'Expertly replacing broken zips on any item.' },
    { id: 9, name: 'Embroidery', description: 'Personalized embroidery for uniforms and gifts.' },
];

// ==========================================
// 5. GALLERY PHOTOS
// ==========================================
// Paste URLs to your own "Before & After" photos here.
export const GALLERY_ITEMS: GalleryItem[] = [
    { id: 1, beforeUrl: 'https://picsum.photos/400/600?random=9', afterUrl: 'https://picsum.photos/400/600?random=10', alt: 'Jacket resizing before and after' },
    { id: 2, beforeUrl: 'https://picsum.photos/400/600?random=11', afterUrl: 'https://picsum.photos/400/600?random=12', alt: 'Dress hemming before and after' },
    { id: 3, beforeUrl: 'https://picsum.photos/400/600?random=13', afterUrl: 'https://picsum.photos/400/600?random=14', alt: 'Trouser tapering before and after' },
    { id: 4, beforeUrl: 'https://picsum.photos/400/600?random=15', afterUrl: 'https://picsum.photos/400/600?random=16', alt: 'Bridal dress alterations before and after' },
];

// ==========================================
// 6. CONTACT DETAILS
// ==========================================
export const SHOP_ADDRESS = "123 Bow Road, Bow, London, E3 2AN, England";
export const OPENING_HOURS = "Monday - Saturday: 9:00 AM - 5:30 PM | Sunday: Closed";
