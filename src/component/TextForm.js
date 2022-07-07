import React, {useState} from 'react'
import './component.css';


export default function TextForm(props) {
   const onChangeHandler = (event)=>{
        setText(event.target.value);
    }
    
    const onUpperClick =() => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert('success','Text has been converted to Upper Case');
    }

    const onLowerClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('success','Text has been converted to Lower Case');

    }

    const onCamalCase = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
        props.showAlert('success','Text has been converted to Camal Case');
    }

    const clearText = () =>{
        setText("");
        props.showAlert('success','Text has been Cleared');
    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('success','Extra Space has been removed');
    }

    const copyText= () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('success','Text has Been Copied to Clipboard');
    }

    const [text,setText] = useState("");
    // const [count, setCount] = useState(0);

    return (
        <div >
                <h2 className={`my-3 text-${props.textFormTheme.textColor}`}>{props.heading}</h2>
                <div style={{textAlign: 'center'}}>
                    <textarea  className={`my-2 text-${props.textFormTheme.textColor}`} style={{backgroundColor: props.textFormTheme.backgroundColor,}} value={text} id="myBox" rows="8" cols="20" onChange={onChangeHandler}></textarea> <br />
                    <button className={`btn btn-${props.textFormTheme.btnTheme} my-3 mx-1`} onClick={onUpperClick}>Upper Case</button>
                    <button className={`btn btn-${props.textFormTheme.btnTheme} my-3 mx-1`} onClick={onLowerClick}>Lower Case</button>
                    <button className={`btn btn-${props.textFormTheme.btnTheme} my-3 mx-1`} onClick={onCamalCase}>Camal Case</button>
                    <button className={`btn btn-${props.textFormTheme.btnTheme} my-3 mx-1`} onClick={clearText}>Clear Text</button>                
                    <button className={`btn btn-${props.textFormTheme.btnTheme} my-3 mx-1`} onClick={handleExtraSpace}>Remove Extra Space</button>    
                    <button className={`btn btn-${props.textFormTheme.btnTheme} my-3 mx-1`} onClick={copyText}>Copy Text</button>    
                </div> 
                <h2 className={`my-2 text-${props.textFormTheme.textColor}`}> Your text Summary </h2>
                <p className={`paraText text-${props.textFormTheme.textColor}`} > 
                    Word Count:- <b>{(text.split(" ")).length}</b> <br />
                    Character Count:- <b>{text.length}</b>
                </p>

                <h2 className={`my-3 text-${props.mode === 'light'?'dark':'light'}`}> Text Preview</h2>
                <p  className={`previewText text-${props.mode === 'light'?'dark':'light'}`}>{text}</p>
        </div>
    )
}