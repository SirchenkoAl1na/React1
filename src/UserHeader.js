
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserHeader = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Функція для отримання даних користувача
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        setUserData({
          name: response.data.name,
          photo: `https://via.placeholder.com/150/92c952?text=${response.data.name[0]}`, // Використовуйте URL з фото користувача
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Викликати функцію отримання даних
    fetchUserData();
  }, []);

  return (
    <div className="user-header">
      <img src={userData.photo} alt="User" />
      <span>{userData.name}</span>
    </div>
  );
};

export default UserHeader;
