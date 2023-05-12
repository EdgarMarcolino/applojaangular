export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'IPHONE',
    price: 799,
    description: 'RUIM DE BATERIA'
  },
  {
    id: 2,
    name: 'MOTOROLA',
    price: 699,
    description: 'CHAQUALHADA'
  },
  {
    id: 3,
    name: 'SAMSUNG',
    price: 299,
    description: 'PEGA FOGO'
  },

  {
    id: 4,
    name: 'XIAOMI',
    price: 699,
    description: 'CAMERA VE ATÉ A LUA'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/