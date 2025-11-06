"use server";
import {
  suggestColorPalette,
  type SuggestColorPaletteInput,
  type SuggestColorPaletteOutput,
} from "@/ai/flows/suggest-color-palette";

export async function suggestPaletteAction(
  input: SuggestColorPaletteInput
): Promise<SuggestColorPaletteOutput> {
  const result = await suggestColorPalette(input);
  return result;
}
