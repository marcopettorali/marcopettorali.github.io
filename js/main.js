function updateTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
    }
}
updateTheme();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);



function main() {

    // according to the system theme, change the logo
    $('#logo_unipi').attr('src', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'img/logo_unipi_dark.png' : 'img/logo_unipi_light.png'))
    $('#logo_dii').attr('src', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'img/logo_dii_dark.png' : 'img/logo_dii_light.png'))

    // adjust the favicon
    $('link[rel="icon"]').attr('href', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'img/logo_dii_dark_cropped.png' : 'img/logo_dii_light_cropped.png'))
}

function set_map() {
    // Where you want to render the map.
    var element = document.getElementById('osm-map');

    // Height has to be set. You can do this in CSS too.
    element.style = 'height:300px;';

    // Create Leaflet map on map element.
    var map = L.map(element);

    // Add OSM tile layer to the Leaflet map.
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Target's GPS coordinates.
    var target = L.latLng('43.720746', '10.389542');

    // Set map's center to target with zoom 14.
    map.setView(target, 17);

    // Place a marker on the same location.
    L.marker(target).addTo(map);
}
