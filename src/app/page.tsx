"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="aurora"
        cardStyle="gradient-bordered"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Crispy"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="Authentic Korean Beauty, Delivered Fresh"
      description="Discover trending K-beauty essentials trusted by beauty lovers worldwide. Shop verified skincare, makeup, and wellness products sourced directly from Korea."
      testimonials={[
        {
          name: "Emma W.",
          handle: "@emma_kbeauty",
          testimonial: "The authenticity is unmatched! Finally a store I trust.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/make-up-concept-with-golden-plant_23-2149030352.jpg",
          imageAlt: "korean skincare products luxury photography",
        },
        {
          name: "Jason L.",
          handle: "@kbeauty_enthusiast",
          testimonial: "Fast delivery and curated selection. Simply the best.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/decor-with-pumpkins-figurine_23-2147680561.jpg",
          imageAlt: "korean skincare products luxury photography",
        },
        {
          name: "Sarah P.",
          handle: "@skincareaddict",
          testimonial: "Everything I ordered was 100% genuine. Highly recommended.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beauty-cream-with-natural-elements_23-2148173885.jpg",
          imageAlt: "korean skincare products luxury photography",
        },
        {
          name: "Michael D.",
          handle: "@k_fanatic",
          testimonial: "Crispy has transformed my skincare routine completely.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-skin-regeneration-products_23-2151242178.jpg",
          imageAlt: "korean skincare products luxury photography",
        },
        {
          name: "Chloe L.",
          handle: "@glowwithchloe",
          testimonial: "Obsessed with their curated K-beauty drops!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/foundation-bottles-stands_23-2149511226.jpg",
          imageAlt: "korean skincare products luxury photography",
        },
      ]}
      buttons={[
        {
          text: "Explore Collections",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/make-up-concept-with-golden-plant_23-2149030352.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/assortment-natural-argan-oil-dropper_23-2149016624.jpg",
          alt: "User 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/make-up-concept-with-container-high-angle_23-2149030366.jpg",
          alt: "User 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-korean-woman-posing-with-serum-bottle_23-2150167626.jpg",
          alt: "User 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/natural-argan-oil-composition_23-2149016632.jpg",
          alt: "User 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/make-up-concept-with-golden-plant_23-2149030352.jpg",
          alt: "User 5",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "100% Authentic",
        },
        {
          type: "text",
          text: "Worldwide Shipping",
        },
        {
          type: "text",
          text: "Curated Daily",
        },
        {
          type: "text",
          text: "Expert Picked",
        },
        {
          type: "text",
          text: "Fast Delivery",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="Our K-Beauty Mission"
      description="We believe in the power of Korean beauty culture to transform skincare routines. Crispy was founded to bridge the gap for beauty enthusiasts worldwide, providing direct access to the latest, most effective K-beauty solutions."
      imageSrc="http://img.b2bpic.net/free-photo/decor-with-pumpkins-figurine_23-2147680561.jpg"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Verified Authentic",
          description: "100% sourced directly from Korea's top distributors.",
          tag: "Trust",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-pastry-table_23-2149234892.jpg",
          imageAlt: "High angle delicious pastry on table",
        },
        {
          id: "f2",
          title: "Curated Trends",
          description: "Always the latest drops, carefully picked by experts.",
          tag: "Trend",
          imageSrc: "http://img.b2bpic.net/free-photo/make-up-concept-with-golden-plant_23-2149030352.jpg",
          imageAlt: "High angle delicious pastry on table",
        },
        {
          id: "f3",
          title: "Fast Shipping",
          description: "Global distribution centers ensure rapid delivery.",
          tag: "Speed",
          imageSrc: "http://img.b2bpic.net/free-photo/decor-with-pumpkins-figurine_23-2147680561.jpg",
          imageAlt: "High angle delicious pastry on table",
        },
      ]}
      title="Why Choose Crispy?"
      description="We go beyond just selling products; we ensure you experience the best of Korea."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          brand: "COSRX",
          name: "Snail Mucin Essence",
          price: "$22",
          rating: 5,
          reviewCount: "1.2k",
          imageSrc: "http://img.b2bpic.net/free-photo/beauty-cream-with-natural-elements_23-2148173885.jpg",
        },
        {
          id: "p2",
          brand: "Innisfree",
          name: "Green Tea Serum",
          price: "$28",
          rating: 5,
          reviewCount: "980",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-skin-regeneration-products_23-2151242178.jpg",
        },
        {
          id: "p3",
          brand: "Laneige",
          name: "Lip Sleeping Mask",
          price: "$24",
          rating: 5,
          reviewCount: "2.4k",
          imageSrc: "http://img.b2bpic.net/free-photo/foundation-bottles-stands_23-2149511226.jpg",
        },
        {
          id: "p4",
          brand: "Banila Co",
          name: "Cleansing Balm",
          price: "$19",
          rating: 5,
          reviewCount: "850",
          imageSrc: "http://img.b2bpic.net/free-photo/skin-care-woman-removing-face-makeup-with-cotton-swab-pad-skin-care-concept-facial-closeup-beautiful-mixed-race-model-with-perfect-skin_1258-100405.jpg",
        },
        {
          id: "p5",
          brand: "Beauty of Joseon",
          name: "Sun Relief",
          price: "$18",
          rating: 5,
          reviewCount: "1.5k",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-asian-woman-posing-holding-rose-with-perfect-skin_23-2149369934.jpg",
        },
        {
          id: "p6",
          brand: "Etude House",
          name: "Dear Darling Tint",
          price: "$12",
          rating: 4,
          reviewCount: "720",
          imageSrc: "http://img.b2bpic.net/free-photo/red-lip-gloss-with-sky-background_23-2149681517.jpg",
        },
      ]}
      title="Best-Selling Essentials"
      description="Discover our top-rated skincare and makeup picks."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "50k+",
          title: "Products Delivered",
          description: "Worldwide",
          imageSrc: "http://img.b2bpic.net/free-photo/computer-mouse-paper-bag-blue-background-top-view_169016-43225.jpg",
        },
        {
          id: "m2",
          value: "200+",
          title: "Authentic Brands",
          description: "Selected",
          imageSrc: "http://img.b2bpic.net/free-photo/assortment-beauty-products-displayed-shelf_23-2150718027.jpg",
        },
        {
          id: "m3",
          value: "15k+",
          title: "Happy Clients",
          description: "Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-happy-beautiful-young-vlogger-content-maker-recording-video-about-makeup_1258-254143.jpg",
        },
      ]}
      title="Growth & Impact"
      description="Empowering beauty routines worldwide."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "test1",
          name: "Alice T.",
          role: "Blogger",
          company: "KbeautyGuide",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-using-face-roller-her-beauty-routine_23-2150166445.jpg",
        },
        {
          id: "test2",
          name: "Bob V.",
          role: "MUA",
          company: "Global Beauty",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-male-artist-with-brushes-painting_114579-85747.jpg",
        },
        {
          id: "test3",
          name: "Cathy R.",
          role: "Enthusiast",
          company: "Community",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/lady-wears-beautiful-black-dress-looking-into-mirror_158595-5861.jpg",
        },
        {
          id: "test4",
          name: "Danielle M.",
          role: "Editor",
          company: "TrendLog",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-posing-with-flower-cheek_23-2149486728.jpg",
        },
        {
          id: "test5",
          name: "Edward P.",
          role: "Shopper",
          company: "Satisfied",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/fancy-guy-with-moustache-fixing-his-bowtie-holding-shopping-bags-boyfriend-bring-gift-packages-s_1258-172416.jpg",
        },
      ]}
      title="Loved by Beauty Lovers"
      description="What our community says."
    />
  </div>

  <div id="socialproof" data-section="socialproof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Innisfree",
        "Laneige",
        "COSRX",
        "Banila Co",
        "Etude House",
        "Sulwhasoo",
        "Dr.Jart+",
      ]}
      title="Trusted Partner Brands"
      description="Collaborating with Korea's best labs."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Are products authentic?",
          content: "Yes, we source directly from brands.",
        },
        {
          id: "q2",
          title: "Do you ship worldwide?",
          content: "Yes, we deliver to over 100 countries.",
        },
        {
          id: "q3",
          title: "What's the return policy?",
          content: "We offer a 30-day return policy for unopened items.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-asian-woman-posing-with-facial-cream_23-2149369998.jpg"
      title="Common Questions"
      description="Answers to your beauty queries."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Newsletter"
      title="Get Beauty Updates"
      description="Join our newsletter for exclusive offers."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Shop",
              href: "#products",
            },
            {
              label: "Authenticity",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Support",
              href: "#",
            },
            {
              label: "Track Order",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Legal",
              href: "#",
            },
            {
              label: "Privacy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Crispy"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
