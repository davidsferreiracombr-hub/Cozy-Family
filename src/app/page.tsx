"use client";

import { Hero } from '@/components/page/hero';
import { DoodleSamples } from '@/components/page/doodle-samples';
import { ForWho } from '@/components/page/for-who';
import { WhatYouGet } from '@/components/page/what-you-get';
import { Features } from '@/components/page/features';
import { Testimonials } from '@/components/page/testimonials';
import { Faq } from '@/components/page/faq';
import { BuySection } from '@/components/page/buy-section';
import { Guarantee } from '@/components/page/guarantee';
import { AppFooter } from '@/components/page/footer';
import { SalesNotifier } from '@/components/page/sales-notifier';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <SalesNotifier />
      <div className="w-full max-w-5xl p-4 sm:p-8">
        <header>
          <Hero />
        </header>
        <main className="mt-16 flex flex-col gap-16 sm:mt-20 sm:gap-24">
          <DoodleSamples />
          <ForWho />
          <WhatYouGet />
          <Features />
          <BuySection />
          <Testimonials />
          <Guarantee />
          <Faq />
        </main>
      </div>
      <div className="w-full">
        <AppFooter />
      </div>
    </div>
  );
}
