import Header from "@/components/landing/Header";
import ProductArea from "@/components/landing/ProductArea";
import Sidebar from "@/components/landing/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <Sidebar />
          <ProductArea />
        </div>
      </section>
    </main>
  );
}
