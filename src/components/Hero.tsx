import { motion, useReducedMotion } from 'framer-motion'

const heroItem = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="hero page-shell" id="home" aria-labelledby="hero-title">
      <motion.div
        className="hero-copy"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        initial={reduceMotion ? false : 'hidden'}
        whileInView={reduceMotion ? undefined : 'visible'}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p className="eyebrow" variants={heroItem}>Software developer · South Africa</motion.p>
        <motion.h1 id="hero-title" variants={heroItem}>Thandokuhle <em>Maphanga</em></motion.h1>
        <motion.p className="hero-intro" variants={heroItem}>I build full-stack web and cloud applications with a growing focus on applied AI. Currently completing a degree in Application Development and the Melsoft AI-Augmented Full-Stack Developer programme.</motion.p>
        <motion.ul className="at-a-glance" variants={heroItem}>
          <li><span>Location</span>Based in Krugersdorp, Gauteng</li>
          <li><span>Education</span>BCIS Application Development, Emeris Ruimsig</li>
          <li><span>Programme</span>Melsoft AI-Augmented Full-Stack Developer Programme</li>
        </motion.ul>
        <motion.a className="text-link" href="#work" variants={heroItem}>View selected work <span aria-hidden="true">↗</span></motion.a>
      </motion.div>
      <div className="portrait-wrap">
        <motion.div
          className="portrait-backdrop"
          aria-hidden="true"
          initial={reduceMotion ? false : { x: 6, y: 6 }}
          whileInView={reduceMotion ? undefined : { x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.img
          src="/images/thandokuhle-optimized.jpg"
          alt="Portrait of Thandokuhle Maphanga"
          fetchPriority="high"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </section>
  )
}
