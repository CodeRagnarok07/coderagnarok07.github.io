/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="./vite-env-override.d.ts" />
/// <reference types="vite/client" />

declare module '@layouts/*'
declare module '@sections/*'
declare module '@/*'


declare function myFunction(): boolean {
    return true
}
interface Window {
    myFunction(): boolean;
}

import {IconType} from '@/assets/icons'

