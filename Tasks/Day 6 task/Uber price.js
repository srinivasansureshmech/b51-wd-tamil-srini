class UberPriceCalculator {
    constructor(baseFare, distanceInKm) {
      this.baseFare = baseFare;
      this.distanceInKm = distanceInKm;
    }
  
    calculatePrice() {
      // For simplicity, let's assume a fare of $1 per kilometer in addition to the base fare
      const perKmFare = 1;
      return this.baseFare + this.distanceInKm * perKmFare;
    }
  }
  
  // Example usage of the UberPriceCalculator class
  const baseFare = 5; // Base fare in dollars
  const distanceInKm = 10; // Distance in kilometers
  const uberCalculator = new UberPriceCalculator(baseFare, distanceInKm);
  const totalPrice = uberCalculator.calculatePrice();
  console.log(`The total Uber price for a ${distanceInKm} km ride is $${totalPrice}.`);
  