import {ITEMS_PER_PAGE} from "../conf";

const data = [{
  artnumber: '0001',
  name: 'Кастрюля',
  brand: 'Tefal',
  weight: 1200,
  quantity: 1,
  price: 1700,
  stock: 1
}, {
  artnumber: '0002',
  name: 'Сковорода',
  brand: 'КМЗ',
  weight: 1900,
  quantity: 1,
  price: 950,
  stock: 1
}, {
  artnumber: '0003',
  name: 'Ложка нерж.',
  brand: 'Tescoma',
  weight: 95,
  quantity: 12,
  price: 1200,
  stock: 0
}, {
  artnumber: '0004',
  name: 'Спички',
  brand: 'Красный коммунар',
  weight: 15,
  quantity: 20,
  price: 1,
  stock: 1
}, {
  artnumber: '0005',
  name: 'Кастрюля',
  brand: 'Tefal',
  weight: 1200,
  quantity: 1,
  price: 1700,
  stock: 1
}, {
  artnumber: '0006',
  name: 'Сковорода',
  brand: 'КМЗ',
  weight: 1900,
  quantity: 1,
  price: 950,
  stock: 1
}, {
  artnumber: '0007',
  name: 'Ложка нерж.',
  brand: 'Tescoma',
  weight: 95,
  quantity: 12,
  price: 1200,
  stock: 0
}, {
  artnumber: '0008',
  name: 'Спички',
  brand: 'Красный коммунар',
  weight: 15,
  quantity: 20,
  price: 1,
  stock: 1
}];

class DevService {
  constructor() {
    this.items = data;
  }
  getProducts(page, filter) {
    const filteredElements = filter ? this.items.filter(el => el.brand === filter) : this.items;
    const from = ITEMS_PER_PAGE * (page - 1);
    const pageElements = filteredElements.slice(from, from + ITEMS_PER_PAGE);
    return { products:  pageElements, countAll: filteredElements.length};
  }

  getFilters() {
    const filtersSet = new Set(this.items.map(product => product.brand));
    return Array.from(filtersSet)
  }
}

export default new DevService();