/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare function myFunction(): boolean {
    return true
}
interface Window {
    myFunction(): boolean;
}