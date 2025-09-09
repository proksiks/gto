import theme from "./map.theme.js";
import data from "./map.data.js";
import testingPoints from "./map.data2.json";

const layerEl = document.querySelector(".main-map__body-layer");
const mapEl = document.getElementById("map");
const mapEl2 = document.getElementById("map2");
const mapEl3 = document.getElementById("map3");

async function initMap(mapEl, data) {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker, YMapFeature } =
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

  const addCluster = () => {

    const marker = setPopupMarker;

    const points = data.map((item, i) => ({
      type: 'Feature',
      id: i,
      geometry: {coordinates: item.coordinates},
      ...item
    }));

    const cluster = (coordinates, features) =>
      new YMapMarker(
        {
          coordinates: coordinates,
        },
        circle(features.length).cloneNode(true)
      );

    function circle(count) {
      const circle = document.createElement('div');
      circle.classList.add('circle');
      circle.innerHTML = `
        <span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="10" fill="white" stroke="#CD313C" stroke-width="4"/>
            <path d="M7 3.33975C9.29684 2.01366 12.0264 1.65431 14.5882 2.34074C17.15 3.02717 19.3342 4.70316 20.6603 7C21.9863 9.29684 22.3457 12.0264 21.6593 14.5882C20.9728 17.15 19.2968 19.3342 17 20.6603" stroke="#0073B4" stroke-width="4"/>
          </svg>
          <span style="position: absolute; display: inline-flex; top: 50%; left: 50%; margin-top:-13px; margin-left:-12px; width: 24px; height: 24px; align-items: center; justify-content: center; font-size: 14px;">${count}</span>
        <span>
    `;
      return circle;
    }
    const clusterer = new YMapClusterer({
      method: clusterByGrid({gridSize: 64}),
      features: points,
      marker,
      cluster
    });

    map.addChild(clusterer);
  }

  /*const regionName = "Самарская область",
    center = [38.943216, 45.033266],
    zoom = 11;

  var url = "http://nominatim.openstreetmap.org/search";

  const params = new URLSearchParams({
    q: regionName,
    format: "json",
    polygon_geojson: 1
  });

  fetch(`${url}?${params.toString()}`, {
    headers: {
      "Accept": "application/json"
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Ошибка сети: " + response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data)

      data.forEach(item => {
        const lineStringFeature = new YMapFeature({
          id: 'administrative',
          geometry: item.geojson,
          style: {
            stroke: [{width: 2, color: 'rgb(14, 194, 219)'}]
          }
        });
        map.addChild(lineStringFeature);
      })

    })
    .catch(err => console.error(err));
*/
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

  addCluster();

  /*data.forEach((markerProp) => {
    //setPopupMarker(markerProp);
  });*/

  let openedPopup = null;

  function setPopupMarker(markerProp) {
    const contentEl = PopupContent(markerProp);

    const popupMarker = new YMapPopupMarker({
      coordinates: markerProp.coordinates,
      position: markerProp.position,
      offset: 10,
      show: false,
      content: () => contentEl,
    });
    map.addChild(popupMarker);

    let isShown = false;

    const markerElement = document.createElement("div");
    markerElement.className = "icon-marker";
    markerElement.style.transform = 'translate(-50%, -50%)';
    markerElement.innerHTML =
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<rect x="2" y="2" width="20" height="20" rx="10" fill="white" stroke="#CD313C" stroke-width="4"/>\n' +
      '</svg>\n';

    const marker = new YMapMarker(
      {
        coordinates: markerProp.coordinates,
        anchor: [0.5, 1],
      },
      markerElement
    );
    //map.addChild(marker);

    function setPopupVisibility(next) {
      isShown = next;
      popupMarker.update({ show: isShown });
      if (isShown) {
        if (openedPopup && openedPopup !== popupMarker) {
          openedPopup.update({ show: false });
          openedPopup.__setLocalState && openedPopup.__setLocalState(false);
        }
        openedPopup = popupMarker;
      } else if (openedPopup === popupMarker) {
        openedPopup = null;
      }
    }

    popupMarker.__setLocalState = (v) => {
      isShown = v;
    };

    let hideTimeout;

    markerElement.addEventListener("mouseenter", (e) => {
      e.stopPropagation();
      markerElement.classList.add("show");

      clearTimeout(hideTimeout);

      setPopupVisibility(true);
    });

    markerElement.addEventListener("mouseleave", (e) => {
      if (isShown) {
        hideTimeout = setTimeout(() => {
          contentEl.classList.remove('show')
          setPopupVisibility(false);
          clearTimeout(hideTimeout);
        }, 500);
      }
    });

    try {
      contentEl.closest('.ymaps3--popup-marker_container').addEventListener("mouseenter", (e) => {
        clearTimeout(hideTimeout);
      });

      contentEl.closest('.ymaps3--popup-marker_container').nextSibling.addEventListener("mouseenter", (e) => {
        clearTimeout(hideTimeout);
      });
    }
    catch (e) {
      console.log(e);
    }

    contentEl.closest('.ymaps3--popup-marker_container').addEventListener("mouseleave", (e) => {
      e.stopPropagation();
      if (isShown) {
        hideTimeout = setTimeout(() => {
          contentEl.classList.remove('show')
          setPopupVisibility(false);
          clearTimeout(hideTimeout);
        }, 300);
      }
    });

    return marker;
  }
}

if (mapEl) {
  const dataPrepared = data.map(item => {
    return {
      ...item,
      coordinates: [item.coordinates[1], item.coordinates[0]]
    }
  })
  initMap(mapEl, dataPrepared);
}

if (mapEl2) {
  const data = testingPoints.map(item => {
    return {
      coordinates: item.coordinates,
      format: {
        subject: item.region,
        adress: item.adress,
        phone: item.phone.toString(),
        mail: item.mail,
      },
      position: "top",
    }
  })

  initMap(mapEl2, data);
}

if (mapEl3) {
  const dataPrepared = data.map(item => ({
    ...item,
    coordinates: [item.coordinates[1], item.coordinates[0]],
  }))

  const mergedData = dataPrepared.concat(
    testingPoints.map(item => ({
      coordinates: item.coordinates,
      format: {
        subject: item.region,
        adress: item.adress,
        phone: item.phone.toString(),
        mail: item.mail,
      },
      position: "top",
    }))
  )

  initMap(mapEl3, mergedData)
}

if (layerEl) {
  layerEl.addEventListener("click", () => {
    layerEl.classList.toggle("main-map__body-layer_hide");
  });
}
