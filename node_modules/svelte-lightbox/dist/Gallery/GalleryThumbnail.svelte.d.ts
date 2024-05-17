import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        id: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type GalleryThumbnailProps = typeof __propDef.props;
export type GalleryThumbnailEvents = typeof __propDef.events;
export type GalleryThumbnailSlots = typeof __propDef.slots;
export default class GalleryThumbnail extends SvelteComponentTyped<GalleryThumbnailProps, GalleryThumbnailEvents, GalleryThumbnailSlots> {
}
export {};
