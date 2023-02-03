export declare class Config {
    enableSpsAutoConnect: boolean;
    enableSpsAutoplay: boolean;
    startVideoMuted: boolean;
    afkTimeout: number;
    controlScheme: ControlSchemeType;
    suppressBrowserKeys: boolean;
    fakeMouseWithTouches: boolean;
    signallingServerAddress: string;
    playerElement: HTMLDivElement;
    videoPlayerElement: HTMLVideoElement;
    /**
     * @param signallingServerAddress - the address of the signaling server
     * @param playerElement - the player element ID
     */
    constructor(signallingServerAddress: string, playerElement: HTMLDivElement);
}
/**
 * The enum associated with the mouse being locked or hovering
 */
export declare enum ControlSchemeType {
    LockedMouse = 0,
    HoveringMouse = 1
}
