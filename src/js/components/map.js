import theme from "./map.theme.js";
import data from "./map.data.js";

const layerEl = document.querySelector(".main-map__body-layer");
const mapEl = document.getElementById("map");

async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

  ymaps3.import.registerCdn("https://cdn.jsdelivr.net/npm/{package}", [
    "@yandex/ymaps3-default-ui-theme@0.0.19",
    "@yandex/ymaps3-clusterer@0.0.11"
  ]);

  const { YMapPopupMarker } = await ymaps3.import(
    "@yandex/ymaps3-default-ui-theme"
  );

  const {YMapClusterer, clusterByGrid} = await ymaps3.import('@yandex/ymaps3-clusterer');

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

  /*data.forEach((markerProp) => {
    const marker = new YMapPopupMarker({
      coordinates: markerProp.coordinates,
      position: markerProp.position,
      content: () => PopupContent(markerProp),
    });
    map.addChild(marker);
  });*/

  data.forEach((markerProp) => {
    setPopupMarker(markerProp)
  });

  function setPopupMarker(markerProp) {
    const popupMarker = new YMapPopupMarker({
      coordinates: markerProp.coordinates,
      position: markerProp.position,
      show: false,
      content: () => PopupContent(markerProp),
    });
    map.addChild(popupMarker);

    const markerElement = document.createElement('span');
    markerElement.className = 'icon-marker';
    markerElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"/></svg>'

    const marker = new YMapMarker(
      {
        coordinates: markerProp.coordinates,
        anchor: [0.5, 1]
      },
      markerElement
    );


    map.addChild(marker);

    markerElement.onclick = () => {
      popupMarker.update({
        show: true,
      })
    };
  }
}

if (mapEl) {
  initMap();
}

if (layerEl) {
  layerEl.addEventListener("click", () => {
    layerEl.classList.toggle("main-map__body-layer_hide");
  });
}
