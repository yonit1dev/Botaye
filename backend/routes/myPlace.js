const express = require("express");
const router = express.Router();
const locationStorage = {
  locations: [],
};

router.get("/", (req, res, next) => {
  res.status(200);
  res.json({
    val: "Connected",
  });
});

router.post("/add-location", (req, res, next) => {
  locationStorage.locations.push({
    id: (Math.random() * 10).toFixed(1),
    address: req.body.address,
    coords: {
      lat: req.body.lat,
      lng: req.body.lng,
    },
  });

  res.json({
    message: "Location stored successfully!",
  });
});
router.post("/location", (req, res, next) => {});

module.exports = router;
