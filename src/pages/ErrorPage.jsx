import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!! An Error occurred</h1>
      {error && <p>{error.data}</p>}
      <NavLink to={"/"} style={{ color: "blue" }}>
        <button>Go TO Home</button>
      </NavLink>
    </div>
  );
};
