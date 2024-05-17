import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        transitionDuration: number;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ModalCoverProps = typeof __propDef.props;
export type ModalCoverEvents = typeof __propDef.events;
export type ModalCoverSlots = typeof __propDef.slots;
export default class ModalCover extends SvelteComponentTyped<ModalCoverProps, ModalCoverEvents, ModalCoverSlots> {
}
export {};
