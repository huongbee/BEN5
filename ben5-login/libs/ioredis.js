const IORedis = require('ioredis');

class Redis {
  constructor() {
    this.redis = new IORedis({
      port: 6379, // Redis port
      host: "127.0.0.1", // Redis host
      // username: "default", // needs Redis >= 6
      // password: "my-top-secret",
      db: 0, // Defaults to 0
    });
  }

  set(key, value) {
    const result = this.redis.set(key, value);
    return result; // promise(0K)
  }
  setTTL(key, value, timeout = 120) {
    // EX: s | PX: ms
    const result = this.redis.set(key, value, 'EX', timeout);
    return result;
  }
  get(key) {
    const result = this.redis.get(key);
    return result;
  }
  delete(key) {
    const result = this.redis.del(key);
    return result;
  }
}
module.exports = Redis;