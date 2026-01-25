"use client";

import { Icon } from "@iconify/react";

export default function Contact() {
  const token = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-neutral-900">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <Icon icon="solar:letter-linear" className="mx-auto text-neutral-500 mb-4" width={32} />
          <h3 className="text-3xl font-medium text-white tracking-tight mb-2">Get in Touch</h3>
          <p className="text-neutral-400 text-sm">Open to freelance opportunities and full-time roles.</p>
        </div>

        <form className="space-y-6" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value={token ?? ""} />

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 text-sm p-3 rounded-sm focus:border-neutral-500 outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 text-sm p-3 rounded-sm focus:border-neutral-500 outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 text-sm p-3 rounded-sm focus:border-neutral-500 outline-none transition-colors resize-none"
              placeholder="Let's discuss a project..."
            />
          </div>

          <button
            type="submit"
            className="group relative flex items-center justify-center w-full px-8 py-3 text-xs font-medium tracking-widest uppercase text-black bg-white rounded-sm hover:bg-neutral-200 transition-all duration-300"
          >
            <span>Send Message</span>
            <Icon icon="solar:plain-3-linear" className="ml-2 group-hover:translate-x-1 transition-transform" width={16} />
          </button>

          <div className="flex justify-center gap-6 pt-8 border-t border-neutral-800/50 mt-8">
            <a
              href="mailto:devikadileep39@gmail.com"
              className="text-xs text-neutral-500 hover:text-white transition-colors flex items-center gap-2"
            >
              <Icon icon="solar:mention-circle-linear" width={16} />
              devikadileep39@gmail.com
            </a>
            <a
              href="tel:+919567303496"
              className="text-xs text-neutral-500 hover:text-white transition-colors flex items-center gap-2"
            >
              <Icon icon="solar:phone-calling-linear" width={16} />
              +91 9567303496
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}