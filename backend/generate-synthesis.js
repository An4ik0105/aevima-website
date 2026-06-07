/**
 * AEVIMA — Synthese-Generator (Anthropic)
 * node generate-synthesis.js --lz=33 --hwz=1 --az=9 --fname=Anna
 * Benötigt: ANTHROPIC_API_KEY als Umgebungsvariable
 */
const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const GM_DATA = JSON.parse(fs.readFileSync(path.join(__dirname,'..','public','data','_geldmuster.json'),'utf8'));
const BZ_DATA = JSON.parse(fs.readFileSync(path.join(__dirname,'..','public','data','_beziehung.json'),'utf8'));

const args = process.argv.slice(2).reduce(function(a,v){var p=v.replace('--','').split('=');a[p[0]]=p[1];return a;},{});
const lz=args.lz||'1', hwz=args.hwz||'1', az=args.az||'1', fname=args.fname||'Nutzer';
const hash = crypto.createHash('md5').update(lz+'-'+hwz+'-'+az).digest('hex').substring(0,8);
const outFile = path.join(__dirname,'..','public','data','synthesis_'+hash+'.json');

const gm = GM_DATA[lz]||{};
const bz = BZ_DATA[lz]||{};

const SYSTEM = 'Du bist ein Analyse-System der AEVIMA-Plattform. Schreibe in der Du-Form. Kein Coaching, keine Motivation, keine Zukunftsversprechen. Ruhig, präzise.';
const USER = 'Erstelle AEVIMA-Tiefenanalyse. LZ '+lz+', HWZ '+hwz+', AZ '+az+'. Geldmuster: '+Object.values(gm).join(' ')+' Beziehungsmuster: '+Object.values(bz).join(' ')+' Gib JSON zurück: {"spannungsfelder":"...","muster":"...","synthese":"...","kompass":["...","...","..."]}. Nur JSON.';

async function run(){
  const client = new Anthropic({apiKey:process.env.ANTHROPIC_API_KEY});
  const msg = await client.messages.create({model:'claude-sonnet-4-6',max_tokens:1200,system:SYSTEM,messages:[{role:'user',content:USER}]});
  var result = JSON.parse(msg.content[0].text);
  result.lz=lz; result.hwz=hwz; result.az=az; result.generated=new Date().toISOString();
  fs.writeFileSync(outFile, JSON.stringify(result,null,2),'utf8');
  console.log('Gespeichert:', outFile);
}
run().catch(console.error);
