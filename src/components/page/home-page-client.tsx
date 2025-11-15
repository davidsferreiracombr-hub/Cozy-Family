"use client";

import { Hero } from '@/components/page/hero';
import { DoodleSamples } from '@/components/page/doodle-samples';
import { Features } from '@/components/page/features';
import { Faq } from '@/components/page/faq';
import { BuySection } from '@/components/page/buy-section';
import { AppFooter } from '@/components/page/footer';
import { AnnouncementBar } from './announcement-bar';
import { Guarantee } from './guarantee';
import { Testimonials } from './testimonials';
import { PurchaseNotifications } from './purchase-notifications';
import { Header } from './header';
import { AboutCreator } from './about-creator';
import { ExclusiveApp } from './exclusive-app';

export default function HomePageClient() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AnnouncementBar />
      <Header />
      <main className="container flex-1 px-4 sm:px-8">
        <Hero />
        <Features />
        <Testimonials />
        <DoodleSamples />
        <section className="py-12 sm:py-20">
          <Guarantee />
        </section>
        <AboutCreator />
        <ExclusiveApp />
        <BuySection />
        <Faq />
      </main>
      <AppFooter />
      <PurchaseNotifications />
    </div>
  );
}
