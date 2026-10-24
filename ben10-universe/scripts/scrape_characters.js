const https = require('https');
const { execSync } = require('child_process');
const fs = require('fs');

const filesToFetch = [
  { file: 'File:KevinUAFStanding.png', out: 'public/images/characters/kevin_af.png' },
  { file: 'File:Kevin_Levin_OS_Render.png', out: 'public/images/characters/kevin_os.png' },
  { file: 'File:Humungousaur_UAF_Model.png', out: 'public/images/characters/humungousaur.png' },
  { file: 'File:Big_chill_(AF)_official_cloaked.png', out: 'public/images/characters/big_chill.png' },
  { file: 'File:BCAF2T.png', out: 'public/images/characters/big_chill_wings.png' }
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

  // Also fetch Gwen and Ben from Wikimedia Commons/Wikipedia
  try {
    const gwenCmd = `curl.exe -s -H "User-Agent: Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/en/b/be/Gwen_Tennyson.png" -o "public/images/characters/gwen_wiki.png"`;
    execSync(gwenCmd);
    console.log('Saved gwen_wiki.png size:', fs.statSync('public/images/characters/gwen_wiki.png').size);
  } catch(e) { console.error('Gwen wiki failed'); }
}

run();
