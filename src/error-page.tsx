import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  let errorMessage: string;
  let errorNumber: Number;
  // console.error(error);
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
    errorNumber = error.status;
    // return (
    //   <div className="w-screen h-screen flex justify-center items-center">
    //     <h1>Oops! Sorry, an unexpected error has occurred.</h1>
    //     <h1>
    //       {errorNumber} {errorMessage}
    //     </h1>
    //   </div>
    // );
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {errorNumber} {errorMessage}
          </h1>
          <p className="mt-4 text-muted-foreground">
            Oops, Sorry, an unexpected error has occurred.
          </p>
          <div className="mt-6">
            {/* <link href="/">Go to Homepage</link> */}
            <Link
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              to="/"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
