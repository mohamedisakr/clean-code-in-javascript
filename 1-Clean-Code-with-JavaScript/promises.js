function getSensorAData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ min: 8, max: 118 });
    }, 2000);
  });
}

function getSensorBData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ temp: 78, value: 26 });
    }, 5000);
  });
}

function getSensorCData(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cb({ min: 14, max: 92, temp: 64, value: 12 });
    }, 2000);
  });
}

function combineSensorData() {
  Promise.all([getSensorAData(), getSensorBData(), getSensorCData]).then(
    results => {
      const dataA = results[0];
      const dataB = results[1];
      const dataC = results[2];
    }
  );
}
