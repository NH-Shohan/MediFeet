import axios from "axios";
import UpdateAddress from "../../components/User/UpdateAddress";

const getAddress = async (id) => {
  const { data } = await axios.get(`${process.env.API_URL}/api/address/${id}`);
  return data?.address;
};

const UpdateAddressPage = async ({ params }) => {
  const address = await getAddress(params?.id);

  return <UpdateAddress id={params?.id} address={address} />;
};

export default UpdateAddressPage;
