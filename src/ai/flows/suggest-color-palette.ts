'use server';

/**
 * @fileOverview Provides color palette suggestions for a given coloring page description.
 *
 * - suggestColorPalette - A function that suggests a color palette.
 * - SuggestColorPaletteInput - The input type for the suggestColorPalette function.
 * - SuggestColorPaletteOutput - The return type for the suggestColorPalette function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestColorPaletteInputSchema = z.object({
  doodleDescription: z
    .string()
    .describe('A description of the coloring page for which to suggest a color palette.'),
});
export type SuggestColorPaletteInput = z.infer<typeof SuggestColorPaletteInputSchema>;

const SuggestColorPaletteOutputSchema = z.object({
  palette: z
    .array(z.string())
    .describe('An array of color hex codes that complement the coloring page.'),
});
export type SuggestColorPaletteOutput = z.infer<typeof SuggestColorPaletteOutputSchema>;

export async function suggestColorPalette(input: SuggestColorPaletteInput): Promise<SuggestColorPaletteOutput> {
  return suggestColorPaletteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestColorPalettePrompt',
  input: {schema: SuggestColorPaletteInputSchema},
  output: {schema: SuggestColorPaletteOutputSchema},
  prompt: `Suggest a color palette of 5 hex codes that would be suitable for coloring the following coloring page. Return the colors as a JSON array.

Coloring Page Description: {{{doodleDescription}}}`,
});

const suggestColorPaletteFlow = ai.defineFlow(
  {
    name: 'suggestColorPaletteFlow',
    inputSchema: SuggestColorPaletteInputSchema,
    outputSchema: SuggestColorPaletteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
