module.exports = {
  apps: [
    {
      name: 'Dsams.uz Front',
      port: '9001',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      script: './.output/server/index.mjs',
    },
  ],
}
