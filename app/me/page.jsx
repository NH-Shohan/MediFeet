import axios from "axios";
import Profile from "../components/auth/Profile";

const getAddresses = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/address`);
  return data?.address;
};

const ProfilePage = async () => {
  const addresses = await getAddresses();

  return <Profile addresses={addresses} />;
};

export default ProfilePage;
