"use client";

import { Hero } from '@/components/page/hero';
import { DoodleSamples } from '@/components/page/doodle-samples';
import { Features } from '@/components/page/features';
import { Faq } from '@/components/page/faq';
import { BuySection } from '@/components/page/buy-section';
import { AppFooter } from '@/components/page/footer';

export default function HomePageClient() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <Hero />
        <div className="container relative px-4 sm:px-8">
          <Features />
          <DoodleSamples />
          <BuySection />
          <Faq />
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
