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
import { AppExperience } from './app-experience';
import { WhatYouGet } from './what-you-get';

export default function HomePageClient() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AnnouncementBar />
      <Header />
      <main className="container flex-1 px-4 sm:px-8">
        <Hero />
        <Features />
        <WhatYouGet />
        <DoodleSamples />
        <AppExperience />
        <Testimonials />
        <section className="py-12 sm:py-20">
          <Guarantee />
        </section>
        <AboutCreator />
      </main>
      <ExclusiveApp />
      <main className="container flex-1 px-4 sm:px-8">
        <BuySection />
        <Faq />
      </main>
      <AppFooter />
      <PurchaseNotifications />
    </div>
  );
}
