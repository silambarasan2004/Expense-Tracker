import React, { createContext, useState,useEffect } from "react";
// import { UserProvider } from "./context/UserContext";
import axiosInstance from "../utils/axiosInstance";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser]= useState(null);
  
    const updateUser = (userData) => {
        setUser(userData);
    };

    const clearUser = () => {
        setUser(null);
    };
    useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    axiosInstance
      .get("/api/v1/auth/getUser") // your backend endpoint
      .then((res) => {
        console.log("User info response",res.data);
        setUser(res.data); // adjust if your API returns differently
      })
      .catch((err) => {
        console.error("Failed to fetch user:", err);
        setUser(null);
      });
  }
}, []);

    return (
        <UserContext.Provider
           value={{
             user,
             updateUser,
             clearUser,
           }}
        >
            {children}
        </UserContext.Provider>
    );
};

// export default UserProvider;