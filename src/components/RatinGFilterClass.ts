export class RatingFilterClass {
  private rating: number;
  private minRating: number;

  constructor(initialRating: number = 0, minRating: number = 0) {
    this.rating = initialRating;
    this.minRating = minRating;
  }

  setRating(newRating: number) {
    this.rating = newRating;
  }

  getRating() {
    return this.rating;
  }

  setMinRating(newMinRating: number) {
    this.minRating = newMinRating;
  }

  getMinRating() {
    return this.minRating;
  }

  filterByRating(value: number) {
    this.setRating(value);
  }
}
