import React, { useState } from 'react';
import UserList from './UserList';
import ResourceList from './ResourceList';

const App = () => {

    const [resource, setResource] = useState("Posts");


    return (<div className="ui container">
        <h2>Users</h2>
        <UserList />
        <p><hr size="100%" color="black" /></p>
        <div>
            <button className={`ui button ${(resource === 'Posts') ?'primary' : ''}`} onClick={() => { setResource("Posts") }}>Post</button>
            <button className={`ui button ${(resource !== 'Posts') ?'primary' : ''}`}  onClick={() => {setResource("Todos") }}>Todos</button>
        </div>
        <ResourceList resource={resource} />
         
    </div>);
}

export default App;