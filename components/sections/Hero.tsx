"use client"
import { Container } from '../ui/Container'
import { ChevronDown } from 'lucide-react'
import {motion} from 'framer-motion'

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y:0,
        transition : {duration: 0.6, ease: "easeOut"}
    }
} as const;
const staggerContainer = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
} as const;

const Hero = () => {
  return (
   <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center bg-gray-900"
   >
    <Container className='text-center text-white'>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto"
        >
            {/* Başlık */}
            <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6">
                Lumina Gastronomy
            </motion.h1>
            {/* Alt Başlık */}
            <motion.p
            variants={fadeInUp}
            className='text-xl md:text-2xl text-gray-300 mb-8'>
                Lezzetin sanata dönüştüğü yer
            </motion.p>
            {/* Butonlar */}
            <motion.div
            variants={fadeInUp}
            className='flex flex-col sm:flex-row gap-4 justify-center'
            >
                <button className='bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors cursor-pointer'>
                    Menüyü Keşfet
                </button>
                <button className='border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors cursor-pointer'>
                    Rezervasyon Yap
                </button>

            </motion.div>

        </motion.div>
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity:1, y: [0,10,0]}}
          transition={{delay:1, duration:1.5, repeat: Infinity}}
          className='absolute bottom-8 left-1/2 -translate-x-1/2'
        >
            <ChevronDown size={50} className='text-white ' />
           
        </motion.div>
    </Container>
   </section>
  )
}

export default Hero