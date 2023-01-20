import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return <div>Oops! Cats are not over here!</div>;
};

export default ErrorPage;
