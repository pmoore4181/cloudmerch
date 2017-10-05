const args = ['start'];
const opts = { stdio: 'inherit', cwd: 'shopping-cart-app', shell: true };
require('child_process').spawn('npm', args, opts);
