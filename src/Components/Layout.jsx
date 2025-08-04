
import Footer from "./Footer"; 

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow pt-30 sm:pt-22 ">
        {children}
      </main>
      <Footer />
    </div>
  );
}
