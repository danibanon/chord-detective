import test from 'node:test';
import assert from 'node:assert/strict';

import {
  AppConfig,
  buildDisplayModel,
  clampWindowMidi0,
  clearAllNotes,
  createInitialState,
  createPointerSession,
  detectChordResult,
  formatChordLabelHtml,
  formatChordQualityHtml,
  formatChordSubtitle,
  formatMidiNoteName,
  getAlternateChordMarkup,
  getChordRenderModel,
  getDegreeLabel,
  getNotePillModels,
  getVisibleOctaves,
  isTapGesture,
  setMidiHeld,
  setSustainPedal,
  shouldArmPan,
  toggleManualNote,
  translateMidiMessage,
} from '../app-logic.js';

function createState(overrides={}){
  const state=createInitialState({midiSupported:true});
  Object.assign(state,overrides);
  if(overrides.piano){
    state.piano={...createInitialState({midiSupported:true}).piano,...overrides.piano};
  }
  if(overrides.keys){
    state.keys=overrides.keys;
  }
  return state;
}

test('detectChordResult preserves exact match preference and alternates ordering',()=>{
  const result=detectChordResult([60,62,65,69],true);
  assert.equal(result.primaryChord?.displayLabel,'F6/C');
  assert.deepEqual(result.alternates.map(chord=>chord.displayLabel),['Dm7/C']);
});

test('detectChordResult preserves omitted-fifth fallback names',()=>{
  const result=detectChordResult([57,60,67],true);
  assert.equal(result.primaryChord?.displayLabel,'Am7(no5)');
  assert.equal(result.primaryChord?.omittedFifth,true);
});

test('note formatting and chord label html stay unchanged',()=>{
  assert.equal(formatMidiNoteName(61,true),'D♭4');
  assert.equal(formatMidiNoteName(61,false),'C#4');
  assert.equal(formatChordQualityHtml('m7'),'m<sup>7</sup>');
  assert.equal(
    formatChordLabelHtml('B♭','m7/E♭'),
    '<span class="chord-alt-root">B♭</span><span class="chord-alt-quality">m<sup>7</sup></span><span class="chord-alt-slash">/E♭</span>'
  );
});

test('formatChordSubtitle preserves spoken slash-chord text',()=>{
  const result=detectChordResult([60,62,65,69],true);
  assert.equal(formatChordSubtitle(result.primaryChord),'F major six over C');
});

test('buildDisplayModel preserves centered-window and manual-pan behavior',()=>{
  const centeredState=createState({
    manual:new Set([72,76,79]),
    piano:{windowMidi0:48,nocts:2,translateX:0,hasManualPan:false},
    keys:new Map([[48,{}]]),
  });
  const centered=buildDisplayModel(centeredState,{width:500,height:800},'manual',false);
  assert.equal(getVisibleOctaves(500),2);
  assert.equal(centered.piano.windowMidi0,69);
  assert.equal(centered.highlightedRootPc,0);

  const pannedState=createState({
    manual:new Set([72,76,79]),
    piano:{windowMidi0:53,nocts:2,translateX:0,hasManualPan:true},
    keys:new Map([[53,{}]]),
  });
  const panned=buildDisplayModel(pannedState,{width:500,height:800},'manual',false);
  assert.equal(panned.piano.windowMidi0,clampWindowMidi0(53,2));
});

test('buildDisplayModel preserves empty resize reset and single-note highlight',()=>{
  const emptyState=createState({
    piano:{windowMidi0:null,nocts:3,translateX:0,hasManualPan:false},
    keys:new Map(),
  });
  const empty=buildDisplayModel(emptyState,{width:1300,height:700},'resize',true);
  assert.equal(empty.piano.windowMidi0,36);
  assert.equal(empty.piano.structureChanged,true);

  const singleState=createState({
    manual:new Set([61]),
    keys:new Map([[48,{}]]),
  });
  const single=buildDisplayModel(singleState,{width:900,height:700},'manual',false);
  assert.equal(single.highlightedRootPc,1);
  assert.equal(single.chord,null);
});

test('state transitions preserve sustain pedal semantics and clearing behavior',()=>{
  const state=createState();
  setMidiHeld(state,60,true);
  setMidiHeld(state,64,true);
  setSustainPedal(state,true);
  setMidiHeld(state,60,false);
  assert.deepEqual([...state.midiActive].sort((a,b)=>a-b),[60,64]);
  setSustainPedal(state,false);
  assert.deepEqual([...state.midiActive], [64]);

  toggleManualNote(state,67);
  assert.deepEqual([...state.manual],[67]);
  clearAllNotes(state);
  assert.equal(state.manual.size,0);
  assert.equal(state.midiActive.size,0);
  assert.equal(state.sustainPedalDown,false);
});

test('translateMidiMessage preserves note and pedal decoding',()=>{
  assert.deepEqual(translateMidiMessage([0x90,60,100]),{midi:60,isHeld:true});
  assert.deepEqual(translateMidiMessage([0x90,60,0]),{midi:60,isHeld:false});
  assert.deepEqual(translateMidiMessage([0x80,60,64]),{midi:60,isHeld:false});
  assert.deepEqual(translateMidiMessage([0xb0,64,127]),{isSustainPedal:true,isDown:true});
  assert.equal(translateMidiMessage([0x90,12,100]),null);
});

test('render models preserve empty, single, chord, and unrecognized states',()=>{
  const empty=buildDisplayModel(createState(),{width:900,height:700},'auto',false);
  assert.deepEqual(getChordRenderModel(empty),{
    root:'',
    symbol:'',
    typeClass:'',
    typeText:'',
    alternates:[],
    placeholderVisible:true,
  });

  const single=buildDisplayModel(createState({
    manual:new Set([61]),
    keys:new Map([[48,{}]]),
  }),{width:900,height:700},'auto',false);
  assert.deepEqual(getChordRenderModel(single),{
    root:'D♭',
    symbol:'',
    typeClass:'',
    typeText:'D flat note',
    alternates:[],
    placeholderVisible:false,
  });

  const chord=buildDisplayModel(createState({
    manual:new Set([60,64,67]),
    keys:new Map([[48,{}]]),
  }),{width:900,height:700},'auto',false);
  assert.equal(getChordRenderModel(chord).typeText,'C major');

  const unrecognized=buildDisplayModel(createState({
    manual:new Set([60,61]),
    keys:new Map([[48,{}]]),
  }),{width:900,height:700},'auto',false);
  assert.equal(getChordRenderModel(unrecognized).typeText,'chord not recognised');
});

test('alternate markup and note pill models preserve output shape',()=>{
  const chord=buildDisplayModel(createState({
    manual:new Set([60,62,65,69]),
    keys:new Map([[48,{}]]),
  }),{width:900,height:700},'auto',false);
  const alternateMarkup=getAlternateChordMarkup(getChordRenderModel(chord).alternates);
  assert.equal(alternateMarkup.className,'chord-alts');
  assert.match(alternateMarkup.html,/chord-alt-root">D</);
  assert.match(alternateMarkup.html,/m<sup>7<\/sup>/);

  const notePills=getNotePillModels(chord);
  assert.deepEqual(notePills.map(pill=>pill.pillClass),['note','note','root','note']);
  assert.deepEqual(notePills.map(pill=>pill.degreeText),['5','6','1','3']);
});

test('gesture helpers preserve pan arming and tap thresholds',()=>{
  const interaction=createPointerSession();
  assert.equal(interaction.pointerId,null);
  assert.equal(
    shouldArmPan({panArmed:false,panAllowed:true,absDeltaX:AppConfig.drag.startDistance,absDeltaY:0}),
    true
  );
  assert.equal(
    shouldArmPan({panArmed:false,panAllowed:true,absDeltaX:7,absDeltaY:0}),
    false
  );
  assert.equal(
    isTapGesture({startedMidi:60,releasedMidi:60,absDeltaX:10,absDeltaY:10}),
    true
  );
  assert.equal(
    isTapGesture({startedMidi:60,releasedMidi:61,absDeltaX:1,absDeltaY:1}),
    false
  );
});

test('degree labels preserve mapping',()=>{
  assert.equal(getDegreeLabel(0,0),'1');
  assert.equal(getDegreeLabel(0,3),'b3');
  assert.equal(getDegreeLabel(0,8),'#5');
});
