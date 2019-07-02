import { useState, useEffect }  from 'react';
import PlaceHolderAPI from '../api/JSONPlaceHolder';


export const useResrouces = resource => {
    const [resources, setResource] = useState([]);

    useEffect(() => {
        (async resource => {
            const response = await PlaceHolderAPI.get(`/${resource}`);
            setResource(response.data);
        })(resource);
    }, [resource]);

    return resources
}
