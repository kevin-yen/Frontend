/// <reference types="node" />
import { IOverlay } from "./IOverlay";
import { EventEmitter } from "events";
/**
 * The abstract class for action overlays
 */
export interface IActionOverlay extends IOverlay {
    eventEmitter: EventEmitter;
    /**
     * Update the text content of an action overlay
     * @param updateText the text to be inserted
     */
    update(updateText: string): void;
    /**
      * Set a method as an event emitter callback
      * @param callBack the method that is to be called when the event is emitted
      */
    onAction(callBack: (...args: any[]) => void): void;
    /**
     * Activate an event that is attached to the event emitter
     */
    activate(): void;
}
