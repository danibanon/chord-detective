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

function alternatives(chord) {
  return (chord && chord.alternatives || []).map(symbol);
}

assert.equal(noteName(61), 'Db');
setNoteSpelling({ flats: false });
assert.equal(symbol(detectChord([60, 64, 67])), 'C');
assert.equal(symbol(detectChord([57, 60, 64])), 'Am');
assert.equal(symbol(detectChord([60, 64, 67, 70])), 'C7');
assert.equal(symbol(detectChord([60, 64, 67, 71])), 'Cmaj7');
assert.ok(alternatives(detectChord([60, 64, 67, 71])).includes('Em/C*'));
assert.ok(alternatives(detectChord([60, 64, 67, 70])).includes('E°/C*'));
assert.equal(symbol(detectChord([60, 63, 67, 70])), 'Cm7');
assert.ok(alternatives(detectChord([60, 63, 67, 70])).includes('D#/C*'));
assert.equal(symbol(detectChord([60, 62, 64, 67, 70])), 'C9');
assert.ok(alternatives(detectChord([60, 62, 64, 67, 70])).includes('Gm/C*'));
assert.equal(symbol(detectChord([60, 62, 64, 67, 71])), 'Cmaj9');
assert.ok(alternatives(detectChord([60, 62, 64, 67, 71])).includes('G/C*'));
assert.equal(symbol(detectChord([60, 61, 64, 67, 70])), 'C7b9');
assert.ok(alternatives(detectChord([60, 61, 64, 67, 70])).includes('G°/C*'));
assert.equal(symbol(detectChord([60, 63, 67, 71, 74])), 'Cm(maj9)');
assert.equal(symbol(detectChord([60, 64, 67, 69])), 'C6');
assert.ok(alternatives(detectChord([60, 64, 67, 69])).includes('Am7/C'));
assert.ok(alternatives(detectChord([60, 64, 67, 69])).includes('Am/C*'));
assert.equal(symbol(detectChord([60, 63, 67, 69])), 'Cm6');
assert.ok(alternatives(detectChord([60, 63, 67, 69])).includes('Aø7/C'));
assert.ok(alternatives(detectChord([60, 63, 67, 69])).includes('A°/C*'));
assert.equal(symbol(detectChord([59, 62, 65, 67])), 'G7/B');
assert.equal(alternatives(detectChord([59, 62, 65, 67])).includes('B°/G*'), false);
assert.equal(symbol(detectChord([52, 55, 60])), 'C/E');
assert.equal(symbol(detectChord([60, 64, 65, 67])), 'Fmaj9(no3)/C');
assert.equal(symbol(detectChord([62, 63, 66, 72])), 'D7b9(no5)');
assert.equal(detectChord([62, 63, 66, 72]).fullName, 'Seventh flat nine no 5');
assert.equal(alternatives(detectChord([62, 63, 66, 72])).some(candidate => candidate.endsWith('*')), false);
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
assert.equal(symbol(detectChord([60, 62, 64, 65, 67, 70])), 'C11');
assert.ok(alternatives(detectChord([60, 62, 64, 65, 67, 70])).includes('Gm7/C*'));
assert.equal(symbol(detectChord([60, 62, 64, 65, 67, 71])), 'Cmaj11');
assert.ok(alternatives(detectChord([60, 62, 64, 65, 67, 71])).includes('B°/C*'));
assert.ok(alternatives(detectChord([60, 62, 64, 65, 67, 71])).includes('G7/C*'));
assert.equal(alternatives(detectChord([60, 62, 64, 65, 67, 71])).includes('C/B°*'), false);
assert.equal(symbol(detectChord([60, 62, 63, 65, 67, 70])), 'Cm11');
assert.equal(symbol(detectChord([60, 62, 63, 65, 67, 71])), 'Cm(maj11)');
assert.equal(symbol(detectChord([60, 62, 64, 67, 69, 70])), 'C13');
assert.ok(alternatives(detectChord([60, 62, 64, 67, 69, 70])).includes('E°/C*'));
assert.equal(symbol(detectChord([60, 62, 64, 67, 69, 71])), 'Cmaj13');
assert.equal(symbol(detectChord([60, 62, 63, 67, 69, 70])), 'Cm13');
assert.equal(symbol(detectChord([60, 62, 63, 67, 69, 71])), 'Cm(maj13)');

assert.equal(noteName(61), 'C#');
setNoteSpelling({ flats: true });
assert.equal(noteName(61), 'Db');
assert.equal(symbol(detectChord([61, 65, 68])), 'Db');
assert.ok(alternatives(detectChord([61, 65, 68, 72])).includes('Fm/Db*'));
assert.equal(symbol(detectChord([61, 65, 68, 70])), 'Db6');
assert.ok(alternatives(detectChord([61, 65, 68, 70])).includes('Bbm7/Db'));
assert.ok(alternatives(detectChord([61, 65, 68, 70])).includes('Bbm/Db*'));
assert.equal(symbol(detectChord([49, 53, 56, 63, 67, 70])), 'Eb/Db*');

console.log('music tests passed');
