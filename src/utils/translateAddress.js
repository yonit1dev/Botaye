const geocoder = new google.maps.Geocoder();

function translateCoords(coords) {
  const latlng = {
    lat: coords.latitude,
    lng: coords.longitude,
  };
  let formattedAddress;

  geocoder
    .geocode({ location: latlng })
    .then((response) => {
      if (response.results) {
        formattedAddress = response.results[0].formattedAddress;
      }
    })
    .catch((error) => {
      alert("Failed to parse");
      console.log(error);
    });

  return formattedAddress;
}

function translateLocation(address) {
  const formatAddress = encodeURI(address);

  geocoder.geocode({ address: formatAddress }, function (results, status) {
    if (status == "OK") {
      console.log(results);
    } else {
      alert("Error");
    }
  });
}

export { translateCoords, translateLocation };
