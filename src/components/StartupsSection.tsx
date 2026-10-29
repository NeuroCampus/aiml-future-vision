import { motion } from 'framer-motion';
import { Shield, LayoutGrid, Terminal, ExternalLink, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const StartupsSection = () => {
  const stalightProducts = [
    {
      name: 'SentinelAI',
      badge: 'AI & Security',
      description: 'An AI-powered surveillance platform utilizing machine learning for anomaly detection and real-time security monitoring. Registered with UDYAM and submitted under YUKTI.',
      icon: Shield,
    },
    {
      name: 'Stalight Campus',
      badge: 'Campus Operations',
      description: 'A unified campus platform built to streamline academic operations, secure data access, and elevate overall institutional outcomes.',
      icon: LayoutGrid,
    },
    {
      name: 'Stalight Sync',
      badge: 'Placement & Assessment',
      description: 'Empowers placements through smart AI interviews, live coding challenges, proctored assessments, and real-time candidate analytics.',
      icon: Terminal,
    },
  ];

  return (
    <section id="startups" className="relative overflow-hidden bg-transparent">
      <div className="h-px bg-border/40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Startups &amp; <span className="text-primary">Innovations</span>
          </h2>
          <p className="text-base text-muted-foreground mt-3 leading-relaxed">
            Our entrepreneurial students are transforming innovative ideas into successful ventures, creating real-world impact.
          </p>
        </div>

        {/* Featured Showcase: Stalight Technologies */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch mb-14">
          
          {/* Main Info Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-muted/30 rounded-2xl border border-border/40 p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Pvt Ltd MCA Registered
                </span>
                <span className="text-xs text-muted-foreground font-semibold">Founded by Ritesh N (Batch 2026)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Stalight Technologies</h3>
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-6">
                Leading Software Development Company in Bengaluru
              </p>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-8">
                <p className="text-base text-foreground font-medium">
                  Bridging academic rigor and enterprise-grade technology with secure, scalable platforms designed for institutional trust and measurable impact.
                </p>
                <p>
                  We bridge the gap between complex technology and your business goals. By delivering scalable software, modern IT infrastructure, and top-tier technical education, we empower you to lead in a digital-first world.
                </p>
              </div>
            </div>

            {/* Visit Website & Contact Footer */}
            <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <a
                href="https://stalight.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors"
              >
                Visit stalight.in
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex flex-col text-xs text-muted-foreground gap-1">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  sales@stalight.in
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  73495 51102
                </span>
              </div>
            </div>
          </motion.div>

          {/* Product Grid Panel */}
          <div className="flex flex-col gap-6 justify-between">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Enterprise-Grade Platform Suite
            </h4>

            <div className="space-y-4">
              {stalightProducts.map((prod, index) => {
                const Icon = prod.icon;
                return (
                  <motion.div
                    key={prod.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <Card className="p-5 bg-card/85 backdrop-blur-md border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-200">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <h5 className="font-bold text-sm leading-snug">{prod.name}</h5>
                            <span className="text-[9px] font-bold uppercase tracking-wide text-primary/70 px-1.5 py-0.5 rounded bg-primary/5 border border-primary/10">
                              {prod.badge}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{prod.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* E-Cell Incubation Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-primary/5 border border-primary/15 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-8"
        >
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">Want to Build Your Startup?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              E-Cell AMC provides active incubation, technical mentorship, cloud credits, and seed funding support. Turn your class projects into scalable enterprise solutions.
            </p>
          </div>
          <a
            href="https://amcecell.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-card/80 backdrop-blur-md border border-border text-foreground text-sm font-semibold rounded-full hover:bg-muted transition-colors whitespace-nowrap"
          >
            Apply for Incubation
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default StartupsSection;