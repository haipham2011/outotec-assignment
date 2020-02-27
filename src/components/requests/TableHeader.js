import React from "react";
import { useDispatch } from "react-redux";
import { setSort } from '../../actions';

const TableHeader = ({ renderContent, name, sort }) => {
    const dispatch = useDispatch();

    const sortRequests = () => {
        let type = sort.split("-")[1];    
        if(type === "asc"){
            type = "desc"
        }
        else{
            type = "asc"
        }
        dispatch(setSort(`${name}-${type}`))
    }
    return <th onClick={sortRequests}>{renderContent}</th>;
};

export default TableHeader;