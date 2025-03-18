const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((sum, batch) => sum + batch, 0);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { totalBatteries };
}
