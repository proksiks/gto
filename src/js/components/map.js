import theme from "./map.theme.js";
import data from "./map.data.js";

const layerEl = document.querySelector(".main-map__body-layer");
const mapEl = document.getElementById("map");

async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
    ymaps3;

  ymaps3.import.registerCdn("https://cdn.jsdelivr.net/npm/{package}", [
    "@yandex/ymaps3-default-ui-theme@0.0.19",
    "@yandex/ymaps3-clusterer@0.0.11",
  ]);

  const { YMapPopupMarker } = await ymaps3.import(
    "@yandex/ymaps3-default-ui-theme"
  );

  const { YMapClusterer, clusterByGrid } = await ymaps3.import(
    "@yandex/ymaps3-clusterer"
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
    console.log(markerProp);

    const tooltipWrapper = document.createElement("div");
    tooltipWrapper.classList.add("main-map__tooltip");

    const subjectWrapper = document.createElement("div");
    const subjectIcon = document.createElement("div");
    const subjectText = document.createElement("p");

    const tooltipAdress = document.createElement("p");
    tooltipAdress.classList.add("main-map__tooltip-adress");
    tooltipAdress.innerText = markerProp.format.adress;

    subjectWrapper.classList.add("main-map__tooltip-subject");
    subjectText.classList.add("main-map__tooltip-subject-text");

    subjectWrapper.classList.add("main-map__tooltip-subject");
    subjectIcon.innerHTML = `<svg
        width="16"
        height="16"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.66715 0C6.5031 1.8737e-05 8.25065 1.11988 8.97867 2.86914C10.3226 6.10043 7.56969 8.34046 5.50504 10.3291C5.27987 10.5457 4.97961 10.667 4.66715 10.667C4.35467 10.667 4.05444 10.5458 3.82926 10.3291C1.76993 8.33378 -0.989701 6.10512 0.355623 2.86914C1.08432 1.11921 2.83119 0 4.66715 0ZM4.66715 3C4.22513 3 3.80099 3.17574 3.48844 3.48828C3.17587 3.80084 3.00015 4.22496 3.00015 4.66699C3.00024 5.10884 3.17604 5.53225 3.48844 5.84473C3.801 6.15729 4.22512 6.33301 4.66715 6.33301C5.10904 6.33291 5.53241 6.1572 5.84488 5.84473C6.15735 5.53224 6.33308 5.10889 6.33316 4.66699C6.33316 4.22496 6.15744 3.80084 5.84488 3.48828C5.53242 3.1759 5.10897 3.0001 4.66715 3Z"
          fill="#8E8D8D"
        />
      </svg>`;

    subjectText.innerText = markerProp.format.subject;

    const tooltipContactWrapper = document.createElement("div");
    tooltipContactWrapper.classList.add("main-map__tooltip-wrapper");

    const tooltipContactText = document.createElement("p");
    tooltipContactText.classList.add("main-map__tooltip-text");

    const contact = document.createElement("a");
    contact.classList.add("main-map__tooltip-link");
    contact.href = `tel:${markerProp.format.phone
      .replace(/\D/g, "")
      .replace(/^8/, "+7")}`;
    contact.innerText = markerProp.format.phone;
    contact.classList.add("main-map__tooltip");
    tooltipContactText.innerText = "Телефон:";

    const tooltipContactWrapperMail = document.createElement("div");
    tooltipContactWrapperMail.classList.add("main-map__tooltip-wrapper");
    const tooltipContactTextMail = document.createElement("p");
    tooltipContactTextMail.classList.add("main-map__tooltip-text");
    tooltipContactTextMail.innerText = "Почта:";
    const contactMail = document.createElement("a");
    contactMail.classList.add("main-map__tooltip-link");
    contactMail.href = `mailto:${markerProp.format.mail}`;
    contactMail.innerText = markerProp.format.mail;
    contactMail.classList.add("main-map__tooltip");

    const tooltipLinkRegionPage = document.createElement("a");
    tooltipLinkRegionPage.classList.add("main-map__tooltip-link-region");
    tooltipLinkRegionPage.href = "#";
    tooltipLinkRegionPage.innerText = "Новости в регионе";

    tooltipWrapper.appendChild(subjectWrapper);
    subjectWrapper.appendChild(subjectIcon);
    subjectWrapper.appendChild(subjectText);
    tooltipWrapper.appendChild(tooltipAdress);
    tooltipContactWrapper.appendChild(tooltipContactText);
    tooltipContactWrapper.appendChild(contact);
    tooltipWrapper.appendChild(tooltipContactWrapper);
    tooltipContactWrapperMail.appendChild(tooltipContactTextMail);
    tooltipContactWrapperMail.appendChild(contactMail);
    tooltipWrapper.appendChild(tooltipContactWrapperMail);
    tooltipWrapper.appendChild(tooltipLinkRegionPage);

    return tooltipWrapper;
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
    setPopupMarker(markerProp);
  });

  function setPopupMarker(markerProp) {
    const popupMarker = new YMapPopupMarker({
      coordinates: markerProp.coordinates,
      position: markerProp.position,
      show: false,
      content: () => PopupContent(markerProp),
    });
    map.addChild(popupMarker);

    const markerElement = document.createElement("span");
    markerElement.className = "icon-marker";
    markerElement.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"/></svg>';

    const marker = new YMapMarker(
      {
        coordinates: markerProp.coordinates,
        anchor: [0.5, 1],
      },
      markerElement
    );

    map.addChild(marker);

    markerElement.onclick = () => {
      popupMarker.update({
        show: true,
      });
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
