"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [loading, setLoading] = useState(null);

  const router = useRouter();

  const registerUser = async ({ name, email, password }) => {
    try {
      const { data } = await axios.post(`http://localhost:3000/api/register`, {
        name,
        email,
        password,
      });

      if (data?.user) {
        router.push("/");
      }
    } catch (error) {
      setError(error?.message);
    }
  };

  // const loadUser = async () => {
  //   try {
  //     const { data } = await axios.get("/api/auth/session?update");

  //     if (data?.user) {
  //       setUser(data.user);
  //       router.replace("/me");
  //     }
  //   } catch (error) {
  //     setError(error?.message);
  //   }
  // };

  // const updateProfile = async (formData) => {
  //   try {
  //     const { data } = await axios.put(
  //       `http://localhost:3000/api/auth/me/update`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     if (data?.user) {
  //       loadUser();
  //       // setLoading(false);
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     setError(error?.message);
  //   }
  // };

  // Address ADD NEW Section ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  const addNewAddress = async (address) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/address`,
        address
      );

      if (data) {
        router.push("/me");
      }
    } catch (error) {
      setError(error?.message);
    }
  };

  // Address UPDATE Section ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const updateTheAddress = async (id, address) => {
    console.log(address);
    try {
      const { data } = await axios.put(
        `http://localhost:3000/api/address/${id}`,
        address
      );
      if (data) {
        router.push("/me");
      }
    } catch (error) {
      setError(error);
    }
  };

  // Address DELETE Section ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const deleteAddress = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/api/address/${id}`
      );
      console.log(data);
      if (data) {
        router.push("/me");
      }
    } catch (error) {
      setError(error?.message);
    }
  };

  const clearErrors = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        loading,
        updated,
        setUpdated,
        setUser,
        registerUser,
        // updateProfile,
        addNewAddress,
        updateTheAddress,
        deleteAddress,

        clearErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
