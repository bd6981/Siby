import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function User({ token }) {
  const [user, setUser] = useState([]);
  const fetchData = async (token) => {
    const response = await axios.get("http://localhost:8080/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(response.data.users);
    console.log(response.data);
  };
  useEffect(() => {
    if (token) {
      fetchData(token);
    }
  }, []);

  return (
    <div>
      {user.map((user, index) => (
        <p key={index}>{user.title}</p>
      ))}
    </div>
  );
}
