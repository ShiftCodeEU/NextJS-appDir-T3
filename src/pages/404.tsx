import "../styles/tailwind.css";

const NotFound = () => {
  if (typeof window !== "undefined") {
    document.title = "Page not found | T3-App with PreactJS";
  }

  return (
    <div className="h-screen bg-black text-white">
      <div className="p-4">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
      </div>
    </div>
  );
};
export default NotFound;
