const p = new Promise((resolve, reject) => {
  if (Math.ceil(Math.random()) > 0.2) resolve('yay')
  reject('no')
});

p.then(console.log).catch(console.error);