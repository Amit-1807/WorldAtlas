import { NavLink,useRouteError } from "react-router-dom"

export const ErrorPage = () => {
     const error = useRouteError()
     console.log(error)
    return (
        <>
        <h1>Oops an error Occured</h1>
        { error && <p> {error.data} </p>}
        <NavLink to = "/"><button>Go back</button></NavLink>
        </>
    )
}