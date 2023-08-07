import ProductDetails from "@/components/Products/productDetails";
import axios from "axios";

const getProductDetails = async (id) => {
  const { data } = await axios.get(`${process.env.API_URL}/api/products/${id}`);
  return data?.product;
};

const ProductDetailsPage = async ({ params }) => {
  const product = await getProductDetails(params.id);
  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
