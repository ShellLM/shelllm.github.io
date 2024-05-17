import { SvelteComponentTyped } from "svelte";
import type { GalleryState, ImagePreset } from '../Types';
declare const __propDef: {
    props: {
        [x: string]: any;
        imagePreset: ImagePreset;
        title?: string | undefined;
        description?: string | undefined;
        gallery?: GalleryState | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LightboxFooterProps = typeof __propDef.props;
export type LightboxFooterEvents = typeof __propDef.events;
export type LightboxFooterSlots = typeof __propDef.slots;
export default class LightboxFooter extends SvelteComponentTyped<LightboxFooterProps, LightboxFooterEvents, LightboxFooterSlots> {
}
export {};
