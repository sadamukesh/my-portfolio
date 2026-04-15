import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import SectionShell from './SectionShell'
import ProjectModal from './ProjectModal'

const projects = [
  {
    title: 'FIL Industries',
    description: 'A high-performance, SEO-optimized corporate website featuring 80+ dynamic product pages, crafted with modern UI, smooth responsiveness, and scalable architecture.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap 5'],
    live: 'https://www.filindustries.com/',
    github: 'https://github.com/',
    image: 'images/pf1.jpg',
    screenshots: [
      'images/pf1.jpg', 'images/pf2.jpg', 'images/pf3.jpg', 'images/pf4.jpg', 'images/pf5.jpg', 'images/pf6.jpg'],
    highlights: [
      'Fully developed the website end-to-end (frontend + backend), including performance optimization for both mobile and desktop to ensure fast and smooth user experience.',
      'Built and managed 80+ products with detailed dynamic pages, implementing SEO-friendly URL slugs and structured data handling.',
      'Implemented SEO best practices including schema markup, meta tags (OG title & description), and integrated Google Tag Manager for tracking and analytics.',
      'Designed a modern glassmorphism UI with neon gradient accents, responsive layouts, consistent spacing system, and added micro-interactions to enhance user engagement.',
    ],
  },
  {
    title: 'Skyview by Empyrean',
    description: 'Managed and maintained a custom-built WordPress website, handling regular content updates, newsletters, and offer management.',
    tech: ['WordPress (Custom Theme)', 'Advanced Custom Fields (ACF)', 'HTML5', 'CSS3', 'PHP', 'JavaScript','Bootstrap 5'],
    live: 'https://skyviewempyrean.com/',
    github: 'https://github.com/',
    image: 'images/psbe1.jpg',
    screenshots: [
      'images/psbe1.jpg', 'images/psbe2.jpg', 'images/psbe3.jpg', 'images/psbe4.png', 'images/psbe5.jpg', 'images/psbe6.jpg'
    ],
    highlights: [
      'Managed and maintained the full website, handling regular updates and content changes across all pages.',
      'Integrated Instagram feed to enhance social engagement and dynamic content visibility.',
      'Built a custom newsletter template using Advanced Custom Fields for easy content management and seamless uploads.',
      'Updated activity and accommodation offers regularly, ensuring accurate and up-to-date information for users.'
    ],
  },
  {
    title: 'Sanctus Healthcare',
    description: 'Developed and managed a custom WordPress website using Elementor, focusing on responsive design and dynamic content updates.',
    tech: ['WordPress', 'Elementor', 'HTML5', 'CSS3', 'PHP', 'JavaScript'],
    live: 'https://sanctushealthcare.com/',
    github: 'https://github.com/',
    image: 'images/psan1.jpg',
    screenshots: [
      'images/psan1.jpg',
      'images/psan2.jpg', 'images/psan3.jpg', 'images/psan4.jpg', 'images/psan5.jpg'
    ],
    highlights: [
      'Designed and developed the website using WordPress with Elementor, ensuring a responsive and user-friendly layout.',
      'Published monthly blog posts and managed dynamic content updates across the website.',
      'Implemented interactive features like timed pop-ups, multi-language translator (Hindi, English, Marathi), and homepage video slider.', 'Optimized on-page SEO using plugins, focusing on Google Tag Manager, robots.txt, and sitemap for better search visibility.'
    ],
  },
  {
    title: 'JK Apni Party',
    description: 'Converted a static coded website into a dynamic WordPress platform using Advanced Custom Fields and AI tools, improving content flexibility and management.',
    tech: ['WordPress', 'Custom Post Types (CPT)', 'HTML5', 'CSS3', 'JavaScript', 'PHP','AI Tools (for development assistance)'],
    live: 'https://www.jkapniparty.com/',
    github: 'https://github.com/',
    image: 'images/pjkap1.jpg',
    screenshots: [
      'images/pjkap1.jpg',
      'images/pjkap2.jpg', 'images/pjkap3.jpg'
    ],
    highlights: [
      'Converted a static coded website into a dynamic WordPress site using Advanced Custom Fields and AI tools.',
      'Developed a dynamic leadership section with custom post types (CPT) for easy content management.',
      'Built a fully dynamic press section to streamline updates and improve content scalability.',
    ],
  },
  {
    title: 'Fruitfil',
    description: 'Developed a fully static website from scratch with a focus on clean design, structured layout, and seamless user experience.',
    tech: ['Bootstrap', 'jQuery', 'HTML5', 'CSS3', 'JavaScript', 'PHP',],
    live: 'https://www.fruitfil.com/',
    github: 'https://github.com/',
    image: 'images/pff1.jpg',
    screenshots: [
      'images/pff1.jpg',
      'images/pff2.jpg', 'images/pff3.jpg', 'images/pff4.jpg', 'images/pff5.jpg', 'images/pff6.jpg'
    ],
    highlights: [
      'Developed a complete static website from scratch using clean and optimized code.',
      'Built key sections including product, flavour, and “our other brands” pages, along with form integration.',
      'Improved website performance by optimizing page speed for faster loading and better user experience.',
    ],
  },
  {
    title: 'SKY Car Mussoorie',
    description: 'Developed a responsive single-page website for Sky Car Mussoorie using HTML, CSS, JavaScript, PHP, and Bootstrap 5.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Bootstrap 5'],
    live: 'https://mussoorieskycar.com/',
    github: 'https://github.com/',
    image: 'images/pskm1.jpg',
    screenshots: [
      'images/pskm1.jpg',
    ],
    highlights: [
      'Developed a single-page website for Sky Car Mussoorie using HTML, CSS, JavaScript, PHP, and Bootstrap 5.',
      'Designed a responsive and user-friendly layout to effectively showcase services and key information.',
      'Currently working on the main website development in WordPress for scalable and dynamic content management.',
    ],
  },
]

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <SectionShell id="projects" eyebrow="Projects" title="Selected work">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <motion.article
            key={p.title}
            className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glass backdrop-blur-xl transition hover:border-white/20 hover:shadow-[0_20px_70px_rgba(0,0,0,0.55)] dark:border-white/10 dark:bg-white/5 light:border-slate-200 light:bg-white/70"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            onClick={() => setSelected(p)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-black/70 light:from-white/40" />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">{p.title}</h3>
                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-white/80 backdrop-blur-xl transition hover:bg-white/15 light:border-slate-200 light:bg-white/80 light:text-slate-800"
                  >
                    Live
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/70 dark:text-white/70 light:text-slate-700">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-gradient-to-r from-violet-500/15 to-sky-400/10 px-3 py-1 text-xs font-semibold text-white/70 dark:border-white/10 dark:text-white/70 light:border-slate-200 light:text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <ProjectModal open={!!selected} project={selected} onClose={() => setSelected(null)} />
    </SectionShell>
  )
}
