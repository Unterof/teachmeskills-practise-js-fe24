import React from 'react'
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from './Preloader.module.css'



const Preloader = (props) => {
    return (
        <CircularProgress {...props} color="secondary" className={styles.toggle}/>
    )
}

export default Preloader


