import Hero from '../sections/Hero'
import Historia from '../sections/Historia'
import Numeros from '../sections/Numeros'
import Fotos from '../sections/Fotos'
import Timeline from '../sections/Timeline'
import Discografia from '../sections/Discografia'
import Curiosidades from '../sections/Curiosidades'
import ChamadaFinal from '../sections/ChamadaFinal'

// Só organiza a ordem das seções. Trocar a ordem = mudar uma linha.
export default function LandingPage() {
  return (
    <>
      <Hero />
      <Historia />
      <Numeros />
      <Fotos />
      <Timeline />
      <Discografia />
      <Curiosidades />
      <ChamadaFinal />
    </>
  )
}
