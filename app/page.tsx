export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Product Managers &amp; Customer Success
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Turn Customer Feedback Into a{" "}
          <span className="text-[#58a6ff]">Priority Heatmap</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect Intercom, Zendesk, and email. AI scores every request by impact and effort, then renders an interactive heatmap so you always ship what matters most.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start for $35/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        {/* Mock heatmap visual */}
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-6 max-w-2xl mx-auto">
          <p className="text-xs text-[#8b949e] uppercase tracking-widest mb-4">Impact vs Effort Matrix</p>
          <div className="grid grid-cols-5 gap-2">
            {[
              "bg-red-500","bg-red-400","bg-orange-400","bg-yellow-500","bg-green-600",
              "bg-red-400","bg-orange-500","bg-yellow-400","bg-green-500","bg-green-400",
              "bg-orange-400","bg-yellow-500","bg-green-500","bg-green-400","bg-blue-500",
              "bg-yellow-400","bg-green-500","bg-green-400","bg-blue-400","bg-blue-300",
              "bg-green-500","bg-green-400","bg-blue-500","bg-blue-400","bg-blue-300"
            ].map((color, i) => (
              <div key={i} className={`${color} opacity-80 rounded h-10 flex items-center justify-center text-xs font-bold text-white`}>
                {Math.floor(Math.random() * 40 + 5)}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3 text-xs text-[#8b949e]">
            <span>Low Effort</span><span>High Effort</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$35</p>
          <p className="text-[#8b949e] mb-6">/month per workspace</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited feedback sources",
              "AI impact/effort scoring",
              "Interactive priority heatmaps",
              "Drill-down feedback explorer",
              "Team workspaces & roles",
              "Intercom, Zendesk & email sync"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Which feedback sources are supported?</h3>
            <p className="text-[#8b949e] text-sm">FeedbackHeat connects to Intercom, Zendesk, and email inboxes via API. More integrations are added regularly based on user demand.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">How does the AI scoring work?</h3>
            <p className="text-[#8b949e] text-sm">Each feedback item is analyzed for customer impact (frequency, revenue, churn risk) and implementation effort, then plotted on the heatmap automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your billing dashboard. You keep access until the end of your billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} FeedbackHeat. All rights reserved.
      </footer>
    </main>
  );
}
