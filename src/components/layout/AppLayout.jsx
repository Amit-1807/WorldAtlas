import { Outlet } from "react-router-dom";
import { Footers } from "../ui/footer";
import { Headers } from './../ui/headers';

export const AppLayout = () =>{
    return(
        <>
        <Headers/>
        <Outlet/>
        <Footers/>
        </>
    )
}