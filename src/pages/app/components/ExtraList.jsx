import React from "react";

import ExtrasData from "../data/ExtrasData.json";
import ExtraItem from "./ExtraItem";

const ExtraList = () => {
    return (
        <div className="col-md-9 row row-cols-1 row-cols-lg-2 g-4 p-0 m-0 mb-5">
            {ExtrasData.map((extraData, index) => (
                <ExtraItem key={index} {...extraData} />
            ))}
        </div>
    )
}

export default ExtraList;