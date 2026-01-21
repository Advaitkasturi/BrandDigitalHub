import Navbar from "./assets/pages/navbar";
import Home from "./assets/pages/home";
import bg from "./assets/bg.png";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.45)",
        }}
      >
        <Navbar />
        <Home />
      </div>
    </div>
  );
}
