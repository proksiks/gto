import theme from "./map.theme.js";
import data from "./map.data.js";

const layerEl = document.querySelector(".main-map__body-layer");
const mapEl = document.getElementById("map");

async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer } = ymaps3;

  const map = new YMap(mapEl, {
    location: {
      center: [37.588144, 55.733842],
      zoom: 10,
    },
  });

  map.addChild(
    new YMapDefaultSchemeLayer({
      customization: theme,
    })
  );
}

if (mapEl) {
  initMap();
}

if (layerEl) {
  layerEl.addEventListener("click", () => {
    layerEl.classList.toggle("main-map__body-layer_hide");
  });
}
