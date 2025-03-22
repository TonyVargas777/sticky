import "./App.css";

function App() {
  const images = [
    "/-.png",
    "/AHCHTO.png",
    "/AJAN_KLOSS.jpg",
    "/ALDERAAN.jpg",
    "/ATHULLA.jpg",
    "/ATOLLON.avif",
    "/BESPIN.png",
    "/CATO_NEIMODIA.jpg",
    "/CANTONICA.webp",
    "/CHANDRILA.jpg",
    "/CHRISTOPHSIS.webp",
    "/CONCORD_DAWN.webp",
    "/CORELLIA.png",
    "/CORUSCANT.jpg",
    "/CRAIT.webp",
    "/CSILLA.jpg",
    "/D'QAR.webp",
    "/DAGOBAH.webp",
    "/DANTOOINE.webp",
    "/DATHOMIR.webp",
    "/DEVARON.webp",
    "/EADU.jpeg",
    "/ENDOR.jpeg",
    "/FELUCIA.webp",
    "/FLORRUM.jpeg",
    "/FONDOR.jpeg",
    "/GEONOSIS.jpeg",
    "/HOSNIAN_PRIME.webp",
    "/HOTH.jpeg",
    "/IEGO.jpeg",
    "/ILUM.jpeg",
    "/JAKKU.jpeg",
    "/JEDHA.jpeg",
    "/KAMINO.webp",
    "/KASHYYYK.png",
    "/KESSEL.jpeg",
    "/LAH'MU.jpeg",
    "/LIRA_SAN.webp",
    "/LOTHAL.jpeg",
    "/MALACHOR.jpeg",
    "/MALASTARE.jpeg",
    "/MANDALORE.jpeg",
    "/MARIDUN.webp",
    "/MON_CALA.webp",
    "/MORABAND.jpeg",
    "/MORTIS.jpeg",
    "/MUSTAFAR.jpeg",
    "/MYGEETO.webp",
    "/NABOO.webp",
    "/NAL_HUTTA.webp",
    "/ONDERON.jpeg",
    "/ORD_MANTELL.jpeg",
    "/POLIS_MASSA.jpeg",
    "/PILLIO.jpeg",
    "/RISHI.webp",
    "/RODIA.webp",
    "/RYLOTH.jpeg",
    "/SCARIF.jpeg",
    "/SHILI.webp",
    "/SKAKO_MINOR.webp",
    "/STAR_KILLER.jpeg",
    "/SULLUST.jpg",
    "/TAKODANA.jpeg",
    "/TATOOINE.webp",
    "/TOYDARIA.jpeg",
    "/TANDROSHA.png",
    "/UMBARA.jpg",
    "/UTAPAU.webp",
    "/VARDOS.jpeg",
    "/WOBANI.jpeg",
    "/YAVIN_IV.jpeg",
  ];

  return (
    <>
      <div className="images">
        {images.map((image, index) => {
          const fileNameWithoutExtension = image
            .split("/").pop()
            .replace(/\.[^/.]+$/, "");

          return (
            <div key={index} className="image-container">
              <img className="image" src={image} alt={fileNameWithoutExtension} />
              <div className="image-name">{fileNameWithoutExtension}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
