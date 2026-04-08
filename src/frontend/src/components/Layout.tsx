import { Button } from "@/components/ui/button";
import { Package, PhoneCall, Truck } from "lucide-react";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  onOrderClick?: () => void;
}

export function Layout({ children, onOrderClick }: LayoutProps) {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const brandingUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hindi headline + Google Drive Video — mobile only, above everything */}
      <div className="md:hidden w-full" data-ocid="mobile-video-section">
        {/* Bold Hindi headline above video */}
        <div className="w-full bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 px-4 py-4 text-center border-b-2 border-orange-300">
          <p className="text-xl font-extrabold leading-snug bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            🌿 पीठ और घुटनों के दर्द से छुटकारा पाने का सबसे असरदार देसी नुस्खा सिर्फ 4 घंटे
            में! ⚡
          </p>
          <p className="mt-2 text-base font-bold leading-snug bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
            जिन 94% लोगों ने यह वीडियो अंत तक देखा, उन्हें 4 घंटे में जोड़ों का दर्द हमेशा के
            लिए गायब हो गया!
          </p>
        </div>

        {/* Video player */}
        <div className="w-full bg-black">
          <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
            <iframe
              src="https://drive.google.com/file/d/1oCVrC5zcMJJAQE_LINsLvqDmDPMelcCz/preview"
              className="absolute inset-0 w-full h-full border-0"
              allow="autoplay"
              allowFullScreen
              title="Cordycep Pulse Product Video"
            />
          </div>
        </div>
      </div>

      {/* Top announcement bar */}
      <div
        className="gradient-urgent text-primary-foreground text-center py-2 px-4 text-xs sm:text-sm font-bold"
        data-ocid="top-announcement-bar"
      >
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <span className="flex items-center gap-1">
            <Truck className="w-3 h-3 shrink-0" />
            Free Delivery Across India
          </span>
          <span className="hidden sm:inline text-primary-foreground/70">|</span>
          <span className="flex items-center gap-1">
            <Package className="w-3 h-3 shrink-0" />
            Cash on Delivery Available
          </span>
          <span className="hidden sm:inline text-primary-foreground/70">|</span>
          <span className="flex items-center gap-1">
            <PhoneCall className="w-3 h-3 shrink-0" />
            Call: 1800-123-4567
          </span>
        </div>
      </div>

      {/* Sticky header */}
      <header
        className="sticky top-0 z-40 bg-card border-b shadow-sm"
        data-ocid="main-header"
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full gradient-trust flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-sm">
                C
              </span>
            </div>
            <div>
              <div className="font-display font-bold text-foreground text-sm sm:text-base leading-tight">
                Cordycep Pulse
              </div>
              <div className="text-muted-foreground text-xs leading-tight hidden sm:block">
                आयुर्वेदिक जोड़ दर्द उपचार
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground text-xs hidden sm:block">
              Limited Stock!
            </span>
            <Button
              size="sm"
              className="gradient-trust text-secondary-foreground font-bold text-xs sm:text-sm border-0 hover:opacity-90 transition-smooth"
              onClick={onOrderClick}
              data-ocid="header-order-cta"
            >
              Order Now ₹999
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 pb-20 sm:pb-0">{children}</main>

      {/* Footer */}
      <footer
        className="bg-muted/40 border-t py-8 px-4 text-center"
        data-ocid="footer"
      >
        <div className="max-w-5xl mx-auto">
          <div className="font-display font-bold text-foreground text-base mb-1">
            Cordycep Pulse
          </div>
          <div className="text-muted-foreground text-xs mb-3">
            आयुर्वेदिक जोड़ दर्द उपचार | 100% Natural | Made in India
          </div>
          <div className="text-muted-foreground text-xs mb-4">
            For support: 1800-123-4567 | Available Mon–Sat, 9am–6pm IST
          </div>
          <div className="text-muted-foreground/60 text-xs">
            © {currentYear}. Built with love using{" "}
            <a
              href={brandingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </footer>

      {/* Sticky mobile bottom CTA bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-card border-t shadow-lg px-4 py-3"
        data-ocid="mobile-bottom-cta"
      >
        <Button
          className="w-full gradient-trust text-secondary-foreground font-bold text-base border-0 h-12 pulse-highlight hover:opacity-90 transition-smooth"
          onClick={onOrderClick}
          data-ocid="mobile-bottom-order-btn"
        >
          Order Now - ₹999 Only
        </Button>
      </div>
    </div>
  );
}
