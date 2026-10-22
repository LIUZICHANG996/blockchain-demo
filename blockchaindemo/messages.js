const messagesTypes = require("./messages-type");
const {
    REQUEST_LATEST_BLOCK,
    RECEIVE_LATEST_BLOCK,
    REQUEST_LATEST_BLOCKCHAIN,
    RECEIVE_LATEST_BLOCKCHAIN,
    HANDSHAKE,
} = messagesTypes;

class Messages {
    // 请求最新的区块的消息函数
    static requestLatestBlock() {
        return {
            type: REQUEST_LATEST_BLOCK,
        };
    }

    // 响应最新区块的消息函数（将最新的区块发送给对方）
    static receiveLatestBlock(block) {
        return {
            type: RECEIVE_LATEST_BLOCK,
            data: block,
        };
    }

    // 请求整条区块链
    static requestLatestBlockchain() {
        return {
            type: REQUEST_LATEST_BLOCKCHAIN,
        };
    }

    // 返回整条区块链
    static receiveLatestBlockchain(chain) {
        return {
            type: RECEIVE_LATEST_BLOCKCHAIN,
            data: chain,
        };
    }

    // 握手消息
    static handshake(port) {
        return {
            type: HANDSHAKE,
            port: port,
        };
    }
}

module.exports = Messages;




