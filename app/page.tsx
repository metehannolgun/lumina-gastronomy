import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="hero" className="h-screen bg-amber-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Hero Section</h1>
      </section>

      <section id="menu" className="h-screen bg-amber-200 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Menu Section</h1>
      </section>

      <section id="about" className="h-screen bg-amber-300 flex items-center justify-center">
        <h1 className="text-4xl font-bold">About Section</h1>
      </section>

      <section id="contact" className="h-screen bg-amber-400 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Contact Section</h1>
      </section>
    </>
  );
}
