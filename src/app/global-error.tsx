"use client";

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.error(error);

  return (
    <html lang="en" className="bg-black text-white">
      <head>
        <title>Oops! | T3-App with PreactJS</title>
      </head>
      <body className="p-4">
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
};
export default GlobalError;
