const baseUrl = 'http://mebra.az/';
const apiUrl = 'http://mebra.az/api/Category/GetAllCategory';
const getAllAdverts = 'api/Adverts/GetAllAdverts';
const getAllAdvertsImages = 'api/Adverts/UploadAdvertImage';
const getConditionOfFurniture = 'api/Search/ConditionOfFurniture';
const getAllCategory = 'api/Category/GetAllCategory';
const getCategoryFeature = 'api/Category/GetCategoryFeature';
const getAllMaterials = 'api/Search/GetAllMaterials';
const getAllDesignsStyles = 'api/Search/GetAllDesignStyles';
const getAllCountry = 'api/Search/GetAllCountries';
const getAllCities = 'api/Search/GetAllCities';
const getAllColors = 'api/Search/GetAllColors';
const getAllPrices = 'api/Search/GetAllSPrice';
const getAllBrend = 'api/Search/ManufacturerBrand';
const filterAPI = 'api/Search/Filter';








// Filter-Desktop...
const selectBtnFilter = document.querySelector(".select-btn-filter");
const desktopFilterClose = document.querySelector(".filters-close-icon")

selectBtnFilter.addEventListener("click", () => {
    selectBtnFilter.classList.toggle("open");
});

desktopFilterClose.addEventListener("click", () => {
    selectBtnFilter.classList.remove("open");
});





// Filter-Lounge-Desktop...
const selectBtnFilterLounge = document.querySelector(".select-btn-filter-lounge");
let itemsButtonFilterLounge = document.querySelectorAll(".item__filter-lounge");
let filterLounge = document.querySelectorAll(".list-items-filter-lounge .item__filter-lounge");
let clearButtonFilterLounge = document.getElementById("clearButtonFilterLounge");
let closeButtonFilterLounge = document.getElementById("closeButtonFilterLounge");
let loungeTitle = document.querySelector('#lounge-title');
let loungeItems = document.querySelector('#lounge-items');
let selectedLounge = [];
let isLoungeLoading = false;



selectBtnFilterLounge.addEventListener("click", () => {
    selectBtnFilterLounge.classList.toggle("open");
});

itemsButtonFilterLounge.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
        updateSelectedLounge();
    });
});


function updateSelectedLounge() {

    selectedLounge = [];
    const checkedProducts = document.querySelectorAll(".list-items-filter-lounge .item__filter-lounge.checked");
    checkedProducts.forEach(item => {
        selectedLounge.push(item);
    });


    const clearButtonFilterLounge = document.getElementById("clearButtonFilterLounge");
    if (selectedLounge.length > 0) {
        clearButtonFilterLounge.style.display = "block";
    } else {
        clearButtonFilterLounge.style.display = "none";
    }
}


async function handleFilterLounge() {
    try {
        if (!isLoungeLoading) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const LoungeItem = data.categories[0]?.subCategories[0]?.name;
            const LoungeRoot = `${LoungeItem}`
            loungeTitle.insertAdjacentHTML("afterbegin", LoungeRoot);
            const subCategoriesName = data?.categories[0].subCategories[0].subCategories;
            subCategoriesName.forEach(subCategory => {
                const html = `
                    <li class="item item__filter-lounge d-flex justify-content-between align-items-center">
                        <span id="${subCategory.id}" class="item-text">${subCategory?.name}</span>
                        <span class="checkbox">
                            <i class="fa-solid fa-check check-icon"></i>
                        </span>
                    </li>
                `;
                loungeItems.insertAdjacentHTML("afterbegin", html);
            });


            itemsButtonFilterLounge = document.querySelectorAll(".item__filter-lounge");
            itemsButtonFilterLounge.forEach(item => {
                item.addEventListener("click", () => {
                    item.classList.toggle("checked");
                    updateSelectedLounge();
                });
            });


            clearButtonFilterLounge.addEventListener("click", () => {
                selectedLounge.forEach(item => {
                    item.classList.remove("checked");
                });
                selectedLounge = [];
                updateSelectedLounge();
            });

            isLoungeLoading = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleFilterLounge();





// Filter-Lounge-Mobile...
let filterLoungeMobile = document.querySelectorAll(".list-items-for-category .item__filter-lounge");
let clearButtonFilterLoungeMobile = document.getElementById("clearButtonFilterLoungeMobile");
let closeButtonFilterLoungeMobile = document.getElementById("closeButtonFilterLoungeMobile");
let selectedLoungeMobile = [];

filterLoungeMobile.forEach(function (lounge) {
    lounge.addEventListener("click", function () {
        if (selectedLoungeMobile.includes(lounge)) {
            lounge.classList.remove("checked");
            selectedLoungeMobile = selectedLoungeMobile.filter(function (selectedLoungeMobile) {
                return selectedLoungeMobile !== lounge;
            });
        } else {
            lounge.classList.add("checked");
            selectedLoungeMobile.push(lounge);
        }

        if (selectedLoungeMobile.length > 0) {
            clearButtonFilterLoungeMobile.style.display = "block";
        } else {
            clearButtonFilterLoungeMobile.style.display = "none";
        }
    });
});

clearButtonFilterLoungeMobile.addEventListener("click", function () {
    selectedLoungeMobile.forEach(function (selectedLoungeMobile) {
        selectedLoungeMobile.classList.remove("checked");
    });
    clearButtonFilterLoungeMobile.style.display = "none";
    selectedLoungeMobile = [];
});




// Filter-Kitchen-Desktop...
const selectBtnFilterKitchen = document.querySelector(".select-btn-filter-kitchen");
let itemsButtonFilterKitchen = document.querySelectorAll(".item__filter-kitchen");
let filterKitchen = document.querySelectorAll(".list-items-filter-kitchen .item__filter-kitchen");
let clearButtonFilterKitchen = document.getElementById("clearButtonFilterKitchen");
let closeButtonFilterKitchen = document.getElementById("closeButtonFilterKitchen");
let kitchenTitle = document.querySelector('#kitchen-title');
let kitchenItems = document.querySelector('#kitchen-items');
let selectedKitchen = [];
let isKitchenLoading = false;



selectBtnFilterKitchen.addEventListener("click", () => {
    selectBtnFilterKitchen.classList.toggle("open");
});

itemsButtonFilterKitchen.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
        updateSelectedKitchen();
    });
});


function updateSelectedKitchen() {

    selectedKitchen = [];
    const checkedProducts = document.querySelectorAll(".list-items-filter-kitchen .item__filter-kitchen.checked");
    checkedProducts.forEach(item => {
        selectedKitchen.push(item);
    });


    const clearButtonFilterKitchen = document.getElementById("clearButtonFilterKitchen");
    if (selectedKitchen.length > 0) {
        clearButtonFilterKitchen.style.display = "block";
    } else {
        clearButtonFilterKitchen.style.display = "none";
    }
}


async function handleFilterKitchen() {
    try {
        if (!isKitchenLoading) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const KitchenItem = data.categories[0]?.subCategories[1]?.name;
            const KitchenRoot = `${KitchenItem}`
            kitchenTitle.insertAdjacentHTML("afterbegin", KitchenRoot);
            const subCategoriesName = data?.categories[0].subCategories[1].subCategories;
            subCategoriesName.forEach(subCategory => {
                const html = `
                    <li class="item item__filter-kitchen d-flex justify-content-between align-items-center">
                        <span id="${subCategory.id}" class="item-text">${subCategory?.name}</span>
                        <span class="checkbox">
                            <i class="fa-solid fa-check check-icon"></i>
                        </span>
                    </li>
                `;
                kitchenItems.insertAdjacentHTML("afterbegin", html);
            });


            itemsButtonFilterKitchen = document.querySelectorAll(".item__filter-kitchen");
            itemsButtonFilterKitchen.forEach(item => {
                item.addEventListener("click", () => {
                    item.classList.toggle("checked");
                    updateSelectedKitchen();
                });
            });


            clearButtonFilterKitchen.addEventListener("click", () => {
                selectedKitchen.forEach(item => {
                    item.classList.remove("checked");
                });
                selectedKitchen = [];
                updateSelectedKitchen();
            });

            isKitchenLoading = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleFilterKitchen();


// Filter-Kitchen-Mobile...
let filterKitchenMobile = document.querySelectorAll(".list-items-for-category .item__filter-kitchen");
let clearButtonFilterKitchenMobile = document.getElementById("clearButtonFilterKitchenMobile");
let closeButtonFilterKitchenMobile = document.getElementById("closeButtonFilterKitchenMobile");
let selectedKitchenMobile = [];

filterKitchenMobile.forEach(function (kitchen) {
    kitchen.addEventListener("click", function () {
        if (selectedKitchenMobile.includes(kitchen)) {
            kitchen.classList.remove("checked");
            selectedKitchenMobile = selectedKitchenMobile.filter(function (selectedKitchenMobile) {
                return selectedKitchenMobile !== kitchen;
            });
        } else {
            kitchen.classList.add("checked");
            selectedKitchenMobile.push(kitchen);
        }

        if (selectedKitchenMobile.length > 0) {
            clearButtonFilterKitchenMobile.style.display = "block";
        } else {
            clearButtonFilterKitchenMobile.style.display = "none";
        }
    });
});

clearButtonFilterKitchenMobile.addEventListener("click", function () {
    selectedKitchenMobile.forEach(function (selectedKitchenMobile) {
        selectedKitchenMobile.classList.remove("checked");
    });
    clearButtonFilterKitchenMobile.style.display = "none";
    selectedKitchenMobile = [];
});



// Filter-Office-Desktop...
const selectBtnFilterOffice = document.querySelector(".select-btn-filter-office");
let itemsButtonFilterOffice = document.querySelectorAll(".item__filter-office");
let filterOffice = document.querySelectorAll(".list-items-filter-office .item__filter-office");
let clearButtonFilterOffice = document.getElementById("clearButtonFilterOffice");
let closeButtonFilterOffice = document.getElementById("closeButtonFilterOffice");
let officeTitle = document.querySelector('#office-title');
let officeItems = document.querySelector('#office-items');
let selectedOffice = [];
let isOfficeLoading = false;



selectBtnFilterOffice.addEventListener("click", () => {
    selectBtnFilterOffice.classList.toggle("open");
});

itemsButtonFilterOffice.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
        updateSelectedOffice();
    });
});


function updateSelectedOffice() {

    selectedOffice = [];
    const checkedProducts = document.querySelectorAll(".list-items-filter-office .item__filter-office.checked");
    checkedProducts.forEach(item => {
        selectedOffice.push(item);
    });


    const clearButtonFilterOffice = document.getElementById("clearButtonFilterOffice");
    if (selectedOffice.length > 0) {
        clearButtonFilterOffice.style.display = "block";
    } else {
        clearButtonFilterOffice.style.display = "none";
    }
}


async function handleFilterOffice() {
    try {
        if (!isOfficeLoading) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const OfficeItem = data.categories[0]?.subCategories[2]?.name;
            const OfficeRoot = `${OfficeItem}`
            officeTitle.insertAdjacentHTML("afterbegin", OfficeRoot);
            const subCategoriesName = data?.categories[0].subCategories[2].subCategories;
            subCategoriesName.forEach(subCategory => {
                const html = `
                    <li class="item item__filter-office d-flex justify-content-between align-items-center">
                        <span id="${subCategory.id}" class="item-text">${subCategory?.name}</span>
                        <span class="checkbox">
                            <i class="fa-solid fa-check check-icon"></i>
                        </span>
                    </li>
                `;
                officeItems.insertAdjacentHTML("afterbegin", html);
            });


            itemsButtonFilterOffice = document.querySelectorAll(".item__filter-office");
            itemsButtonFilterOffice.forEach(item => {
                item.addEventListener("click", () => {
                    item.classList.toggle("checked");
                    updateSelectedOffice();
                });
            });


            clearButtonFilterOffice.addEventListener("click", () => {
                selectedOffice.forEach(item => {
                    item.classList.remove("checked");
                });
                selectedOffice = [];
                updateSelectedOffice();
            });

            isOfficeLoading = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleFilterOffice();



// Filter-Office-Mobile...
let filterOfficeMobile = document.querySelectorAll(".list-items-for-category .item__filter-office");
let clearButtonFilterOfficeMobile = document.getElementById("clearButtonFilterOfficeMobile");
let closeButtonFilterOfficeMobile = document.getElementById("closeButtonFilterOfficeMobile");
let selectedOfficeMobile = [];

filterOfficeMobile.forEach(function (office) {
    office.addEventListener("click", function () {
        if (selectedOfficeMobile.includes(office)) {
            office.classList.remove("checked");
            selectedOfficeMobile = selectedOfficeMobile.filter(function (selectedOfficeMobile) {
                return selectedOfficeMobile !== office;
            });
        } else {
            office.classList.add("checked");
            selectedOfficeMobile.push(office);
        }

        if (selectedOfficeMobile.length > 0) {
            clearButtonFilterOfficeMobile.style.display = "block";
        } else {
            clearButtonFilterOfficeMobile.style.display = "none";
        }
    });
});

clearButtonFilterOfficeMobile.addEventListener("click", function () {
    selectedOfficeMobile.forEach(function (selectedOfficeMobile) {
        selectedOfficeMobile.classList.remove("checked");
    });
    clearButtonFilterOfficeMobile.style.display = "none";
    selectedOfficeMobile = [];
});




// Filter-Bedroom-Desktop...
const selectBtnFilterBedroom = document.querySelector(".select-btn-filter-bedroom");
let itemsButtonFilterBedroom = document.querySelectorAll(".item__filter-bedroom");
let filterBedroom = document.querySelectorAll(".list-items-filter-bedroom .item__filter-bedroom");
let clearButtonFilterBedroom = document.getElementById("clearButtonFilterBedroom");
let closeButtonFilterBedroom = document.getElementById("closeButtonFilterBedroom");
let bedroomTitle = document.querySelector('#bedroom-title');
let bedroomItems = document.querySelector('#bedroom-items');
let selectedBedroom = [];
let isBedroomLoading = false;



selectBtnFilterBedroom.addEventListener("click", () => {
    selectBtnFilterBedroom.classList.toggle("open");
});

itemsButtonFilterBedroom.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
        updateSelectedBedroom();
    });
});


function updateSelectedBedroom() {

    selectedBedroom = [];
    const checkedProducts = document.querySelectorAll(".list-items-filter-bedroom .item__filter-bedroom.checked");
    checkedProducts.forEach(item => {
        selectedBedroom.push(item);
    });


    const clearButtonFilterBedroom = document.getElementById("clearButtonFilterBedroom");
    if (selectedBedroom.length > 0) {
        clearButtonFilterBedroom.style.display = "block";
    } else {
        clearButtonFilterBedroom.style.display = "none";
    }
}


async function handleFilterBedroom() {
    try {
        if (!isBedroomLoading) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const BedroomItem = data.categories[0]?.subCategories[4]?.name;
            const BedroomRoot = `${BedroomItem}`
            bedroomTitle.insertAdjacentHTML("afterbegin", BedroomRoot);
            const subCategoriesName = data?.categories[0].subCategories[4].subCategories;
            subCategoriesName.forEach(subCategory => {
                const html = `
                    <li class="item item__filter-bedroom d-flex justify-content-between align-items-center">
                        <span id="${subCategory.id}" class="item-text">${subCategory?.name}</span>
                        <span class="checkbox">
                            <i class="fa-solid fa-check check-icon"></i>
                        </span>
                    </li>
                `;
                bedroomItems.insertAdjacentHTML("afterbegin", html);
            });


            itemsButtonFilterBedroom = document.querySelectorAll(".item__filter-bedroom");
            itemsButtonFilterBedroom.forEach(item => {
                item.addEventListener("click", () => {
                    item.classList.toggle("checked");
                    updateSelectedBedroom();
                });
            });


            clearButtonFilterBedroom.addEventListener("click", () => {
                selectedBedroom.forEach(item => {
                    item.classList.remove("checked");
                });
                selectedBedroom = [];
                updateSelectedBedroom();
            });

            isBedroomLoading = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleFilterBedroom();



// Filter-Bedroom-Mobile...
let filterBedroomMobile = document.querySelectorAll(".list-items-for-category .item__filter-bedroom");
let clearButtonFilterBedroomMobile = document.getElementById("clearButtonFilterBedroomMobile");
let closeButtonFilterBedroomMobile = document.getElementById("closeButtonFilterBedroomMobile");
let selectedBedroomMobile = [];

filterBedroomMobile.forEach(function (bedroom) {
    bedroom.addEventListener("click", function () {
        if (selectedBedroomMobile.includes(bedroom)) {
            bedroom.classList.remove("checked");
            selectedBedroomMobile = selectedBedroomMobile.filter(function (selectedBedroomMobile) {
                return selectedBedroomMobile !== bedroom;
            });
        } else {
            bedroom.classList.add("checked");
            selectedBedroomMobile.push(bedroom);
        }

        if (selectedBedroomMobile.length > 0) {
            clearButtonFilterBedroomMobile.style.display = "block";
        } else {
            clearButtonFilterBedroomMobile.style.display = "none";
        }
    });
});

clearButtonFilterBedroomMobile.addEventListener("click", function () {
    selectedBedroomMobile.forEach(function (selectedBedroomMobile) {
        selectedBedroomMobile.classList.remove("checked");
    });
    clearButtonFilterBedroomMobile.style.display = "none";
    selectedBedroomMobile = [];
});




// Filter-Bathroom-Desktop...
const selectBtnFilterBathroom = document.querySelector(".select-btn-filter-bathroom");
let itemsButtonFilterBathroom = document.querySelectorAll(".item__filter-bathroom");
let filterBathroom = document.querySelectorAll(".list-items-filter-bathroom .item__filter-bathroom");
let clearButtonFilterBathroom = document.getElementById("clearButtonFilterBathroom");
let closeButtonFilterBathroom = document.getElementById("closeButtonFilterBathroom");
let bathroomTitle = document.querySelector('#bathroom-title');
let bathroomItems = document.querySelector('#bathroom-items');
let selectedBathroom = [];
let isBathroomLoading = false;



selectBtnFilterBathroom.addEventListener("click", () => {
    selectBtnFilterBathroom.classList.toggle("open");
});

itemsButtonFilterBathroom.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
        updateSelectedBathroom();
    });
});


function updateSelectedBathroom() {

    selectedBathroom = [];
    const checkedProducts = document.querySelectorAll(".list-items-filter-bathroom .item__filter-bathroom.checked");
    checkedProducts.forEach(item => {
        selectedBathroom.push(item);
    });


    const clearButtonFilterBathroom = document.getElementById("clearButtonFilterBathroom");
    if (selectedBathroom.length > 0) {
        clearButtonFilterBathroom.style.display = "block";
    } else {
        clearButtonFilterBathroom.style.display = "none";
    }
}


async function handleFilterBathroom() {
    try {
        if (!isBathroomLoading) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const BathroomItem = data.categories[0]?.subCategories[5]?.name;
            const BathroomRoot = `${BathroomItem}`
            bathroomTitle.insertAdjacentHTML("afterbegin", BathroomRoot);
            const subCategoriesName = data?.categories[0].subCategories[5].subCategories;
            subCategoriesName.forEach(subCategory => {
                const html = `
                    <li class="item item__filter-bathroom d-flex justify-content-between align-items-center">
                        <span id="${subCategory.id}" class="item-text">${subCategory?.name}</span>
                        <span class="checkbox">
                            <i class="fa-solid fa-check check-icon"></i>
                        </span>
                    </li>
                `;
                bathroomItems.insertAdjacentHTML("afterbegin", html);
            });


            itemsButtonFilterBathroom = document.querySelectorAll(".item__filter-bathroom");
            itemsButtonFilterBathroom.forEach(item => {
                item.addEventListener("click", () => {
                    item.classList.toggle("checked");
                    updateSelectedBathroom();
                });
            });


            clearButtonFilterBathroom.addEventListener("click", () => {
                selectedBathroom.forEach(item => {
                    item.classList.remove("checked");
                });
                selectedBathroom = [];
                updateSelectedBathroom();
            });

            isBathroomLoading = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleFilterBathroom();



// Filter-Bathroom-Mobile...
let filterBathMobile = document.querySelectorAll(".list-items-for-category .item__filter-bathroom");
let clearButtonFilterBathroomMobile = document.getElementById("clearButtonFilterBathroomMobile");
let closeButtonFilterBathroomMobile = document.getElementById("closeButtonFilterBathroomMobile");
let selectedBathroomMobile = [];

filterBathMobile.forEach(function (bathroom) {
    bathroom.addEventListener("click", function () {
        if (selectedBathroomMobile.includes(bathroom)) {
            bathroom.classList.remove("checked");
            selectedBathroomMobile = selectedBathroomMobile.filter(function (selectedBathroomMobile) {
                return selectedBathroomMobile !== bathroom;
            });
        } else {
            bathroom.classList.add("checked");
            selectedBathroomMobile.push(bathroom);
        }

        if (selectedBathroomMobile.length > 0) {
            clearButtonFilterBathroomMobile.style.display = "block";
        } else {
            clearButtonFilterBathroomMobile.style.display = "none";
        }
    });
});

clearButtonFilterBathroomMobile.addEventListener("click", function () {
    selectedBathroomMobile.forEach(function (selectedBathroomMobile) {
        selectedBathroomMobile.classList.remove("checked");
    });
    clearButtonFilterBathroomMobile.style.display = "none";
    selectedBathroomMobile = [];
});




// Filter-Showcase-Desktop...
const selectBtnFilterShowcase = document.querySelector(".select-btn-filter-showcase");
let itemsButtonFilterShowcase = document.querySelectorAll(".item__filter-showcase");
let filterShowcase = document.querySelectorAll(".list-items-filter-showcase .item__filter-showcase");
let clearButtonFilterShowcase = document.getElementById("clearButtonFilterShowcase");
let closeButtonFilterShowcase = document.getElementById("closeButtonFilterShowcase");
let showcaseTitle = document.querySelector('#showcase-title');
let showcaseItems = document.querySelector('#showcase-items');
let selectedShowcase = [];
let isShowcaseLoading = false;



selectBtnFilterShowcase.addEventListener("click", () => {
    selectBtnFilterShowcase.classList.toggle("open");
});

itemsButtonFilterShowcase.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
        updateSelectedShowcase();
    });
});


function updateSelectedShowcase() {

    selectedShowcase = [];
    const checkedProducts = document.querySelectorAll(".list-items-filter-showcase .item__filter-showcase.checked");
    checkedProducts.forEach(item => {
        selectedShowcase.push(item);
    });


    const clearButtonFilterShowcase = document.getElementById("clearButtonFilterShowcase");
    if (selectedShowcase.length > 0) {
        clearButtonFilterShowcase.style.display = "block";
    } else {
        clearButtonFilterShowcase.style.display = "none";
    }
}


async function handleFilterShowcase() {
    try {
        if (!isShowcaseLoading) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const ShowcaseItem = data.categories[0]?.subCategories[3]?.name;
            const ShowcaseRoot = `${ShowcaseItem}`
            showcaseTitle.insertAdjacentHTML("afterbegin", ShowcaseRoot);
            const subCategoriesName = data?.categories[0].subCategories[3].subCategories;
            subCategoriesName.forEach(subCategory => {
                const html = `
                    <li class="item item__filter-showcase d-flex justify-content-between align-items-center">
                        <span id="${subCategory.id}" class="item-text">${subCategory?.name}</span>
                        <span class="checkbox">
                            <i class="fa-solid fa-check check-icon"></i>
                        </span>
                    </li>
                `;
                showcaseItems.insertAdjacentHTML("afterbegin", html);
            });


            itemsButtonFilterShowcase = document.querySelectorAll(".item__filter-showcase");
            itemsButtonFilterShowcase.forEach(item => {
                item.addEventListener("click", () => {
                    item.classList.toggle("checked");
                    updateSelectedShowcase();
                });
            });


            clearButtonFilterShowcase.addEventListener("click", () => {
                selectedShowcase.forEach(item => {
                    item.classList.remove("checked");
                });
                selectedShowcase = [];
                updateSelectedShowcase();
            });

            isShowcaseLoading = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleFilterShowcase();


// Filter-Showcase-Mobile...
let filterShowcaseMobile = document.querySelectorAll(".list-items-for-category .item__filter-showcase");
let clearButtonFilterShowcaseMobile = document.getElementById("clearButtonFilterShowcaseMobile");
let closeButtonFilterShowcaseMobile = document.getElementById("closeButtonFilterShowcaseMobile");
let selectedShowcaseMobile = [];

filterShowcaseMobile.forEach(function (showcase) {
    showcase.addEventListener("click", function () {
        if (selectedShowcaseMobile.includes(showcase)) {
            showcase.classList.remove("checked");
            selectedShowcaseMobile = selectedShowcaseMobile.filter(function (selectedShowcaseMobile) {
                return selectedShowcaseMobile !== showcase;
            });
        } else {
            showcase.classList.add("checked");
            selectedShowcaseMobile.push(showcase);
        }

        if (selectedShowcaseMobile.length > 0) {
            clearButtonFilterShowcaseMobile.style.display = "block";
        } else {
            clearButtonFilterShowcaseMobile.style.display = "none";
        }
    });
});

clearButtonFilterShowcaseMobile.addEventListener("click", function () {
    selectedShowcaseMobile.forEach(function (selectedShowcaseMobile) {
        selectedShowcaseMobile.classList.remove("checked");
    });
    clearButtonFilterShowcaseMobile.style.display = "none";
    selectedShowcaseMobile = [];
});



// Filter-Table-Desktop...
const selectBtnFilterTable = document.querySelector(".select-btn-filter-table");
let itemsButtonFilterTable = document.querySelectorAll(".item__filter-table");
let filterTable = document.querySelectorAll(".list-items-filter-table .item__filter-table");
let clearButtonFilterTable = document.getElementById("clearButtonFilterTable");
let closeButtonFilterTable = document.getElementById("closeButtonFilterTable");
let tableTitle = document.querySelector('#table-title');
let tableItems = document.querySelector('#table-items');
let selectedTable = [];
let isTableLoading = false;



selectBtnFilterTable.addEventListener("click", () => {
    selectBtnFilterTable.classList.toggle("open");
});

itemsButtonFilterTable.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
        updateSelectedTable();
    });
});


function updateSelectedTable() {

    selectedTable = [];
    const checkedProducts = document.querySelectorAll(".list-items-filter-table .item__filter-table.checked");
    checkedProducts.forEach(item => {
        selectedTable.push(item);
    });


    const clearButtonFilterTable = document.getElementById("clearButtonFilterTable");
    if (selectedTable.length > 0) {
        clearButtonFilterTable.style.display = "block";
    } else {
        clearButtonFilterTable.style.display = "none";
    }
}


async function handleFilterTable() {
    try {
        if (!isTableLoading) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const TableItem = data.categories[0]?.subCategories[9]?.name;
            const TableRoot = `${TableItem}`
            tableTitle.insertAdjacentHTML("afterbegin", TableRoot);
            const subCategoriesName = data?.categories[0].subCategories[9].subCategories;
            subCategoriesName.forEach(subCategory => {
                const html = `
                    <li class="item item__filter-table d-flex justify-content-between align-items-center">
                        <span id="${subCategory.id}" class="item-text">${subCategory?.name}</span>
                        <span class="checkbox">
                            <i class="fa-solid fa-check check-icon"></i>
                        </span>
                    </li>
                `;
                tableItems.insertAdjacentHTML("afterbegin", html);
            });


            itemsButtonFilterTable = document.querySelectorAll(".item__filter-table");
            itemsButtonFilterTable.forEach(item => {
                item.addEventListener("click", () => {
                    item.classList.toggle("checked");
                    updateSelectedTable();
                });
            });


            clearButtonFilterTable.addEventListener("click", () => {
                selectedTable.forEach(item => {
                    item.classList.remove("checked");
                });
                selectedTable = [];
                updateSelectedTable();
            });

            isTableLoading = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleFilterTable();



// Filter-Closets-Desktop...
const selectBtnFilterClosets = document.querySelector(".select-btn-filter-closets");
let itemsButtonFilterClosets = document.querySelectorAll(".item__filter-closets");
let filterClosets = document.querySelectorAll(".list-items-filter-closets .item__filter-closets");
let clearButtonFilterClosets = document.getElementById("clearButtonFilterClosets");
let closeButtonFilterClosets = document.getElementById("closeButtonFilterClosets");
let closetsTitle = document.querySelector('#closets-title');
let closetsItems = document.querySelector('#closets-items');
let selectedClosets = [];
let isClosetsLoading = false;



selectBtnFilterClosets.addEventListener("click", () => {
    selectBtnFilterClosets.classList.toggle("open");
});

itemsButtonFilterClosets.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
        updateSelectedClosets();
    });
});


function updateSelectedClosets() {

    selectedClosets = [];
    const checkedProducts = document.querySelectorAll(".list-items-filter-closets .item__filter-closets.checked");
    checkedProducts.forEach(item => {
        selectedClosets.push(item);
    });


    const clearButtonFilterClosets = document.getElementById("clearButtonFilterClosets");
    if (selectedClosets.length > 0) {
        clearButtonFilterClosets.style.display = "block";
    } else {
        clearButtonFilterClosets.style.display = "none";
    }
}


async function handleFilterClosets() {
    try {
        if (!isClosetsLoading) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const ClosetsItem = data.categories[0]?.subCategories[10]?.name;
            const ClosetsRoot = `${ClosetsItem}`
            closetsTitle.insertAdjacentHTML("afterbegin", ClosetsRoot);
            const subCategoriesName = data?.categories[0].subCategories[10].subCategories;
            subCategoriesName.forEach(subCategory => {
                const html = `
                    <li class="item item__filter-closets d-flex justify-content-between align-items-center">
                        <span id="${subCategory.id}" class="item-text">${subCategory?.name}</span>
                        <span class="checkbox">
                            <i class="fa-solid fa-check check-icon"></i>
                        </span>
                    </li>
                `;
                closetsItems.insertAdjacentHTML("afterbegin", html);
            });


            itemsButtonFilterClosets = document.querySelectorAll(".item__filter-closets");
            itemsButtonFilterClosets.forEach(item => {
                item.addEventListener("click", () => {
                    item.classList.toggle("checked");
                    updateSelectedClosets();
                });
            });


            clearButtonFilterClosets.addEventListener("click", () => {
                selectedClosets.forEach(item => {
                    item.classList.remove("checked");
                });
                selectedClosets = [];
                updateSelectedClosets();
            });

            isClosetsLoading = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleFilterClosets();


// Filter-Closets-Mobile...
let filterClosetsMobile = document.querySelectorAll(".list-items-for-category .item__filter-closets");
let clearButtonFilterClosetsMobile = document.getElementById("clearButtonFilterClosetsMobile");
let closeButtonFilterClosetsMobile = document.getElementById("closeButtonFilterClosetsMobile");
let selectedClosetsMobile = [];

filterClosetsMobile.forEach(function (closets) {
    closets.addEventListener("click", function () {
        if (selectedClosetsMobile.includes(closets)) {
            closets.classList.remove("checked");
            selectedClosetsMobile = selectedClosetsMobile.filter(function (selectedClosetsMobile) {
                return selectedClosetsMobile !== closets;
            });
        } else {
            closets.classList.add("checked");
            selectedClosetsMobile.push(closets);
        }

        if (selectedClosetsMobile.length > 0) {
            clearButtonFilterClosetsMobile.style.display = "block";
        } else {
            clearButtonFilterClosetsMobile.style.display = "none";
        }
    });
});

clearButtonFilterClosetsMobile.addEventListener("click", function () {
    selectedClosetsMobile.forEach(function (selectedClosetsMobile) {
        selectedClosetsMobile.classList.remove("checked");
    });
    clearButtonFilterClosetsMobile.style.display = "none";
    selectedClosetsMobile = [];
});




// Filter-Sofa-Desktop...
const selectBtnFilterSofa = document.querySelector(".select-btn-filter-sofa");
let itemsButtonFilterSofa = document.querySelectorAll(".item__filter-sofa");
let filterSofa = document.querySelectorAll(".list-items-filter-sofa .item__filter-sofa");
let clearButtonFilterSofa = document.getElementById("clearButtonFilterSofa");
let closeButtonFilterSofa = document.getElementById("closeButtonFilterSofa");
let sofaTitle = document.querySelector('#sofa-title');
let sofaItems = document.querySelector('#sofa-items');
let selectedSofa = [];
let isSofaLoading = false;



selectBtnFilterSofa.addEventListener("click", () => {
    selectBtnFilterSofa.classList.toggle("open");
});

itemsButtonFilterSofa.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
        updateSelectedSofa();
    });
});


function updateSelectedSofa() {

    selectedSofa = [];
    const checkedProducts = document.querySelectorAll(".list-items-filter-sofa .item__filter-sofa.checked");
    checkedProducts.forEach(item => {
        selectedSofa.push(item);
    });


    const clearButtonFilterSofa = document.getElementById("clearButtonFilterSofa");
    if (selectedSofa.length > 0) {
        clearButtonFilterSofa.style.display = "block";
    } else {
        clearButtonFilterSofa.style.display = "none";
    }
}


async function handleFilterSofa() {
    try {
        if (!isSofaLoading) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const SofaItem = data.categories[0]?.subCategories[11]?.name;
            const SofaRoot = `${SofaItem}`
            sofaTitle.insertAdjacentHTML("afterbegin", SofaRoot);
            const subCategoriesName = data?.categories[0].subCategories[11].subCategories;
            subCategoriesName.forEach(subCategory => {
                const html = `
                    <li class="item item__filter-sofa d-flex justify-content-between align-items-center">
                        <span id="${subCategory.id}" class="item-text">${subCategory?.name}</span>
                        <span class="checkbox">
                            <i class="fa-solid fa-check check-icon"></i>
                        </span>
                    </li>
                `;
                sofaItems.insertAdjacentHTML("afterbegin", html);
            });


            itemsButtonFilterSofa = document.querySelectorAll(".item__filter-sofa");
            itemsButtonFilterSofa.forEach(item => {
                item.addEventListener("click", () => {
                    item.classList.toggle("checked");
                    updateSelectedSofa();
                });
            });


            clearButtonFilterSofa.addEventListener("click", () => {
                selectedSofa.forEach(item => {
                    item.classList.remove("checked");
                });
                selectedSofa = [];
                updateSelectedSofa();
            });

            isSofaLoading = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleFilterSofa();


// Filter-Sofa-Mobile...
let filterSofaMobile = document.querySelectorAll(".list-items-for-category .item__filter-Mobilesofa");
let clearButtonFilterSofaMobile = document.getElementById("clearButtonFilterSofaMobile");
let closeButtonFilterSofaMobile = document.getElementById("closeButtonFilterSofaMobile");
let selectedSofaMobile = [];

filterSofaMobile.forEach(function (sofa) {
    sofa.addEventListener("click", function () {
        if (selectedSofaMobile.includes(sofa)) {
            sofa.classList.remove("checked");
            selectedSofaMobile = selectedSofaMobile.filter(function (selectedSofaMobile) {
                return selectedSofaMobile !== sofa;
            });
        } else {
            sofa.classList.add("checked");
            selectedSofaMobile.push(sofa);
        }

        if (selectedSofaMobile.length > 0) {
            clearButtonFilterSofaMobile.style.display = "block";
        } else {
            clearButtonFilterSofaMobile.style.display = "none";
        }
    });
});

clearButtonFilterSofaMobile.addEventListener("click", function () {
    selectedSofaMobile.forEach(function (selectedSofaMobile) {
        selectedSofaMobile.classList.remove("checked");
    });
    clearButtonFilterSofaMobile.style.display = "none";
    selectedSofaMobile = [];
});






// Filter-Other-Desktop...
const selectBtnFilterOther = document.querySelector(".select-btn-filter-other");
let itemsButtonFilterOther = document.querySelectorAll(".item__filter-other");
let filterOther = document.querySelectorAll(".list-items-filter-other .item__filter-other");
let clearButtonFilterOther = document.getElementById("clearButtonFilterOther");
let closeButtonFilterOther = document.getElementById("closeButtonFilterOther");
let otherTitle = document.querySelector('#other-title');
let otherItems = document.querySelector('#other-items');
let selectedOther = [];
let isOtherLoading = false;



selectBtnFilterOther.addEventListener("click", () => {
    selectBtnFilterOther.classList.toggle("open");
});

itemsButtonFilterOther.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
        updateSelectedOther();
    });
});


function updateSelectedOther() {

    selectedOther = [];
    const checkedProducts = document.querySelectorAll(".list-items-filter-other .item__filter-other.checked");
    checkedProducts.forEach(item => {
        selectedOther.push(item);
    });


    const clearButtonFilterOther = document.getElementById("clearButtonFilterOther");
    if (selectedOther.length > 0) {
        clearButtonFilterOther.style.display = "block";
    } else {
        clearButtonFilterOther.style.display = "none";
    }
}


async function handleFilterOther() {
    try {
        if (!isOtherLoading) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const OtherItem = data.categories[0]?.subCategories[8]?.name;
            const OtherRoot = `${OtherItem}`
            otherTitle.insertAdjacentHTML("afterbegin", OtherRoot);
            const subCategoriesName = data?.categories[0].subCategories[8].subCategories;
            subCategoriesName.forEach(subCategory => {
                const html = `
                    <li class="item item__filter-other d-flex justify-content-between align-items-center">
                        <span id="${subCategory.id}" class="item-text">${subCategory?.name}</span>
                        <span class="checkbox">
                            <i class="fa-solid fa-check check-icon"></i>
                        </span>
                    </li>
                `;
                otherItems.insertAdjacentHTML("afterbegin", html);
            });


            itemsButtonFilterOther = document.querySelectorAll(".item__filter-other");
            itemsButtonFilterOther.forEach(item => {
                item.addEventListener("click", () => {
                    item.classList.toggle("checked");
                    updateSelectedOther();
                });
            });


            clearButtonFilterOther.addEventListener("click", () => {
                selectedOther.forEach(item => {
                    item.classList.remove("checked");
                });
                selectedOther = [];
                updateSelectedOther();
            });

            isOtherLoading = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleFilterOther();


// Filter-Other-Mobile...
let filterOtherMobile = document.querySelectorAll(".list-items-for-category .item__filter-Mobileother");
let clearButtonFilterOtherMobile = document.getElementById("clearButtonFilterOtherMobile");
let closeButtonFilterOtherMobile = document.getElementById("closeButtonFilterOtherMobile");
let selectedOtherMobile = [];

filterOtherMobile.forEach(function (other) {
    other.addEventListener("click", function () {
        if (selectedOtherMobile.includes(other)) {
            other.classList.remove("checked");
            selectedOtherMobile = selectedOtherMobile.filter(function (selectedOtherMobile) {
                return selectedOtherMobile !== other;
            });
        } else {
            other.classList.add("checked");
            selectedOtherMobile.push(other);
        }

        if (selectedOtherMobile.length > 0) {
            clearButtonFilterOtherMobile.style.display = "block";
        } else {
            clearButtonFilterOtherMobile.style.display = "none";
        }
    });
});

clearButtonFilterOtherMobile.addEventListener("click", function () {
    selectedOtherMobile.forEach(function (selectedOtherMobile) {
        selectedOtherMobile.classList.remove("checked");
    });
    clearButtonFilterOtherMobile.style.display = "none";
    selectedOtherMobile = [];
});



// Filter-MainServices-Desktop...

const selectBtnFilterMainServices = document.querySelector(".select-btn-filter-mainServices");
let itemsButtonFilterMainServices = document.querySelectorAll(".item__filter-mainServices");
let filterMainServices = document.querySelectorAll(".list-items-filter-mainServices .item__filter-mainServices");
let clearButtonFilterMainServices = document.getElementById("clearButtonFilterMainServices");
let closeButtonFilterMainServices = document.getElementById("closeButtonFilterMainServices");
let mainServicesTitle = document.querySelector('#mainServices-title');
let mainServicesItems = document.querySelector('#mainServices-items');
let selectedMainServices = [];
let isMainServicesLoading = false;



selectBtnFilterMainServices.addEventListener("click", () => {
    selectBtnFilterMainServices.classList.toggle("open");
});

itemsButtonFilterMainServices.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
        updateSelectedMainServices();
    });
});


function updateSelectedMainServices() {

    selectedMainServices = [];
    const checkedProducts = document.querySelectorAll(".list-items-filter-mainServices .item__filter-mainServices.checked");
    checkedProducts.forEach(item => {
        selectedMainServices.push(item);
    });


    const clearButtonFilterMainServices = document.getElementById("clearButtonFilterMainServices");
    if (selectedMainServices.length > 0) {
        clearButtonFilterMainServices.style.display = "block";
    } else {
        clearButtonFilterMainServices.style.display = "none";
    }
}


async function handleFilterMainServices() {
    try {
        if (!isMainServicesLoading) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const subCategoriesName = data?.categories
            subCategoriesName.forEach(subCategory => {
                const html = `
                    <li class="item item__filter-mainServices d-flex justify-content-between align-items-center">
                        <span id="${subCategory.id}" class="item-text">${subCategory?.name}</span>
                        <span class="checkbox">
                            <i class="fa-solid fa-check check-icon"></i>
                        </span>
                    </li>
                `;
                mainServicesItems.insertAdjacentHTML("afterbegin", html);
            });


            itemsButtonFilterMainServices = document.querySelectorAll(".item__filter-mainServices");
            itemsButtonFilterMainServices.forEach(item => {
                item.addEventListener("click", () => {
                    item.classList.toggle("checked");
                    updateSelectedMainServices();
                });
            });


            clearButtonFilterMainServices.addEventListener("click", () => {
                selectedMainServices.forEach(item => {
                    item.classList.remove("checked");
                });
                selectedMainServices = [];
                updateSelectedMainServices();
            });

            isMainServicesLoading = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleFilterMainServices();


// Filter-MainServices-Mobile...
let filterMainServicesMobile = document.querySelectorAll(".list-items-for-category .item__filter-MobileMainServices");
let clearButtonFilterMainServicesMobile = document.getElementById("clearButtonFilterMainServicesMobile");
let closeButtonFilterMainServicesMobile = document.getElementById("closeButtonFilterMainServicesMobile");
let selectedMainServicesMobile = [];

filterMainServicesMobile.forEach(function (mainServices) {
    mainServices.addEventListener("click", function () {
        if (selectedMainServicesMobile.includes(mainServices)) {
            mainServices.classList.remove("checked");
            selectedMainServicesMobile = selectedMainServicesMobile.filter(function (selectedMainServicesMobile) {
                return selectedMainServicesMobile !== mainServices;
            });
        } else {
            mainServices.classList.add("checked");
            selectedMainServicesMobile.push(mainServices);
        }

        if (selectedMainServicesMobile.length > 0) {
            clearButtonFilterMainServicesMobile.style.display = "block";
        } else {
            clearButtonFilterMainServicesMobile.style.display = "none";
        }
    });
});

clearButtonFilterMainServicesMobile.addEventListener("click", function () {
    selectedMainServicesMobile.forEach(function (selectedMainServicesMobile) {
        selectedMainServicesMobile.classList.remove("checked");
    });
    clearButtonFilterMainServicesMobile.style.display = "none";
    selectedMainServicesMobile = [];
});








// Filter-Products-Desktop...
const selectBtnFilterProduct = document.querySelector(".select-btn-filter-product");
let itemsButtonFilterProduct = document.querySelectorAll(".item__filter-product");
let listItemsFilterProduct = document.querySelector('.list-items-filter-product');
let isProductsLoading = false;
let selectedProduct = [];


function addClickListenersToProducts() {
    const products = document.querySelectorAll(".list-items-filter-product .item__filter-product");
    products.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");
            updateSelectedProducts();
        });
    });
}


function updateSelectedProducts() {

    selectedProduct = [];
    const checkedProducts = document.querySelectorAll(".list-items-filter-product .item__filter-product.checked");
    checkedProducts.forEach(item => {
        selectedProduct.push(item);
    });


    const clearButtonFilterProducts = document.getElementById("clearButtonFilterProducts");
    if (selectedProduct.length > 0) {
        clearButtonFilterProducts.style.display = "block";
    } else {
        clearButtonFilterProducts.style.display = "none";
    }
}


async function loadCategoriesProduct() {
    try {
        const res = await fetch(`${baseUrl}/${getConditionOfFurniture}`);
        if (!res.ok) {
            throw new Error("Something went wrong");
        }

        const data = await res.json();
        const furnitureStatuses = data?.furnitureStatuses
        furnitureStatuses.forEach((furnitureStatus) => {
            const furnitureName = furnitureStatus?.name;
            const productId = furnitureStatus.id;
            const html = `  
            <li class="item filterProductItems item__filter-product d-flex justify-content-between align-items-center">
            <span id="${productId}" class="item-text">${furnitureName}</span>
            <span class="checkbox">
                <i class="fa-solid fa-check check-icon"></i>
            </span>
            </li>`
            listItemsFilterProduct.insertAdjacentHTML("afterbegin", html);
        })


        addClickListenersToProducts();

        isProductsLoading = true;
    } catch (err) {
        console.log(err.message);
    }
}


selectBtnFilterProduct.addEventListener("click", () => {
    selectBtnFilterProduct.classList.toggle("open");

    if (!isProductsLoading) {
        loadCategoriesProduct();
    }
});

const clearButtonFilterProducts = document.getElementById("clearButtonFilterProducts");
clearButtonFilterProducts.addEventListener("click", () => {
    const checkedProducts = document.querySelectorAll(".list-items-filter-product .item__filter-product.checked");
    checkedProducts.forEach(item => {
        item.classList.remove("checked");
    });
    clearButtonFilterProducts.style.display = "none";
});


// async function filterAdvertsByProducts(productIds) {
//     try {
//         const res = await fetch('http://ruslanali803-001-site1.htempurl.com/api/Search/Filter', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 productIds: productIds
//             })
//         });

//         if (!res.ok)
//             throw new Error("Something went wrong");

//         const filteredAdverts = await res.json();
//         console.log(filteredAdverts);
//     } catch (err) {
//         console.log(err.message);
//     }
// }




// Filter-Products-Mobile...
let filterProductsMobile = document.querySelectorAll(".list-items-for-category .item__filter-product");
let clearButtonFilterProductsMobile = document.getElementById("clearButtonFilterProductsMobile");
let closeButtonFilterProductsMobile = document.getElementById("closeButtonFilterProductsMobile");
let itemsButtonFilterProductMobile = document.querySelectorAll(".item__filter-product_mobile");

let selectedProductsMobile = [];
let mobileProduct = document.querySelector(".mobile-product");
let isProductLoadingMobile = false;

document.addEventListener('DOMContentLoaded', async function () {
    if (!isProductLoadingMobile) {
        try {
            const res = await fetch(
                `${baseUrl}/${getConditionOfFurniture}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const furnitureStatuses = data?.furnitureStatuses
            furnitureStatuses.forEach((furnitureStatus) => {
                const furnitureName = furnitureStatus?.name;
                const html = `  
                <li class="item item__filter-product d-flex justify-content-between align-items-center">
                <span class="item-subtext">${furnitureName}</span>

                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
               </li>
               `
                mobileProduct.insertAdjacentHTML("beforeend", html);
            })
            isProductLoadingMobile = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});


filterProductsMobile.forEach(function (product) {
    product.addEventListener("click", function () {
        if (selectedProductsMobile.includes(product)) {
            product.classList.remove("checked");
            selectedProductsMobile = selectedProductsMobile.filter(function (selectedProductsMobile) {
                return selectedProductsMobile !== product;
            });
        } else {
            product.classList.add("checked");
            selectedProductsMobile.push(product);
        }

        if (selectedProductsMobile.length > 0) {
            clearButtonFilterProductsMobile.style.display = "block";
        } else {
            clearButtonFilterProductsMobile.style.display = "none";
        }
    });
});


clearButtonFilterProductsMobile.addEventListener("click", function () {
    selectedProductsMobile.forEach(function (selectedProductsMobile) {
        selectedProductsMobile.classList.remove("checked");
    });
    clearButtonFilterProductsMobile.style.display = "none";
    selectedProductsMobile = [];
});







// Filter-Brand-Desktop...
const selectBtnFilterProductBrand = document.querySelector(".select-btn-filter-brand");
let itemsButtonFilterProductBrand = document.querySelectorAll(".item__filter-brand");
let listItemsFilterBrand = document.querySelector('.list-items-filter-brand');
let isBrandItems = false;
let selectedProductBrand = [];


function addClickListenersToProductsBrand() {
    const productsBrand = document.querySelectorAll(".list-items-filter-brand .item__filter-brand");
    productsBrand.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");
            updateSelectedProductsBrand();
        });
    });
}

function updateSelectedProductsBrand() {

    selectedProductBrand = [];
    const checkedProducts = document.querySelectorAll(".list-items-filter-brand .item__filter-brand.checked");
    checkedProducts.forEach(item => {
        selectedProductBrand.push(item);
    });


    const clearButtonFilterBrand = document.getElementById("clearButtonFilterBrand");
    if (selectedProductBrand.length > 0) {
        clearButtonFilterBrand.style.display = "block";
    } else {
        clearButtonFilterBrand.style.display = "none";
    }
}


async function loadCategoriesBrand() {
    try {
        const res = await fetch(`${baseUrl}/${getAllBrend}`);
        if (!res.ok) {
            throw new Error("Something went wrong");
        }

        const data = await res.json();
        const manufacturerBrands = data?.manufacturerBrands
        manufacturerBrands.forEach((manufacturerBrand) => {
            const html = `  
            <li class="item item__filter-brand d-flex justify-content-between align-items-center">
            <span class="item-text">${manufacturerBrand.name}</span>
            <span class="checkbox">
                <i class="fa-solid fa-check check-icon"></i>
            </span>
            </li>
            `
            listItemsFilterBrand.insertAdjacentHTML("afterbegin", html);
        })


        addClickListenersToProductsBrand();

        isBrandItems = true;
    } catch (err) {
        console.log(err.message);
    }
}


selectBtnFilterProductBrand.addEventListener("click", () => {
    selectBtnFilterProductBrand.classList.toggle("open");

    if (!isBrandItems) {
        loadCategoriesBrand();
    }
});

const clearButtonFilterBrand = document.getElementById("clearButtonFilterBrand");
clearButtonFilterBrand.addEventListener("click", () => {
    const checkedProducts = document.querySelectorAll(".list-items-filter-brand .item__filter-brand.checked");
    checkedProducts.forEach(item => {
        item.classList.remove("checked");
    });
    clearButtonFilterBrand.style.display = "none";
});




// Filter-Brand-Mobile...
let filterBrandsMobile = document.querySelectorAll(".list-items-for-category .item_brand_mobile");
let clearButtonFilterBrandMobile = document.getElementById("clearButtonFilterBrandMobile");
let closeButtonFilterBrandMobile = document.getElementById("closeButtonFilterBrandMobile");
let selectedBrandMobile = [];
let isBrandMobile = false
let brandMobile = document.querySelector('.brand-mobile');

document.addEventListener('DOMContentLoaded', async function () {
    if (!isBrandMobile) {
        try {
            const res = await fetch(
                `${baseUrl}/${getAllBrend}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const manufacturerBrands = data?.manufacturerBrands
            manufacturerBrands.forEach((manufacturerBrand) => {
                const html = `  
                <li class="item item__filter-product d-flex justify-content-between align-items-center item_brand_mobile">
                <span class="item-subtext">${manufacturerBrand?.name}</span>

                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
                </li>
                `
                brandMobile.insertAdjacentHTML("beforeend", html);
            })
            isBrandMobile = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});

filterBrandsMobile.forEach(function (brand) {
    brand.addEventListener("click", function () {
        if (selectedBrandMobile.includes(brand)) {
            brand.classList.remove("checked");
            selectedBrandMobile = selectedBrandMobile.filter(function (selectedBrandMobile) {
                return selectedBrandMobile !== brand;
            });
        } else {
            brand.classList.add("checked");
            selectedBrandMobile.push(brand);
        }

        if (selectedBrandMobile.length > 0) {
            clearButtonFilterBrandMobile.style.display = "block";
        } else {
            clearButtonFilterBrandMobile.style.display = "none";
        }
    });
});

clearButtonFilterBrandMobile.addEventListener("click", function () {
    selectedBrandMobile.forEach(function (selectedBrandMobile) {
        selectedBrandMobile.classList.remove("checked");
    });
    clearButtonFilterBrandMobile.style.display = "none";
    selectedBrandMobile = [];
});







// Filter-Type-Desktop...
const selectBtnFilterProductType = document.querySelector(".select-btn-filter-type");
let itemsButtonFilterProductType = document.querySelectorAll(".item__filter-type");
let listItemsFilterType = document.querySelector('.list-items-filter-type');
let isPersonTypeLoading = false;
let selectedProductType = [];



function addClickListenersToProductsType() {
    const productsType = document.querySelectorAll(".list-items-filter-type .item__filter-type");
    productsType.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");
            updateSelectedProductsType();
        });
    });
}

function updateSelectedProductsType() {

    selectedProductType = [];
    const checkedProducts = document.querySelectorAll(".list-items-filter-type .item__filter-type.checked");
    checkedProducts.forEach(item => {
        selectedProductType.push(item);
    });


    const clearButtonFilterType = document.getElementById("clearButtonFilterType");
    if (selectedProductType.length > 0) {
        clearButtonFilterType.style.display = "block";
    } else {
        clearButtonFilterType.style.display = "none";
    }
}



async function loadCategoriesType() {
    try {
        const res = await fetch(`${baseUrl}/${getCategoryFeature}`);
        if (!res.ok) {
            throw new Error("Something went wrong");
        }

        const data = await res.json();
        const categoriesType = data.getFeaturesResponse[13].featureResponseDtos[0].keywords;
        categoriesType.forEach((categoryType) => {
            const categoryTypeName = categoryType?.key;
            const html = `
                <li class="item item__filter-type d-flex justify-content-between align-items-center">
                    <span class="item-text">${categoryTypeName}</span>
                    <span class="checkbox">
                        <i class="fa-solid fa-check check-icon"></i>
                    </span>
                </li>
            `;
            listItemsFilterType.insertAdjacentHTML("afterbegin", html);
        });


        addClickListenersToProductsType();

        isPersonTypeLoading = true;
    } catch (err) {
        console.log(err.message);
    }
}


selectBtnFilterProductType.addEventListener("click", () => {
    selectBtnFilterProductType.classList.toggle("open");

    if (!isPersonTypeLoading) {
        loadCategoriesType();
    }
});

const clearButtonFilterType = document.getElementById("clearButtonFilterType");
clearButtonFilterType.addEventListener("click", () => {
    const checkedProducts = document.querySelectorAll(".list-items-filter-type .item__filter-type.checked");
    checkedProducts.forEach(item => {
        item.classList.remove("checked");
    });
    clearButtonFilterType.style.display = "none";
});







// Filter-Type-Mobile...
let filterTypeMobile = document.querySelectorAll(".list-items-for-category .item_type_mobile");
let clearButtonFilterTypeMobile = document.getElementById("clearButtonFilterTypeMobile");
let closeButtonFilterTypeMobile = document.getElementById("closeButtonFilterTypeMobile");
let selectedTypeMobile = [];
let isTypeLoadingMobile = false;
let personTypeMobile = document.querySelector('.personTypeMobile');

document.addEventListener('DOMContentLoaded', async function () {
    if (!isTypeLoadingMobile) {
        try {
            const res = await fetch(
                `${baseUrl}/${getCategoryFeature}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const categoriesType = data.getFeaturesResponse[13].featureResponseDtos[0].keywords
            categoriesType.forEach((categoryType) => {
                const categoryTypeName = categoryType?.key;
                const html = `
                <li class="item item__filter-product d-flex justify-content-between align-items-center item_type_mobile">
                <span class="item-subtext">${categoryTypeName}</span>

                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
            </li>
                `;
                personTypeMobile.insertAdjacentHTML("beforeend", html);
            })
            isTypeLoadingMobile = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});

filterTypeMobile.forEach(function (type) {
    type.addEventListener("click", function () {
        if (selectedTypeMobile.includes(type)) {
            type.classList.remove("checked");
            selectedTypeMobile = selectedTypeMobile.filter(function (selectedTypeMobile) {
                return selectedTypeMobile !== type;
            });
        } else {
            type.classList.add("checked");
            selectedTypeMobile.push(type);
        }

        if (selectedTypeMobile.length > 0) {
            clearButtonFilterTypeMobile.style.display = "block";
        } else {
            clearButtonFilterTypeMobile.style.display = "none";
        }
    });
});

clearButtonFilterTypeMobile.addEventListener("click", function () {
    selectedTypeMobile.forEach(function (selectedTypeMobile) {
        selectedTypeMobile.classList.remove("checked");
    });
    clearButtonFilterTypeMobile.style.display = "none";
    selectedTypeMobile = [];
});
















// Filter-Size-Desktop...
const selectBtnFilterProductSize = document.querySelector(".select-btn-filter-size");
// itemsButtonFilterProductSize = document.querySelectorAll(".item__filter-size");

selectBtnFilterProductSize.addEventListener("click", () => {
    selectBtnFilterProductSize.classList.toggle("open");
});

// itemsButtonFilterProductSize.forEach(item => {
//     item.addEventListener("click", () => {
//         item.classList.toggle("checked");
//     });
// });



// Filter-Size-Width-Desktop...
const rangeInputWidth = document.querySelectorAll(".filterSize_WidthRange input"),
    priceInputWidth = document.querySelectorAll(".filterSize_WidthPriceInput input"),
    rangeWidth = document.querySelector(".filterSize_WidthSlider .progress");
let priceGap = 1000;



priceInputWidth.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInputWidth[0].value),
            maxPrice = parseInt(priceInputWidth[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInputWidth[1].max) {
            if (e.target.className === "input-min") {
                rangeInputWidth[0].value = minPrice;
                rangeWidth.style.left = ((minPrice / rangeInputWidth[0].max) * 100) + "%";
            } else {
                rangeInputWidth[1].value = maxPrice;
                rangeWidth.style.right = 100 - (maxPrice / rangeInputWidth[1].max) * 100 + "%";
            }
        }
    });
});

rangeInputWidth.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInputWidth[0].value),
            maxVal = parseInt(rangeInputWidth[1].value);

        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInputWidth[0].value = maxVal - priceGap
            } else {
                rangeInputWidth[1].value = minVal + priceGap;
            }
        } else {
            priceInputWidth[0].value = minVal;
            priceInputWidth[1].value = maxVal;
            rangeWidth.style.left = ((minVal / rangeInputWidth[0].max) * 100) + "%";
            rangeWidth.style.right = 100 - (maxVal / rangeInputWidth[1].max) * 100 + "%";
        }
    });
});



// Filter-Size-Width-Mobile...
const rangeInputWidthMobile = document.querySelectorAll(".filterSize_WidthRangeMobile input"),
    priceInputWidthMobile = document.querySelectorAll(".filterSize_WidthPriceInputMobile input"),
    rangeWidthMobile = document.querySelector(".filterSize_WidthSliderMobile .progress");
let priceGapMobile = 1000;



priceInputWidthMobile.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInputWidthMobile[0].value),
            maxPrice = parseInt(priceInputWidthMobile[1].value);

        if ((maxPrice - minPrice >= priceGapMobile) && maxPrice <= rangeInputWidthMobile[1].max) {
            if (e.target.className === "input-min") {
                rangeInputWidthMobile[0].value = minPrice;
                rangeWidthMobile.style.left = ((minPrice / rangeInputWidthMobile[0].max) * 100) + "%";
            } else {
                rangeInputWidthMobile[1].value = maxPrice;
                rangeWidthMobile.style.right = 100 - (maxPrice / rangeInputWidthMobile[1].max) * 100 + "%";
            }
        }
    });
});

rangeInputWidthMobile.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInputWidthMobile[0].value),
            maxVal = parseInt(rangeInputWidthMobile[1].value);

        if ((maxVal - minVal) < priceGapMobile) {
            if (e.target.className === "range-min") {
                rangeInputWidthMobile[0].value = maxVal - priceGapMobile
            } else {
                rangeInputWidthMobile[1].value = minVal + priceGapMobile;
            }
        } else {
            priceInputWidthMobile[0].value = minVal;
            priceInputWidthMobile[1].value = maxVal;
            rangeWidthMobile.style.left = ((minVal / rangeInputWidthMobile[0].max) * 100) + "%";
            rangeWidthMobile.style.right = 100 - (maxVal / rangeInputWidthMobile[1].max) * 100 + "%";
        }
    });
});



// Filter-Size-Length-Desktop...
const rangeInputLength = document.querySelectorAll(".filterSize_LengthRange input"),
    priceInputLength = document.querySelectorAll(".filterSize_LengthPriceInput input"),
    rangeLength = document.querySelector(".filterSize_LengthSlider .progress");
let priceGapLength = 1000;

priceInputLength.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInputLength[0].value),
            maxPrice = parseInt(priceInputLength[1].value);

        if ((maxPrice - minPrice >= priceGapLength) && maxPrice <= rangeInputLength[1].max) {
            if (e.target.className === "input-min") {
                rangeInputLength[0].value = minPrice;
                rangeLength.style.left = ((minPrice / rangeInputLength[0].max) * 100) + "%";
            } else {
                rangeInputLength[1].value = maxPrice;
                rangeLength.style.right = 100 - (maxPrice / rangeInputLength[1].max) * 100 + "%";
            }
        }
    });
});

rangeInputLength.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInputLength[0].value),
            maxVal = parseInt(rangeInputLength[1].value);

        if ((maxVal - minVal) < priceGapLength) {
            if (e.target.className === "range-min") {
                rangeInputLength[0].value = maxVal - priceGapLength
            } else {
                rangeInputLength[1].value = minVal + priceGapLength;
            }
        } else {
            priceInputLength[0].value = minVal;
            priceInputLength[1].value = maxVal;
            rangeLength.style.left = ((minVal / rangeInputLength[0].max) * 100) + "%";
            rangeLength.style.right = 100 - (maxVal / rangeInputLength[1].max) * 100 + "%";
        }
    });
});


// Filter-Size-Length-Mobile...
const rangeInputLengthMobile = document.querySelectorAll(".filterSize_LengthRangeMobile input"),
    priceInputLengthMobile = document.querySelectorAll(".filterSize_LengthPriceInputMobile input"),
    rangeLengthMobile = document.querySelector(".filterSize_LengthSliderMobile .progress");
let priceGapLengthMobile = 1000;



priceInputLengthMobile.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInputLengthMobile[0].value),
            maxPrice = parseInt(priceInputLengthMobile[1].value);

        if ((maxPrice - minPrice >= priceGapLengthMobile) && maxPrice <= rangeInputLengthMobile[1].max) {
            if (e.target.className === "input-min") {
                rangeInputLengthMobile[0].value = minPrice;
                rangeLengthMobile.style.left = ((minPrice / rangeInputLengthMobile[0].max) * 100) + "%";
            } else {
                rangeInputLengthMobile[1].value = maxPrice;
                rangeLengthMobile.style.right = 100 - (maxPrice / rangeInputLengthMobile[1].max) * 100 + "%";
            }
        }
    });
});

rangeInputLengthMobile.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInputLengthMobile[0].value),
            maxVal = parseInt(rangeInputLengthMobile[1].value);

        if ((maxVal - minVal) < priceGapLengthMobile) {
            if (e.target.className === "range-min") {
                rangeInputLengthMobile[0].value = maxVal - priceGapLengthMobile
            } else {
                rangeInputLengthMobile[1].value = minVal + priceGapLengthMobile;
            }
        } else {
            priceInputLengthMobile[0].value = minVal;
            priceInputLengthMobile[1].value = maxVal;
            rangeLengthMobile.style.left = ((minVal / rangeInputLengthMobile[0].max) * 100) + "%";
            rangeLengthMobile.style.right = 100 - (maxVal / rangeInputLengthMobile[1].max) * 100 + "%";
        }
    });
});


// Filter-Size-Height-Desktop...
const rangeInputHeight = document.querySelectorAll(".filterSize_HeightRange input"),
    priceInputHeight = document.querySelectorAll(".filterSize_HeightPriceInput input"),
    rangeHeight = document.querySelector(".filterSize_HeightSlider .progress");
let priceGapHeight = 1000;

priceInputHeight.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInputHeight[0].value),
            maxPrice = parseInt(priceInputHeight[1].value);

        if ((maxPrice - minPrice >= priceGapHeight) && maxPrice <= rangeInputHeight[1].max) {
            if (e.target.className === "input-min") {
                rangeInputHeight[0].value = minPrice;
                rangeHeight.style.left = ((minPrice / rangeInputHeight[0].max) * 100) + "%";
            } else {
                rangeInputHeight[1].value = maxPrice;
                rangeHeight.style.right = 100 - (maxPrice / rangeInputHeight[1].max) * 100 + "%";
            }
        }
    });
});

rangeInputHeight.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInputHeight[0].value),
            maxVal = parseInt(rangeInputHeight[1].value);

        if ((maxVal - minVal) < priceGapHeight) {
            if (e.target.className === "range-min") {
                rangeInputHeight[0].value = maxVal - priceGapHeight
            } else {
                rangeInputHeight[1].value = minVal + priceGapHeight;
            }
        } else {
            priceInputHeight[0].value = minVal;
            priceInputHeight[1].value = maxVal;
            rangeHeight.style.left = ((minVal / rangeInputHeight[0].max) * 100) + "%";
            rangeHeight.style.right = 100 - (maxVal / rangeInputHeight[1].max) * 100 + "%";
        }
    });
});



// Filter-Size-Height-Mobile...
const rangeInputHeightMobile = document.querySelectorAll(".filterSize_HeightRangeMobile input"),
    priceInputHeightMobile = document.querySelectorAll(".filterSize_HeightPriceInputMobile input"),
    rangeHeightMobile = document.querySelector(".filterSize_HeightSliderMobile .progress");
let priceGapHeightMobile = 1000;



priceInputHeightMobile.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInputHeightMobile[0].value),
            maxPrice = parseInt(priceInputHeightMobile[1].value);

        if ((maxPrice - minPrice >= priceGapHeightMobile) && maxPrice <= rangeInputHeightMobile[1].max) {
            if (e.target.className === "input-min") {
                rangeInputHeightMobile[0].value = minPrice;
                rangeHeightMobile.style.left = ((minPrice / rangeInputHeightMobile[0].max) * 100) + "%";
            } else {
                rangeInputHeightMobile[1].value = maxPrice;
                rangeHeightMobile.style.right = 100 - (maxPrice / rangeInputHeightMobile[1].max) * 100 + "%";
            }
        }
    });
});

rangeInputHeightMobile.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInputHeightMobile[0].value),
            maxVal = parseInt(rangeInputHeightMobile[1].value);

        if ((maxVal - minVal) < priceGapHeightMobile) {
            if (e.target.className === "range-min") {
                rangeInputHeightMobile[0].value = maxVal - priceGapHeightMobile
            } else {
                rangeInputHeightMobile[1].value = minVal + priceGapHeightMobile;
            }
        } else {
            priceInputHeightMobile[0].value = minVal;
            priceInputHeightMobile[1].value = maxVal;
            rangeHeightMobile.style.left = ((minVal / rangeInputHeightMobile[0].max) * 100) + "%";
            rangeHeightMobile.style.right = 100 - (maxVal / rangeInputHeightMobile[1].max) * 100 + "%";
        }
    });
});


// Filter-Size-Depth-Desktop...
const rangeInputDepth = document.querySelectorAll(".filterSize_DepthRange input"),
    priceInputDepth = document.querySelectorAll(".filterSize_DepthPriceInput input"),
    rangeDepth = document.querySelector(".filterSize_DepthSlider .progress");
let priceGapDepth = 1000;

priceInputDepth.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInputDepth[0].value),
            maxPrice = parseInt(priceInputDepth[1].value);

        if ((maxPrice - minPrice >= priceGapDepth) && maxPrice <= rangeInputDepth[1].max) {
            if (e.target.className === "input-min") {
                rangeInputDepth[0].value = minPrice;
                rangeDepth.style.left = ((minPrice / rangeInputDepth[0].max) * 100) + "%";
            } else {
                rangeInputDepth[1].value = maxPrice;
                rangeDepth.style.right = 100 - (maxPrice / rangeInputDepth[1].max) * 100 + "%";
            }
        }
    });
});

rangeInputDepth.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInputDepth[0].value),
            maxVal = parseInt(rangeInputDepth[1].value);

        if ((maxVal - minVal) < priceGapDepth) {
            if (e.target.className === "range-min") {
                rangeInputDepth[0].value = maxVal - priceGapDepth
            } else {
                rangeInputDepth[1].value = minVal + priceGapDepth;
            }
        } else {
            priceInputDepth[0].value = minVal;
            priceInputDepth[1].value = maxVal;
            rangeDepth.style.left = ((minVal / rangeInputDepth[0].max) * 100) + "%";
            rangeDepth.style.right = 100 - (maxVal / rangeInputDepth[1].max) * 100 + "%";
        }
    });
});


// Filter-Size-Depth-Mobile...
const rangeInputDepthMobile = document.querySelectorAll(".filterSize_DepthRangeMobile input"),
    priceInputDepthMobile = document.querySelectorAll(".filterSize_DepthPriceInputMobile input"),
    rangeDepthMobile = document.querySelector(".filterSize_DepthSliderMobile .progress");
let priceGapDepthMobile = 1000;



priceInputDepthMobile.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInputDepthMobile[0].value),
            maxPrice = parseInt(priceInputDepthMobile[1].value);

        if ((maxPrice - minPrice >= priceGapDepthMobile) && maxPrice <= rangeInputDepthMobile[1].max) {
            if (e.target.className === "input-min") {
                rangeInputDepthMobile[0].value = minPrice;
                rangeDepthMobile.style.left = ((minPrice / rangeInputDepthMobile[0].max) * 100) + "%";
            } else {
                rangeInputDepthMobile[1].value = maxPrice;
                rangeDepthMobile.style.right = 100 - (maxPrice / rangeInputDepthMobile[1].max) * 100 + "%";
            }
        }
    });
});

rangeInputDepthMobile.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInputDepthMobile[0].value),
            maxVal = parseInt(rangeInputDepthMobile[1].value);

        if ((maxVal - minVal) < priceGapDepthMobile) {
            if (e.target.className === "range-min") {
                rangeInputDepthMobile[0].value = maxVal - priceGapDepthMobile
            } else {
                rangeInputDepthMobile[1].value = minVal + priceGapDepthMobile;
            }
        } else {
            priceInputDepthMobile[0].value = minVal;
            priceInputDepthMobile[1].value = maxVal;
            rangeDepthMobile.style.left = ((minVal / rangeInputDepthMobile[0].max) * 100) + "%";
            rangeDepthMobile.style.right = 100 - (maxVal / rangeInputDepthMobile[1].max) * 100 + "%";
        }
    });
});





// Filter-Material-Desktop...
const selectBtnFilterProductMaterial = document.querySelector(".select-btn-filter-material");
let itemsButtonFilterProductMaterial = document.querySelectorAll(".item__filter-material");
let listItemsFilterMaterial = document.querySelector('.list-items-filter-material');
let isMaterialLoading = false;
let selectedProductMaterial = [];


function addClickListenersToProductsMaterial() {
    const productsMaterial = document.querySelectorAll(".list-items-filter-material .item__filter-material");
    productsMaterial.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");
            updateSelectedProductsMaterial();
        });
    });
}

function updateSelectedProductsMaterial() {

    selectedProductMaterial = [];
    const checkedProducts = document.querySelectorAll(".list-items-filter-material .item__filter-material.checked");
    checkedProducts.forEach(item => {
        selectedProductMaterial.push(item);
    });


    const clearButtonFilterMaterial = document.getElementById("clearButtonFilterMaterial");
    if (selectedProductMaterial.length > 0) {
        clearButtonFilterMaterial.style.display = "block";
    } else {
        clearButtonFilterMaterial.style.display = "none";
    }
}


async function loadCategoriesMaterial() {
    try {
        const res = await fetch(`${baseUrl}/${getAllMaterials}`);
        if (!res.ok) {
            throw new Error("Something went wrong");
        }

        const data = await res.json();
        const materials = data?.materils
        materials.forEach((material) => {
            const materialName = material?.name;
            const html = `  
                <li class="item item__filter-material d-flex justify-content-between align-items-center">
                <span class="item-text">${materialName}</span>
                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
               </li>
            `
            listItemsFilterMaterial.insertAdjacentHTML("afterbegin", html);
        })


        addClickListenersToProductsMaterial();

        isMaterialLoading = true;
    } catch (err) {
        console.log(err.message);
    }
}


selectBtnFilterProductMaterial.addEventListener("click", () => {
    selectBtnFilterProductMaterial.classList.toggle("open");

    if (!isMaterialLoading) {
        loadCategoriesMaterial();
    }
});

const clearButtonFilterMaterial = document.getElementById("clearButtonFilterMaterial");
clearButtonFilterMaterial.addEventListener("click", () => {
    const checkedProducts = document.querySelectorAll(".list-items-filter-material .item__filter-material.checked");
    checkedProducts.forEach(item => {
        item.classList.remove("checked");
    });
    clearButtonFilterMaterial.style.display = "none";
});





// Filter-Material-Mobile...
let filterMaterialMobile = document.querySelectorAll(".list-items-for-category .item_material_mobile");
let clearButtonFilterMaterialMobile = document.getElementById("clearButtonFilterMaterialMobile");
let closeButtonFilterMaterialMobile = document.getElementById("closeButtonFilterMaterialMobile");
let selectedMaterialMobile = [];

filterMaterialMobile.forEach(function (material) {
    material.addEventListener("click", function () {
        if (selectedMaterialMobile.includes(material)) {
            material.classList.remove("checked");
            selectedMaterialMobile = selectedMaterialMobile.filter(function (selectedMaterialMobile) {
                return selectedMaterialMobile !== material;
            });
        } else {
            material.classList.add("checked");
            selectedMaterialMobile.push(material);
        }

        if (selectedMaterialMobile.length > 0) {
            clearButtonFilterMaterialMobile.style.display = "block";
        } else {
            clearButtonFilterMaterialMobile.style.display = "none";
        }
    });
});

clearButtonFilterMaterialMobile.addEventListener("click", function () {
    selectedMaterialMobile.forEach(function (selectedMaterialMobile) {
        selectedMaterialMobile.classList.remove("checked");
    });
    clearButtonFilterMaterialMobile.style.display = "none";
    selectedMaterialMobile = [];
});




// Filter-Design-Desktop...
const selectBtnFilterProductDesign = document.querySelector(".select-btn-filter-design");
let itemsButtonFilterProductDesign = document.querySelectorAll(".item__filter-design");
let listItemsFilterDesign = document.querySelector('.list-items-filter-design');
let isDesignLoading = false;
let selectedProductDesign = [];


function addClickListenersToProductsDesign() {
    const productsDesign = document.querySelectorAll(".list-items-filter-design .item__filter-design");
    productsDesign.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");
            updateSelectedProductsDesign();
        });
    });
}

function updateSelectedProductsDesign() {

    selectedProductDesign = [];
    const checkedProducts = document.querySelectorAll(".list-items-filter-design .item__filter-design.checked");
    checkedProducts.forEach(item => {
        selectedProductDesign.push(item);
    });


    const clearButtonFilterDesign = document.getElementById("clearButtonFilterDesign");
    if (selectedProductDesign.length > 0) {
        clearButtonFilterDesign.style.display = "block";
    } else {
        clearButtonFilterDesign.style.display = "none";
    }
}


async function loadCategoriesDesign() {
    try {
        const res = await fetch(`${baseUrl}/${getAllDesignsStyles}`);
        if (!res.ok) {
            throw new Error("Something went wrong");
        }

        const data = await res.json();
        const styleOfDesigns = data?.styleOfDesigns
        styleOfDesigns.forEach((styleOfDesign) => {
            const styleOfDesignName = styleOfDesign?.name;
            const html = `  
                <li class="item item__filter-design d-flex justify-content-between align-items-center">
                <span class="item-text">${styleOfDesignName}</span>
                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
                </li>
                `
            listItemsFilterDesign.insertAdjacentHTML("afterbegin", html);
        })


        addClickListenersToProductsDesign();

        isDesignLoading = true;
    } catch (err) {
        console.log(err.message);
    }
}


selectBtnFilterProductDesign.addEventListener("click", () => {
    selectBtnFilterProductDesign.classList.toggle("open");

    if (!isDesignLoading) {
        loadCategoriesDesign();
    }
});

const clearButtonFilterDesign = document.getElementById("clearButtonFilterDesign");
clearButtonFilterDesign.addEventListener("click", () => {
    const checkedProducts = document.querySelectorAll(".list-items-filter-design .item__filter-design.checked");
    checkedProducts.forEach(item => {
        item.classList.remove("checked");
    });
    clearButtonFilterDesign.style.display = "none";
});









// Filter-Design-Mobile...
let filterDesignMobile = document.querySelectorAll(".list-items-for-category .item_design_mobile");
let clearButtonFilterDesignMobile = document.getElementById("clearButtonFilterDesignMobile");
let closeButtonFilterDesignMobile = document.getElementById("closeButtonFilterDesignMobile");
let selectedDesignMobile = [];

filterDesignMobile.forEach(function (design) {
    design.addEventListener("click", function () {
        if (selectedDesignMobile.includes(design)) {
            design.classList.remove("checked");
            selectedDesignMobile = selectedDesignMobile.filter(function (selectedDesignMobile) {
                return selectedDesignMobile !== design;
            });
        } else {
            design.classList.add("checked");
            selectedDesignMobile.push(design);
        }

        if (selectedDesignMobile.length > 0) {
            clearButtonFilterDesignMobile.style.display = "block";
        } else {
            clearButtonFilterDesignMobile.style.display = "none";
        }
    });
});

clearButtonFilterDesignMobile.addEventListener("click", function () {
    selectedDesignMobile.forEach(function (selectedDesignMobile) {
        selectedDesignMobile.classList.remove("checked");
    });
    clearButtonFilterDesignMobile.style.display = "none";
    selectedDesignMobile = [];
});



// Filter-Country-Desktop...
const selectBtnFilterProductCountry = document.querySelector(".select-btn-filter-country");
let itemsButtonFilterProductCountry = document.querySelectorAll(".item__filter-country");
let listItemsFilterCountry = document.querySelector('.list-items-filter-country');
let isCountryLoading = false;
let selectedProductCountry = [];


function addClickListenersToProductsCountry() {
    const productsCountry = document.querySelectorAll(".list-items-filter-country .item__filter-country");
    productsCountry.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");
            updateSelectedProductsCountry();
        });
    });
}


function updateSelectedProductsCountry() {

    selectedProductCountry = [];
    const checkedProducts = document.querySelectorAll(".list-items-filter-country .item__filter-country.checked");
    checkedProducts.forEach(item => {
        selectedProductCountry.push(item);
    });


    const clearButtonFilterCountry = document.getElementById("clearButtonFilterCountry");
    if (selectedProductCountry.length > 0) {
        clearButtonFilterCountry.style.display = "block";
    } else {
        clearButtonFilterCountry.style.display = "none";
    }
}


async function loadCategoriesCountry() {
    try {
        const res = await fetch(`${baseUrl}/${getAllCountry}`);
        if (!res.ok) {
            throw new Error("Something went wrong");
        }

        const data = await res.json();
        const countries = data?.countries
        countries.forEach((country) => {
            const countryName = country?.name;
            const html = `  
            <li class="item item__filter-country d-flex justify-content-between align-items-center">
                <span class="item-text">${countryName}</span>
                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
            </li>
            `
            listItemsFilterCountry.insertAdjacentHTML("afterbegin", html);
        })


        addClickListenersToProductsCountry();

        isCountryLoading = true;
    } catch (err) {
        console.log(err.message);
    }
}


selectBtnFilterProductCountry.addEventListener("click", () => {
    selectBtnFilterProductCountry.classList.toggle("open");

    if (!isCountryLoading) {
        loadCategoriesCountry();
    }
});

const clearButtonFilterCountry = document.getElementById("clearButtonFilterCountry");
clearButtonFilterCountry.addEventListener("click", () => {
    const checkedProducts = document.querySelectorAll(".list-items-filter-country .item__filter-country.checked");
    checkedProducts.forEach(item => {
        item.classList.remove("checked");
    });
    clearButtonFilterCountry.style.display = "none";
});






// Filter-Country-Mobile...
let filterCountryMobile = document.querySelectorAll(".list-items-for-category .item_country_mobile");
let clearButtonFilterCountryMobile = document.getElementById("clearButtonFilterCountryMobile");
let closeButtonFilterCountryMobile = document.getElementById("closeButtonFilterCountryMobile");
let selectedCountryMobile = [];

filterCountryMobile.forEach(function (country) {
    country.addEventListener("click", function () {
        if (selectedCountryMobile.includes(country)) {
            country.classList.remove("checked");
            selectedCountryMobile = selectedCountryMobile.filter(function (selectedCountryMobile) {
                return selectedCountryMobile !== country;
            });
        } else {
            country.classList.add("checked");
            selectedCountryMobile.push(country);
        }

        if (selectedCountryMobile.length > 0) {
            clearButtonFilterCountryMobile.style.display = "block";
        } else {
            clearButtonFilterCountryMobile.style.display = "none";
        }
    });
});

clearButtonFilterCountryMobile.addEventListener("click", function () {
    selectedCountryMobile.forEach(function (selectedCountryMobile) {
        selectedCountryMobile.classList.remove("checked");
    });
    clearButtonFilterCountryMobile.style.display = "none";
    selectedCountryMobile = [];
});




// Filter - List - Desktop...
const selectBtnList = document.querySelector(".select-btn-list-item"),
    itemsButtonList = document.querySelectorAll(".item_button-list");

selectBtnList.addEventListener("click", () => {
    selectBtnList.classList.toggle("open");
});

itemsButtonList.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    });
});


// SORTING A-Z
let sortBtnAZ = document.querySelector('#sortBtnAZ');
sortBtnAZ.addEventListener('click', async () => {
    function compareCategoryNames(a, b) {
        const nameA = a.category.name.toLowerCase();
        const nameB = b.category.name.toLowerCase();

        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        } else {
            return 0;
        }
    }
    adverts.sort(compareCategoryNames);
    displayAdverts();
    console.log(adverts)
})



// SORTING Z-A
let sortBtnZA = document.querySelector('#sortBtnZA');
sortBtnZA.addEventListener('click', async () => {
    function compareCategoryNamesDesc(a, b) {
        const nameA = a.category.name.toLowerCase();
        const nameB = b.category.name.toLowerCase();

        if (nameA < nameB) {
            return 1;
        } else if (nameA > nameB) {
            return -1;
        } else {
            return 0;
        }
    }
    adverts.sort(compareCategoryNamesDesc);
    displayAdverts();
    console.log(adverts);
});



// From cheap to expensive
let cheapToExpensive = document.querySelector('#cheapToExpensive');
cheapToExpensive.addEventListener('click', async () => {
    function priceCheapToExpensive(a, b) {
        const nameA = a.price;
        const nameB = b.price;

        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        } else {
            return 0;
        }
    }
    adverts.sort(priceCheapToExpensive);
    displayAdverts();
    console.log(adverts);
});


// From expensive to cheap
let expensiveToCheap = document.querySelector('#expensiveToCheap');
expensiveToCheap.addEventListener('click', async () => {
    function priceExpensiveToCheap(a, b) {
        const nameA = a.price;
        const nameB = b.price;

        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        } else {
            return 0;
        }
    }
    adverts.sort(priceExpensiveToCheap);
    displayAdverts();
    console.log(adverts);
});




// Filter - List - Mobile...
const selectBtnListMobile = document.querySelector(".select-btn-list-item-mobile"),
    itemsButtonListMobile = document.querySelectorAll(".item_button-list-mobile");

selectBtnListMobile.addEventListener("click", () => {
    selectBtnListMobile.classList.toggle("open");
});

itemsButtonListMobile.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    });
});



// Filter - City - Desktop....
const selectBtnCity = document.querySelector(".select-btn-city");
let itemsCity = document.querySelectorAll(".item_city");
let listItemsFilterCity = document.querySelector('.list-items-city-desktop');
let isCityLoading = false;
let selectedProductCity = [];
let selectedCityIds = [];



// function addClickListenersToProductsCity() {
//     const productsCity = document.querySelectorAll(".list-items-city-desktop .item_city");

//     const liElement = document.querySelector('.item_city');
//     let cityId = liElement.getAttribute('data-id');

//     productsCity.forEach(item => {
//         item.addEventListener("click", () => {
//             item.classList.toggle("checked");
//             updateSelectedProductsCity();

//             if (item.classList.contains("checked")) {
//                 selectedCityIds.push(cityId);
//                 console.log(selectedCityIds);
//                 handleFilterCities();
//                 displayAdverts();
//             } else {
//                 selectedCityIds = selectedCityIds.filter(id => id !== cityId);
//                 handleFilterCities();
//                 displayAdverts();
//             }

//         });
//     });
// }


function addClickListenersToProductsCity() {
    const productsCity = document.querySelectorAll(".list-items-city-desktop .item_city");

    productsCity.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");
            updateSelectedProductsCity();
            console.log(item)

            const cityId = item.getAttribute('data-id'); 

            if (item.classList.contains("checked")) {
                selectedCityIds.push(cityId);
                handleFilterCities();
                displayAdverts();
                console.log(selectedCityIds);
            } else {
                selectedCityIds = selectedCityIds.filter(id => id !== cityId);
                handleFilterCities();
                displayAdverts();
            }
        });
    });
}


function updateSelectedProductsCity() {

    selectedProductCity = [];
    const checkedProducts = document.querySelectorAll(".list-items-city-desktop .item_city.checked");
    checkedProducts.forEach(item => {
        selectedProductCity.push(item);
    });


    const clearButtonFilterCity = document.getElementById("clearButtonFilterCity");
    if (selectedProductCity.length > 0) {
        clearButtonFilterCity.style.display = "block";
    } else {
        clearButtonFilterCity.style.display = "none";
    }
}


async function loadCategoriesCity() {
    try {
        const res = await fetch(`${baseUrl}/${getAllCities}`);
        if (!res.ok) {
            throw new Error("Something went wrong");
        }

        const data = await res.json();
        const cities = data?.cities
        cities.forEach((city) => {
            const cityName = city?.name;
            const cityId = city?.id;
            const html = `  
                <li class="item item_city d-flex justify-content-between align-items-center" data-id=${cityId}>
                    <span class="item-text">${cityName}</span>
                    <span class="checkbox">
                        <i class="fa-solid fa-check check-icon"></i>
                    </span>
                </li> 
                `
            listItemsFilterCity.insertAdjacentHTML("afterbegin", html);
        })


        addClickListenersToProductsCity();

        isCityLoading = true;
    } catch (err) {
        console.log(err.message);
    }
}


selectBtnCity.addEventListener("click", () => {
    selectBtnCity.classList.toggle("open");

    if (!isCityLoading) {
        loadCategoriesCity();
    }
});

const clearButtonFilterCity = document.getElementById("clearButtonFilterCity");
clearButtonFilterCity.addEventListener("click", () => {
    const checkedProducts = document.querySelectorAll(".list-items-city-desktop .item_city.checked");
    checkedProducts.forEach(item => {
        item.classList.remove("checked");
    });
    clearButtonFilterCity.style.display = "none";
});




// Filter - City - Mobile....
let filterCityMobile = document.querySelectorAll(".list-items-for-category .item_city_mobile");
let clearButtonFilterCityMobile = document.getElementById("clearButtonFilterCityMobile");
let closeButtonFilterCityMobile = document.getElementById("closeButtonFilterCityMobile");
let selectedCityMobile = [];

filterCityMobile.forEach(function (city) {
    city.addEventListener("click", function () {
        if (selectedCityMobile.includes(city)) {
            city.classList.remove("checked");
            selectedCityMobile = selectedCityMobile.filter(function (selectedCityMobile) {
                return selectedCityMobile !== city;
            });
        } else {
            city.classList.add("checked");
            selectedCityMobile.push(city);
        }

        if (selectedCityMobile.length > 0) {
            clearButtonFilterCityMobile.style.display = "block";
        } else {
            clearButtonFilterCityMobile.style.display = "none";
        }
    });
});

clearButtonFilterCityMobile.addEventListener("click", function () {
    selectedCityMobile.forEach(function (selectedCityMobile) {
        selectedCityMobile.classList.remove("checked");
    });
    clearButtonFilterCityMobile.style.display = "none";
    selectedCityMobile = [];
});




// Filter - Price - Desktop...
const selectBtnPrice = document.querySelector(".select-btn-price");
let itemsPrice = document.querySelectorAll(".item_price");
let listItemsFilterPrice = document.querySelector('.list-items-price-desktop');
let isPriceLoading = false;
let selectedProductPrice = [];


function addClickListenersToProductsPrice() {
    const productsPrice = document.querySelectorAll(".list-items-price-desktop .item_price");
    productsPrice.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");
            updateSelectedProductsPrice();
        });
    });
}


function updateSelectedProductsPrice() {

    selectedProductPrice = [];
    const checkedProducts = document.querySelectorAll(".list-items-price-desktop .item_price.checked");
    checkedProducts.forEach(item => {
        selectedProductPrice.push(item);
    });


    const clearButtonFilterPrice = document.getElementById("clearButtonFilterPrice");
    if (selectedProductPrice.length > 0) {
        clearButtonFilterPrice.style.display = "block";
    } else {
        clearButtonFilterPrice.style.display = "none";
    }
}


async function loadCategoriesPrice() {
    try {
        const res = await fetch(`${baseUrl}/${getAllPrices}`);
        if (!res.ok) {
            throw new Error("Something went wrong");
        }

        const data = await res.json();
        const costs = data?.cost
        costs.forEach((cost) => {
            const costMin = cost?.minPrice;
            const costMax = cost?.maxPrice;
            const html = `  
            <li class="item item_price d-flex justify-content-between align-items-center">
                <span class="item-text">${costMin}-${costMax} Azn</span>
                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
            </li>
            `
            listItemsFilterPrice.insertAdjacentHTML("afterbegin", html);
        })


        addClickListenersToProductsPrice();

        isPriceLoading = true;
    } catch (err) {
        console.log(err.message);
    }
}


selectBtnPrice.addEventListener("click", () => {
    selectBtnPrice.classList.toggle("open");

    if (!isPriceLoading) {
        loadCategoriesPrice();
    }
});

const clearButtonFilterPrice = document.getElementById("clearButtonFilterPrice");
clearButtonFilterPrice.addEventListener("click", () => {
    const checkedProducts = document.querySelectorAll(".list-items-price-desktop .item_price.checked");
    checkedProducts.forEach(item => {
        item.classList.remove("checked");
    });
    clearButtonFilterPrice.style.display = "none";
});




// Filter - Price - Mobile...
let filterPriceMobile = document.querySelectorAll(".list-items-for-category .item_price_mobile");
let clearButtonFilterPriceMobile = document.getElementById("clearButtonFilterPriceMobile");
let closeButtonFilterPriceMobile = document.getElementById("closeButtonFilterPriceMobile");
let selectedPriceMobile = [];

filterPriceMobile.forEach(function (price) {
    price.addEventListener("click", function () {
        if (selectedPriceMobile.includes(price)) {
            price.classList.remove("checked");
            selectedPriceMobile = selectedPriceMobile.filter(function (selectedPriceMobile) {
                return selectedPriceMobile !== price;
            });
        } else {
            price.classList.add("checked");
            selectedPriceMobile.push(price);
        }

        if (selectedPriceMobile.length > 0) {
            clearButtonFilterPriceMobile.style.display = "block";
        } else {
            clearButtonFilterPriceMobile.style.display = "none";
        }
    });
});

clearButtonFilterPriceMobile.addEventListener("click", function () {
    selectedPriceMobile.forEach(function (selectedPriceMobile) {
        selectedPriceMobile.classList.remove("checked");
    });
    clearButtonFilterPriceMobile.style.display = "none";
    selectedPriceMobile = [];
});




// Filter - Colour - Desktop...
const selectBtnColour = document.querySelector(".select-btn-colour");
let itemsColour = document.querySelectorAll(".item_colour");
let listItemsFilterColour = document.querySelector('.list-items-colour-desktop');
let isColourLoading = false;
let selectedProductColour = [];



function addClickListenersToProductsColour() {
    const productsColour = document.querySelectorAll(".list-items-colour-desktop .item_colour");
    productsColour.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");
            updateSelectedProductsColour();
        });
    });
}


function updateSelectedProductsColour() {

    selectedProductColour = [];
    const checkedProducts = document.querySelectorAll(".list-items-colour-desktop .item_colour.checked");
    checkedProducts.forEach(item => {
        selectedProductColour.push(item);
    });


    const clearButtonFilterColour = document.getElementById("clearButtonFilterColour");
    if (selectedProductColour.length > 0) {
        clearButtonFilterColour.style.display = "block";
    } else {
        clearButtonFilterColour.style.display = "none";
    }
}


async function loadCategoriesColour() {
    try {
        const res = await fetch(`${baseUrl}/${getAllColors}`);
        if (!res.ok) {
            throw new Error("Something went wrong");
        }

        const data = await res.json();
        console.log(data);
        const colors = data?.colors
        colors.forEach((color) => {
            const colorName = color?.name;
            const colorCode = color?.code;
            const html = `  
                <li class="item item_colour d-flex justify-content-between align-items-center">
                    <span class="item-text">${colorName}</span>
                    <span style='background-color: ${colorCode};width: 10px; height: 10px;'></span>
                    <span class="checkbox">
                        <i class="fa-solid fa-check check-icon"></i>
                    </span> 
                </li>
                `
            listItemsFilterColour.insertAdjacentHTML("afterbegin", html);
        })


        addClickListenersToProductsColour();

        isColourLoading = true;
    } catch (err) {
        console.log(err.message);
    }
}


selectBtnColour.addEventListener("click", () => {
    selectBtnColour.classList.toggle("open");

    if (!isColourLoading) {
        loadCategoriesColour();
    }
});

const clearButtonFilterColour = document.getElementById("clearButtonFilterColour");
clearButtonFilterColour.addEventListener("click", () => {
    const checkedProducts = document.querySelectorAll(".list-items-colour-desktop .item_colour.checked");
    checkedProducts.forEach(item => {
        item.classList.remove("checked");
    });
    clearButtonFilterColour.style.display = "none";
});





// Filter - Colour - Mobile...
let filterColourMobile = document.querySelectorAll(".list-items-for-category .item_colour_mobile");
let clearButtonFilterColourMobile = document.getElementById("clearButtonFilterColourMobile");
let closeButtonFilterColourMobile = document.getElementById("closeButtonFilterColourMobile");
let selectedColourMobile = [];

filterColourMobile.forEach(function (colour) {
    colour.addEventListener("click", function () {
        if (selectedColourMobile.includes(colour)) {
            colour.classList.remove("checked");
            selectedColourMobile = selectedColourMobile.filter(function (selectedColourMobile) {
                return selectedColourMobile !== colour;
            });
        } else {
            colour.classList.add("checked");
            selectedColourMobile.push(colour);
        }

        if (selectedColourMobile.length > 0) {
            clearButtonFilterColourMobile.style.display = "block";
        } else {
            clearButtonFilterColourMobile.style.display = "none";
        }
    });
});

clearButtonFilterColourMobile.addEventListener("click", function () {
    selectedColourMobile.forEach(function (selectedColourMobile) {
        selectedColourMobile.classList.remove("checked");
    });
    clearButtonFilterColourMobile.style.display = "none";
    selectedColourMobile = [];
});










// Filter Mobile...
const selectBtnFilterMobile = document.querySelector(".select-btn-filter-mobile");
const filterBtn = document.querySelector(".filter-right");
const closeBtn = document.querySelector(".filter-close-icon");
// itemsButtonFilterMobile = document.querySelectorAll(".list-items-mobile");

// filterBtn.addEventListener("click", () => {
//     selectBtnFilterMobile.classList.toggle("open");
// });

closeBtn.addEventListener("click", () => {
    selectBtnFilterMobile.classList.remove("open");
});

selectBtnFilterMobile.addEventListener("click", () => {
    selectBtnFilterMobile.classList.toggle("open");
});

// itemsButtonFilterMobile.forEach(item => {
//     item.addEventListener("click", () => {
//         item.classList.toggle("checked");    
//     });
// });




const itemMobile = document.querySelectorAll('.list-items .item.item-mobile');
const toBack = document.querySelector('.toBack');

for (let i = 0; i < itemMobile.length; i++) {
    itemMobile[i].addEventListener('click', function () {
        toBack.classList.add('active')
        const categoryItems = this.querySelectorAll('.list-items-for-category');
        for (let j = 0; j < categoryItems.length; j++) {
            categoryItems[j].classList.add('active');
            toBack.addEventListener('click', function () {
                categoryItems[j].classList.remove('active');
                toBack.classList.remove('active')
            })
        }
    });
}








// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         const response = await fetch(`${baseUrl}/${getAllAdverts}`);
//         const data = await response.json();
//         const adverts = data?.adverts.reverse();

//         adverts.forEach(advert => {
//             const { price, imagesResponseDto, date, category, cities } = advert;
//             const categoryName = category?.name;
//             const cityName = cities?.[0]?.name;

//             const swiperSlides = imagesResponseDto.map(img => `
//                 <div class="swiper-slide">
//                     <img src="${img?.path}" class="image-sizes" alt="product-image-one">
//                 </div>
//             `).join('');

//             const html = `
//                 <div class="swiper-slide">
//                     <div class="product-item">
//                         <figure>
//                             <div class="swiper">
//                                 <div class="slide-content-item__end">
//                                     <div class="swiper-wrapper">
//                                         ${swiperSlides}
//                                     </div>
//                                     <div class="swiper-button-next-item swiper-navBtn"></div>
//                                     <div class="swiper-button-prev-item swiper-navBtn"></div>
//                                 </div>
//                             </div>
//                         </figure>
//                         <span class="product-icon"><i class="fa-regular fa-heart fa-2xl" onclick="toggleHeart(this)"></i></span>
//                     </div>

//                     <div class="product-button">
//                         <button>şirkət</button>
//                     </div>

//                     <div class="product-description">
//                         <ul>
//                             <li>${price} AZN</li>
//                             <li>${categoryName}</li>
//                             <li>${cityName}, ${date}</li>
//                         </ul>
//                     </div>
//                 </div>
//             `;
//             allItemsEnd.insertAdjacentHTML('afterbegin', html);
//         });

//         var swiper = new Swiper(".slide-content-item__end", {
//             slidesPerView: 1,
//             fade: "true",
//             loop: true,
//             navigation: {
//                 nextEl: ".swiper-button-next-item",
//                 prevEl: ".swiper-button-prev-item",
//             },
//         });

//         console.log(allItemsEnd);
//     } catch (error) {
//         console.log(error);
//     }
// });



var swiper_end = new Swiper(".slide-content-end", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        520: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        },
    },
});


var swiper = new Swiper(".slide-content-item", {
    slidesPerView: 1,
    fade: 'true',
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-item",
        prevEl: ".swiper-button-prev-item",
    },
});


function toggleHeart(heartIcon) {
    heartIcon.classList.toggle('red-icon');
}


// GET ALL ADVERTS 
const allItemsEnd = document.querySelector('#allItems_end');
let adverts;

function displayAdverts() {
    allItemsEnd.innerHTML = '';

    adverts.forEach(advert => {
        const { price, imagesResponseDto, date, category, cities } = advert;
        const categoryName = category?.name;
        const cityName = cities?.[0]?.name;

        const swiperSlides = imagesResponseDto.map(img => `
            <div class="swiper-slide">
                <img src="${img?.path}" class="product-image" alt="product-image-one">
            </div>
        `).join('');

        const html = `
            <div class="swiper-slide">
                <div class="product-item">
                    <figure>
                        <div class="swiper">
                            <div class="slide-content-item__end">
                                <div class="swiper-wrapper">
                                    ${swiperSlides}
                                </div>
                                <div class="swiper-button-next-item swiper-navBtn"></div>
                                <div class="swiper-button-prev-item swiper-navBtn"></div>
                            </div>
                        </div>
                    </figure>
                    <span class="product-icon"><i class="fa-regular fa-heart fa-2xl"></i></span>
                </div>

                <div class="product-button">
                    <button>şirkət</button>
                </div>

                <div class="product-description">
                    <ul>
                        <li>${price} AZN</li>
                        <li>${categoryName}</li>
                        <li>${cityName}, ${date}</li>
                    </ul>
                </div>
            </div>
        `;
        allItemsEnd.insertAdjacentHTML('afterbegin', html);
    });

    var swiper = new Swiper(".slide-content-item__end", {
        slidesPerView: 1,
        fade: "true",
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next-item",
            prevEl: ".swiper-button-prev-item",
        },
    });
}





// Display all adverts when the page is loaded
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch(`${baseUrl}/${getAllAdverts}`);
        const data = await response.json();
        adverts = data?.adverts;
        displayAdverts();
    } catch (error) {
        console.log(error);
    }
});



const entrance_mobile_end = document.querySelector('#user__mobile_end');
const entrance_end = document.querySelector('#user-desktop__login_end');
const loginIcon_end = document.querySelector('#icon-desktop_end');
const token_end = localStorage.getItem('token');


if (token_end) {
    entrance_mobile_end.style.display = 'none';
    entrance_end.style.display = 'none';
    loginIcon_end.style.display = 'none';
}


let createAdvertBtn_end = document.getElementById('createAdvertBtn_end');
createAdvertBtn_end.addEventListener('click', function () {
    if (token_end) {
        window.location.href = 'announcement-furniture.html'
    } else {
        window.location.href = 'login.html'
    }
});


let mobileCreateAdvertBtn_end = document.getElementById('mobileCreateAdvertBtn_end');
mobileCreateAdvertBtn_end.addEventListener('click', function () {
    if (token_end) {
        window.location.href = 'announcement-furniture.html'
    } else {
        window.location.href = 'login.html'
    }
});


let createAdvertBtnFooter_end = document.getElementById('createAdvertBtnFooter_end');
createAdvertBtnFooter_end.addEventListener('click', function () {
    if (token_end) {
        window.location.href = 'announcement-furniture.html'
    } else {
        window.location.href = 'login.html'
    }
});



const userLocation_end = document.querySelector('#user_location_end');
const userMobileLocation_end = document.querySelector('#user_mobile_location_end');

userLocation_end.addEventListener('click', function () {
    if (!token_end) {
        window.location.href = 'login.html'
    }
});

userMobileLocation_end.addEventListener('click', function () {
    if (!token_end) {
        window.location.href = 'login.html'
    }
});



const notificationText_end = document.querySelector('#notification_text_end');
const notificationMobileIcon_end = document.querySelector('#user_mobile_notification_end');

notificationText_end.addEventListener('click', function () {
    if (!token_end) {
        window.location.href = 'login.html'
    }
});

notificationMobileIcon_end.addEventListener('click', function () {
    if (!token_end) {
        window.location.href = 'login.html'
    }
});


const selectedText_end = document.querySelector('#selected_text_end');
const selectedMobileIcon_end = document.querySelector('#user_mobile_selected_end');
selectedText_end.addEventListener('click', function () {
    if (!token_end) {
        window.location.href = 'login.html'
    }
});

selectedMobileIcon_end.addEventListener('click', function () {
    if (!token_end) {
        window.location.href = 'login.html'
    }
});



// Scroll Button...
const scrollButtonEnd = document.getElementById("scroll-button_end");
const buttonHeightEnd = scrollButtonEnd.offsetHeight;
const viewportHeightEnd = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
const midViewportEnd = viewportHeightEnd / 2;
const midButtonEnd = buttonHeightEnd / 2;
const maxButtonYEnd = viewportHeightEnd - buttonHeightEnd;
const minButtonYEnd = midViewportEnd - midButtonEnd;
const maxScrollPositionEnd = document.documentElement.scrollHeight - viewportHeightEnd - 500;
let buttonYEnd = 0;

function updateButtonPositionEnd() {
    const currentScrollPositionEnd = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPositionEnd > lastScrollPositionEnd) {
        // scrolling down
        buttonYEnd = Math.min(maxButtonYEnd, buttonYEnd + (currentScrollPositionEnd - lastScrollPositionEnd));
        if (currentScrollPositionEnd < maxScrollPositionEnd) {
            scrollButtonEnd.style.transform = `translate(-50%, ${buttonYEnd}px)`;
        }
    } else {
        // scrolling up
        buttonYEnd = Math.max(0, buttonYEnd - (lastScrollPositionEnd - currentScrollPositionEnd));
        if (currentScrollPositionEnd < maxScrollPositionEnd) {
            scrollButtonEnd.style.transform = `translate(-50%, ${buttonYEnd}px)`;
        }
    }
    lastScrollPositionEnd = currentScrollPositionEnd;
}

let lastScrollPositionEnd = 0;
window.addEventListener("scroll", () => {
    updateButtonPositionEnd();
});












document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector('.fa-solid.fa-search');
    const iconWrapper = document.querySelector('.icon-wrapper'); // Замените на селектор вашего обертывающего элемента
    const inputField = document.querySelector('.search-input'); // Замените на селектор вашего поля ввода

    iconWrapper.addEventListener("click", () => {
        const searchTerm = inputField.value.trim();
        if (searchTerm) {
            sendSearchRequest(searchTerm);
        }
    });
});

// Filter cities
function handleFilterCities() {
    const url = 'http://ruslanali803-001-site1.htempurl.com/api/Search/Filter';

    const data = {
        pagination: {
            page: 0,
            size: 0
        },
        cityIds: selectedCityIds,
        size: {
            "width": 0,
            "length": 0,
            "height": 0,
            "depth": 0
          },
          priceId: "",
          futureId: "",
          countryId: "",
          keyIds: [
            ""
          ],
          colorIds: [
            ""
          ],
          categoryIds: [
            ""
          ],
          materialIds: [
            ""
          ],
          detailStyleOfIds: [
            ""
          ],
          manufacturerBrandIds: [
            ""
          ],
          conditionOfFurniture: [
            ""
          ]
    };


    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            console.log("result", result);
        })
        .catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });
}