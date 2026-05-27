import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const musicMatch = html.match(/\/\/ <music>\n(?<code>[\s\S]*?)\n\/\/ <\/music>/);
assert.ok(musicMatch, 'index.html must contain a marked Music section');

const context = {};
vm.createContext(context);
vm.runInContext(`${musicMatch.groups.code}\nglobalThis.Music = Music;`, context);

const { detectChord, noteName, setNoteSpelling } = context.Music;

function symbol(chord) {
  return chord ? chord.rootName + chord.suffix + chord.slashBass : null;
}

setNoteSpelling({ flats: false });
assert.equal(symbol(detectChord([60, 64, 67])), 'C');
assert.equal(symbol(detectChord([57, 60, 64])), 'Am');
assert.equal(symbol(detectChord([60, 64, 67, 70])), 'C7');
assert.equal(symbol(detectChord([60, 64, 67, 71])), 'CM7');
assert.equal(symbol(detectChord([60, 63, 67, 71, 74])), 'CmM9');
assert.equal(symbol(detectChord([59, 62, 65, 67])), 'G7/B');
assert.equal(symbol(detectChord([52, 55, 60])), 'C/E');
assert.equal(symbol(detectChord([60, 64, 65, 67])), 'FM9(no3)/C');
assert.equal(symbol(detectChord([62, 63, 66, 72])), 'D7b9(no5)');
assert.equal(detectChord([62, 63, 66, 72]).fullName, 'Seventh flat nine no 5');
assert.equal(symbol(detectChord([60, 64])), 'C(no5)');
assert.equal(symbol(detectChord([43, 53, 57, 62])), 'G9(no3)');
assert.notEqual(symbol(detectChord([43, 53, 57, 62])), 'F6/9(no5)/G');
assert.equal(detectChord([60, 61, 62]), null);
assert.equal(symbol(detectChord([48, 52, 55, 62, 66, 69])), 'D/C*');
assert.equal(detectChord([48, 52, 55, 62, 66, 69]).isPolychord, true);
assert.equal(detectChord([48, 52, 55, 62, 66, 69]).alternatives, undefined);
assert.equal(symbol(detectChord([47, 51, 54, 55, 58, 62, 65])), 'Gm7/B*');
assert.equal(detectChord([47, 51, 54, 55, 58, 62, 65]).alternatives, undefined);
assert.equal(detectChord([60, 64, 67, 62, 66]).isPolychord, undefined);

assert.equal(noteName(61), 'C#');
setNoteSpelling({ flats: true });
assert.equal(noteName(61), 'Db');
assert.equal(symbol(detectChord([61, 65, 68])), 'Db');
assert.equal(symbol(detectChord([49, 53, 56, 63, 67, 70])), 'Eb/Db*');

console.log('music tests passed');
