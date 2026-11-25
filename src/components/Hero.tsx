import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const eyebrowText = 'SOFTWARE DEVELOPER · SOUTH AFRICA'

const fadeUp = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function Hero() {
  const reduceMotion = useReducedMotion()
  const [typedCharacters, setTypedCharacters] = useState(0)

  useEffect(() => {
    if (reduceMotion) return

    let count = 0
    const timer = window.setInterval(() => {
      count += 1
      setTypedCharacters(count)
      if (count >= eyebrowText.length) window.clearInterval(timer)
    }, 1200 / eyebrowText.length)

    return () => window.clearInterval(timer)
  }, [reduceMotion])

  return (
    <section className="hero page-shell" id="home" aria-labelledby="hero-title">
      <motion.div
        className="hero-copy"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        initial={reduceMotion ? false : 'hidden'}
        whileInView={reduceMotion ? undefined : 'visible'}
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="eyebrow hero-eyebrow" aria-label={eyebrowText}>
          <span aria-hidden="true">{reduceMotion ? eyebrowText : eyebrowText.slice(0, typedCharacters)}</span>
          {!reduceMotion && typedCharacters < eyebrowText.length && <span className="typing-cursor" aria-hidden="true" />}
        </p>
        <motion.div className="hero-name-group" variants={fadeUp}>
          <h1 id="hero-title">Thandokuhle <em>Maphanga</em></h1>
          <motion.div
            className="hero-name-rule"
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={reduceMotion ? undefined : { scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </motion.div>
        <motion.p className="hero-intro" variants={fadeUp}>I build full-stack web and cloud applications with a growing focus on applied AI. Currently completing a degree in Application Development and the Melsoft AI-Augmented Full-Stack Developer programme.</motion.p>
        <motion.a className="text-link" href="#work" variants={fadeUp}>View selected work <span aria-hidden="true">↗</span></motion.a>
      </motion.div>
      <div className="portrait-wrap">
        <motion.div
          className="portrait-backdrop"
          aria-hidden="true"
          initial={reduceMotion ? false : { x: 5, y: 5 }}
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
