class UberPriceCalculator {
    private baseFare: number;
    private costPerMile: number;
    private costPerMinute: number;
  
    constructor(baseFare: number, costPerMile: number, costPerMinute: number) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distanceInMiles: number, durationInMinutes: number): number {
      if (distanceInMiles < 0 || durationInMinutes < 0) {
        throw new Error("Distance and duration must be non-negative.");
      }
  
      const price = this.baseFare + this.costPerMile * distanceInMiles + this.costPerMinute * durationInMinutes;
      return price;
    }
  }
  
  // Example usage:
  const calculator = new UberPriceCalculator(3.0, 1.5, 0.2); // Example pricing values
  const distance = 10; // Distance in miles
  const duration = 15; // Duration in minutes
  
  const totalPrice = calculator.calculatePrice(distance, duration);
  console.log(`Uber Price: $${totalPrice.toFixed(2)}`);
  