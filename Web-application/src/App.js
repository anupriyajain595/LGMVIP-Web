import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonRes = await response.json();
    setUsers(jsonRes.data);
    // console.log(users);
  };

  return (
    <div>
      <div class="vl-1"></div>
      <div class="vl-2"></div>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
    />
      <div className="outer-shadow hover-in-shadow header">
        <h1>Users Card Web Application</h1>
        </div>
        <button onClick={getUsers}>Get Users</button>
      <div className="outer-shadow users">
        <h4>Users</h4>
        {users?.map(({ id, email, first_name, last_name, avatar }) => (
          <div className="outer-shadow hover-in-shadow user-card">
            <img alt="Avatar" key={id} src={avatar} />
            <h3 key={id}>
              <em>
                {first_name} {last_name}
              </em>
            </h3>
            <h3 key={id}>
              <em>{email}</em>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
