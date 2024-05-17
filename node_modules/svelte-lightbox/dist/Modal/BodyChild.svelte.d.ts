import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type BodyChildProps = typeof __propDef.props;
export type BodyChildEvents = typeof __propDef.events;
export type BodyChildSlots = typeof __propDef.slots;
export default class BodyChild extends SvelteComponentTyped<BodyChildProps, BodyChildEvents, BodyChildSlots> {
}
export {};
