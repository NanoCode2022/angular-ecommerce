export enum Category {
  ELECTORNICS = "electronics",
  JEWELERY = "jewelery",
  MENSCLOTHING = "men's clothing",
  WOMENSCLOTHING = "women's clothing"
}

interface Rating {
  rate: number,
  count: number
}

export interface Products {
  id: number,
  title: string,
  price: number,
  description: string,
  category: Category,
  image: string,
  rating: Rating
}



interface GeoLocation {
  lat: string,
  long: string
}

interface Address {
  geolocation: GeoLocation,
  city: string,
  street: string,
  number: number,
  zipcode: string
}

interface nameUser {
  firstname: string,
  lastname: string
}

export interface User {
  address: Address,
  id: number,
  email: string,
  username: string,
  password: string,
  name: nameUser,
  phone: string,
  __v: number
}
