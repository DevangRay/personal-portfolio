import NavBar from "@/app/components/NavBar";


export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
        <NavBar />

      <main className="flex w-full max-w-6xl flex-col items-center py-8 px-16 bg-white dark:bg-black sm:items-start mx-auto">
        <div className="min-h-[100vh]">
          This text goes long
        </div>
      </main>
    </div>
  );
}
