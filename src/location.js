async function translateCoords(address) {
  const geocoder = new google.maps.Geocoder();

  geocoder.geocode(
    {
      address: address,
    },
    function (results, status) {
      if (status == "OK") {
        console.log(results);
      } else {
        alert("Couldn't parse address!");
        return;
      }
    }
  );
}

export { translateCoords };
