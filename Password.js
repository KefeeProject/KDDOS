const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const passwordAsli = "kefee"; 

readline.question('Masukkan password: ', (inputPassword) => {
  if (inputPassword === passwordAsli) {
    console.log("✅ Password benar! Akses diberikan, komandan Kefee ganteng!");
  } else {
    console.log("❌ Password salah! Alarm berbunyi! 🚨");
  }
  readline.close();
});
