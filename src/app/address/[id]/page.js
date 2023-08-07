import UpdateAddress from "@/components/User/UpdateAddress";
import axios from "axios";

const getAddress = async (id) => {
  const { data } = await axios.get(`${process.env.API_URL}/api/address/${id}`);
  return data?.address;
};

const UpdateAddressPage = async ({ params }) => {
  const address = await getAddress(params?.id);

  return <UpdateAddress id={params?.id} address={address} />;
};

export default UpdateAddressPage;
