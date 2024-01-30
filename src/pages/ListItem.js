import React from "react";
import './ListItem.css';
import Label from "./Label";

function ListItem (props){
    const {title, descr, isActive} = props;
    return (
    
        <div className='list-item'>
        
            <div className='list-title'>
                <h4>{title}</h4>
            </div>
    
            <div className='list-descr'>
                {descr}
            </div>
            <div className='list-label'>
                <Label onAction={()=> {
                    console.log("parent clicked")
                }} isActive={isActive} />
            </div>
        </div>
    )
}
export default ListItem