function build_nav() {
    var nav = document.getElementById('nav');
    var nav_content = `
    <div class="container-fluid d-flex align-items-center">
            <!-- Brand logo and text -->
            <div class="navbar-brand">
                <a class="navbar-brand" href="https://www.unipi.it/">
                    <img id="logo_unipi" src="img/logo_unipi_dark.png" height="50" alt=""
                        class="d-inline-block align-text-center">
                </a>

                <a class="navbar-brand" href="https://www.dii.unipi.it/">
                    <img id="logo_dii" src="img/logo_dii_dark.png" alt="" height="30"
                        class="d-inline-block align-text-center">
                </a>

            </div>

            <!-- Toggler button for mobile view -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="publications.html">Publications</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="projects.html">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="service.html">Service</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="contacts.html">Contacts</a>
                    </li>
                </ul>
            </div>
        </div>
`
    nav.innerHTML = nav_content;
}

function build_footer() {
    var footer = document.getElementById('footer');
    var footer_content = `


        <a href="mailto:marco.pettorali@ing.unipi.it" class="social-link"><i
                class="fa fa-envelope" aria-hidden="true"></i></a>
        <a href="https://scholar.google.com/citations?user=F3pN-DQAAAAJ&hl=it" class="social-link"><i
                class="fa-brands fa-google-scholar" aria-hidden="true"></i></a>
        <a href="https://github.com/marcopettorali" class="social-link"><i
                class="fa-brands fa-github" aria-hidden="true"></i></a>
        
        <a href="https://www.linkedin.com/in/marco-pettorali-9bb78a228" class="social-link"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
        <br><br>
`
    footer.innerHTML = footer_content;
}

function main() {

    // according to the system theme, change the logo
    $('#logo_unipi').attr('src', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'img/logo_unipi_dark.png' : 'img/logo_unipi_light.png'))
    $('#logo_dii').attr('src', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'img/logo_dii_dark.png' : 'img/logo_dii_light.png'))

    // adjust the favicon
    $('link[rel="icon"]').attr('href', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'img/logo_dii_dark_cropped.png' : 'img/logo_dii_light_cropped.png'))

    // build the nav and the footer
    build_nav()
    build_footer()
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
    map.setView(target, 40);

    // Place a marker on the same location.
    L.marker(target).addTo(map);
}

document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))

