import { defineCollection } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

export const collections = {
	docs: defineCollection({
		schema: docsSchema({
			extend: z.object({
				date: z.coerce.date().optional(),
				tech_stack: z.array(z.string()).optional(),
				type_proyect: z.enum(['frontend', 'backend', 'fullstack']).optional(),
				contratador: z.string().optional(),
				fecha_inicio: z.string().optional(),
				fecha_fin: z.string().optional(),
				duracion: z.string().optional(),
				repo: z.string().url().nullable().optional(),
				live: z.string().url().nullable().optional(),
			}),
		}),
	}),
	// i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
};
