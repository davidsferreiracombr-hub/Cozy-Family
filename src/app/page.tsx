import { Hero } from '@/components/page/hero';
import { MainContent } from '@/components/page/main-content';
import { Sidebar } from '@/components/page/sidebar';
import { AppFooter } from '@/components/page/footer';

export default function Home() {
  return (
    <>
      <div className="flex justify-center p-4 sm:p-8">
        <div className="w-full max-w-6xl">
          <header>
            <Hero />
          </header>
          <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_340px]">
            <MainContent />
            <Sidebar />
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}
