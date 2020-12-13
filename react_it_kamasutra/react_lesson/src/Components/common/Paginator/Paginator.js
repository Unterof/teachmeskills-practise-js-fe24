// import React, {useState} from "react";
// import styles from "./Paginator.module.css";
//
// import cn  from "classnames"
// import { Pagination } from "@material-ui/lab";
//
//
//
//
//
//
//
//  let Paginator = ({totalUserCount, pageSize, currentPage,  onPageChanged, portionSize = 20}) => {
//
//     let pagesCount = Math.ceil(totalUserCount / pageSize)
//     let pages = [];
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i)
//     }
//
//     let portionCount = Math.ceil(pagesCount/portionSize);
//     let [portionNumber,setPortionNumber] = useState(1);
//     let leftPortionPageNumber = (portionNumber - 1) * portionSize +1 ;
//     let rightPortionPageNumber = portionNumber * portionSize
//      let prevButton = () => {setPortionNumber(portionNumber-1)};
//     let nextButton = () =>  {
//         setPortionNumber(portionNumber + 1)
//     }
//
//     return (<div className={styles.pages}>
//             {portionNumber > 1 && <button onClick={prevButton}>PREV</button>}
//
//             {pages
//                 .filter(p => p >= leftPortionPageNumber && p<= rightPortionPageNumber)
//                 .map((p)=>{
//                     return <span className = { cn ({
//                     [styles.selectedPage]: currentPage === p},'styles.pages'
//                     )}
//                    key ={p}
//                    onClick = {(e) => {
//                    onPageChanged(p)
//                    }}>{p}</span>
//                 })}
//        {portionCount > portionNumber && <button onClick={nextButton}>NEXT</button> }
//
//
//
//
//
//
//
// </div>
//     )
//
//
// }
//
// export default Paginator
// let changePage = () => {}
//  <Pagination count={pagesCount} onChange = {changePage} />
//
// // <div className={styles.container}>
// //
// //     <div className={styles.pages}>
// //
// //     {pages.map(e => {
// //             return (
// //
// //                 <span className={currentPage === e && styles.selectedPage}
// //                       onClick={() => {
// //
// //                           onPageChanged(e)
// //                       }}>{e}</span>
// //
// //             )
// //         })}
// // </div>
// //
// //
// // </div>
