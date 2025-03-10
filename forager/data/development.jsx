// data/development.js
const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
};

const warningMessage = {
    warning: {   
        header: "warning",
        icon: "/icons/icon_warning.svg",
        message: "This is a toxic species, proceed with caution.",
        color:"#FF5050"
    },
    attention: {
        header: "attention",
        icon: "/icons/icon_warning.svg",
        message: "Our system can make mistakes! Remember to verify important information and use your own judgement to determine if any mushroom is safe. Be sure to use the “Report Error” button if you suspect a mistake.",
        color:"#FF5050"
    },
    info: {
        header: "",
        icon: "/Group.svg",
        message: "Percentages indicate lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        color:"#6BC591"
    }
};

var mushrooms = {
    mushroom: [
        {
            name: "Death Cap",
            scientific: "Amanita Phalloides",
            favorite: true,
            picture: "/deathcap.png",
            edible: false,
            region: "North America",
            category: "Poisonous",
            capdiam: "5-15cm",
            match: 0.97,
            CapShape: "Flat",
            CapColor: "Yellow",
            CapTexture: "Smooth",
            GillsType: "Free",
            GillsColor: "White",
            StemColor: "White",
            StemShape: "Slender",
            StemRing: "Absent",
            Habitat: "Near Oak/ Beech"
        },
        {
            name: "Paddy Straw",
            scientific: "Volvariella volvacea",
            favorite: false,
            picture: "/paddystraw.png",
            edible: true,
            region: "Asia",
            category: "Good for Broths",
            capdiam: "5-15cm",
            match: 0.90,
            CapShape: "Conical",
            CapColor: "White to Yellow",
            CapTexture: "Smooth",
            GillsType: "Attached",
            GillsColor: "White",
            StemColor: "White",
            StemShape: "Cylindrical",
            StemRing: "Absent",
            Habitat: "Grassy Areas"
        },
        {
            name: "Destroying Angel",
            scientific: "Amanita virosa",
            favorite: false,
            picture: "/destroyingangel.png",
            edible: false,
            region: "Europe",
            category: "Poisonous",
            capdiam: "6-15cm",
            match: 0.80,
            CapShape: "Bell",
            CapColor: "White",
            CapTexture: "Smooth",
            GillsType: "Free",
            GillsColor: "White",
            StemColor: "White",
            StemShape: "Cylindrical",
            StemRing: "Present",
            Habitat: "Forests"
        },
        {
            name: "False Death Cap",
            scientific: "Amanita citrina",
            favorite: false,
            picture: "/falsedeathcap.png",
            edible: false,
            region: "North America",
            category: "Poisonous",
            capdiam: "5-10cm",
            match: 0.70,
            CapShape: "Convex",
            CapColor: "Greenish Yellow",
            CapTexture: "Smooth",
            GillsType: "Free",
            GillsColor: "White",
            StemColor: "White",
            StemShape: "Cylindrical",
            StemRing: "Present",
            Habitat: "Woodlands"
        },
        {
            name: "Puffball", 
            scientific: "Lycoperdon perlatum",
            favorite: false,
            picture: "/puffball.png",
            edible: true,
            region: "North America",
            category: "Good for Broths",
            capdiam: "5-20cm",
            match: 0.60,
            CapShape: "Round",
            CapColor: "White to Tan",
            CapTexture: "Smooth",
            GillsType: "None",
            GillsColor: "None",
            StemColor: "None", // Puffball mushrooms typically don't have a stem
            StemShape: "Absent",
            StemRing: "Absent",
            Habitat: "Grassy Areas"
        }
    ]
}





var Filter = {
    Type: [
        {
            name: "Tags",
            pills: [   
                {name: "Favorites", active: false},
                {name: "Recent", active: false}
            ]
        },
        {
            name: "Regions",
            pills: [
                {name: "Texas", active: false},
                {name: "North America", active: false},
                {name: "South America", active: false},
                {name: "Asia", active: false},
                {name: "Europe", active: false},    
                {name: "Africa", active: false},
            ]
        },
        {
            name: "Category",
            pills: [
                {name: "Poisonous", active: false},
                {name: "Medicinal", active: false},
                {name: "Mythical", active: false},  
                {name: "Good for Broths", active: false},
            ]
        }
    ]
}
// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {warningMessage, dummyData, mushrooms, Filter}; // Requires import {warningMessage, dummyData} from './data/development.js';
