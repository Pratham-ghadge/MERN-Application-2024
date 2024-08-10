import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/Auth';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminUpdate = () => {
  const { Authorizationtoken } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);

  const getUser = async () => {
    try {
      const response = await fetch(`https://mern-application-2024-apii.vercel.app/api/admin/users/${id}`, {
        method: "GET",
        headers: {
          Authorization: Authorizationtoken,
        },
      });

      const data = await response.json();
      setUser(data);
      setUsername(data.username);
      setEmail(data.email);
      setPhone(data.phone);
    } catch (error) {
      console.error("Error in fetching user:", error);
      toast.error('Failed to fetch user details.');
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://mern-application-2024-apii.vercel.app/api/admin/users/update/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: Authorizationtoken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          phone
        })
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('User updated successfully!');
        navigate('/admin/user');
      } else {
        setError(data.message);
        toast.error(data.message || 'Failed to update user.');
      }

    } catch (error) {
      console.error("Error in updating user:", error);
      toast.error('An error occurred while updating the user.');
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-4">Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username:</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="username" name="username" value={username} onChange={handleInput} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" name="email" value={email} onChange={handleInput} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone:</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" id="phone" name="phone" value={phone} onChange={handleInput} />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Update</button>
      </form>
    </div>
  );
}

export default AdminUpdate;
