import { Link } from "react-router-dom";
import React from "react"

function BottomWarning({label, ButtonText, to}){
    return (
        <>
        <div className="w-full py-3 flex justify-center">

        
            <span className="text-sm  text-black-300">{label}</span>
            <Link to={to} className="text-sm mx-2 underline text-black "> 
                {ButtonText}
            </Link>
        </div>
        </>
    )
}

export default React.memo(BottomWarning);