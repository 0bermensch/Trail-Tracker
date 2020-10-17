import * as Location from "expo-location";

const tenMeterWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccracy: 5,
      altitude: 5,
      longitude: -123.144217 + increment * tenMeterWithDegrees,
      latitude: 49.261061 + increment * tenMeterWithDegrees,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChange", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
