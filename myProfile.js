console.log(`Screen size: ${screen.width}x${screen.height}`);

const backButton = document.querySelector('.backButton');

backButton.addEventListener('click', () => {
    history.back();
});

function initGeocoding() {
    const geocoder = new google.maps.Geocoder();
    navigator.geolocation.getCurrentPosition(async (position) => {
        const latlng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        };
        await getGeocode(geocoder, latlng);
    });
}

async function getGeocode(geocoder, latlng) {
    try {
        const response = await geocoder.geocode({ location: latlng });
        if (response.results[0]) {
            console.log(`Address: ${response.results[0].formatted_address}`);
        } else {
            console.log('No results found');
        }
    }
    catch (e) {
        console.log(`Geocoder failed due to: ${e}`);
    };
}

