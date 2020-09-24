module.exports = {
  apps : [{
    name: 'SERVER',
    script: './backend/src/index.js',
    instances: 1,
    autorestart: true,
    watch: true,
  }, 
  {
    name: 'BACKUP-BOT',
    script: './bckp-bot/src/index.js',
    instances: 1,
    autorestart: true,
    watch: true,
  }],
  // deploy : {
  //   production : {
  //     user : 'node',
  //     host : '212.83.163.1',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:repo.git',
  //     path : '/var/www/production',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
  //   }
  // }
};
