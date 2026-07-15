const Redis = require('ioredis').default;

const redis = new Redis({
    host:process.env.REDIS_HOST,
    port:process.env.REDIS_PORT,
    password:process.env.REDIS_PWD

});

redis.on("connect",()=>{
    console.log('Server is connected to Redis');
})

redis.on("error",(err)=>{
    console.log("Redis connection error:", err.message);
})

module.exports = redis;