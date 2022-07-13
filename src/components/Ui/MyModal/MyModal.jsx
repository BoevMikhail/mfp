import React from 'react'
import classes from './MyModal.module.css'

const MyModal = ({ children, visible, setVisivle}) => {

    const rootClasses = [classes.MyModal]

    if(visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ') } onClick={() => setVisivle(false)}>
            <div className={classes.MyModalContent} onClick={(e) => e.stopPropagation()}>
            { children}
            </div>
        </div>
    )
}

export default MyModal