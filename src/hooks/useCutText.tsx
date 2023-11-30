export default function useCutText(text: string): string {
    const lastSpaceIndex: number = text.lastIndexOf(' ', 90);
    const sliced: string = text.slice(0, lastSpaceIndex);

    return `${sliced}...`;
}