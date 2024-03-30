import React, { useState } from "react";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};

export default UserPage;
