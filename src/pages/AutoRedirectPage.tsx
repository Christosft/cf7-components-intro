import {useEffect} from "react";
import AutoRedirect from "../components/AutoRedirect.tsx";

const AutoRedirectPage = () => {

    useEffect(() => {
        document.title = "CF Auto Redirect Page";
    }, []);

    return (
        <>
            <AutoRedirect />


        </>

    )
}
export default AutoRedirectPage;