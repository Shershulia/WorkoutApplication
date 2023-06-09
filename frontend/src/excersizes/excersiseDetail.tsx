import React from 'react';
import {useParams} from "react-router-dom";

const ExcersiseDetail = () => {
    const {id} = useParams()

    return (
        <div className="mt-24">
            HERE IS ID {id}
        </div>
    );
};

export default ExcersiseDetail;