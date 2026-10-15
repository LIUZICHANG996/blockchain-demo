class Blockchain {
  constructor() {
    this.chain = [];
    // 你的原有代码，创世区块之类
  }

  // ===在这里粘贴你这段get方法===
  get() {
      return this.chain;
  }

  mine(data) {
    // 你原来的mine挖矿代码
  }
}

module.exports = Blockchain;