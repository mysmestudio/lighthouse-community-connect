# Lighthouse Community Hub

I'm building the Lighthouse Lekki Estate Community Portal — a security-first, mobile-first web app for a gated residential estate of about 100 houses and 300 residents in Lekki, Lagos, Nigeria. It also serves an on-site community center and Madrasa (an Islamic school for residents' children). This is a resident-only tool, not a public product — nobody is being sold anything here, the tone throughout should be a welcome, not a pitch.

Islamic and cultural identity are core to this app, not decorative: Islamic greetings, a daily rotating hadith about community/kindness/neighbours, Jumu'ah (Friday prayer) references, and Madrasa scheduling all need to be present and treated respectfully — please don't strip these out or treat them as generic filler.

CRITICAL — output format: deliver every screen as a self-contained static HTML file (inline/embedded CSS, vanilla JS only where needed for interactions like PIN entry or modals) — NOT a full Lovable React/Vite project. No routing, no state management framework, no backend calls, no build step — just HTML files I can open directly in a browser. This is because the actual app gets implemented separately by me in Google AI Studio, as a React + TypeScript + Tailwind + Supabase PWA. I need your output purely as a visual and interaction reference to hand to AI Studio, not a deployed Lovable app.

Brand constraints — keep these: primary colors are a fresh mint green (#3FAE7A primary, #123528 deep variant for bold moments/headers) and a lemon-gold accent (#E8C547). This is the estate's established branding — please design within this palette rather than replacing it. Everything else — typography, layout, spacing, iconography, component design — is fully open for you to redesign. I'm specifically unsatisfied with the current execution quality and want a genuinely better look and feel: think premium, confident, modern — closer to a well-designed fintech app (Cash App/Revolut-level clarity and boldness) crossed with a warm, human, community-hospitality feel. Not generic SaaS, not a templated admin panel, not corporate enterprise software.

Users (6 roles): Resident, Household/Domestic Staff, Security Guard, Estate Admin, Madrasa Admin, Master/Super Admin.

What the app does, by feature area:

Resident access & passes — residents log in passwordlessly with House Number + Unit + a 6-character PIN (4 digits, then 2 letters). They see a household dashboard (dues status, active passes, recent gate activity) and can issue several visitor pass types: Guest, Delivery, Artisan/Contractor (a specific time window — if the artisan overstays, it's reported to the resident and escalated to Estate Admin), Long-stay (a date range, multi-entry — the guest can come and go freely within that window, and the pass auto-expires after the end date), Exit, Jumu'ah, Offline, and Group.

Household staff — residents onboard domestic staff (cooks, cleaners, drivers) via an invite code; staff complete their own KYC (ID verification, guarantor details) and set their own gate PIN.

Gate security — guards don't self-register; Estate Admin creates their account and issues their PIN. Guards log into a minimal kiosk screen: enter a 6-digit access code, and the full screen flashes green with "ACCESS" (valid), red with "DENIED" (invalid), or red with "EXPIRED" (valid code, lapsed). This needs to work fast, in bright outdoor light, and offline. Guards also have their own SOS button for personal safety, separate from the SOS alerts they receive from residents.

Emergency SOS — a persistent floating button on every screen, held for 5 seconds (with visible progress feedback) to send an alert. This is a genuine safety feature, not decoration.

Community & Madrasa — residents book shared facilities (football pitch, mosque hall, community kitchen, clubhouse). The Madrasa is a semi-standalone module: Madrasa Admin manages a student registry (name, next of kin, emergency contact, linked to a resident's house or registered as an "external learner"), plus check-in/check-out attendance for students and Madrasa staff.

Estate administration — Estate Admin approves pending resident registrations, reconciles dues/levies, and audits gate logs (including flagging — logging only, not an active alert — any access between 10pm and 5am).

Screens I need, in priority order — please get through as many of these, as well as possible, in this one pass. I'm on a free plan with very limited credits, so this needs to work in as few messages as possible rather than many small iterations:

Tier 1 — must be excellent:

Public welcome/homepage (resident-only, not marketing)

Resident dashboard

Estate Admin dashboard

Login screen (House + Unit + PIN)

Resident registration

Household staff onboarding (invite code → KYC form)

Issue Visitor Pass — this is a modal/popup on the dashboard, not a separate page — needs conditional fields per pass type, especially Artisan's time window and Long-stay's date range

Gate security kiosk (code entry → full-screen ACCESS/DENIED/EXPIRED)

Tier 2 — only if you have room left, otherwise skip and I'll design these myself using the system you establish above: 9. Madrasa Admin dashboard + student registry 10. Facility booking 11. Fix-it maintenance tickets 12. Notice board 13. Marketplace 14. Townhall polls

Mobile-first is the top priority — this ships as a PWA and a wrapped mobile app. Design for a phone screen first, then scale up. Use 2-column layouts only for short paired fields, never for primary lists, and use horizontal swipeable carousels for any browsable set of more than 3-4 items (notices, listings, poll cards) rather than long vertical scrolls. 44px minimum tap targets — there are older residents in this community relying on this app.

Please prioritize establishing a strong, consistent design system — color usage, type scale, spacing, reusable component patterns like cards/buttons/status pills — across whatever screens you get to, over rushing through all fourteen shallowly. I'd rather have 6 genuinely excellent screens with a system I can extend myself than 14 mediocre ones.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/dfd0ab7d-a3ba-407b-a940-3a01f13d7061).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
