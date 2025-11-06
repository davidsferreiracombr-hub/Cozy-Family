import { Hero } from '@/components/page/hero';
import { MainContent } from '@/components/page/main-content';
import { Sidebar } from '@/components/page/sidebar';
import { AppFooter } from '@/components/page/footer';
import { CheckoutModal } from '@/components/page/checkout-modal';

export default function Home() {
  return (
    <>
      <div className="flex justify-center p-4 sm:p-7">
        <div className="w-full max-w-5xl bg-transparent">
          <header>
            <Hero />
          </header>
          <div className="mt-6 grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_320px]">
            <MainContent />
            <Sidebar />
          </div>
        </div>
      </div>
      <AppFooter />
      <CheckoutModal />
    </>
  );
}
