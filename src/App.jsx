import "./App.css";

function App() {
  const images = [
    "/-.png",
    "/-.webp",
    "/AHCHTO.webp",
    "/AJAN_KLOSS.webp",
    "/ALDERAAN.webp",
    "/ATHULLA.webp",
    "/ATOLLON.avif",
    "/BESPIN.webp",
    "/CANTONICA.webp",
    "/CATO_NEIMODIA.webp",
    "/CHANDRILA.webp",
    "/CHRISTOPHSIS.webp",
    "/CONCORD_DAWN.webp",
    "/CORELLIA.webp",
    "/CORUSCANT.webp",
    "/CRAIT.webp",
    "/CSILLA.webp",
    "/D'QAR.webp",
    "/DAGOBAH.webp",
    "/DANTOOINE.webp",
    "/DATHOMIR.webp",
    "/DEVARON.webp",
    "/EADU.webp",
    "/ENDOR.jpeg",
    "/FELUCIA.webp",
    "/FLORRUM.jpeg",
    "/FONDOR.jpeg",
    "/GEONOSIS.jpeg",
    "/HOSNIAN_PRIME.webp",
    "/HOTH.webp",
    "/IEGO.jpeg",
    "/ILUM.jpeg",
    "/JAKKU.jpeg",
    "/JEDHA.jpeg",
    "/KAMINO.webp",
    "/KASHYYYK.webp",
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
    "/MORTIS.webp",
    "/MUSTAFAR.jpeg",
    "/MYGEETO.webp",
    "/NABOO.webp",
    "/NAL_HUTTA.webp",
    "/ONDERON.webp",
    "/ORD_MANTELL.jpeg",
    "/POLIS_MASSA.jpeg",
    "/PILLIO.jpeg",
    "/RISHI.webp",
    "/RODIA.webp",
    "/RYLOTH.jpeg",
    "/SCARIF.webp",
    "/SHILI.webp",
    "/SKAKO_MINOR.webp",
    "/STAR_KILLER.jpeg",
    "/SULLUST.webp",
    "/TAKODANA.jpeg",
    "/TATOOINE.webp",
    "/TOYDARIA.jpeg",
    "/TANDROSHA.webp",
    "/UMBARA.webp",
    "/UTAPAU.webp",
    "/VARDOS.jpeg",
    "/WOBANI.webp",
    "/YAVIN_IV.webp",
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
