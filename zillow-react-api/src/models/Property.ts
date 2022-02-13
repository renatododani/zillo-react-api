export interface Property {
  addressLine1: string;
  addressLine2: string;
  bathrooms: number;
  bedrooms: number;
  city: string;
  // "county":string
  // "createdDate":string
  // "daysOnMarket":number
  formattedAddress: string;
  id: string;
  // "lastSeen": string
  // "latitude":number
  // "listedDate": string
  // "longitude":number
  price: number;
  propertyType: string;
  // "rawAddress": string
  // "removedDate":number
  state: string;
  // "status":string
  zipCode: string;
}
