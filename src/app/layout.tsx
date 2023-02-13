import "../styles/tailwind.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="h-screen bg-black text-white">
      <body className="p-4">{children}</body>
    </html>
  );
};
export default RootLayout;
