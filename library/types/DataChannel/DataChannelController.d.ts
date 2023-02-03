import { InitialSettings } from "./InitialSettings";
import { LatencyTestResults } from "../DataChannel/LatencyTestResults";
/**
 * Handles the Sending and Receiving of messages to the UE Instance via the Data Channel
 */
export declare class DataChannelController {
    dataChannel: RTCDataChannel;
    peerConnection: RTCPeerConnection;
    datachannelOptions: RTCDataChannelInit;
    label: string;
    isReceivingFreezeFrame: boolean;
    /**
     * To Create and Set up a Data Channel
     * @param peerConnection - The RTC Peer Connection
     * @param label - Label of the Data Channel
     * @param datachannelOptions - Optional RTC DataChannel options
     */
    createDataChannel(peerConnection: RTCPeerConnection, label: string, datachannelOptions?: RTCDataChannelInit): void;
    /**
     * Handles when the Data Channel is opened
     */
    handleOnOpen(): void;
    /**
     * Handles when the Data Channel is closed
     */
    handleOnClose(): void;
    /**
     * Handles when a message is received
     * @param event - Message Event
     */
    handleOnMessage(event: MessageEvent): void;
    /**
     * Fired when a Response message is sent from the UE Instance
     * @param message - Message Data Uint8Array
     */
    onResponse(message: Uint8Array): void;
    /**
     * Fired when a Command message is sent from the UE Instance
     * @param message - Message Data Uint8Array
     */
    onCommand(message: Uint8Array): void;
    /**
     * Send Data over the Data channel to the UE Instance
     * @param data - Message Data Array Buffer
     */
    sendData(data: ArrayBuffer): void;
    /**
     * Fired when the UE Instance updates who has Quality Ownership
     * @param hasQualityOwnership - Does the client have Quality Ownership
     */
    onQualityControlOwnership(hasQualityOwnership: boolean): void;
    /**
     * Fired when the UE Instance sends freeze frame data
     * @param message - Freeze Frame Data
     */
    processFreezeFrameMessage(message: Uint8Array): void;
    /**
     * Fired when the UE Instance sends a un Freeze Frame
     */
    onUnFreezeFrame(): void;
    /**
     * Fired when the UE Instance sends the Video Encoder Avg QP
     * @param AvgQP - Avg QP
     */
    onVideoEncoderAvgQP(AvgQP: number): void;
    /**
     * Fired when the UE Instance sends Latency test Results
     * @param latencyTestResults - Latency Test Results
     */
    onLatencyTestResult(latencyTestResults: LatencyTestResults): void;
    /**
     * Fired when the UE Instance sends Initial Settings
     * @param InitialSettings - Initial Settings
     */
    OnInitialSettings(InitialSettings: InitialSettings): void;
    /**
     * An override method for resetting the Afk warning timer when data is sent over the data channel
     */
    resetAfkWarningTimerOnDataSend(): void;
}
export interface InstanceCommand {
    command: string;
}
