export default function checkRatingColorClass(rating: number): string {
  if (rating >= 0 && rating < 3) {
    return 'bad-rating';
  } else if (rating > 3 && rating < 5) {
    return 'middle-rating';
  } else if (rating > 5 && rating < 7) {
    return 'good-rating';
  } else {
    return 'great-rating';
  }
}
