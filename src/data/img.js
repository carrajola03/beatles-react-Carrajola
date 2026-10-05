const imagensOriginais = {
  "The_Beatles_-_Please_Please_Me.jpg": "PleasePleaseMe.jpeg",
  "The_Beatles_-_With_the_Beatles.jpg": "WithTheBeatles.jpeg",
  "a_hard_days_night_album.jpg": "AHardDaysNight.jpeg",
  "Capa_do_Albun_Beatles_For_Sale.jpeg": "ForSale.jpeg",
  "beatles-help-capa-album.jpg": "Help!.jpeg",
  "The_Beatles_-_HRubber_Soul.jpg": "RubberSoul.jpeg",
  "Revolver_album.jpg": "Revolver.jpeg",
  "Sgt_Peppers.jpg": "Sgt.Pepper's.jpeg",
  "MagicalMysteryTourDoubleEPcover.jpg": "MagicalMystery.jpeg",
  "TheBeatles68LP.jpg": "ÁlbumBranco.jpeg",
  "Yellow-submarine.jpg": "YellowSubmarine.jpeg",
  "The_Beatles_Abbey_Road_album_cover.jpg": "AbbeyRoad.jpeg",
  "The_Beatles_-_Let_It_Be.jpg": "LetItBe.jpeg",
}

const originalBase =
  "https://raw.githubusercontent.com/wnsogabriel/thebeatles-front2/main/assets/img/"


const originalExtras = new Set([
  'galeria1.jpeg','galeria2.jpeg','galeria3.jpeg','galeria4.jpeg','galeria5.jpeg','galeria6.jpeg','galeria7.jpeg','galeria8.jpeg','galeria9.webp',
  'AFormação.jpg','LoveMeDoTL.webp','SgtPepperTL.jpg','AbbeyRoadTL.jpg'
])

export function img(nome) {
  const original = imagensOriginais[nome]

  if (original) {
    return originalBase + encodeURIComponent(original)
  }

  if (originalExtras.has(nome)) {
    return originalBase + encodeURIComponent(nome)
  }

  return `/img/${nome}`
}
