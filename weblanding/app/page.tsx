"use client";

import type { ReactNode } from "react";

const disclaimerParagraphs = [
  "SEFGA is an independent ecommerce procurement assistance service. We help customers place and manage orders on their behalf from third-party ecommerce platforms.",
  "We do not manufacture, sell, or directly own the products listed on ecommerce websites. Product pricing, stock availability, delivery timelines, platform offers, and cancellations remain subject to the policies of the respective platform and sellers.",
  "By confirming an order through SEFGA, customers acknowledge and agree to the terms and conditions mentioned above.",
];

const platformList = [
  "Amazon",
  "Flipkart",
  "Myntra",
  "Ajio",
  "Dot & Key",
  "Nykaa",
  "Tira",
  "The Derma Co.",
  "Mamaearth",

];

const processSteps = [
  "We regularly share available deals, offers, and discounted products with our clients.",
  "Clients review the products and confirm the required items and quantities.",
  "Once confirmed, we place the order on the client's behalf through supported ecommerce platforms.",
  "The products are delivered directly to the client through the platform's courier partner.",
];

const orderRequirements = [
  "Product availability",
  "Platform stock availability",
  "Account eligibility",
  "Delivery serviceability in the client's location",
];

const rewardSources = [
  "Platform reward points",
  "Coins",
  "Cashback benefits",
  "Promotional rewards",
  "Redeemable platform incentives",
];

const inspectionList = [
  "Parcels are checked properly",
  "Quantity is verified",
  "Packaging is inspected",
  "Visible damages are identified before acceptance",
];

const redemptionItems = [
  "Personal wallet balance",
  "Reward points",
  "Coins",
  "Gift vouchers",
  "Cashback balance",
];

const cancellationReasons = [
  "Stock unavailability",
  "Delivery issues",
  "Platform restrictions",
  "Account limitations",
  "Seller-side cancellation",
];

const returnChecks = [
  "Package condition",
  "Leakage or damage, if applicable",
  "Packaging quality",
  "Quantity of products",
  "Product pricing",
  "Weight and completeness of the parcel",
];

const delayReasons = [
  "Courier delays",
  "Weather conditions",
  "Operational disruptions",
  "Hub issues",
  "Ecommerce platform delays",
  "Unavoidable or unforeseen circumstances",
];

function LiquidGlass({
  children,
  className = "",
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) {
  return (
    <div className={`liquidGlass-wrapper ${className}`}>
      <div className="liquidGlass-effect" />
      <div className="liquidGlass-tint" />
      <div className="liquidGlass-shine" />
      <div className="liquidGlass-text">{children}</div>
    </div>
  );
}

function BulletList({ items }: Readonly<{ items: string[] }>) {
  return (
    <ul className="mt-5 grid gap-3 sm:grid-cols-2 w-full">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-2xl border border-white/30 bg-white/10 px-5 py-4 text-base leading-6 text-[#2f3a4a] shadow-sm"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#007aff]/10 text-[#007aff] font-bold text-xs mt-0.5">
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function LogoCarousel({ items }: Readonly<{ items: string[] }>) {
  // Filter out the long description item for the carousel to keep it clean
  const carouselItems = items.filter((item) => item.length < 30);
  const duplicatedItems = [...carouselItems, ...carouselItems, ...carouselItems];

  return (
    <div className="marquee-container mt-8 py-4">
      <div className="marquee-content">
        {duplicatedItems.map((item, index) => {
          const fileName = item.toLowerCase().split(" ")[0].replace(/[^a-z]/g, "");

          return (
            <div
              key={`${item}-${index}`}
              className="flex min-w-[200px] flex-col items-center justify-center gap-4 rounded-3xl border border-white/20 bg-white/5 px-10 py-8 transition-all hover:scale-105 hover:bg-white/10"
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl sm:h-45 sm:w-45">
                <img
                  src={`/logos/${fileName}.png`}
                  alt={item}
                  className="h-full w-full object-contain p-1 transition-opacity duration-300"
                />
              </div>
              <span className="whitespace-nowrap text-sm font-medium tracking-wide text-[#2f3a4a]">
                {item}
              </span>

            </div>
          );
        })}
      </div><br />
      <h1 className="text-center text-sm font-medium tracking-wide text-[#2f3a4a]">Other supported ecommerce and FMCG-related platforms from time to time</h1>
    </div>
  );
}

function Section({
  title,
  subtitle,
  fullWidth = false,
  children,
}: Readonly<{
  title: string;
  subtitle?: string;
  fullWidth?: boolean;
  children: ReactNode;
}>) {
  return (
    <LiquidGlass className="glass-section snap-section">
      <section className="px-6 py-10 sm:px-10 lg:px-12 w-full flex flex-col items-center">

        {/* Centered Header Block */}
        <div className="text-center flex flex-col items-center space-y-3 mb-10 w-full">
          {subtitle && (
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5f6f85]">
              {subtitle}
            </p>
          )}
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1220] sm:text-4xl leading-tight max-w-2xl">
            {title}
          </h2>
          <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[#007aff] to-[#af52de] mt-2" />
        </div>

        {/* Content Block */}
        <div className={`w-full text-lg leading-8 text-[#3c4858] ${fullWidth ? 'space-y-6' : 'max-w-4xl space-y-6 mx-auto'}`}>
          {children}
        </div>

      </section>
    </LiquidGlass>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#fafcff] text-[#111827]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="liquid-field" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,122,255,0.18),transparent_35%),radial-gradient(circle_at_82%_12%,rgba(52,199,89,0.14),transparent_30%),radial-gradient(circle_at_50%_84%,rgba(175,82,222,0.14),transparent_32%),linear-gradient(180deg,#ffffff_0%,#edf2fa_40%,#fef5ff_75%,#ffffff_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-4 sm:px-10 flex flex-col gap-6">
        <LiquidGlass className="glass-nav z-50 mx-auto w-full max-w-[1200px] md:sticky md:top-3">
          <header className="flex items-center justify-between gap-3 px-4 py-2.5 text-left sm:px-8 md:px-20 md:py-3">
            <div className="flex shrink-0 items-center gap-3 md:gap-5">
              <span className="hidden h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white/70 shadow-lg ring-1 ring-white/70 sm:flex md:h-11 md:w-11">
                <img
                  src="/favicon.ico"
                  alt="SEFGA"
                  className="h-full w-full object-cover"
                />
              </span>
              <p className="text-xl font-semibold tracking-[0.08em] text-[#111827] md:text-2xl">
                SEFGA
              </p>
            </div>
            <p className="max-w-[175px] text-right text-[9px] font-semibold uppercase leading-3 tracking-[0.12em] text-[#5f6f85] sm:max-w-none sm:text-xs sm:leading-4 md:text-sm md:tracking-[0.18em] md:whitespace-nowrap">
              Secure Ecommerce FMCG Goods Agency
            </p>
          </header>
        </LiquidGlass>

        <section className="grid min-h-[72vh] items-center gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:py-16 snap-section">
          <div className="hero-rise">
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] text-[#0b1220] sm:text-6xl lg:text-7xl">
              Disclaimer & Service Terms
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-8 text-[#536173]">
              SEFGA helps customers procure FMCG and other useful products in
              good quantities from major ecommerce platforms at attractive
              discounts and deals.
            </p>
          </div>

          <LiquidGlass className="glass-disclaimer">
            <div className="px-5 py-6 sm:px-7 lg:px-9">

              <div className="mt-5 space-y-5 text-lg leading-8 text-[#3c4858]">
                {disclaimerParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </LiquidGlass>
        </section>

        <div className="space-y-16 md:space-y-24 pb-24">
          <Section title="About SEFGA" subtitle="Who We Are">
            <p>
              SEFGA (Secure Ecommerce FMCG Goods Agency) helps customers
              procure FMCG and other useful products in good quantities from
              major ecommerce platforms at attractive discounts and deals.
            </p>
            <p>
              We assist clients by placing orders on their behalf through
              trusted ecommerce platforms and help them access discounted
              offers, combo deals, cashback opportunities, and
              platform-specific benefits that may not always be easily
              available to regular buyers.
            </p>
            <p>
              SEFGA acts as an independent procurement assistance service and
              is not directly affiliated with any ecommerce platform or brand.
            </p>
          </Section>

          <Section title="Supported Ecommerce Platforms" subtitle="Procurement Channels" fullWidth={true}>
            <p>
              We assist with order procurement from major ecommerce platforms
              including:
            </p>
            <LogoCarousel items={platformList} />
          </Section>

          <Section title="How Ordering Works" subtitle="Procurement Process">
            <p>Our process is simple and transparent:</p>

            <div className="grid gap-3 sm:grid-cols-2 mt-2 mb-4">
              {processSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-white/30 bg-white/10 p-4 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#007aff]/10 text-[#007aff] font-bold text-sm">
                    0{index + 1}
                  </span>
                  <span className="text-base leading-6 text-[#2f3a4a]">{step}</span>
                </div>
              ))}
            </div>

            <p className="pt-2">Order placement is subject to:</p>
            <BulletList items={orderRequirements} />
            <p className="pt-2">
              While we try our best to place every confirmed order
              successfully, successful order placement cannot always be
              guaranteed due to platform restrictions or stock limitations.
            </p>
          </Section>

          <Section title="Service Charges" subtitle="Fee Transparency">
            <p>
              At SEFGA, our services are generally provided at little to no
              additional cost.
            </p>
            <p>In most cases, we do not charge customers because we earn through:</p>
            <BulletList items={rewardSources} />
            <p className="pt-2">
              However, in some situations where premium or special accounts,
              such as Prime or platform-specific accounts, are unavailable and
              need to be arranged externally, a small service fee may apply per
              order.
            </p>
            <p>
              The fee may vary depending on the order and platform requirements
              and is generally between <strong>₹5 to ₹20 per order</strong>.
            </p>
            <p>
              This amount will always be informed in advance before order
              placement.
            </p>
          </Section>

          <Section title="Client Responsibility" subtitle="Package Inspection">
            <p>
              Customers are strongly advised not to allow delivery partners to
              mark parcels as &quot;Delivered&quot; before proper inspection.
            </p>
            <p>Please ensure that:</p>
            <BulletList items={inspectionList} />
            <p className="pt-2">
              Failure to inspect parcels before accepting delivery may limit
              future complaint options with the ecommerce platform or courier
              service.
            </p>
          </Section>

          <Section title="Coins, Wallet Balance, Gift Vouchers & Redemption Policy" subtitle="Redemption Agreement">
            <p>In certain cases, SEFGA may use:</p>
            <BulletList items={redemptionItems} />
            <p className="pt-2">
              To provide better discounts or place an order successfully.
            </p>
            <p>
              If any personal wallet balance, voucher amount, or redeemable
              value is used in your order, the customer agrees to pay that
              specific amount separately after receiving the complete
              consignment, verifying the stock, and matching the quantities and
              pricing.
            </p>
            <p>
              This amount will be clearly communicated and properly explained
              before settlement.
            </p>
          </Section>

          <Section title="Payment Policy" subtitle="Transaction Guidelines">
            <p>
              Currently, Cash on Delivery (COD) is the primary payment method
              supported.
            </p>
            <p>
              Customers are expected to make payment directly to the delivery
              partner at the time of receiving the order.
            </p>
            <p>
              SEFGA may introduce prepaid order services in the future,
              depending on business operations and customer requirements.
            </p>
          </Section>

          <Section title="Refund & Cancellation Policy" subtitle="Cancellation Protections">
            <p>
              SEFGA does not control cancellations initiated by ecommerce
              platforms.
            </p>
            <p>If a platform cancels an order due to:</p>
            <BulletList items={cancellationReasons} />
            <p className="pt-2">
              SEFGA will not be held responsible for such cancellations.
            </p>
            <h3 className="pt-4 text-2xl font-semibold text-[#0b1220]">
              For Zero-Fee Orders
            </h3>
            <p>
              If the order was placed without any additional service charges,
              the customer will not be required to pay anything for cancelled
              orders.
            </p>
            <h3 className="pt-4 text-2xl font-semibold text-[#0b1220]">
              For Procured or Paid Accounts
            </h3>
            <p>
              If a paid or externally arranged account was specifically
              procured for placing an order and the order gets cancelled, any
              applicable account procurement cost may be shared equally by both
              parties, unless otherwise agreed.
            </p>
          </Section>

          <Section title="Return & Exchange Policy" subtitle="Acceptance Policies">
            <p>
              Currently, SEFGA does not provide return or exchange handling
              services.
            </p>
            <p>
              Customers are requested to carefully inspect their parcels at the
              time of delivery.
            </p>
            <p>
              Before making payment to the courier partner, customers must
              verify:
            </p>
            <BulletList items={returnChecks} />
            <p className="pt-2">
              Any issue found after accepting the delivery may be subject to
              the policies of the respective ecommerce platform.
            </p>
          </Section>

          <Section title="Delivery & Delay Disclaimer" subtitle="Courier Guidelines">
            <p>SEFGA is not responsible for shipment delays caused by:</p>
            <BulletList items={delayReasons} />
            <p className="pt-2">
              If a local courier partner hands over your parcel to another
              local vendor or collection point in your area, customers may
              contact the nearest courier hub for assistance.
            </p>
            <p>
              SEFGA may provide tracking details whenever available to help
              customers track shipments.
            </p>
          </Section>

          <LiquidGlass className="glass-footer snap-section">
            <footer className="px-6 py-10 sm:px-10 lg:px-12 w-full flex flex-col justify-between h-full min-h-[50vh] sm:min-h-[55vh]">
              {/* Brand and Leadership Content */}
              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 w-full items-start">

                {/* Brand Statement Column */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white/70 shadow-lg ring-1 ring-white/70">
                      <img
                        src="/favicon.ico"
                        alt="SEFGA"
                        className="h-full w-full object-cover"
                      />
                    </span>
                    <p className="text-4xl font-bold tracking-[0.05em] text-[#0b1220]">
                      SEFGA
                    </p>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5f6f85]">
                    Secure Ecommerce FMCG Goods Agency
                  </p>
                  <p className="max-w-md text-base leading-7 text-[#536173]">
                    Your trusted independent procurement partner. Accessing premium discounts, platform-specific offers, and seamless bulk ordering across major Indian e-commerce networks.
                  </p>

                  {/* Location Info */}
                  <div className="flex items-center gap-2 text-sm text-[#5f6f85] pt-2">
                    <svg className="h-5 w-5 text-[#007aff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Bangalore, Karnataka, India</span>
                  </div>
                </div>

                {/* Leadership Column */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#5f6f85] mb-4">
                      Executive Leadership
                    </h4>
                    <div className="space-y-3">
                      {/* Founder Profile */}
                      <div className="flex items-center gap-4 rounded-2xl border border-white/30 bg-white/10 p-4 shadow-sm">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#007aff]/10 text-[#007aff] font-semibold text-lg">
                          DR
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-[#0b1220]">Dhairya Raghuwanshi</p>
                          <p className="text-xs font-medium text-[#5f6f85]">Founder & Managing Director</p>
                        </div>
                      </div>

                      {/* Co-Founder Profile */}
                      <div className="flex items-center gap-4 rounded-2xl border border-white/30 bg-white/10 p-4 shadow-sm">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#af52de]/10 text-[#af52de] font-semibold text-lg">
                          RD
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-[#0b1220]">Rohan Deskhmukh</p>
                          <p className="text-xs font-medium text-[#5f6f85]">Co-Founder & Operations Head</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Copyright bar */}
              <div className="mt-10 pt-6 border-t border-white/20 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-[#5f6f85] w-full">
                <p>© 2025 SEFGA. All rights reserved.</p>
                <div className="flex items-center gap-4">
                  <span>Independent Procurement Agency</span>
                  <span className="h-1 w-1 rounded-full bg-[#5f6f85]" aria-hidden="true"></span>
                  <span>Bangalore, KA, India</span>
                </div>
              </div>
            </footer>
          </LiquidGlass>
        </div>
      </div>

      <svg className="absolute h-0 w-0" aria-hidden="true">
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR
              type="gamma"
              amplitude="1"
              exponent="10"
              offset="0.5"
            />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="150"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </main>
  );
}
