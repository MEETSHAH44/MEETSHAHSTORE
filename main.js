import './style.css'

import products from "./api/products.json";
import { showproductcontainer } from './homeProductcards';
console.log(products);
showproductcontainer(products);

