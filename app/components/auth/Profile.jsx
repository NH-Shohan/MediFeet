"use client";

// import UserAddresses from "../user/UserAddresses";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  const { data } = useSession();
  // const { user } = useContext(AuthContext);
  console.log(data);

  return (
    <>
      <figure className="flex items-start sm:items-center">
        <div className="relative">
          <Image
            className="w-16 h-16 rounded-full mr-4"
            src={
              data?.user?.avatar
                ? data?.user?.avatar?.url
                : "/default_profile.jpg"
            }
            alt={data?.user?.name}
            width={20}
            height={20}
          />
        </div>
        <figcaption>
          <h5 className="font-semibold text-lg">{data?.user?.name}</h5>
          <p>
            <b>Email:</b> {data?.user?.email}
            {/* | <b>Joined On:</b>
            {data?.user?.createdAt} */}
          </p>
        </figcaption>
      </figure>

      <hr className="my-4" />

      {/* <UserAddresses /> */}

      <Link href="/address/new">
        <button className="px-4 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100">
          <i className="mr-1 fa fa-plus"></i> Add new address
        </button>
      </Link>

      <hr className="my-4" />
    </>
  );
};

export default Profile;
