import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error:any = useRouteError();
    console.error(error);
    return(
        <>
        <div>
            <h1>OOPS!</h1>
            <p>ERRROR</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
        </>
    )
}