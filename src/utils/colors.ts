import { FastAverageColor } from "fast-average-color";

export const getColorFromUrl = async (url: string) => {
    const fast = new FastAverageColor();
    const color =  await fast.getColorAsync(url)
    if (color.error) return null
    return color.hex
}