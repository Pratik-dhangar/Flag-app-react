import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div
      className="d-grid gap-3"
      style={{
        
       justifyContent:"center",
       marginTop:"10%",
       background:"#cfbdbc"
      }}
    >
      <h1 className="p-5" style={{margin:"auto"}}>Oops! An error occurred.</h1>
      {error && <p style={{margin:"auto", background:"red", padding:"2rem"}}>{error.data}</p>}
      <NavLink to="/" className="mb-3">
        <button className="p-3" style={{ width: "auto", margin:"3rem auto" }}>Go Home</button>
      </NavLink>
    </div>
  );
};
