const https = require('https');
const { execSync } = require('child_process');
const fs = require('fs');

const filesToFetch = [
  { file: 'File:Ultimate_EchoEcho.png', out: 'public/images/characters/ultimate_echo_echo.png' },
  { file: 'File:Alien-gallery_ultimate_swampfire.png', out: 'public/images/characters/ultimate_swampfire.png' },
  { file: 'File:Aggregor_official_artwork.png', out: 'public/images/characters/aggregor.png' },
  { file: 'File:FullEchoEchoArt1.png', out: 'public/images/characters/echo_echo.png' },
  { file: 'File:Gwen_official.png', out: 'public/images/characters/gwen.png' },
  { file: 'File:Gwen.png', out: 'public/images/characters/gwen_os.png' },
  { file: 'File:Implants_Vilgax.png', out: 'public/images/characters/vilgax.png' },
  { file: 'File:Ultimate_Big_Chill_Uncloaked_Shaded.png', out: 'public/images/characters/ultimate_big_chill.png' }
];

async function getImageUrl(fileTitle) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'ben10.fandom.com',
      path: '/api.php?action=query&titles=' + encodeURIComponent(fileTitle) + '&prop=imageinfo&iiprop=url&format=json',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    };

    https.get(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json?.query?.pages || {};
          const pageId = Object.keys(pages)[0];
          const url = pages[pageId]?.imageinfo?.[0]?.url;
          resolve(url);
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function run() {
  for (const item of filesToFetch) {
    const url = await getImageUrl(item.file);
    if (url) {
      console.log('Got URL for', item.file, '->', url);
      try {
        const cmd = `curl.exe -s -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" -H "Referer: https://ben10.fandom.com/" "${url}" -o "${item.out}"`;
        execSync(cmd);
        const stats = fs.statSync(item.out);
        console.log('Saved', item.out, 'size:', stats.size);
      } catch (err) {
        console.error('Failed to download', item.out, err.message);
      }
    } else {
      console.log('Could not get URL for', item.file);
    }
  }
}

run();
