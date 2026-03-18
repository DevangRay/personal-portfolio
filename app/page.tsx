import HeroTitle from "@/app/components/HeroTitle";


export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <main className="flex w-full max-w-6xl flex-col items-center py-8 px-16 sm:items-start mx-auto">
        <HeroTitle />
        <div className="min-h-[100vh]">
          This text goes long
        </div>
      </main>
    </div>
  );
}
