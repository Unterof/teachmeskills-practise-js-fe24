import React from "react";
import PreloaderComp from "../assets/Preloader/PreloaderComp";


const withSuspense = (Component) => {
    return (props) => {
      return  <React.Suspense fallback={<PreloaderComp/>}>
            <Component {...props}/>
        </React.Suspense>
    }

}

export default withSuspense