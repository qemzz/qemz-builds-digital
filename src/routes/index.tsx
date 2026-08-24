import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/portfolio/site-nav";
import { Hero } from "@/components/portfolio/hero";
import { Work } from "@/components/portfolio/work";
import { About } from "@/components/portfolio/about";
import { Stack } from "@/components/portfolio/stack";
import { Contact } from "@/components/portfolio/contact";
import { SiteFooter } from "@/components/portfolio/site-footer";

const title = "Qemz — Student Developer & Technology Builder";
const description =
  "I build digital solutions for real-world problems. Selected projects, stack and contact for Qemz, a student developer and technology builder.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Work />
        <About />
        <Stack />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
