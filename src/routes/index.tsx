import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle, ArrowRight, Users, ShieldCheck } from "lucide-react";
import coachLogo from "@/assets/coach-logo.png";
import claimedBadge from "@/assets/claimed-badge.png.asset.json";

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
        content:
          "Join the Coach reviewer program and claim your $750 Coach gift card.",
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

function Index() {
  const steps = [
    "Click the button below",
    "Enter Your Basic Info",
    "Complete 4-5 offers",
    "Claim Your $750 Reward",
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12 sm:py-16 font-sans">
      <LiveToast />

      <main className="w-full max-w-md">
        <div className="rounded-2xl border border-stone-200 bg-white shadow-2xl p-6 sm:p-10">
          {/* Logo */}
          <div className="flex flex-col items-center text-center">
            <img
              src={coachLogo.url}
              alt="Coach New York"
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
              <ShieldCheck className="h-4 w-4" />
              <span className="text-xs sm:text-sm font-semibold">Verified Program</span>
            </div>
          </div>

          {/* Steps */}
          <ol className="mt-6 rounded-xl border border-stone-100 bg-stone-50 p-6 space-y-4">
            {steps.map((s, i) => (
              <li key={i} className="flex items-center gap-3">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white font-bold text-sm"
                  style={{ backgroundColor: "#000000" }}
                >
                  {i + 1}
                </span>
                <span className="text-sm sm:text-base text-stone-800">{s}</span>
              </li>
            ))}
          </ol>

          {/* CTA */}
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-lg font-bold tracking-wide text-white bg-black transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:bg-[#6B3A20]"
          >
            Get Your $750 Gift Card
            <ArrowRight className="h-5 w-5" />
          </a>

        </div>

        {/* hidden reference to preserve badge asset import for future use */}
        <img src={claimedBadge.url} alt="" className="hidden" aria-hidden />
      </main>
    </div>
  );
}
