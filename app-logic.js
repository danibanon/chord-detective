export const AppConfig={
  minMidi:21,
  maxMidi:108,
  landscapeLock:'landscape',
  blackSemitones:new Set([1,3,6,8,10]),
  sharpNames:['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'],
  flatNames:['C','D♭','D','E♭','E','F','G♭','G','A♭','A','B♭','B'],
  chordPatterns:[
    {sym:'5',name:'Power chord',longName:'five',intervals:[0,7]},
    {sym:'',name:'Major',longName:'major',intervals:[0,4,7]},
    {sym:'m',name:'Minor',longName:'minor',intervals:[0,3,7]},
    {sym:'°',name:'Diminished',longName:'diminished',intervals:[0,3,6]},
    {sym:'+',name:'Augmented',longName:'augmented',intervals:[0,4,8]},
    {sym:'sus2',name:'Suspended 2nd',longName:'suspended two',intervals:[0,2,7]},
    {sym:'sus4',name:'Suspended 4th',longName:'suspended four',intervals:[0,5,7]},
    {sym:'M7',name:'Major 7th',longName:'major seven',intervals:[0,4,7,11]},
    {sym:'m7',name:'Minor 7th',longName:'minor seven',intervals:[0,3,7,10]},
    {sym:'7',name:'Dominant 7th',longName:'seven',intervals:[0,4,7,10]},
    {sym:'7b5',name:'Seven flat 5',longName:'seven flat five',intervals:[0,4,6,10]},
    {sym:'°7',name:'Diminished 7th',longName:'diminished seven',intervals:[0,3,6,9]},
    {sym:'ø7',name:'Half-diminished',longName:'half diminished seven',intervals:[0,3,6,10]},
    {sym:'oM7',name:'Diminished major 7th',longName:'diminished major seven',intervals:[0,3,6,11]},
    {sym:'mM7',name:'Minor major 7th',longName:'minor major seven',intervals:[0,3,7,11]},
    {sym:'M7b5',name:'Major 7 flat 5',longName:'major seven flat five',intervals:[0,4,6,11]},
    {sym:'+M7',name:'Augmented major 7th',longName:'augmented major seven',intervals:[0,4,8,11]},
    {sym:'+7',name:'Augmented 7th',longName:'augmented seven',intervals:[0,4,8,10]},
    {sym:'6',name:'Major 6th',longName:'major six',intervals:[0,4,7,9]},
    {sym:'m6',name:'Minor 6th',longName:'minor six',intervals:[0,3,7,9]},
    {sym:'add9',name:'Add 9',longName:'add nine',intervals:[0,2,4,7]},
    {sym:'add11',name:'Add 11',longName:'add eleven',intervals:[0,4,5,7]},
    {sym:'madd11',name:'Minor add 11',longName:'minor add eleven',intervals:[0,3,5,7]},
    {sym:'add#11',name:'Add sharp 11',longName:'add sharp eleven',intervals:[0,4,6,7]},
    {sym:'madd9',name:'Minor add 9',longName:'minor add nine',intervals:[0,2,3,7]},
    {sym:'addb9',name:'Add flat 9',longName:'add flat nine',intervals:[0,1,4,7]},
    {sym:'7add11',name:'Dominant 7 add 11',longName:'seven add eleven',intervals:[0,4,5,7,10]},
    {sym:'7b9',name:'Dominant flat 9',longName:'seven flat nine',intervals:[0,1,4,7,10]},
    {sym:'M7add11',name:'Major 7 add 11',longName:'major seven add eleven',intervals:[0,4,5,7,11]},
    {sym:'M7b9',name:'Major 7 flat 9',longName:'major seven flat nine',intervals:[0,1,4,7,11]},
    {sym:'addb9b5',name:'Add flat 9 flat 5',longName:'add flat nine flat five',intervals:[0,1,4,6]},
    {sym:'7b5b9',name:'Seven flat 5 flat 9',longName:'seven flat five flat nine',intervals:[0,1,4,6,10]},
    {sym:'M7b5b9',name:'Major 7 flat 5 flat 9',longName:'major seven flat five flat nine',intervals:[0,1,4,6,11]},
    {sym:'addb9#5',name:'Add flat 9 sharp 5',longName:'add flat nine sharp five',intervals:[0,1,4,8]},
    {sym:'+7b9',name:'Augmented 7th flat 9',longName:'augmented seven flat nine',intervals:[0,1,4,8,10]},
    {sym:'+M7b9',name:'Augmented major 7th flat 9',longName:'augmented major seven flat nine',intervals:[0,1,4,8,11]},
    {sym:'add#9',name:'Add sharp 9',longName:'add sharp nine',intervals:[0,3,4,7]},
    {sym:'7#9',name:'Dominant sharp 9',longName:'seven sharp nine',intervals:[0,3,4,7,10]},
    {sym:'M7#9',name:'Major 7 sharp 9',longName:'major seven sharp nine',intervals:[0,3,4,7,11]},
    {sym:'add#9b5',name:'Add sharp 9 flat 5',longName:'add sharp nine flat five',intervals:[0,3,4,6]},
    {sym:'7b5#9',name:'Seven flat 5 sharp 9',longName:'seven flat five sharp nine',intervals:[0,3,4,6,10]},
    {sym:'M7b5#9',name:'Major 7 flat 5 sharp 9',longName:'major seven flat five sharp nine',intervals:[0,3,4,6,11]},
    {sym:'add#9#5',name:'Add sharp 9 sharp 5',longName:'add sharp nine sharp five',intervals:[0,3,4,8]},
    {sym:'+7#9',name:'Augmented 7th sharp 9',longName:'augmented seven sharp nine',intervals:[0,3,4,8,10]},
    {sym:'+M7#9',name:'Augmented major 7th sharp 9',longName:'augmented major seven sharp nine',intervals:[0,3,4,8,11]},
    {sym:'7sus4',name:'Dominant 7 sus4',longName:'seven suspended four',intervals:[0,5,7,10]},
    {sym:'m7add11',name:'Minor 7 add 11',longName:'minor seven add eleven',intervals:[0,3,5,7,10]},
    {sym:'9',name:'Dominant 9th',longName:'nine',intervals:[0,2,4,7,10]},
    {sym:'M9',name:'Major 9th',longName:'major nine',intervals:[0,2,4,7,11]},
    {sym:'mM7add11',name:'Minor major 7 add 11',longName:'minor major seven add eleven',intervals:[0,3,5,7,11]},
    {sym:'m9',name:'Minor 9th',longName:'minor nine',intervals:[0,2,3,7,10]},
    {sym:'11',name:'Dominant 11th',longName:'eleven',intervals:[0,2,4,5,7,10]},
    {sym:'M11',name:'Major 11th',longName:'major eleven',intervals:[0,2,4,5,7,11]},
    {sym:'m11',name:'Minor 11th',longName:'minor eleven',intervals:[0,2,3,5,7,10]},
    {sym:'13',name:'Dominant 13th',longName:'thirteen',intervals:[0,2,4,7,9,10]},
    {sym:'M13',name:'Major 13th',longName:'major thirteen',intervals:[0,2,4,7,9,11]},
    {sym:'m13',name:'Minor 13th',longName:'minor thirteen',intervals:[0,2,3,7,9,10]},
    {sym:'6/9',name:'Six-nine',longName:'six nine',intervals:[0,2,4,7,9]},
  ],
  domIds:{
    pills:'pills',
    croot:'croot',
    csym:'csym',
    cslash:'cslash',
    cph:'cph',
    ctype:'ctype',
    calts:'calts',
    piano:'piano',
    flatBtn:'flatBtn',
    midiBtn:'midiBtn',
    midiBtnLabel:'midiBtnLabel',
    clrBtn:'clrBtn',
    orientationOverlay:'orientationOverlay',
    orientationCopy:'orientationCopy',
  },
  drag:{
    startDistance:8,
    tapMaxDistance:10,
    dominanceRatio:1.2,
    holdDelayMs:120,
  },
  resizeDebounceMs:120,
};

export function getPitchClass(note){
  return ((note%12)+12)%12;
}

export function getNoteNames(useFlats){
  return useFlats?AppConfig.flatNames:AppConfig.sharpNames;
}

export function formatMidiNoteName(midi,useFlats){
  const noteNames=getNoteNames(useFlats);
  return `${noteNames[getPitchClass(midi)]}${Math.floor(midi/12)-1}`;
}

function getCandidateRoots(notes){
  const pitchClasses=[...new Set(notes.map(getPitchClass))].sort((a,b)=>a-b);
  const bassPitchClass=getPitchClass(Math.min(...notes));
  return{
    pitchClasses,
    bassPitchClass,
    candidateRoots:[bassPitchClass,...pitchClasses.filter(pc=>pc!==bassPitchClass)],
  };
}

function arraysEqual(valuesA,valuesB){
  return valuesA.length===valuesB.length
    && valuesA.every((value,index)=>value===valuesB[index]);
}

function getIntervalsForRoot(pitchClasses,rootPc){
  return pitchClasses
    .map(pc=>(pc-rootPc+12)%12)
    .sort((a,b)=>a-b);
}

function getOmittedFifthIntervals(pattern){
  const fifthIndex=pattern.intervals.findIndex(interval=>interval===7);
  if(fifthIndex<0)return null;
  return pattern.intervals.filter((_,index)=>index!==fifthIndex);
}

function buildChordMatch(rootPc,bassPitchClass,noteNames,pattern,{omittedFifth=false}={}){
  const inversion=bassPitchClass!==rootPc;
  const sym=omittedFifth?`${pattern.sym}(no5)`:pattern.sym;
  const longName=omittedFifth?`${pattern.longName} no fifth`:pattern.longName;

  return{
    rootPc,
    rootName:noteNames[rootPc],
    sym,
    name:omittedFifth?`${pattern.name} no 5th`:pattern.name,
    longName,
    slash:inversion?`/${noteNames[bassPitchClass]}`:'',
    inv:inversion,
    omittedFifth,
    displayLabel:'',
    discoveryOrder:-1,
  };
}

function getExplicitAlterationCount(symbol){
  const matches=symbol.match(/[#b]\d+/g);
  return matches?matches.length:0;
}

function getDisplayAccidentalCount(label){
  const matches=label.match(/[#♭b]/g);
  return matches?matches.length:0;
}

function getDecorationCount(symbol){
  const matches=symbol.match(/[+#b°ø/()]/g);
  return matches?matches.length:0;
}

function compareExactChordMatches(matchA,matchB){
  const inversionDelta=Number(matchA.inv)-Number(matchB.inv);
  if(inversionDelta!==0)return inversionDelta;

  const alterationDelta=getExplicitAlterationCount(matchA.sym)-getExplicitAlterationCount(matchB.sym);
  if(alterationDelta!==0)return alterationDelta;

  const accidentalDelta=getDisplayAccidentalCount(matchA.displayLabel)-getDisplayAccidentalCount(matchB.displayLabel);
  if(accidentalDelta!==0)return accidentalDelta;

  const decorationDelta=getDecorationCount(matchA.sym)-getDecorationCount(matchB.sym);
  if(decorationDelta!==0)return decorationDelta;

  const symbolLengthDelta=matchA.sym.length-matchB.sym.length;
  if(symbolLengthDelta!==0)return symbolLengthDelta;

  const labelLengthDelta=matchA.displayLabel.length-matchB.displayLabel.length;
  if(labelLengthDelta!==0)return labelLengthDelta;

  return matchA.discoveryOrder-matchB.discoveryOrder;
}

function finalizeChordMatches(matches,{preferSimplerExactNames=false}={}){
  const seenLabels=new Set();
  const finalized=[];

  for(const [discoveryOrder,match] of matches.entries()){
    const displayLabel=`${match.rootName}${match.sym}${match.slash||''}`;
    if(seenLabels.has(displayLabel))continue;
    seenLabels.add(displayLabel);
    finalized.push({
      ...match,
      displayLabel,
      discoveryOrder,
    });
  }

  if(preferSimplerExactNames){
    finalized.sort(compareExactChordMatches);
  }

  return finalized;
}

function findExactChordMatches(notes,useFlats){
  if(notes.length<2)return[];

  const {pitchClasses,bassPitchClass,candidateRoots}=getCandidateRoots(notes);
  const noteNames=getNoteNames(useFlats);
  const matches=[];

  for(const rootPc of candidateRoots){
    const intervals=getIntervalsForRoot(pitchClasses,rootPc);

    for(const pattern of AppConfig.chordPatterns){
      if(!arraysEqual(pattern.intervals,intervals))continue;
      matches.push(buildChordMatch(rootPc,bassPitchClass,noteNames,pattern));
    }
  }

  return finalizeChordMatches(matches,{preferSimplerExactNames:true});
}

function findOmittedFifthChordMatches(notes,useFlats){
  if(notes.length<2)return[];

  const {pitchClasses,bassPitchClass,candidateRoots}=getCandidateRoots(notes);
  const noteNames=getNoteNames(useFlats);
  const matches=[];

  for(const rootPc of candidateRoots){
    const intervals=getIntervalsForRoot(pitchClasses,rootPc);

    for(const pattern of AppConfig.chordPatterns){
      const omittedFifthIntervals=getOmittedFifthIntervals(pattern);
      if(!omittedFifthIntervals||!arraysEqual(omittedFifthIntervals,intervals))continue;
      matches.push(buildChordMatch(rootPc,bassPitchClass,noteNames,pattern,{omittedFifth:true}));
    }
  }

  return finalizeChordMatches(matches);
}

export function detectChordResult(notes,useFlats){
  if(notes.length<2){
    return{primaryChord:null,alternates:[]};
  }

  const exactMatches=findExactChordMatches(notes,useFlats);
  if(exactMatches.length>0){
    return{
      primaryChord:exactMatches[0],
      alternates:exactMatches.slice(1),
    };
  }

  const omittedFifthMatches=findOmittedFifthChordMatches(notes,useFlats);
  if(omittedFifthMatches.length>0){
    return{
      primaryChord:omittedFifthMatches[0],
      alternates:omittedFifthMatches.slice(1),
    };
  }

  return{primaryChord:null,alternates:[]};
}

export function formatChordQualityHtml(symbol){
  if(!symbol)return'';
  const normalized=symbol.replace(/°/g,'o');
  if(normalized==='m'){
    return 'm';
  }
  if(normalized.length>1&&normalized[0]==='m'){
    return `m${formatChordQualityHtml(normalized.slice(1))}`;
  }
  return `<sup>${normalized}</sup>`;
}

export function splitChordSymbol(symbol){
  if(!symbol)return{quality:'',slashPart:''};
  const match=symbol.match(/\/([A-G](?:#|♭)?)$/);
  if(!match)return{quality:symbol,slashPart:''};
  return{
    quality:symbol.slice(0,-match[0].length),
    slashPart:match[0],
  };
}

export function formatChordLabelHtml(root,symbol){
  const {quality,slashPart}=splitChordSymbol(symbol);
  return [
    `<span class="chord-alt-root">${root}</span>`,
    quality?`<span class="chord-alt-quality">${formatChordQualityHtml(quality)}</span>`:'',
    slashPart?`<span class="chord-alt-slash">${slashPart}</span>`:'',
  ].join('');
}

export function formatSpokenNoteName(noteName){
  return noteName
    .replace(/#/g,' sharp')
    .replace(/♭/g,' flat')
    .replace(/\s+/g,' ')
    .trim();
}

export function formatChordSubtitle(chord){
  const rootText=formatSpokenNoteName(chord.rootName);
  const qualityText=chord.longName||chord.name.toLowerCase();
  const bassText=chord.slash
    ?formatSpokenNoteName(chord.slash.slice(1))
    :'';

  return bassText
    ?`${rootText} ${qualityText} over ${bassText}`
    :`${rootText} ${qualityText}`;
}

export function getDegreeLabel(rootPc,pitchClass){
  if(rootPc===null||rootPc===undefined)return'';

  const interval=(pitchClass-rootPc+12)%12;
  const degreeMap={
    0:'1',
    1:'♭2',
    2:'2',
    3:'♭3',
    4:'3',
    5:'4',
    6:'♭5',
    7:'5',
    8:'#5',
    9:'6',
    10:'♭7',
    11:'7',
  };

  return degreeMap[interval]||'';
}

export function getVisibleOctaves(width){
  if(width<520)return 2;
  if(width<860)return 3;
  if(width<1260)return 4;
  return 5;
}

export function getDefaultWindowMidi0(width){
  return width<1260?48:36;
}

export function buildPianoRange(){
  let whiteIndex=0;
  const keys=[];

  for(let midi=AppConfig.minMidi;midi<=AppConfig.maxMidi;midi++){
    const isBlack=AppConfig.blackSemitones.has(getPitchClass(midi));
    const gWi=isBlack?Math.max(0,whiteIndex-1):whiteIndex;
    keys.push({midi,isBlack,gWi});
    if(!isBlack)whiteIndex++;
  }

  return{keys,totalWhiteKeys:whiteIndex};
}

export const PianoRange=buildPianoRange();

const allowedWindowStartsCache=new Map();

function getMaxWindowStart(nocts){
  return Math.max(AppConfig.minMidi,AppConfig.maxMidi-nocts*12+1);
}

export function getAllowedWindowStarts(nocts){
  if(allowedWindowStartsCache.has(nocts))return allowedWindowStartsCache.get(nocts);

  const maxStart=getMaxWindowStart(nocts);
  const starts=[];

  for(let midi=AppConfig.minMidi;midi<=maxStart;midi++){
    if(!AppConfig.blackSemitones.has(getPitchClass(midi))){
      starts.push(midi);
    }
  }

  allowedWindowStartsCache.set(nocts,starts);
  return starts;
}

export function clampWindowMidi0(midi0,nocts){
  const starts=getAllowedWindowStarts(nocts);
  if(!starts.length)return AppConfig.minMidi;

  return starts.reduce((best,start)=>
    Math.abs(start-midi0)<Math.abs(best-midi0)?start:best,
  starts[0]);
}

export function getCenteredWindowMidi0(notes,nocts,currentMidi0){
  if(!notes.length)return clampWindowMidi0(currentMidi0,nocts);

  const minNote=Math.min(...notes);
  const maxNote=Math.max(...notes);
  const span=nocts*12;
  const currentStart=clampWindowMidi0(currentMidi0,nocts);

  if(minNote>=currentStart&&maxNote<=currentStart+span-1){
    return currentStart;
  }

  const unclampedIdeal=(minNote+maxNote)/2-span/2+6;
  const centeredStart=clampWindowMidi0(unclampedIdeal,nocts);
  if(maxNote-minNote+1>span)return centeredStart;

  const maxStart=getMaxWindowStart(nocts);
  const candidateStarts=getAllowedWindowStarts(nocts).filter(start=>
    start>=Math.max(AppConfig.minMidi,maxNote-span+1)
    && start<=Math.min(maxStart,minNote)
  );

  if(!candidateStarts.length)return centeredStart;

  return candidateStarts.reduce((best,start)=>
    Math.abs(start-unclampedIdeal)<Math.abs(best-unclampedIdeal)?start:best,
  candidateStarts[0]);
}

export function getKeyDimensions(nocts,viewport,wrapWidth){
  const rawWhiteKeyWidth=Math.min((wrapWidth-80)/(7*nocts),78);
  const maxWhiteKeyHeight=Math.min(viewport.height*.46,430);
  const minWhiteKeyHeight=viewport.height<520?80:140;
  const whiteKeyWidth=Math.max(1,Math.round(rawWhiteKeyWidth));
  const whiteKeyHeight=Math.round(
    Math.max(minWhiteKeyHeight,Math.min(whiteKeyWidth*5.2,maxWhiteKeyHeight))
  );
  const blackKeyWidth=Math.max(1,Math.round(whiteKeyWidth*.6));
  const blackKeyHeight=Math.max(1,Math.round(whiteKeyHeight*.64));
  return{
    whiteKeyWidth,
    whiteKeyHeight,
    blackKeyWidth,
    blackKeyHeight,
  };
}

export function createInitialState({midiSupported=false}={}){
  return{
    manual:new Set(),
    midiHeld:new Set(),
    midiActive:new Set(),
    sustainPedalDown:false,
    keys:new Map(),
    piano:{windowMidi0:null,nocts:2,translateX:0,hasManualPan:false},
    midiAccess:null,
    midiSupported,
    useFlats:true,
    resizeTimer:null,
  };
}

export function getActiveNotes(currentState){
  return [...currentState.manual,...currentState.midiActive].sort((a,b)=>a-b);
}

export function isMidiActive(currentState,midi){
  return currentState.manual.has(midi)||currentState.midiActive.has(midi);
}

export function toggleManualNote(currentState,midi){
  if(currentState.manual.has(midi))currentState.manual.delete(midi);
  else currentState.manual.add(midi);
}

export function clearAllNotes(currentState){
  currentState.manual.clear();
  clearMidiHeldNotes(currentState);
}

export function clearMidiHeldNotes(currentState){
  currentState.midiHeld.clear();
  currentState.midiActive.clear();
  currentState.sustainPedalDown=false;
}

export function setMidiHeld(currentState,midi,isHeld){
  if(isHeld){
    currentState.midiHeld.add(midi);
    currentState.midiActive.add(midi);
    return;
  }

  currentState.midiHeld.delete(midi);
  if(!currentState.sustainPedalDown){
    currentState.midiActive.delete(midi);
  }
}

export function setSustainPedal(currentState,isDown){
  currentState.sustainPedalDown=isDown;
  if(isDown)return;

  for(const midi of [...currentState.midiActive]){
    if(!currentState.midiHeld.has(midi)){
      currentState.midiActive.delete(midi);
    }
  }
}

export function setMidiAccess(currentState,midiAccess){
  currentState.midiAccess=midiAccess;
}

export function setUseFlats(currentState,useFlats){
  currentState.useFlats=useFlats;
}

export function updatePianoState(currentState,pianoModel){
  currentState.piano.windowMidi0=pianoModel.windowMidi0;
  currentState.piano.nocts=pianoModel.nocts;
  currentState.piano.translateX=pianoModel.translateX;
}

function getNextWindowMidi0({activeNotes,visibleOctaves,reason,currentWindowMidi0,defaultWindowMidi0,hasManualPan}){
  if(reason==='resize'||reason==='clear'){
    return activeNotes.length
      ?getCenteredWindowMidi0(activeNotes,visibleOctaves,currentWindowMidi0)
      :clampWindowMidi0(defaultWindowMidi0,visibleOctaves);
  }
  if(reason==='midi'&&activeNotes.length){
    return getCenteredWindowMidi0(activeNotes,visibleOctaves,currentWindowMidi0);
  }
  if(activeNotes.length&&hasManualPan){
    return clampWindowMidi0(currentWindowMidi0,visibleOctaves);
  }
  if(activeNotes.length){
    return getCenteredWindowMidi0(activeNotes,visibleOctaves,currentWindowMidi0);
  }
  return clampWindowMidi0(currentWindowMidi0,visibleOctaves);
}

function resolveChordDisplay(activeNotes,useFlats){
  if(activeNotes.length<2){
    return{primaryChord:null,alternates:[]};
  }
  return detectChordResult(activeNotes,useFlats);
}

function getHighlightedRootPc(activeNotes,chord){
  const singleNoteRootPc=activeNotes.length===1?getPitchClass(activeNotes[0]):null;
  return chord?chord.rootPc:singleNoteRootPc;
}

export function buildDisplayModel(currentState,viewport,reason='auto',forceStructure=false){
  const activeNotes=getActiveNotes(currentState);
  const visibleOctaves=getVisibleOctaves(viewport.width);
  const defaultWindowMidi0=getDefaultWindowMidi0(viewport.width);
  const currentWindowMidi0=currentState.piano.windowMidi0??defaultWindowMidi0;
  const nextWindowMidi0=getNextWindowMidi0({
    activeNotes,
    visibleOctaves,
    reason,
    currentWindowMidi0,
    defaultWindowMidi0,
    hasManualPan:currentState.piano.hasManualPan,
  });
  const chordResult=resolveChordDisplay(activeNotes,currentState.useFlats);
  const chord=chordResult.primaryChord;

  return{
    viewport,
    noteNames:getNoteNames(currentState.useFlats),
    activeNotes,
    chord,
    alternates:chordResult.alternates,
    highlightedRootPc:getHighlightedRootPc(activeNotes,chord),
    piano:{
      nocts:visibleOctaves,
      windowMidi0:nextWindowMidi0,
      structureChanged:
        forceStructure
        || currentState.piano.nocts!==visibleOctaves
        || currentState.keys.size===0,
    },
  };
}

export function getChordRenderModel(displayModel){
  const {activeNotes,chord,alternates,noteNames,highlightedRootPc}=displayModel;

  if(activeNotes.length===0){
    return{
      root:'',
      symbol:'',
      typeClass:'',
      typeText:'',
      alternates:[],
      placeholderVisible:true,
    };
  }

  if(activeNotes.length===1){
    return{
      root:noteNames[highlightedRootPc],
      symbol:'',
      typeClass:'',
      typeText:`${formatSpokenNoteName(noteNames[highlightedRootPc])} note`,
      alternates:[],
      placeholderVisible:false,
    };
  }

  if(chord){
    return{
      root:chord.rootName,
      symbol:chord.sym+(chord.slash||''),
      typeClass:chord.inv?'inv':'known',
      typeText:formatChordSubtitle(chord),
      alternates,
      placeholderVisible:false,
    };
  }

  return{
    root:'?',
    symbol:'',
    typeClass:'',
    typeText:'chord not recognised',
    alternates:[],
    placeholderVisible:false,
  };
}

export function getAlternateChordMarkup(alternates){
  if(alternates.length===0){
    return{
      className:'chord-alts hidden',
      html:'',
    };
  }

  const visibleAlternates=alternates.slice(0,2);
  return{
    className:'chord-alts',
    html:visibleAlternates
      .map(chord=>`<span class="chord-alt-item">${formatChordLabelHtml(chord.rootName,`${chord.sym}${chord.slash||''}`)}</span>`)
      .join(''),
  };
}

export function getNotePillModels(displayModel){
  const {activeNotes,chord,noteNames,highlightedRootPc}=displayModel;
  return activeNotes.map(midi=>{
    const pitchClass=getPitchClass(midi);
    let pillClass='neutral';

    if(highlightedRootPc!==null&&pitchClass===highlightedRootPc)pillClass='root';
    else if(chord||activeNotes.length===1)pillClass='note';

    return{
      midi,
      pitchClass,
      pillClass,
      noteText:noteNames[pitchClass],
      degreeText:chord?getDegreeLabel(chord.rootPc,pitchClass):'',
    };
  });
}

export function translateMidiMessage(messageData){
  const [status,data1,data2]=messageData;
  const command=status&0xf0;

  if(command===0x90&&data2>0){
    if(data1<AppConfig.minMidi||data1>AppConfig.maxMidi)return null;
    return{midi:data1,isHeld:true};
  }

  if(command===0x80||(command===0x90&&data2===0)){
    if(data1<AppConfig.minMidi||data1>AppConfig.maxMidi)return null;
    return{midi:data1,isHeld:false};
  }

  if(command===0xb0&&data1===64){
    return{isSustainPedal:true,isDown:data2>=64};
  }

  return null;
}

export function createPointerSession(){
  return{
    pointerId:null,
    startX:0,
    startY:0,
    startTranslateX:0,
    dragging:false,
    panArmed:false,
    startMidi:null,
    panAllowed:true,
    holdTimer:null,
  };
}

export function shouldArmPan({panArmed,panAllowed,absDeltaX,absDeltaY}){
  return !panArmed
    && panAllowed
    && absDeltaX>=AppConfig.drag.startDistance
    && absDeltaX>absDeltaY*AppConfig.drag.dominanceRatio;
}

export function isTapGesture({startedMidi,releasedMidi,absDeltaX,absDeltaY}){
  return startedMidi!==null
    && releasedMidi===startedMidi
    && absDeltaX<=AppConfig.drag.tapMaxDistance
    && absDeltaY<=AppConfig.drag.tapMaxDistance;
}
