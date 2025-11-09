import { Hero } from '@/components/page/hero';
import { DoodleSamples } from '@/components/page/doodle-samples';
import { Features } from '@/components/page/features';
import { Testimonials } from '@/components/page/testimonials';
import { Faq } from '@/components/page/faq';
import { BuySection } from '@/components/page/buy-section';
import { AppFooter } from '@/components/page/footer';

export default function Home() {
  return (
    <>
      <div className="flex justify-center p-4 sm:p-8">
        <div className="w-full max-w-4xl">
          <header>
            <Hero />
          </header>
          <main className="mt-16 flex flex-col gap-16 sm:gap-24">
            <DoodleSamples />
            <BuySection />
            <Features />
            <Testimonials />
            <Faq />
          </main>
        </div>
      </div>
      <AppFooter />
    </>
  );
}
