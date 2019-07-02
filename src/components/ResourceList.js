import React from 'react';
import { useResrouces } from './useResource';

const renderResourceList = (resources) => {
    return (
        <ul>
            {resources.map((resourceItem) => {
                return (<li key={resourceItem.id}>{resourceItem.title}</li>);

            })}
        </ul>
    );
}

const ResourceList = ({ resource }) => {

    const resources = useResrouces(resource);

    if (resources.length > 0) {
        return (<div>
            <h2>{resource}</h2>
            <div>
                {renderResourceList(resources)}
            </div>
        </div>);
    }

    return (<div>
        <h2>{resource}</h2>
        <div>
            Loading...
        </div>
    </div>);
}

export default ResourceList;