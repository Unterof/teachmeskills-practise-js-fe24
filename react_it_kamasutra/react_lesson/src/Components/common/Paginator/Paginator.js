import React from "react";
import styles from "./Paginator.module.css";






 let Paginator = ({totalUserCount, pageSize, currentPage,  onPageChanged}) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

        <div className={styles.container}>

            <div className={styles.pages}>

                {pages.map(e => {
                    return (

                        <span className={currentPage === e && styles.selectedPage}
                              onClick={() => {

                                  onPageChanged(e)
                              }}>{e}</span>

                    )
                })}
            </div>


        </div>

    )
}

export default Paginator


