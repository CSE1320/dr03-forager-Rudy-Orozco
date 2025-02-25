// data/development.js
const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
};

const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution."
};

var mushrooms = {
    mushroom: [
        {
            name: "Death Cap",
            favorite: false,
            picture: "/deathcap.png",
            edible: false
        },
        {
            name: "Paddy Straw",
            favorite: false,
            picture: "/paddystraw.png",
            edible: true
        },
        {
            name: "Destroying Angel",
            favorite: false,
            picture: "/destroyingangel.png",
            edible: false
        },
        {
            name: "False Death Cap",
            favorite: false,
            picture: "/falsedeathcap.png",
            edible: false
        },
        {
            name: "Puffball", 
            favorite: true,
            picture: "/puffball.png",
            edible: true
        }
    ]
}

const Filter = {
    Type: [
        {
            name: "Tags",
            pills: ["Favorites", "Recent"]
        },
        {
            name: "Regions",
            pills: ["Texas", "North America", "South America", "Asia", "Europe", "Africa"]
        },
        {
            name: "Category",
            pills: ["Poisonous", "Medicinal", "Mythical", "Good for Broths"]
        }
    ]
}
// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {warningMessage, dummyData, mushrooms, Filter}; // Requires import {warningMessage, dummyData} from './data/development.js';
