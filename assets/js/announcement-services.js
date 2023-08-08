const baseUrl = 'http://mebra.az/';
const getAllCategory = 'api/Category/GetAllCategory';
const getAllCities = 'api/Search/GetAllCities';
const createAddress = 'api/Address/Create';
const createServiceAdvert = 'api/Adverts/CreateServiceAdvert';


// Address
const filterCloseLocation = document.querySelector('#filter-close-location_services')
let addressName = document.querySelector("#getAddress_services");
let addressIdLocal = localStorage.getItem('localAddress');

function setAddressFromLocalStorage() {
  addressName.value = localStorage.getItem('address');
  filterCloseLocation.style.display = addressName.value.length !== 0 ? 'block' : 'none';
}

filterCloseLocation.addEventListener('click', function () {
  console.log('click address');
  addressName.value = '';
  filterCloseLocation.style.display = 'none';
});

setAddressFromLocalStorage();



// Services...
const selectBtnServices = document.querySelector(".select-btn-services");
const servicesList = document.getElementById("services-list_second");
const itemFurniture = document.getElementById("announcement_item__furniture_second");
const designerService = document.querySelector("#designer-service_second");
const announcementİtemFurnitureMasterService = document.querySelector('#announcement_item__furniture_master-service_second');
const arrowFurniture = document.querySelector('#arrowFurniture_second');
const categoryAllItems = document.querySelector('#categoryAllItems_second');
let categoryId = '';

document.addEventListener('DOMContentLoaded', function () {
  fetch(`${baseUrl}/${getAllCategory}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const categories = data?.categories;
            itemFurniture.innerHTML = `${categories[0]?.name}`
            categoryName = `${categories[1]?.name}`
            categoryId = categoryName
            if (categoryName?.length !== 0) {
                categoryAllItems.innerHTML = categoryName;
            }
            else {
              return null;
            }

            announcementİtemFurnitureMasterService.innerHTML = `${categories[1]?.name}`
            designerService.innerHTML = `${categories[2]?.name}`
        })
        .catch(function (error) {
            console.log(error);
        });
});


selectBtnServices.addEventListener("click", () => {
  selectBtnServices.classList.toggle("open");
  if (selectBtnServices.classList.contains("open")) {
      servicesList.style.display = "block";
      arrowFurniture.style.transform = "rotate(-180deg)";
      arrowFurniture.style.webkitTransform = "rotate(-180deg)";
      arrowFurniture.style.mozTransform = "rotate(-180deg)";
      arrowFurniture.style.msTransform = "rotate(-180deg)";
      arrowFurniture.style.oTransform = "rotate(-180deg)";
  } else {
      servicesList.style.display = "none";
      arrowFurniture.style.transform = "";
      arrowFurniture.style.webkitTransform = "";
      arrowFurniture.style.mozTransform = "";
      arrowFurniture.style.msTransform = "";
      arrowFurniture.style.oTransform = "";
  }
});



// Price...
var priceValue;
document.addEventListener("DOMContentLoaded", function () {
    var priceInput = document.getElementById("price_services");

    priceInput.addEventListener("input", function (event) {
        var priceValue = event.target.value;
        if (priceValue.trim() !== "") {
            // priceValue = priceValue.replace(/[^\d.]/g, "");
            priceValue = priceValue.replace(/\D/g, "");
            priceValue += " AZN";
        }
        event.target.value = priceValue;
    });

    priceInput.addEventListener("keydown", function (event) {
        if (event.key === "-") {
            event.preventDefault();
        }
    });

    priceInput.addEventListener("blur", function (event) {
        priceValue = event.target.value.replace(" AZN", "");
        console.log(priceValue);
    });

    document.getElementById("price_services").addEventListener("keydown", function (event) {
        if (event.key === "Backspace") {
            priceValue = event.target.value;
            if (priceValue.endsWith(" AZN")) {
                priceValue = priceValue.slice(0, -4);
                event.target.value = priceValue;
            }
        }
    });
});

document.getElementById("price_services").addEventListener("keydown", function (event) {
  if (event.key === "+") {
      event.preventDefault();
  }
});

document.getElementById("price_services").addEventListener("keydown", function (event) {
  if (event.key === "-") {
      event.preventDefault();
  }
});



// Discount...

let discount_services = document.getElementById('discount__services');

discount_services.addEventListener('click', function () {
  discount_services.value = discount.checked ? 1 : 2;
});


// SET IMAGE..
let selectedFiles = [];
const imageInputServices = document.querySelector('#file_image_services');
const previewContainerServices = document.querySelector('#preview-container_services');
let formData = new FormData();
const imageContainerServices = document.querySelector('#image-container_services');


imageInputServices.addEventListener('change', (e) => {
    const files = e.target.files;
    const minFiles = 1;
    const maxFiles = 8;

    const newFiles = Array.from(files);
    const totalFiles = selectedFiles.concat(newFiles);

    if (totalFiles.length < minFiles || totalFiles.length > maxFiles) {
        console.log(`Zəhmət olmasa,  ${minFiles} və ${maxFiles} aralığında şəkil seçin.`);
        const html = `
        <p id='textColor_services'>Zəhmət olmasa, minimum ${minFiles}, maximum ${maxFiles} aralığında şəkil seçin.</p>
        `
        imageContainerServices.insertAdjacentHTML("afterbegin", html);
        return;
    } else {
        imageContainerServices.innerHTML = '';
    }

    previewContainerServices.innerHTML = '';

    totalFiles.forEach((file) => {
        const previewImage = document.createElement('div');
        previewImage.classList.add('preview-image-furniture');
        previewImage.file = file;

        const imageElement = document.createElement('img');
        imageElement.file = file;
        imageElement.classList.add('preview-images');
        previewImage.appendChild(imageElement);

        const deleteIcon = document.createElement('span');
        deleteIcon.classList.add('delete-icon');
        deleteIcon.innerHTML = '&times;';
        previewImage.appendChild(deleteIcon);

        const reader = new FileReader();
        reader.onload = (event) => {
            imageElement.src = event.target.result;
        };
        reader.readAsDataURL(file);

        deleteIcon.addEventListener('click', () => {
            const index = selectedFiles.indexOf(file);
            if (index > -1) {
                selectedFiles.splice(index, 1);
                previewImage.remove();
                formData.delete('files');
            }
        });

        const fileSize = (file.size / 1024).toFixed(2);
        console.log(fileSize);

        previewContainerServices.appendChild(previewImage);

        previewImage.classList.add('preview-image-furniture');

        previewImage.addEventListener('mouseenter', () => {
            deleteIcon.style.display = 'flex';
        });

        previewImage.addEventListener('mouseleave', () => {
            deleteIcon.style.display = 'none';
        });

        // Left Arrow
        const leftArrowIcon = document.createElement('span');
        leftArrowIcon.classList.add('left-arrow');
        leftArrowIcon.innerHTML = '&#8630;';
        previewImage.appendChild(leftArrowIcon);

        // Right Arrow
        const rightArrowIcon = document.createElement('span');
        rightArrowIcon.classList.add('right-arrow');
        rightArrowIcon.innerHTML = '&#8631;';
        previewImage.appendChild(rightArrowIcon);

        leftArrowIcon.addEventListener('click', () => {
            rotateImage(imageElement, -45);
        });

        rightArrowIcon.addEventListener('click', () => {
            rotateImage(imageElement, 45);
        });

    });

    selectedFiles = totalFiles;

    formData = new FormData();
    selectedFiles.forEach((file) => {
        formData.append('files', file);
    });

    if (totalFiles.length > 0) {
        const marginTopDiv = document.querySelector('.announcement-services-fields-right_four');
        marginTopDiv.style.marginTop = '40px';
    }
});

function rotateImage(imageElement, degree) {
    const currentRotation = getCurrentRotation(imageElement);
    const newRotation = currentRotation + degree;
    imageElement.style.transform = `rotate(${newRotation}deg)`;
}


function getCurrentRotation(imageElement) {
    const transform = window.getComputedStyle(imageElement).getPropertyValue('transform');
    const matrix = transform.match(/^matrix\((.+)\)$/);
    if (matrix) {
        const values = matrix[1].split(', ');
        if (values.length === 6) {
            return Math.round(Math.atan2(parseFloat(values[1]), parseFloat(values[0])) * (180 / Math.PI));
        }
    }
    return 0;
}





// Cities...
const containerCities = document.querySelector('.cities');
const selectBtnCities = document.querySelector(".select-btn-cities");
const citiesAllİtems = document.querySelector('#citiesAllİtems_services');
const arrowIconCity = document.querySelector('#arrowIconCity_services');
const modal = document.querySelector(".modal");
containerCities.innerHTML = '';
let checkedCityId;
let cityIds = [];
let isCitiesFetched = false;
let checkedCitiesNames = [];
let cityId;
const search = document.querySelector('#search-cities_services');
let selectedCities = null;
let latestcityId;

const openModal = () => {
    modal.classList.remove("hidden");
    arrowIconCity.style.transform = "rotate(-180deg)";
    arrowIconCity.style.webkitTransform = "rotate(-180deg)";
    arrowIconCity.style.mozTransform = "rotate(-180deg)";
    arrowIconCity.style.msTransform = "rotate(-180deg)";
    arrowIconCity.style.oTransform = "rotate(-180deg)";

    if (!isCitiesFetched) {
        fetch(`${baseUrl}/${getAllCities}`)
            .then((response) => response.json())
            .then((data) => {
                const cities = data.cities.reverse();
                console.log(cities);

                cities.forEach((city) => {
                    const cityName = city.name;
                    const cityId = city.id;
                    const html = `
              <li class="item item_filter_cities d-flex justify-content-between align-items-center mt-3" data-id="${cityId}">
                <span class="item-subtext">${cityName}</span>
              </li>
            `;
                    containerCities.insertAdjacentHTML("afterbegin", html);
                });

                isCitiesFetched = true;
            });
    }
};

containerCities.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const itemServicesCities = clickedElement.closest(".item_filter_cities");

    if (itemServicesCities) {
        const cityName = itemServicesCities.querySelector(".item-subtext").textContent;
        const cityId = itemServicesCities.getAttribute("data-id");
        const checkedItem = containerCities.querySelector(".item_filter_cities.checked");

        itemServicesCities.classList.toggle("checked");

        if (itemServicesCities.classList.contains("checked")) {
            citiesAllİtems.textContent = cityName;
            console.log(cityName);
            cityIds.push(cityId);

            if (checkedItem && checkedItem !== itemServicesCities) {
                const previouscityId = checkedItem.getAttribute("data-id");
                const previosCityIndex = cityIds.indexOf(previouscityId);

                if (previosCityIndex !== -1) {
                    cityIds.splice(previosCityIndex, 1);
                }

                checkedItem.classList.remove("checked");
            }

            closeModal();
        } else {
            citiesAllİtems.textContent = 'Seçin';
            const cityIndex = cityIds.indexOf(cityId);

            if (cityIndex !== -1) {
                cityIds.splice(cityIndex, 1);
            }
        }
    }
});

const closeModal = () => {
    modal.classList.add("hidden");
    arrowIconCity.style.transform = "";
    arrowIconCity.style.webkitTransform = "";
    arrowIconCity.style.mozTransform = "";
    arrowIconCity.style.msTransform = "";
    arrowIconCity.style.oTransform = "";
};

const selectServices = document.querySelector('.select-btn-cities');
selectServices.onclick = () => {
    if (modal.classList.contains('hidden')) {
        openModal();
    } else {
        closeModal();
    }
};

search.addEventListener('input', (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const citiesItems = document.querySelectorAll('.item_filter_cities');

    citiesItems.forEach((item) => {
        const cityName = item.querySelector('.item-subtext').textContent.toLowerCase();
        if (cityName.includes(searchQuery)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});


// Map...
function initMap() {

  let map = new google.maps.Map(document.getElementById('announcement-services__map'), {
    center: { lat: 40.40926169999999, lng: 49.8670924 },
    zoom: 13
  });
  
    
  let inputSearch = document.getElementById('announcement-services__searchInput');
    
    
  let autocomplete = new google.maps.places.Autocomplete(inputSearch);
  autocomplete.bindTo('searchInput', inputSearch);
  
  let infowindow = new google.maps.InfoWindow();
  let marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });
    
  autocomplete.addListener('place_changed', function() {
    
    infowindow.close();
    marker.setVisible(false);
    let place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
  
    marker.setIcon(({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));
  
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    let address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }
  
    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(map, marker);

    updateLocationDetails(place);
  
    // Location details
    // for (let i = 0; i < place.address_components.length; i++) {
    //   if( place.address_components[i].types[0] == 'postal_code' ) {
    //     document.getElementById('postal_code').innerHTML = place.address_components[i].long_name;
    //   }
    //   if( place.address_components[i].types[0] == 'country' ) {
    //     document.getElementById('country').innerHTML = place.address_components[i].long_name;
    //   }
    // }

    document.getElementById('announcement-services__location').innerHTML = place.formatted_address;
    document.getElementById('announcement-services__lat').innerHTML = place.geometry.location.lat();
    document.getElementById('announcement-services__lon').innerHTML = place.geometry.location.lng();
      
  });

  map.addListener('click', function (e) {
    infowindow.close();
    marker.setVisible(false);
    geocodeLatLng(e.latLng, function (place) {
      if (!place.geometry) {
        window.alert("Reverse geocoding failed for the selected location");
        return;
      }

      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address);
      infowindow.open(map, marker);

      updateLocationDetails(place);
    });
  });

  function geocodeLatLng(latLng, callback) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'location': latLng }, function (results, status) {
      if (status === 'OK') {
        if (results[0]) {
          callback(results[0]);
        } else {
          callback(null);
        }
      } else {
        callback(null);
      }
    });
  }

  function updateLocationDetails(place) {
    document.getElementById('announcement-services__searchInput').value = place.formatted_address || '';
    document.getElementById('announcement-services__location').innerHTML = place.formatted_address || '';
    document.getElementById('announcement-services__lat').innerHTML = place.geometry.location.lat();
    document.getElementById('announcement-services__lon').innerHTML = place.geometry.location.lng();
  }


  function getComponentValue(place, type) {
    for (var i = 0; i < place.address_components.length; i++) {
      if (place.address_components[i].types.indexOf(type) !== -1) {
        return place.address_components[i].long_name;
      }
    }

    return '';

  }


}
  

let addressId;
  
function checkGeoData() {
  
  let location = document.getElementById("announcement-services__location").innerText;
  let lat = document.getElementById("announcement-services__lat").innerText;
  let lon = document.getElementById("announcement-services__lon").innerText;
  let announcementAddress = document.querySelector('.announcement-services_input-address');
  // localStorage.setItem(location, 'location')
  // localStorage.setItem(lat, 'lat')
  // localStorage.setItem(lon, 'lon')

  announcementAddress.value = location;

  (async () => {
    const res = await fetch(`${baseUrl}/${createAddress}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ displayName: location, lat, lon })
    });

    const content = await res.json();
    console.log(content);
    addressId = content?.addressId;
    if (addressId.length !== 0) {
        filterCloseLocation.style.display = 'block'
    }
  })();

  if (location.trim() === "" || lat.trim() === "" || lon.trim() === "") {
    alert("Zəhmət olmasa ünvanı daxil edin");
    return;
  }

  
    
  let modal = document.getElementById("exampleModal_Services");
  let bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();
  document.getElementById("announcement-services__searchInput").value = "";
  
}


const handleAnnouncementServices = () => {
  // const price = Number(document.querySelector('#price').value);
  const title = document.querySelector('#form-title_services').value;
  const description = document.querySelector('#desc_services').value;
  const userIdUpdated = localStorage.getItem('userId');
 
  let advertId;
  let add;
  console.log(addressName.value);
  if (addressName.value === localStorage.getItem('address')) {
    add = addressIdLocal;
    console.log(add, 'local');
  }
  else if (addressName.value === '') {
    add = ''
  }
  else {
    add = addressId
    console.log(add, 'global');
  }

  const formData = new FormData();
  formData.append("price", priceValue);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("categoryId", categoryId);
  formData.append("availableDiscount", discount_services.value);
  formData.append("addressId", add);
  formData.append("userId", userIdUpdated);
 
  cityIds.forEach((item) => {
    formData.append("advertDetailCity.cityIds[]", item);
  });
 
 
  

  fetch("http://mebra.az/api/Adverts/CreateServiceAdvert", {
      method: "POST",
      body: formData,
  })
      .then(async (response) => {
          const content = await response.json();
          console.log(content);
          advertId = content.advertId;
          console.log(advertId);
          if (content.message === 'Elan uğurla yaradıldı.') {
              console.log(content.succeded);
              upLoadImages();
              Toastify({
                  text: "Elan uğurla yaradıldı",
                  style: {
                      background: "green",
                      width: '100%',
                  },
              }).showToast();
          } else if (content && content.length > 0) {
              content.forEach((error) => {
                  const field = error.field;
                  const errorMessage = error.errorMessage;
                  console.log(`${field}: ${errorMessage}`);
                  Toastify({
                      text: `${errorMessage}`,
                      style: {
                          background: "red",
                          width: '100%',
                      },
                  }).showToast();
              });
          }
          return content;
      })
      .catch((error) => {
          console.log(error);
      });

  function upLoadImages() {
      const formData = new FormData();
      const updatedUrl = 'http://mebra.az/api/Adverts/UploadAdvertImage';
      formData.append('advertId', advertId);
      selectedFiles.forEach((file) => {
          formData.append('files', file);
      });

      const headers = new Headers();

      fetch(updatedUrl, {
          method: 'POST',
          headers: headers,
          body: formData
      })
          .then(response => response.json())
          .then(data => {
              console.log(formData);
              console.log(advertId);
              console.log(selectedFiles);
              console.log(data?.message);
              if (data?.message === "Şəkillər uğurla yükləndi") {
                  console.log(data?.message);
                  window.location.href = "end.html";
              }
          })
          .catch(error => {
              console.error(error);
          });
  }

}