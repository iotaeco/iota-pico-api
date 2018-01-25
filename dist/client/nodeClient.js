"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
/**
 * Default implementation of a node client.
 * @interface
 */
class NodeClient {
    /**
     * Create an instance of NodeClient.
     * @param networkClient The network client to communicate through.
     * @param apiVersion The API version to send with the requests
     * @param additionalHeaders Extra headers to send with the requests.
     */
    constructor(networkClient, apiVersion, additionalHeaders) {
        if (networkClient === undefined || networkClient === null) {
            throw new coreError_1.CoreError("The networkClient must be defined");
        }
        if (apiVersion === undefined || apiVersion === null || apiVersion.length === 0) {
            throw new coreError_1.CoreError("The apiVersion must be defined");
        }
        this._networkClient = networkClient;
        this._apiVersion = apiVersion;
        this._additionalHeaders = additionalHeaders;
    }
    /**
     * Returns information about your node.
     * @returns Promise which resolves to the getNodeInfo response object or rejects with error.
     */
    async getNodeInfo() {
        return this._networkClient.postJson({
            command: "getNodeInfo"
        }, this.createHeaders());
    }
    /**
     * Returns the confirmed balance which a list of addresses have at the latest confirmed milestone.
     * In addition to the balances, it also returns the milestone as well as the index with which the
     * confirmed balance was determined. The balances is returned as a list in the same order as the
     * addresses were provided as input.
     * @param request The getBalances request object.
     * @returns Promise which resolves to the getBalances response object or rejects with error.
     */
    async getBalances(request) {
        Object.defineProperty(request, "command", {
            value: "getBalances"
        });
        return this._networkClient.postJson(request, this.createHeaders());
    }
    createHeaders() {
        const headers = this._additionalHeaders || {};
        headers["X-IOTA-API-Version"] = this._apiVersion;
        return headers;
    }
}
exports.NodeClient = NodeClient;
