import React from 'react';
import { useResrouces } from './useResource';

const UserList = () => {
    const users = useResrouces('users');

    if (users && users.length > 0) {
        return (
            <div>
                <ul>
                    {users.map((user) => {
                        return <li key={user.id}>{user.name}</li>;
                    })}
                </ul>
            </div>
        );
    }

    return <div>Loading..</div>
}

export default UserList;