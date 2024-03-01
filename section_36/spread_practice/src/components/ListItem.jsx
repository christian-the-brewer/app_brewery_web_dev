import {useState} from "react";

export default function ListItem(props) {


    return (
        <div onClick={() => {
            props.handleDelete(props.id)
        }}>
            <li>{props.item}</li>
        </div>
    );
}