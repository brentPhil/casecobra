import Phone from "@/components/Phone";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { buttonVariants } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import ParagraphHighlight from "@/components/ui/ParagraphHighlight";
import { Reviews } from "@/components/ui/Reviews";
import StarRating from "@/components/ui/StarRating";
import { testimonials } from "@/data/testimonials";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const claims = [
  { claim: "High-quality, durable material" },
  { claim: "5 year print guarantee" },
  { claim: "Modern iphone models supported" },
];

export default function Home() {
  return (
    <div className="bg-background">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image width={100} height={100} alt="" src="/snake-1.png" />
              </div>
              <ParagraphHighlight
                text="Custom"
                textClass="bg-primary rounded-xl text-primary-foreground px-3"
                className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-5xl md:text-6xl lg:text-7xl"
              >
                Your Image on a Custom Phone Case
              </ParagraphHighlight>
              <p className="mt-8 text-lg lg:pr-0 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                capture your favorite moments with our custom phone case. With
                your own, <span className="font-semibold">one-of-one</span>{" "}
                phone case. CaseCobra allows you to protect your memories not
                just your phone case.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center lg:items-start">
                <div className="space-y-2">
                  {claims.map((claim, i) => (
                    <li key={i} className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                      {claim.claim}
                    </li>
                  ))}
                </div>
              </ul>
              <div className="mt-12 w-full flex flex-col items-center gap-3 lg:items-start">
                <div className="-translate-x-2 sm:translate-x-0 flex flex-row items-center justify-center">
                  <AnimatedTooltip items={testimonials} />
                </div>
                <div className="w-fit flex flex-col gap-1 justify-between items-center lg:items-start">
                  <StarRating readOnly defaultRating={5} />
                  <p>
                    <span className="font-semibold">1,250</span> happy customer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:p-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                width={300}
                height={300}
                alt=""
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <Image
                width={300}
                height={300}
                alt=""
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value proposition section */}

      <section className="bg-background py-24">
        <Reviews />
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl">
              What our{" "}
              <span className="relative px-2 text-primary">customers</span> say
            </h2>
            <Image
              alt=""
              width={200}
              height={200}
              src="/snake-2.png"
              className="w-24 order-0 lg:order-2"
            />
          </div>
          <div className="w-full px-4">
            <InfiniteMovingCards
              speed="slow"
              direction="right"
              items={testimonials}
            />
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <ParagraphHighlight
                text="your own case"
                textClass="bg-primary rounded-xl text-primary-foreground px-2"
                className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-5xl md:text-6xl lg:text-7xl"
              >
                Upload your photo and get your own case now
              </ParagraphHighlight>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />

              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img
                  src="/horse.jpg"
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                />
              </div>

              <Phone className="w-60" imgSrc="/horse_phone.jpg" />
            </div>
          </div>
          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              High-quality silicone material
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              Scratch- and fingerprint resistant coating
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              Wireless charging compatible
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />5 year
              print warranty
            </li>

            <div className="flex justify-center">
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8",
                })}
                href="/configure/upload"
              >
                Create your case now <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
