
import type { Product, Service, GalleryItem, School } from './types';

// ==========================================
// 1. SOCIAL MEDIA LINKS
// ==========================================
// Replace these URLs with the direct links to your Instagram profiles or DM links.
export const UNIFORMS_INSTAGRAM_URL = "https://www.instagram.com/bow_sewingcentre/?hl=en";
export const SERVICES_INSTAGRAM_URL = "https://www.instagram.com/bow_sewingcentre/?hl=en";

// ==========================================
// 2. SCHOOLS CONFIGURATION
// ==========================================
// Add your local schools here. 
// For 'logoUrl', upload your image to a host (like Imgur) and paste the link here.
export const SCHOOLS: School[] = [
  { id: 'st-marys-primary', name: "St. Mary's Primary School", logoUrl: '/images/schools/st-marys-primary-logo.png' },
  { id: 'bow-secondary-school', name: 'Bow Secondary School', logoUrl: '/images/schools/bow-secondary-school-logo.png' },
  { id: 'parkside-academy', name: 'Parkside Academy', logoUrl: '/images/schools/parkside-academy-logo.png' },
];

export const UNIFORM_CATEGORIES = ['Shirts', 'Trousers', 'Skirts', 'Blazers', 'Sportswear', 'Accessories'];

// ==========================================
// 3. PRODUCT INVENTORY
// ==========================================
// 'schoolId' must match the 'id' you defined in the SCHOOLS list above.
export const UNIFORM_PRODUCTS: Product[] = [
  // St. Mary's Primary Items
  { id: 1, name: 'White School Shirt', description: 'Long-sleeve, easy iron.', price: '£12.00', category: 'Shirts', imageUrl: '/images/products/white-school-shirt.png', schoolId: 'st-marys-primary' },
  { id: 3, name: 'Navy Pleated Skirt', description: 'Classic pleated design.', price: '£14.00', category: 'Skirts', imageUrl: 'https://media.istockphoto.com/id/1436346304/photo/womens-blue-short-summer-skirt.webp?a=1&b=1&s=612x612&w=0&k=20&c=C_tcsVaO1Dtkmfnb5JOjJd-ueUGNHoNVUeAj__GOyjg=', schoolId: 'st-marys-primary' },
  { id: 5, name: 'PE T-Shirt', description: 'Breathable cotton fabric.', price: '£8.00', category: 'Sportswear', imageUrl: 'https://media.istockphoto.com/id/2177650885/photo/physical-education-teacher-in-school-gym-with-basketball.webp?a=1&b=1&s=612x612&w=0&k=20&c=iRWythIRqTgu3chfgtU_ABEwY-0DzNhUBealhwLZi4g=', schoolId: 'st-marys-primary' },

  // Bow Secondary Items
  { id: 2, name: 'Grey School Trousers', description: 'Durable, adjustable waist.', price: '£15.00', category: 'Trousers', imageUrl: 'https://media.istockphoto.com/id/1440042031/photo/fashionable-gray-pants-isolated-in-white-background-invisible-mannequin.webp?a=1&b=1&s=612x612&w=0&k=20&c=xepIYZomceQIrXRgm9f_oDb8YE4ap8IW0FU9sG0lasA=', schoolId: 'bow-secondary-school' },
  { id: 4, name: 'Black School Blazer', description: 'With embroidered logo option.', price: '£35.00', category: 'Blazers', imageUrl: 'https://media.istockphoto.com/id/2222257473/photo/black-mans-jacket-on-hanger-isolated-on-white-background-three-buttons-classic-blazer-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=z5Erk5l8RkrTI72pM6oTdaEY3lBuDSt36gMUw7gqnAY=', schoolId: 'bow-secondary-school' },
  { id: 6, name: 'School Tie', description: 'Striped design for local schools.', price: '£6.00', category: 'Accessories', imageUrl: 'https://media.istockphoto.com/id/157581452/photo/uk-school-uniform-tie.webp?a=1&b=1&s=612x612&w=0&k=20&c=bFDFQpNbMB1vcVdJp24CuNdu8p-SXJXfcU3n08dYr-k=', schoolId: 'bow-secondary-school' },

  // Parkside Academy Items
  { id: 7, name: 'V-Neck Jumper', description: 'Navy wool blend.', price: '£18.00', category: 'Blazers', imageUrl: 'https://media.istockphoto.com/id/622220784/photo/blue-v-neck-sweater.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qi-AKNmJk_ApfsWQbAqfABlry_06k9DpJiYx8MWXrWc=', schoolId: 'parkside-academy' },
  { id: 8, name: 'Sports Shorts', description: 'Lightweight and comfortable.', price: '£10.00', category: 'Sportswear', imageUrl: 'https://media.istockphoto.com/id/609726900/photo/athletic-shorts-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=k7aLXf6KTILdAagu9FtNDphuyclNAY90PfARUWsKq4c=', schoolId: 'parkside-academy' },
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
  { id: 1, beforeUrl: 'https://media.istockphoto.com/id/105770350/photo/little-girl-wearing-grown-up-mans-business-suit.webp?a=1&b=1&s=612x612&w=0&k=20&c=MizssB3g7INTGmoP-bXXJ9Q0CuOMBulWEGfjacCDB0Q=', afterUrl: 'https://images.unsplash.com/photo-1769467701262-5c546607768a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0JTIwdG9vJTIwYmlnfGVufDB8fDB8fHww', alt: 'Jacket resizing before and after' },
  { id: 2, beforeUrl: 'https://media.istockphoto.com/id/529573853/photo/bright-dress-mannequin.webp?a=1&b=1&s=612x612&w=0&k=20&c=evqXiVJLIDo-Ij8XKoxPQ2iStnERdsOejRNWSG9Ynl4=', afterUrl: 'https://images.unsplash.com/photo-1765229287667-3dac70bd2711?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5pY2UlMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D', alt: 'Dress hemming before and after' },
  { id: 3, beforeUrl: 'https://images.unsplash.com/photo-1746399716251-27b785673f2b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHRhcGVyaW5nJTIwdHJvdXNlcnN8ZW58MHx8MHx8fDA%3D', afterUrl: 'https://images.unsplash.com/photo-1685435690165-97ba05cb8c1a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZpdHRlZCUyMGplYW5zfGVufDB8fDB8fHww', alt: 'Trouser tapering before and after' },
  { id: 4, beforeUrl: 'https://images.unsplash.com/photo-1603393089523-4621c81b7e64?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJyaWRhbCUyMGRyZXNzJTIwcmlwcGVkfGVufDB8fDB8fHww', afterUrl: 'https://images.unsplash.com/photo-1630943893781-0aa3000b6c74?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGJyaWRhbCUyMHBvcnRyYWl0fGVufDB8fDB8fHww', alt: 'Bridal dress alterations before and after' },
];

// ==========================================
// 6. CONTACT DETAILS
// ==========================================
export const SHOP_ADDRESS = "Community Room 2, Gayton House, Chiltern Road, E3 4DT, London, United Kingdom E3 4BX";
export const OPENING_HOURS = "Monday - Saturday: 9:00 AM - 5:30 PM | Sunday: Closed";
