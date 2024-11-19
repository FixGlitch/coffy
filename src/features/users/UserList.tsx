// import { useEffect, useState } from 'react';
// import { getUsers } from '@/services/userService';

export default function UserList() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const data = await getUsers();
  //     setUsers(data);
  //   };
  //   fetchUsers();
  // }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {/* {users.map((user) => (
          <li key={user.id}>{user.fullName}</li>
        ))} */}
      </ul>
    </div>
  );
}
