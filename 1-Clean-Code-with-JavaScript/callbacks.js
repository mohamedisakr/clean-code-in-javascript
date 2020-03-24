function getSensorAData(cb) {
  setTimeout(() => {
    cb({ min: 8, max: 118 });
  }, 2000);
}

function getSensorBData(cb) {
  setTimeout(() => {
    cb({ temp: 78, value: 26 });
  }, 5000);
}

function getSensorCData(cb) {
  setTimeout(() => {
    cb({ min: 14, max: 92, temp: 64, value: 12 });
  }, 2000);
}

function combineSensorData() {
  getSensorAData(dataA => {
    console.log("Sensor A Data: ", dataA);
    getSensorBData(dataB => {
      console.log("Sensor B Data: ", dataB);
      getSensorCData(dataC => {
        console.log("Sensor C Data: ", dataC);
      });
    });
  });
}
