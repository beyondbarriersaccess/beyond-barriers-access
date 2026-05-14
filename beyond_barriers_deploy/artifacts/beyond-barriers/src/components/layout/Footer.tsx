export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/80 py-12 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1">
            <a href="#" className="inline-block mb-4">
              <span className="font-serif font-bold text-xl tracking-tight text-white">
                Beyond <span className="text-accent">Barriers</span> Access
              </span>
            </a>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              A community assistance initiative helping Hudson Valley and Westchester residents complete paperwork, organize documents, and connect with community resources.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Navigate</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#eligibility" className="hover:text-accent transition-colors">Eligibility</a></li>
              <li><a href="#resources" className="hover:text-accent transition-colors">Resources</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:beyondbarriersaccess@gmail.com" className="hover:text-accent transition-colors break-all">
                  beyondbarriersaccess@gmail.com
                </a>
              </li>
              <li className="text-primary-foreground/60">Services by appointment only</li>
              <li className="text-primary-foreground/60">Now accepting inquiries</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="bg-white/5 rounded-xl p-5 mb-6 text-sm leading-relaxed text-primary-foreground/70">
            <strong className="text-white">Important:</strong> Beyond Barriers Access does not provide legal advice, legal representation, immigration services, or tax preparation. We provide paperwork assistance and resource navigation only.
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© {new Date().getFullYear()} Beyond Barriers Access. All rights reserved.</p>
            <p>Serving Hudson Valley &amp; Westchester</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
