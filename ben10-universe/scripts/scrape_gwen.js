const https = require('https');
const { execSync } = require('child_process');
const fs = require('fs');

const filesToFetch = [
  { file: 'File:Gwen_ua_render.png', out: 'public/images/characters/gwen_ua.png' },
  { file: 'File:Gwen_Tennyson_(Classic)_Original_Series_Pose_1.png', out: 'public/images/characters/gwen_os_pose.png' }
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
        const cmd = `curl.exe -s -H "User-Agent: Mozilla/5.0" -H "Referer: https://ben10.fandom.com/" "${url}" -o "${item.out}"`;
        execSync(cmd);
        const stats = fs.statSync(item.out);
        console.log('Saved', item.out, 'size:', stats.size);
      } catch (err) {
        console.error('Failed to download', item.out, err.message);
      }
    }
  }
}

run();
