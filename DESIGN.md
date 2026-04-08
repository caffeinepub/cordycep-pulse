# Design Brief

## Direction

Urgent Commerce Bold — a high-converting Indian COD landing page that commands attention through warm saffron/green contrasts, bold typography, and tactical urgency signals (countdown, stock scarcity, trust badges).

## Tone

Maximalist urgency with trust. High saturation, high contrast, every visual element communicates: "LIMITED," "TRUSTED," or "ACT NOW."

## Differentiation

Animated 24-hour countdown timer in destructive red, saffron/green split-card sections, sticky COD availability badge at top, mobile sticky "Order Now" button with live stock counter, tactical scarcity messaging throughout.

## Color Palette

| Token       | OKLCH            | Role                                      |
| ----------- | ---------------- | ----------------------------------------- |
| background  | 0.98 0.008 80    | Cream off-white for high saffron contrast |
| foreground  | 0.15 0.02 35     | Deep warm brown text                      |
| primary     | 0.63 0.22 35     | Saffron orange (#FF6B00 equivalent)       |
| accent      | 0.72 0.2 35      | Brighter saffron for buttons/highlights   |
| secondary   | 0.45 0.14 155    | Forest green (#2D7A2D equivalent)         |
| destructive | 0.55 0.25 15     | Red for urgency/scarcity/countdown        |

## Typography

- Display: Space Grotesk — bold geometric headlines, urgency messaging, price claims
- Body: DM Sans — clean paragraphs, benefits, testimonials; high legibility on mobile
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-4xl font-bold`, label `text-xs font-semibold uppercase`, body `text-base md:text-lg`

## Elevation & Depth

Card-based hierarchy with elevated shadows and color-coded surface treatment. Saffron cards for CTAs, green cards for trust/benefits, white cards for content. Minimal shadows; maximum contrast.

## Structural Zones

| Zone     | Background          | Border                  | Notes                                     |
| -------- | ------------------- | ----------------------- | ----------------------------------------- |
| Header   | muted/95 with green | bottom border green     | Sticky, toll-free, COD badge, urgency    |
| Hero     | background (cream)  | —                       | 50% OFF badge, ₹ pricing, countdown      |
| Benefits | alternate saffron   | —                       | 6-card grid, green/saffron alternating   |
| Trust    | muted/30            | top/bottom border green | Testimonials, badges, FAQ                |
| CTA/Form | background          | —                       | COD form, state dropdown, mobile sticky  |
| Footer   | muted/95            | top border green        | Links, contact                            |

## Spacing & Rhythm

Mobile-first dense sections (gap 4-6 rem between major zones), tight card padding (px-4 py-6). Micro-spacing 0.5rem–1rem within cards. Countdown timer positioned above fold. Sticky header/footer always visible on mobile.

## Component Patterns

- Buttons: saffron primary (`bg-primary text-primary-foreground`), green secondary (`bg-secondary`), full-width on mobile
- Cards: `rounded-lg`, white background, `shadow-md`, green left border stripe (2px)
- Badges: `rounded-full`, destructive for urgency (stock/timer), secondary for trust (4.8★, COD)
- Countdown: large display font, destructive red, pulsing animation

## Motion

- Entrance: countdown digits fade-in on load, cards slide-up staggered
- Hover: buttons scale 105%, primary color brighten, smooth 0.3s
- Decorative: pulsing red on countdown timer, subtle float on testimonial cards

## Constraints

- No dark mode; light mode only (high-energy daytime product)
- Saffron never on white (only on muted/dark backgrounds); inverse for accessibility
- Countdown timer always visible; sticky on scroll
- Mobile: single-column layout, COD order form sticky at bottom
- Copy: Hindi taglines encouraged, INR pricing, COD emphasis throughout

## Signature Detail

Animated countdown timer with pulsing red highlight and tactical scarcity badges (e.g., "Only 3 left!") create urgency without aggression — a Tobias van Schneider-inspired anti-generic detail that converts while maintaining trust.
