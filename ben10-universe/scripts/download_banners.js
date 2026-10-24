const fs = require('fs');
const { execSync } = require('child_process');

const dir = 'public/images/series';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const banners = [
  { url: 'https://raw.githubusercontent.com/ad1tyac0des/Project-Ben-10/main/assets/images/OS/os_banner.png', out: dir + '/ben-10-2005.png' },
  { url: 'https://raw.githubusercontent.com/ad1tyac0des/Project-Ben-10/main/assets/images/AF/af_banner.png', out: dir + '/ben-10-alien-force.png' },
  { url: 'https://raw.githubusercontent.com/ad1tyac0des/Project-Ben-10/main/assets/images/UA/ua_banner.png', out: dir + '/ben-10-ultimate-alien.png' }
];

banners.forEach(b => {
  const cmd = `curl.exe -s -H "User-Agent: Mozilla/5.0" "${b.url}" -o "${b.out}"`;
  execSync(cmd);
  console.log('Saved banner', b.out, fs.statSync(b.out).size);
});
