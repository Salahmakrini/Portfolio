import { Inter } from "next/font/google";
import Header from "./components/Header";
import Home from "./components/Home";

const inter = Inter({
  subsets: ["latin"],
});

export default function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}
