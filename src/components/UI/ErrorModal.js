import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
import  ReactDOM  from 'react-dom';

const Backdrop=(props)=>{
    return(
        <div className={classes.backdrop} onClick={props.onConfirm}/>
    )
};
const ModalOverlay=(props)=>{
    return(
 <div>
   <Card className={classes.modal}>
    <div>
    <header className={classes.header}>
        <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
        <p> {props.message}</p>
    </div>

    <footer className={classes.action}>
        <Button onClick={props.onConfirm}>okay</Button>
    </footer>
    </div>
</Card>
</div>
    );
}

const ErrorModal=(props)=>{
    return(
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm}/>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(<ModalOverlay 
            title={props.title}
            message={props.onConfirm}
            />,
            document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
;
}
export default ErrorModal;