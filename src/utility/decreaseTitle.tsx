export default function decreaseTitle(title: string): string | null {
  if (title.length > 40) {
    return '--smaller';
  } else {
    return null;
  }
}
