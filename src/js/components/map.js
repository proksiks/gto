import theme from "./map.theme.js";
import data from "./map.data.js";

const layerEl = document.querySelector(".main-map__body-layer");
const mapEl = document.getElementById("map");

async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

  ymaps3.import.registerCdn("https://cdn.jsdelivr.net/npm/{package}", [
    "@yandex/ymaps3-default-ui-theme@0.0.19",
  ]);

  const { YMapPopupMarker } = await ymaps3.import(
    "@yandex/ymaps3-default-ui-theme"
  );

  const map = new YMap(
    mapEl,
    {
      location: {
        center: [37.588144, 55.733842],
        zoom: 10,
      },
    },
    [new YMapDefaultSchemeLayer({}), new YMapDefaultFeaturesLayer({})]
  );

  map.addChild(
    new YMapDefaultSchemeLayer({
      customization: theme,
    })
  );

  function PopupContent(markerProp) {
    const textElement = document.createElement("div");
    textElement.classList.add("text");
    const darkText = document.createElement("span");
    darkText.classList.add("dark");
    darkText.innerText = markerProp.format;
    const text = document.createElement("span");
    text.innerText = " format";

    textElement.appendChild(darkText);
    textElement.appendChild(text);
    return textElement;
  }

  data.forEach((markerProp) => {
    const marker = new YMapPopupMarker({
      coordinates: markerProp.coordinates,
      position: markerProp.position,
      content: () => PopupContent(markerProp),
    });
    map.addChild(marker);
  });
}

if (mapEl) {
  initMap();
}

if (layerEl) {
  layerEl.addEventListener("click", () => {
    layerEl.classList.toggle("main-map__body-layer_hide");
  });
}
