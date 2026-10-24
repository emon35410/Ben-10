const https = require('https');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const targets = [
  // Original Series
  { key: 'wildvine', candidates: ['File:Wildvine.png', 'File:Wildvine Model.png', 'File:Wildvine OS.png', 'File:WildvineCombat.png'], out: 'public/images/characters/wildvine.png' },
  { key: 'blitzwolfer', candidates: ['File:Benwolf.png', 'File:Blitzwolfer.png', 'File:Blitzwolfer_UAF.png'], out: 'public/images/characters/blitzwolfer.png' },
  { key: 'snare_oh', candidates: ['File:Benmummy.png', 'File:Snare-oh.png', 'File:Snare-Oh.png'], out: 'public/images/characters/snare_oh.png' },
  { key: 'frankenstrike', candidates: ['File:Benvicktor 2.png', 'File:Benvicktor.png', 'File:Frankenstrike.png'], out: 'public/images/characters/frankenstrike.png' },
  { key: 'upchuck_perk', candidates: ['File:Upchuck.png', 'File:Perk Upchuck.png', 'File:Perk_Upchuck.png', 'File:Upchuck OS.png'], out: 'public/images/characters/upchuck_perk.png' },
  { key: 'ditto', candidates: ['File:Ditto Model.png', 'File:Ditto OS Pose.png', 'File:Ditto 11 years old.png'], out: 'public/images/characters/ditto.png' },
  { key: 'eye_guy', candidates: ['File:Eye Guy.png', 'File:Eyeguy.png', 'File:Eye_Guy.png'], out: 'public/images/characters/eye_guy.png' },
  { key: 'way_big', candidates: ['File:Way Big.png', 'File:Way_Big.png', 'File:Way Big UAF.png', 'File:Way_Big_UAF.png'], out: 'public/images/characters/way_big.png' },
  { key: 'spitter', candidates: ['File:Spitter.png', 'File:Spitter Model.png'], out: 'public/images/characters/spitter.png' },
  { key: 'buzzshock', candidates: ['File:BuzzshockOfficialandHead.png', 'File:Buzzshock 2nd.png', 'File:Buzzshock.png'], out: 'public/images/characters/buzzshock.png' },
  { key: 'arctiguana', candidates: ['File:Arctiguana Model.png', 'File:Arctiguana.png', 'File:Arctiguana OS.png'], out: 'public/images/characters/arctiguana.png' },

  // Alien Force
  { key: 'jetray', candidates: ['File:Jetray.png', 'File:Jetray AF.png'], out: 'public/images/characters/jetray.png' },
  { key: 'brainstorm', candidates: ['File:Brainstorm.png', 'File:Brainstorm AF.png'], out: 'public/images/characters/brainstorm.png' },
  { key: 'spidermonkey', candidates: ['File:Spidermonkey.png', 'File:Spidermonkey5.png'], out: 'public/images/characters/spidermonkey.png' },
  { key: 'goop', candidates: ['File:Goop.png', 'File:Goop AF.png'], out: 'public/images/characters/goop.png' },
  { key: 'lodestar', candidates: ['File:Lodestar.png', 'File:Lodestar AF.png'], out: 'public/images/characters/lodestar.png' },
  { key: 'rath', candidates: ['File:Rath.png', 'File:Rath-6.png', 'File:Rath AF.png'], out: 'public/images/characters/rath.png' },
  { key: 'nanomech', candidates: ['File:Nanomech.png', 'File:Nanomech.PNG'], out: 'public/images/characters/nanomech.png' },
  { key: 'upchuck_murk', candidates: ['File:Murk Upchuck.png', 'File:Murk_Upchuck.png', 'File:Murk Upchuck UA.png'], out: 'public/images/characters/upchuck_murk.png' },

  // Ultimate Alien
  { key: 'water_hazard', candidates: ['File:Water Hazard CD.png', 'File:Water Hazard AP1.png', 'File:Water Hazard.png', 'File:WaterHazard.png'], out: 'public/images/characters/water_hazard.png' },
  { key: 'terraspin', candidates: ['File:Terraspin.png', 'File:Terraspin UA.png'], out: 'public/images/characters/terraspin.png' },
  { key: 'nrg', candidates: ['File:NRG.png', 'File:NRG Suit.png', 'File:NRG UA.png'], out: 'public/images/characters/nrg.png' },
  { key: 'ampfibian', candidates: ['File:AmpFibian.png', 'File:Ampfibian.png', 'File:AmpFibian UA.png'], out: 'public/images/characters/ampfibian.png' },
  { key: 'armodrillo', candidates: ['File:Armodrillo.png', 'File:Armodrillo22243.png'], out: 'public/images/characters/armodrillo.png' },
  { key: 'chamalien', candidates: ['File:Chamalien!.png', 'File:ChamalienModelSheet.png', 'File:Chamalien.png'], out: 'public/images/characters/chamalien.png' },
  { key: 'fasttrack', candidates: ['File:Fasttrack!.png', 'File:Fasttrack.png'], out: 'public/images/characters/fasttrack.png' },
  { key: 'clockwork', candidates: ['File:Clockwork.png', 'File:Clockwork UA.png'], out: 'public/images/characters/clockwork.png' },
  { key: 'eatle', candidates: ['File:Eatle, Juguete.png', 'File:Eatle.png', 'File:Eatle UA.png', 'File:Eatle official.png'], out: 'public/images/characters/eatle.png' },

  // Ultimate Forms
  { key: 'ultimate_spidermonkey', candidates: ['File:Ultimate Spidermonkey.png', 'File:Ultimate Spidermonkey CD.png'], out: 'public/images/characters/ultimate_spidermonkey.png' },
  { key: 'ultimate_cannonbolt', candidates: ['File:Ultimate Cannonbolt.png', 'File:Ultimate Cannonbolt Back.png'], out: 'public/images/characters/ultimate_cannonbolt.png' },
  { key: 'ultimate_wildmutt', candidates: ['File:Ultimate Wildmutt Pose.png', 'File:Ultimate Wildmutt Alt. Box.png'], out: 'public/images/characters/ultimate_wildmutt.png' },
  { key: 'ultimate_way_big', candidates: ['File:Ultimate Way Big 004.png', 'File:Ultimate Way Big 005.png', 'File:Ultimate Way Big.png'], out: 'public/images/characters/ultimate_way_big.png' }
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
          if (pageId && pageId !== '-1') {
            const url = pages[pageId]?.imageinfo?.[0]?.url;
            resolve(url);
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function run() {
  for (const t of targets) {
    if (fs.existsSync(t.out) && fs.statSync(t.out).size > 1000) {
      console.log(`[SKIP] Already exists: ${t.out} (${fs.statSync(t.out).size} bytes)`);
      continue;
    }
    let foundUrl = null;
    let chosenFile = null;
    for (const cand of t.candidates) {
      const url = await getImageUrl(cand);
      if (url) {
        foundUrl = url;
        chosenFile = cand;
        break;
      }
    }
    if (foundUrl) {
      console.log(`[DOWNLOAD] ${t.key} from ${chosenFile} -> ${foundUrl}`);
      try {
        const cmd = `curl.exe -s -L -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" -H "Referer: https://ben10.fandom.com/" "${foundUrl}" -o "${t.out}"`;
        execSync(cmd);
        if (fs.existsSync(t.out)) {
          const size = fs.statSync(t.out).size;
          console.log(`[SAVED] ${t.out} (${size} bytes)`);
        }
      } catch (err) {
        console.error(`[ERROR] Failed to curl ${t.out}:`, err.message);
      }
    } else {
      console.warn(`[NOT FOUND] No candidates found for ${t.key}`);
    }
  }
  console.log('All image downloads completed!');
}

run();
