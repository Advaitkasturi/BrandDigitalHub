import Navbar from "./assets/pages/navbar";
import Home from "./assets/pages/home";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.55)",
        }}
      >
        <Navbar />
        <Home/>
      </div>
    </div>
  );
}
