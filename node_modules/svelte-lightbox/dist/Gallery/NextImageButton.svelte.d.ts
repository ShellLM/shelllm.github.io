import { SvelteComponentTyped } from "svelte";
import type { GalleryArrowCharacter } from '../Types';
declare const __propDef: {
    props: {
        imageCount: number;
        activeImage: number;
        character: GalleryArrowCharacter;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NextImageButtonProps = typeof __propDef.props;
export type NextImageButtonEvents = typeof __propDef.events;
export type NextImageButtonSlots = typeof __propDef.slots;
export default class NextImageButton extends SvelteComponentTyped<NextImageButtonProps, NextImageButtonEvents, NextImageButtonSlots> {
}
export {};
