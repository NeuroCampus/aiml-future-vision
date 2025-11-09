import { motion } from 'framer-motion';
import { WobbleCard } from '@/components/ui/wobble-card';
import { useState } from 'react';

const StartupsSection = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const startups = [
    {
      name: 'Stalight Technology',
      founder: 'Ritesh N (Batch 2026)',
      product: 'SentinelAI',
      description: 'AI-powered surveillance platform using machine learning for anomaly detection and real-time security monitoring. UDYAM registered with YUKTI submission.',
      status: 'UDYAM Registered',
      focus: 'AI & Security',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      illustration: '/cartoons/undraw_connected-world_anke.svg',
      website: 'https://stalight.tech/',
    },
    {
      name: 'Duzo Pvt. Ltd.',
      founder: 'Harshavardhan S. Kale (Batch 2026)',
      product: 'Business Solutions',
      description: 'Comprehensive business technology solutions showcased at CAIAS Startup Summit 2025. Focused on enterprise digital transformation.',
      status: 'Summit Participant',
      focus: 'Business Technology',
      gradient: 'from-purple-500/20 to-pink-500/20',
      illustration: '/cartoons/undraw_team_85hs.svg',
    },
    {
      name: 'Kikado',
      founder: 'Harshavardhan S. Kale (Batch 2026)',
      product: 'E-commerce Platform',
      description: 'Curated gifting platform with established revenue streams. Specializing in personalized gifting experiences with market validation.',
      status: 'Revenue Generating',
      focus: 'E-commerce',
      gradient: 'from-green-500/20 to-emerald-500/20',
      illustration: '/cartoons/undraw_vibe-coding_mjme.svg',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden min-h-screen">
      {/* Enhanced Responsive Background with Tech Startup Image */}
      <div className="absolute inset-0">
        {/* Main Background Image - Full Screen Responsive */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-8 md:opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`,
          }}
        ></div>

        {/* Gradient Overlays for Better Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/3 to-transparent rounded-full blur-3xl"></div>

        {/* Animated Floating Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-4 h-4 bg-primary/20 rounded-full blur-sm"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-32 w-6 h-6 bg-accent/15 rounded-full blur-sm"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-40 w-8 h-8 bg-purple-500/10 rounded-full blur-sm"
        ></motion.div>
        <motion.div
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-5 h-5 bg-pink-500/15 rounded-full blur-sm"
        ></motion.div>

        {/* Geometric Shapes */}
        
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-foreground relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Startups & <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">Innovations</span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed relative z-10 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our entrepreneurial students are transforming innovative ideas into successful ventures,
            creating real-world impact through technology-driven solutions.
          </motion.p>

          {/* Animated Stats */}
          
        </div>

        {/* Featured Illustration */}


        {/* Startup Ventures - Modern Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {startups.map((startup, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              <WobbleCard
                containerClassName={`h-full bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${index === 0 ? 'lg:col-span-2' : ''}`}
                className="p-6 sm:p-8"
              >
                {/* Clean background */}
                <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-muted/30"></div>

                <div className="relative z-10">
                  {/* Header with logo and status */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-muted rounded-lg flex items-center justify-center">
                      <img
                        src={startup.illustration}
                        alt={startup.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        {startup.status}
                      </span>
                    </div>
                  </div>

                  {/* Company name */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {startup.name}
                  </h3>

                  {/* Founder and product info */}
                  <div className="space-y-1 mb-4">
                    <p className="text-sm text-muted-foreground">{startup.founder}</p>
                    <p className="text-sm font-medium text-primary">{startup.product}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {startup.description}
                  </p>

                  {/* Footer with focus area and website */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                      {startup.focus}
                    </span>
                    {startup.website && (
                      <a
                        href={startup.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        Visit →
                      </a>
                    )}
                  </div>
                </div>
              </WobbleCard>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 shadow-sm">

            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block mb-6"
              >
                <div className="bg-gradient-to-r from-primary to-accent p-1 rounded-full">
                  <div className="bg-background rounded-full px-6 py-2">
                    <span className="text-primary font-semibold">Join the Movement</span>
                  </div>
                </div>
              </motion.div>

              <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                Ready to Start Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Journey?</span>
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Join our vibrant entrepreneurial community and turn your innovative ideas into reality.
                Get mentorship, resources, and the support you need to build the next big thing.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://amcecell.vercel.app/', '_blank')}
                >
                  <span className="relative z-10">Apply for Incubation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-full"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </motion.button>

                <motion.button
                  className="px-8 py-4 border-2 border-primary/30 text-primary font-bold rounded-full hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowMoreInfo(!showMoreInfo)}
                >
                  {showMoreInfo ? 'Learn Less' : 'Learn More'}
                </motion.button>
              </div>

              {/* Additional Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-8 flex justify-center space-x-8 text-sm text-muted-foreground"
              >
                <div className="text-center">
                  <div className="font-bold text-primary text-xl">24/7</div>
                  <div>Support</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-accent text-xl">Expert</div>
                  <div>Mentorship</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-purple-500 text-xl">100%</div>
                  <div>Dedication</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Expanded Information Section */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: showMoreInfo ? 1 : 0,
            height: showMoreInfo ? 'auto' : 0
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Entrepreneurship Foundation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                  Entrepreneurship <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Foundation</span>
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Understanding the core principles that drive innovation and business creation
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h4 className="text-2xl font-bold mb-6 text-primary">What is Entrepreneurship?</h4>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Entrepreneurship is the process of creating, launching, and managing a new venture to solve problems and create value for society. It involves identifying opportunities, taking calculated risks, and building innovative solutions that address real-world challenges.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <div className="font-semibold text-primary mb-1">Innovation</div>
                      <div className="text-sm text-muted-foreground">Driving creative solutions and technological advancement</div>
                    </div>
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                      <div className="font-semibold text-accent mb-1">Problem Solving</div>
                      <div className="text-sm text-muted-foreground">Addressing real-world challenges with practical solutions</div>
                    </div>
                    <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4">
                      <div className="font-semibold text-purple-500 mb-1">Value Creation</div>
                      <div className="text-sm text-muted-foreground">Building sustainable impact for society and stakeholders</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h4 className="text-2xl font-bold mb-6 text-accent">Who is an Entrepreneur?</h4>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    An entrepreneur is someone who identifies opportunities, takes calculated risks, and builds innovative solutions to fulfill market needs. They are visionaries who transform ideas into reality.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-primary mb-1">Problem Solver and Innovator</div>
                        <div className="text-sm text-muted-foreground">Combines analytical thinking with creative problem-solving</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-accent mb-1">Risk-taker with Vision</div>
                        <div className="text-sm text-muted-foreground">Balances calculated risks with long-term strategic vision</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-purple-500 mb-1">Value Creator for Society</div>
                        <div className="text-sm text-muted-foreground">Focuses on sustainable impact beyond financial success</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Business Owner vs Entrepreneur */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8 shadow-sm mb-12"
              >
                <h4 className="text-2xl font-bold text-center mb-8 text-foreground">Business Owner vs Entrepreneur</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center p-6 bg-secondary/20 border border-secondary/30 rounded-xl">
                    <h5 className="text-xl font-semibold mb-4 text-secondary-foreground">Business Owner</h5>
                    <p className="text-muted-foreground leading-relaxed">Manages existing business models for consistent profit and stability. Focuses on operational efficiency and maintaining established market position.</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl">
                    <h5 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Entrepreneur</h5>
                    <p className="text-muted-foreground leading-relaxed">Creates innovative solutions and disrupts markets to generate new value. Embraces uncertainty to build something transformative.</p>
                  </div>
                </div>
              </motion.div>

              {/* Why This Matters */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h4 className="text-2xl font-bold mb-8 text-foreground">Why This Matters</h4>
                <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
                  Understanding entrepreneurship helps you think beyond traditional employment—to become a job creator, problem solver, and innovator who shapes the future.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <h5 className="text-lg font-semibold mb-3 text-primary">Economic Growth</h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">Drive innovation and create employment opportunities that strengthen local and global economies.</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <h5 className="text-lg font-semibold mb-3 text-accent">Problem Solving</h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">Address real-world challenges with innovative solutions that improve quality of life.</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <h5 className="text-lg font-semibold mb-3 text-purple-500">Social Impact</h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">Create positive change in society through sustainable business practices and community development.</p>
                  </div>
                </div>
              </motion.div>

              {/* Programs Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="text-center mb-12">
                  <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                    Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Programs</span>
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Comprehensive programs designed to transform students into successful entrepreneurs
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Startup Incubation Program */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                      <div className="w-6 h-6 bg-white rounded-sm"></div>
                    </div>
                    <h4 className="text-xl font-bold mb-4">Startup Incubation Program</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">Comprehensive 6-month program for transforming ideas into viable businesses</p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">6 Months Duration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Beginner to Intermediate</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm">Dedicated mentorship</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Seed funding up to ₹5 lakhs</span>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300">
                      Learn More Details
                    </button>
                  </motion.div>

                  {/* Growth Accelerator Program */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-purple-500 rounded-xl flex items-center justify-center mb-6">
                      <div className="w-6 h-6 bg-white rounded-sm"></div>
                    </div>
                    <h4 className="text-xl font-bold mb-4">Growth Accelerator Program</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">3-month intensive program for scaling existing startups to the next level</p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">3 Months Duration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Intermediate to Advanced</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm">Revenue optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Investment readiness</span>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-accent to-purple-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300">
                      Learn More Details
                    </button>
                  </motion.div>

                  {/* Entrepreneurship Foundation Course */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                      <div className="w-6 h-6 bg-white rounded-sm"></div>
                    </div>
                    <h4 className="text-xl font-bold mb-4">Entrepreneurship Foundation Course</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">8-week comprehensive course covering entrepreneurship fundamentals</p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">8 Weeks Duration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Beginner Level</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm">Interactive sessions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Guest lectures</span>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300">
                      Learn More Details
                    </button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Initiatives Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="text-center mb-12">
                  <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                    Signature <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Initiatives</span>
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    E-Cell AMC offers a diverse set of hands-on programs and events designed to inspire, educate, and empower the next generation of entrepreneurs.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-primary rounded-sm"></div>
                    </div>
                    <h4 className="text-lg font-bold mb-3">Startup Speaker Series</h4>
                    <div className="text-sm font-medium text-primary mb-3">Monthly</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">Invite founders, alumni entrepreneurs, or investors to share their journey, mistakes, and insights with students.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-accent rounded-sm"></div>
                    </div>
                    <h4 className="text-lg font-bold mb-3">Ideathon / Pitch & Win</h4>
                    <div className="text-sm font-medium text-accent mb-3">Quarterly</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">A short 1–2 day event where students pitch early startup ideas. Judged by faculty, alumni, or real entrepreneurs.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-purple-500 rounded-sm"></div>
                    </div>
                    <h4 className="text-lg font-bold mb-3">E-Cell Skill Bootcamps</h4>
                    <div className="text-sm font-medium text-purple-500 mb-3">Every 2 months</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">Skill-specific workshops: Pitching & storytelling, UI/UX & Product design, MVP building, Startup law & IP, Growth marketing 101.</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default StartupsSection;