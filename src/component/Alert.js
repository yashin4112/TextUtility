import React from 'react'

export default function Alert(props) {
    const makeCaptial = (str)=>{
        const word = str.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible d-flex align-items-center fade show`}>
            <i className="bi-check-circle-fill"></i>
            <strong className="mx-2">{makeCaptial(props.alert.type)}</strong> {props.alert.alertMsg}
        </div>
    )
}
