const Block = require("./Block");
const Blockchain = require("./Blockchain");

console.log("===== 测试创世区块 =====");
const g = Block.genesis;
console.log(`index: ${g.index}`);
console.log(`previousHash: ${g.previousHash}`);
console.log(`timestamp: ${g.timestamp}`);
console.log(`data: ${g.data}`);
console.log(`hash: ${g.hash}`);
console.log(`nonce: ${g.nonce}`);

console.log("\n===== 测试整条区块链、新增区块 =====");
const bc = new Blockchain();
bc.addBlock("交易：学生课程演示");
console.log("链长度：", bc.chain.length);
const last = bc.getLastBlock();
console.log("新区块 index:", last.index);
console.log("新区块 hash:", last.hash);
console.log("新区块 data:", last.data);
