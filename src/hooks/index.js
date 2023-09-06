import { useContext } from "react";
import AppContext from "../context";

const useAppState = ()=>{
    return useContext(AppContext);
}

export default useAppState;