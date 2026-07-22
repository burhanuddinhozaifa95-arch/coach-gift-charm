import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle, ArrowRight, Users, ShieldCheck, AlertTriangle, ChevronDown } from "lucide-react";
import coachLogo from "@/assets/coach-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coach $750 Gift Card — Reviewer Program" },
      {
        name: "description",
        content:
          "Join the Coach reviewer program and claim your $750 Coach gift card. Complete a few simple steps to redeem your reward.",
      },
      { property: "og:title", content: "Coach $750 Gift Card — Reviewer Program" },
      {
        property: "og:description",
        content: "Join the Coach reviewer program and claim your $750 Coach gift card.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CTA_URL = "https://giftclick.org/aff_c?offer_id=3634&aff_id=13529";

const NAMES = [
  "Amanda", "Josh", "Alex", "Sarah", "Michael", "Emily",
  "David", "Jessica", "Ashley", "Daniel", "Chris", "Taylor",
];

function LiveToast() {
  const [visible, setVisible] = useState(true);
  const [name, setName] = useState(() => NAMES[Math.floor(Math.random() * NAMES.length)]);

  useEffect(() => {
    const tick = () => {
      setVisible((v) => {
        if (v) return false;
        setName(NAMES[Math.floor(Math.random() * NAMES.length)]);
        return true;
      });
    };
    const id = setInterval(tick, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 shadow-lg">
        <CheckCircle className="h-4 w-4 shrink-0" style={{ color: "#00C851" }} />
        <span className="text-sm font-medium text-stone-700 whitespace-nowrap">
          {name} - Claimed $750 Coach Gift Card
        </span>
      </div>
    </div>
  );
}

type FaqItem = { q: string; a: string };

const FAQS: FaqItem[] = [
  {
    q: "How long do the deals take?",
    a: "Most deals only take a few minutes to complete. The full process, including all sponsored deals, is typically finished within 15 to 20 minutes.",
  },
  {
    q: "What are deals?",
    a: "Deals are offers from our sponsors, such as free trials, subscriptions, or sign-ups. Completing a set number of them is what unlocks your reward.",
  },
  {
    q: "How many deals do I have to do?",
    a: "The number of deals required varies by reward. The exact amount is always shown on the reward before you begin.",
  },
  {
    q: "When will I receive my reward?",
    a: "Once all required deals are verified as complete, your reward is processed and sent to you, usually within a few business days.",
  },
];

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-6 rounded-2xl border border-stone-200 bg-white shadow-2xl p-6 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-black">Frequently asked questions</h2>
      <div className="mt-4 divide-y divide-stone-200">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="py-4">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-black">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-stone-500 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <p className="mt-3 text-sm text-stone-600 leading-relaxed">{f.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Index() {
  const steps = [
    { title: "Click the button below", sub: "Takes 1 second" },
    { title: "Enter Your Basic Info", sub: "Name & email only" },
    { title: "Complete 4-5 Simple Deals", sub: "Free trials & signups" },
    { title: "Claim Your $750 Reward", sub: "Sent directly to you" },
  ];

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col items-center px-4 py-12 sm:py-16 font-sans">
      <LiveToast />

      <main className="w-full max-w-md">
        <div className="rounded-2xl border border-stone-200 bg-white shadow-2xl p-6 sm:p-10">
          {/* Logo */}
          <div className="flex flex-col items-center text-center">
            <img
              src={coachLogo}
              alt="Coach"
              className="h-24 sm:h-28 w-auto object-contain"
            />
          </div>

          <hr className="my-6 border-stone-200" />

          {/* Hero */}
          <div className="text-center">
            <h1
              className="text-6xl sm:text-7xl font-extrabold text-black leading-none"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              $750
            </h1>
            <p className="mt-3 text-sm sm:text-base font-medium tracking-widest uppercase text-stone-600">
              Coach Gift Card
            </p>
          </div>

          {/* Trust badge */}
          <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6 text-stone-700">
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              <span className="text-xs sm:text-sm font-semibold">2,847 claimed today</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4" style={{ color: "#00C851" }} />
              <span className="text-xs sm:text-sm font-semibold">Verified Program</span>
            </div>
          </div>

          {/* Steps */}
          <div className="mt-6 rounded-xl border border-stone-200 bg-stone-100 p-6">
            <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-stone-500 text-center whitespace-nowrap">
              4 Simple Steps — Nothing To Lose
            </p>
            <ol className="mt-5 space-y-4">
              {steps.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white font-bold text-sm mt-0.5"
                    style={{ backgroundColor: "#000000" }}
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm sm:text-base font-semibold text-black leading-tight">
                      {s.title}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-500 mt-0.5">{s.sub}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Urgency */}
          <div className="mt-5 flex items-center justify-center gap-2 text-center whitespace-nowrap">
            <AlertTriangle className="h-4 w-4 shrink-0" style={{ color: "#6B3A20" }} />
            <span className="text-[13px] sm:text-sm font-medium" style={{ color: "#6B3A20" }}>
              Limited spots remaining — Offer expires soon
            </span>
          </div>

          {/* CTA */}
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-bold tracking-wide text-white bg-black transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:bg-[#6B3A20]"
          >
            CLAIM YOUR $750 GIFT CARD
            <ArrowRight className="h-5 w-5" />
          </a>

        </div>
      </main>
    </div>

    </div>
  );
}
