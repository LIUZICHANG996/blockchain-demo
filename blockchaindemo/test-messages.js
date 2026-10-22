const messagesTypes = require("./messages-type.js");
const Messages = require("./messages.js");
const Block = require("./Block.js");

console.log("========消息类型和消息工厂测试开始========");

// 1. 测试消息类型枚举
console.log("\n1. 测试消息类型枚举");
console.log("REQUEST_LATEST_BLOCK:", messagesTypes.REQUEST_LATEST_BLOCK);
console.log("RECEIVE_LATEST_BLOCK:", messagesTypes.RECEIVE_LATEST_BLOCK);
console.log("REQUEST_LATEST_BLOCKCHAIN:", messagesTypes.REQUEST_LATEST_BLOCKCHAIN);
console.log("RECEIVE_LATEST_BLOCKCHAIN:", messagesTypes.RECEIVE_LATEST_BLOCKCHAIN);
console.log("HANDSHAKE:", messagesTypes.HANDSHAKE);
console.log("****************************************");

// 2. 测试【请求最新区块】消息
console.log("\n2. 测试请求最新区块的消息功能");
const reqLatest = Messages.requestLatestBlock();
console.log("是否为请求最新区块类型：", reqLatest.type === messagesTypes.REQUEST_LATEST_BLOCK);
console.log("消息结构：", JSON.stringify(reqLatest));
console.log("----------------------------------------");

// 3. 测试【响应最新区块】消息（用创世区块）
console.log("\n3. 测试响应最新区块消息的功能");
const genesis = Block.genesis;
const recvLatest = Messages.receiveLatestBlock(genesis);
console.log("消息类型：", recvLatest.type);
console.log("是否为响应最新区块类型：", recvLatest.type === messagesTypes.RECEIVE_LATEST_BLOCK);
console.log("包含的响应区块数据： Block {");
console.log(`  index: ${recvLatest.data.index},`);
console.log(`  previousHash: '${recvLatest.data.previousHash}',`);
console.log(`  timestamp: ${recvLatest.data.timestamp},`);
console.log(`  data: '${recvLatest.data.data}',`);
console.log(`  hash: '${recvLatest.data.hash}',`);
console.log(`  nonce: ${recvLatest.data.nonce}`);
console.log("}");
console.log("数据是否为创世区块：", recvLatest.data.index === 0);
console.log("消息结构：", JSON.stringify(recvLatest));
console.log("----------------------------------------");

// 4. 测试【请求整条区块链】消息
console.log("\n4. 测试请求整个区块链消息的功能");
const reqChain = Messages.requestLatestBlockchain();
console.log("消息类型：", reqChain.type);
console.log("是否为请求整条区块链类型：", reqChain.type === messagesTypes.REQUEST_LATEST_BLOCKCHAIN);
console.log("----------------------------------------");

// 5. 测试【返回整条区块链】消息
console.log("\n5. 测试响应整个区块链消息的功能");
const chainData = [Block.genesis];
const recvChain = Messages.receiveLatestBlockchain(chainData);
console.log("消息类型：", recvChain.type);
console.log("是否为响应整个区块链类型：", recvChain.type === messagesTypes.RECEIVE_LATEST_BLOCKCHAIN);
console.log("包含的响应区块链数据：");
console.log("Block {");
console.log(`  index: ${recvChain.data[0].index},`);
console.log(`  previousHash: '${recvChain.data[0].previousHash}',`);
console.log(`  timestamp: ${recvChain.data[0].timestamp},`);
console.log(`  data: '${recvChain.data[0].data}',`);
console.log(`  hash: '${recvChain.data[0].hash}',`);
console.log(`  nonce: ${recvChain.data[0].nonce}`);
console.log("}");
console.log("数据是否为创世区块：", recvChain.data[0].index === 0);
console.log("消息结构：", JSON.stringify(recvChain));
console.log("----------------------------------------");

// 6. 测试握手消息
console.log("\n6. 测试发送握手消息功能");
const testPort = 2727;
const handMsg = Messages.handshake(testPort);
console.log("消息类型：", handMsg.type);
console.log("是否为握手消息类型：", handMsg.type === messagesTypes.HANDSHAKE);
console.log("包含的握手数据：", handMsg.port);
console.log("端口是否正确：", handMsg.port === testPort);
console.log("消息结构：", JSON.stringify(handMsg));

console.log("\n66666666666666666666");