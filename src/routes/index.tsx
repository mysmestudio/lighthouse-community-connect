import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lighthouse Lekki Estate · Static Screen Reference Kit" },
      {
        name: "description",
        content:
          "Self-contained HTML reference screens for the Lighthouse Lekki Estate resident portal: dashboards, passes, gate kiosk and onboarding.",
      },
      { property: "og:title", content: "Lighthouse Lekki Estate · Screen Reference Kit" },
      {
        property: "og:description",
        content:
          "Mobile-first static HTML screens for the Lighthouse Lekki Estate community portal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SCREENS = [
  ["01", "Public welcome", "Resident-only homepage", "welcome.html"],
  ["02", "Login", "House + unit + 6-character PIN", "login.html"],
  ["03", "Resident registration", "Household, next of kin, Madrasa", "register.html"],
  ["04", "Resident dashboard", "Issue Pass modal + hold-to-send SOS", "dashboard-resident.html"],
  ["05", "Estate Admin dashboard", "Approvals, dues, audit log, alerts", "dashboard-admin.html"],
  ["06", "Household staff onboarding", "Invite code → KYC → gate PIN", "staff-onboarding.html"],
  ["07", "Gate security kiosk", "ACCESS / DENIED / EXPIRED", "gate-kiosk.html"],
];

function Index() {
  return (
    <main className="min-h-screen bg-[#F6F8F4] px-5 py-10 text-[#0E1A15]">
      <div className="mx-auto w-full max-w-[520px]">
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#3FAE7A]">
          Lighthouse Lekki Estate
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight">
          Static screen reference kit
        </h1>
        <p className="mt-3 text-sm text-[#7B9286]">
          Each screen is a standalone HTML file with inline CSS and vanilla JS. Open one below, or
          grab the files from <code>public/reference/</code>.
        </p>

        <div className="mt-7 space-y-2.5">
          {SCREENS.map(([n, title, sub, href]) => (
            <a
              key={href}
              href={`/reference/${href}`}
              className="flex items-center gap-3 rounded-2xl border border-[#E4EBE5] bg-white p-4 shadow-sm"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-[#E4F4EC] text-sm font-extrabold text-[#329265]">
                {n}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-bold tracking-tight">{title}</span>
                <span className="block text-xs text-[#7B9286]">{sub}</span>
              </span>
              <span className="text-[#7B9286]">→</span>
            </a>
          ))}
        </div>

        <a
          href="/reference/index.html"
          className="mt-6 flex min-h-[52px] items-center justify-center rounded-full bg-[#123528] px-6 text-[15px] font-extrabold text-white"
        >
          Open the full kit index
        </a>
      </div>
    </main>
  );
}
