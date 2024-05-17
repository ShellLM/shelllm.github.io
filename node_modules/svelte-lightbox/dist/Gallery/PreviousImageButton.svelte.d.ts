import { SvelteComponentTyped } from "svelte";
import type { GalleryArrowCharacter } from '../Types';
declare const __propDef: {
    props: {
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
export type PreviousImageButtonProps = typeof __propDef.props;
export type PreviousImageButtonEvents = typeof __propDef.events;
export type PreviousImageButtonSlots = typeof __propDef.slots;
export default class PreviousImageButton extends SvelteComponentTyped<PreviousImageButtonProps, PreviousImageButtonEvents, PreviousImageButtonSlots> {
}
export {};
