import Hero from '../sections/Hero'
import Historia from '../sections/Historia'
import Numeros from '../sections/Numeros'
import Fotos from '../sections/Fotos'
import Timeline from '../sections/Timeline'
import Integrantes from '../sections/Integrantes'
import Legado from '../sections/Legado'
import Discografia from '../sections/Discografia'
import Curiosidades from '../sections/Curiosidades'
import ChamadaFinal from '../sections/ChamadaFinal'

// A Landing Page concentra o conteúdo do index original e da página individual.
// Cada bloco é um componente independente e aparece apenas uma vez.
export default function LandingPage() {
  return (
    <>
      <Hero />
      <Historia />
      <Numeros />
      <Fotos />
      <Timeline />
      <Integrantes />
      <Legado />
      <Discografia />
      <Curiosidades />
      <ChamadaFinal />
    </>
  )
}
