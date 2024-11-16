import { useRouteError }  from "react-router-dom"

export default function ErrorPage(){
    const error = useRouteError();
    console.log(error)
    return(
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry for the inconvinience, it wont happen again, plz plz plz try again.</p>
            <p>
                <i>{error.status || error.statusText || error.message }</i>
            </p>
        </div>
    )
}