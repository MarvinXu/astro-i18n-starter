import { sequence } from "astro/middleware";
import { i18nextMiddleware } from '@/utils/i18n'

export const onRequest = sequence(i18nextMiddleware);