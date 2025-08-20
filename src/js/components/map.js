import theme from "./map.theme.js";
import data from "./map.data.js";

const markers = [
  {
    coordinates: [39.9589, 43.4083],
    format: "GPX",
    position: "top",
  },
  {
    coordinates: [39.9557, 43.4033],
    format: "YMapsML",
    position: "top",
  },
  {
    coordinates: [39.9691, 43.4061],
    format: "KML",
    position: "top",
  },
  {
    coordinates: [39.9786, 43.4079],
    format: "GeoJSON",
    position: "top",
  },
];

const layerEl = document.querySelector(".main-map__body-layer");
const mapEl = document.getElementById("map");

async function initMap() {
  await ymaps3.ready;

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
  } = ymaps3;

  ymaps3.import.registerCdn('https://cdn.jsdelivr.net/npm/{package}', [
    '@yandex/ymaps3-default-ui-theme@0.0.19'
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

  markers.forEach((markerProp) => {
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
