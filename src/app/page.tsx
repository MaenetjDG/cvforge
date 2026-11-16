import { CurrentYear } from "@/components/current-year";

const features = [
  {
    number: "01",
    title: "Write with direction",
    description:
      "Turn a blank page into confident, specific copy with prompts that keep your experience at the centre.",
  },
  {
    number: "02",
    title: "Stay recruiter-ready",
    description:
      "Use clean layouts and practical guidance to build a CV that is easy for people and screening systems to read.",
  },
  {
    number: "03",
    title: "Make every version count",
    description:
      "Save tailored versions for different roles without losing the original work you are proud of.",
  },
];

const steps = [
  ["01", "Add your experience", "Start with the facts. CVForge helps you organise the details that matter."],
  ["02", "Sharpen your story", "Get useful suggestions for summaries, achievements, and role-specific language."],
  ["03", "Choose your finish", "Pick a focused template, review your CV, and export when it feels right."],
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 font-bold tracking-tight text-[var(--text-primary)]" aria-label="CVForge home">
      <span className="grid size-8 place-items-center rounded-[10px] bg-[var(--accent)] text-sm font-black">C</span>
      <span className="text-lg">CVForge</span>
    </a>
  );
}

function CvPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] rotate-[-2deg] rounded-[var(--radius-lg)] border border-[var(--border)] bg-white p-6 shadow-[0_24px_70px_rgba(20,33,61,0.14)] transition-transform duration-500 hover:rotate-0 sm:p-8">
      <div className="absolute -right-5 -top-5 rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-bold text-[var(--accent-foreground)] shadow-lg">94% ready</div>
      <div className="flex items-start justify-between border-b border-[var(--border)] pb-5">
        <div>
          <div className="h-3 w-32 rounded bg-[var(--text-primary)]" />
          <div className="mt-2 h-2 w-24 rounded bg-[var(--accent)]" />
        </div>
        <div className="size-11 rounded-full bg-[var(--info-surface)]" />
      </div>
      <div className="grid grid-cols-[0.8fr_1.2fr] gap-6 pt-6">
        <div className="space-y-5">
          <div><div className="mb-2 h-2 w-12 rounded bg-[var(--text-primary)]" /><div className="space-y-1.5"><i className="block h-1.5 w-full rounded bg-[var(--border)]" /><i className="block h-1.5 w-4/5 rounded bg-[var(--border)]" /><i className="block h-1.5 w-11/12 rounded bg-[var(--border)]" /></div></div>
          <div><div className="mb-2 h-2 w-16 rounded bg-[var(--text-primary)]" /><div className="space-y-1.5"><i className="block h-1.5 w-10/12 rounded bg-[var(--border)]" /><i className="block h-1.5 w-full rounded bg-[var(--border)]" /><i className="block h-1.5 w-3/4 rounded bg-[var(--border)]" /></div></div>
        </div>
        <div className="space-y-6">
          <div><div className="mb-3 h-2 w-20 rounded bg-[var(--text-primary)]" /><div className="h-2 w-32 rounded bg-[var(--text-primary)]" /><div className="mt-2 h-1.5 w-20 rounded bg-[var(--accent)]" /><div className="mt-3 space-y-2"><i className="block h-1.5 w-full rounded bg-[var(--border)]" /><i className="block h-1.5 w-full rounded bg-[var(--border)]" /><i className="block h-1.5 w-5/6 rounded bg-[var(--border)]" /></div></div>
          <div><div className="mb-3 h-2 w-16 rounded bg-[var(--text-primary)]" /><div className="space-y-2"><i className="block h-1.5 w-full rounded bg-[var(--border)]" /><i className="block h-1.5 w-11/12 rounded bg-[var(--border)]" /><i className="block h-1.5 w-4/5 rounded bg-[var(--border)]" /></div></div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <header className="mx-auto flex w-full max-w-[var(--content-width)] items-center justify-between px-[var(--page-padding)] py-5">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm text-[var(--text-secondary)] md:flex" aria-label="Main navigation">
          <a className="transition-colors hover:text-[var(--text-primary)]" href="#how-it-works">How it works</a>
          <a className="transition-colors hover:text-[var(--text-primary)]" href="#templates">Templates</a>
          <a className="transition-colors hover:text-[var(--text-primary)]" href="#features">Features</a>
        </nav>
        <a href="#start" className="rounded-full border border-[var(--border-strong)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--text-primary)]">Start building</a>
      </header>

      <section className="mx-auto grid max-w-[var(--content-width)] items-center gap-14 px-[var(--page-padding)] pb-24 pt-16 sm:pb-32 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <span className="mb-6 inline-flex rounded-full bg-[var(--accent)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em]">Your next opportunity starts here</span>
          <h1 className="max-w-2xl text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.94] tracking-[-0.07em] text-[var(--text-primary)]">Build a CV that gets noticed.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--text-secondary)]">Create a clear, confident CV with practical guidance, polished templates, and AI support that sounds like you.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#start" className="rounded-full bg-[var(--accent)] px-6 py-3.5 text-center font-bold text-[var(--accent-foreground)] transition hover:bg-[var(--accent-hover)]">Build my CV <span aria-hidden="true">→</span></a>
            <a href="#how-it-works" className="rounded-full border border-[var(--border-strong)] px-6 py-3.5 text-center font-bold text-[var(--text-primary)] transition hover:bg-white">See how it works</a>
          </div>
          <p className="mt-5 text-sm text-[var(--text-secondary)]">No design experience needed · Start free</p>
        </div>
        <div className="relative px-5 py-8 sm:px-10"><div className="absolute inset-8 rounded-full bg-[var(--warm-surface)] blur-3xl" /><CvPreview /></div>
      </section>

      <section className="border-y border-[var(--border)] bg-white/60"><div className="mx-auto grid max-w-[var(--content-width)] gap-5 px-[var(--page-padding)] py-8 text-center text-sm text-[var(--text-secondary)] sm:grid-cols-3"><p><strong className="text-[var(--text-primary)]">Clear by design</strong><br />Layouts that let your story lead</p><p><strong className="text-[var(--text-primary)]">Made for real hiring</strong><br />Practical, ATS-friendly structure</p><p><strong className="text-[var(--text-primary)]">Yours, not generic</strong><br />Guidance that keeps your voice</p></div></section>

      <section id="features" className="mx-auto max-w-[var(--content-width)] px-[var(--page-padding)] py-[var(--section-space)]"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--success)]">A better starting point</p><h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:text-5xl">Less formatting. More focus on what you bring.</h2></div><div className="mt-14 grid gap-5 md:grid-cols-3">{features.map((feature) => <article key={feature.number} className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-white p-7"><span className="text-sm font-bold text-[var(--success)]">{feature.number}</span><h3 className="mt-12 text-xl font-bold text-[var(--text-primary)]">{feature.title}</h3><p className="mt-3 leading-7 text-[var(--text-secondary)]">{feature.description}</p></article>)}</div></section>

      <section id="how-it-works" className="bg-[var(--text-primary)] text-white"><div className="mx-auto max-w-[var(--content-width)] px-[var(--page-padding)] py-[var(--section-space)]"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--accent)]">How it works</p><h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl">A clear process for a stronger story.</h2><div className="mt-14 grid gap-10 border-t border-white/20 pt-8 md:grid-cols-3">{steps.map(([number, title, description]) => <article key={number}><span className="text-sm font-bold text-[var(--accent)]">{number}</span><h3 className="mt-8 text-xl font-bold">{title}</h3><p className="mt-3 max-w-xs leading-7 text-white/65">{description}</p></article>)}</div></div></section>

      <section id="templates" className="mx-auto max-w-[var(--content-width)] px-[var(--page-padding)] py-[var(--section-space)]"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--success)]">Templates with intent</p><h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:text-5xl">Your experience, well presented.</h2></div><a href="#start" className="font-bold text-[var(--text-primary)] underline decoration-[var(--accent)] decoration-4 underline-offset-4">Explore templates →</a></div><div className="mt-12 grid gap-5 sm:grid-cols-3"><div className="h-72 rounded-[var(--radius-lg)] border border-[var(--border)] bg-white p-6"><div className="h-full border-l-4 border-[var(--text-primary)] pl-4"><div className="h-4 w-24 bg-[var(--text-primary)]" /><div className="mt-3 h-2 w-16 bg-[var(--accent)]" /><div className="mt-12 space-y-3"><i className="block h-2 w-full bg-[var(--border)]" /><i className="block h-2 w-4/5 bg-[var(--border)]" /><i className="block h-2 w-11/12 bg-[var(--border)]" /></div></div></div><div className="h-72 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--info-surface)] p-6"><div className="h-5 w-28 rounded bg-[var(--text-primary)]" /><div className="mt-5 h-1 w-full bg-[var(--accent)]" /><div className="mt-10 grid grid-cols-2 gap-5"><i className="h-28 rounded bg-white/80" /><i className="h-28 rounded bg-white/80" /></div></div><div className="h-72 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--warm-surface)] p-6"><div className="mx-auto h-full max-w-[190px] rounded bg-white p-5 shadow-sm"><div className="h-3 w-20 rounded bg-[var(--text-primary)]" /><div className="mt-8 space-y-3"><i className="block h-2 w-full rounded bg-[var(--border)]" /><i className="block h-2 w-4/5 rounded bg-[var(--border)]" /><i className="block h-2 w-full rounded bg-[var(--border)]" /></div></div></div></div></section>

      <section id="start" className="mx-auto max-w-[var(--content-width)] px-[var(--page-padding)] pb-[var(--section-space)]"><div className="overflow-hidden rounded-[var(--radius-xl)] bg-[var(--accent)] px-7 py-14 text-center sm:px-12 sm:py-20"><h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-[-0.05em] text-[var(--accent-foreground)] sm:text-6xl">Your experience is already valuable. Let&apos;s show it.</h2><p className="mx-auto mt-5 max-w-xl text-[var(--accent-foreground)]/75">Start with what you know. Finish with a CV you feel ready to send.</p><a href="#top" className="mt-8 inline-flex rounded-full bg-[var(--text-primary)] px-6 py-3.5 font-bold text-white transition hover:bg-[#263a63]">Create my CV <span className="ml-2" aria-hidden="true">↗</span></a></div></section>

      <footer className="border-t border-[var(--border)]"><div className="mx-auto flex max-w-[var(--content-width)] flex-col gap-4 px-[var(--page-padding)] py-8 text-sm text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between"><Logo /><p>Build a CV that gets noticed.</p><p>© <CurrentYear /> CVForge</p></div></footer>
    </main>
  );
}
