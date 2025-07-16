import React, { useEffect, useState } from 'react';

const UsersForm = ({ setUsers, selectedUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name || '');
      setEmail(selectedUser.email || '');
      setPhone(selectedUser.phone || '');
      setAge(selectedUser.age || '');
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, age } = e.target;

    setUsers((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: name.value,
        email: email.value,
        phone: phone.value,
        age: age.value,
      },
    ]);

    setName('');
    setEmail('');
    setPhone('');
    setAge('');
  };

  return (
    <form
      className="bg-stone-900 max-w-md m-auto p-6 mt-6 rounded shadow-xl/40"
      onSubmit={handleSubmit}
    >
      <h1 className="flex justify-center items-center text-3xl m-8 text-white">
        Add/Edit User
      </h1>

      <div className="flex flex-col justify-center items-left">
        <label htmlFor="name" className="text-xl pl-2 text-white">
          Name
        </label>
        <input
          className="bg-stone-300 outline-0 text-stone-700 p-2 m-2 rounded"
          onInput={(e) => setName(e.target.value)}
          value={name}
          id="name"
          type="text"
          name="name"
          placeholder="Enter name..."
        />
      </div>

      <div className="flex flex-col justify-center items-left">
        <label htmlFor="email" className="text-xl pl-2 text-white">
          Email
        </label>
        <input
          className="bg-stone-300 outline-0 text-stone-700 p-2 m-2 rounded"
          onInput={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          type="email"
          name="email"
          placeholder="Enter email..."
        />
      </div>

      <div className="flex flex-col justify-center items-left">
        <label htmlFor="phone" className="text-xl pl-2 text-white">
          Phone
        </label>
        <input
          className="bg-stone-300 outline-0 text-stone-700 p-2 m-2 rounded"
          onInput={(e) => setPhone(e.target.value)}
          value={phone}
          id="phone"
          type="tel"
          name="phone"
          placeholder="Enter phone number..."
        />
      </div>

      <div className="flex flex-col justify-center items-left">
        <label htmlFor="age" className="text-xl pl-2 text-white">
          Age
        </label>
        <input
          className="bg-stone-300 outline-0 text-stone-700 p-2 m-2 rounded"
          onInput={(e) => setAge(e.target.value)}
          value={age}
          id="age"
          type="number"
          name="age"
          placeholder="Enter age..."
        />
      </div>

      <div className="flex flex-col justify-center items-left">
        <button
          type="submit"
          className="bg-zinc-400 outline-0 text-stone-950 p-2 m-2 mt-5 rounded cursor-pointer hover:scale-104 hover:bg-zinc-500 transition-all duration-300 ease-in-out"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default UsersForm;