import { SvelteComponentTyped } from "svelte";
import type { ImagePreset } from '../Types';
declare const __propDef: {
    props: {
        imagePreset: ImagePreset;
        enableImageExpand: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type LightboxBodyProps = typeof __propDef.props;
export type LightboxBodyEvents = typeof __propDef.events;
export type LightboxBodySlots = typeof __propDef.slots;
export default class LightboxBody extends SvelteComponentTyped<LightboxBodyProps, LightboxBodyEvents, LightboxBodySlots> {
}
export {};
