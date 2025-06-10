import {useEffect} from "react";
import AutoRedirectAdvanced from "../components/AutoRedirectAdvanced.tsx";

const AutoRedirectPageAdvanced = () => {

    useEffect(() => {
        document.title = "CF Auto Redirect Page Advanced";
    }, []);

    return (
        <>
            <AutoRedirectAdvanced />


        </>

    )
}
export default AutoRedirectPageAdvanced;