module.exports = {
  apps: [
    {
      name: "dsams-uz",
      port: "3010",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
