import axios from "axios";
import ListProducts from "../components/Products/ListProducts";

const getProducts = async () => {
  const {data} = await axios.get(`${process.env.API_URL}/api/products`);
  return data;
} 

const Man = async () => {
  const productsData = await getProducts()
  return (
    <ListProducts data={productsData}/>
  );
}

export default Man;