/* -----------------------------------------------------------
   Helper shortcuts
----------------------------------------------------------------*/
const $ = id => document.getElementById(id);
const rngLabel = (rng,lbl)=>rng.addEventListener('input',()=>$(lbl).textContent=rng.value);
rngLabel($('emojiSize'),'emojiVal');
rngLabel($('labelSize'),'labelVal');
rngLabel($('padding'),'padVal');
rngLabel($('gridStrokeW'),'gridStrokeVal');
rngLabel($('borderStrokeW'),'borderStrokeVal');
rngLabel($('bgAlpha'),'alphaVal');

let dlCounter = 1;

function ensureFont(family){
  const id='gfont-'+family.replace(/\s+/g,'-');
  if(!document.getElementById(id)){
    const link=document.createElement('link');
    link.id=id; link.rel='stylesheet';
    link.href=`https://fonts.googleapis.com/css2?family=${family.replace(/ /g,'+')}&display=swap`;
    document.head.appendChild(link);
  }
}

/* Random pick */
const choice = a => a[Math.random()*a.length|0];
const shuffle = a => {
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
};

/* -----------------------------------------------------------
   Canvas generator
----------------------------------------------------------------*/
async function makeMatrix(){
  const cols = +$('cols').value;
  const rows = +$('rows').value;

  const emojiPx = +$('emojiSize').value;
  const labelPx = +$('labelSize').value;
  const pad     = +$('padding').value;
  const gridStrokeW  = +$('gridStrokeW').value;
  const gridStrokeC  = $('gridStrokeCol').value;
  const borderStrokeW = +$('borderStrokeW').value;
  const borderStrokeC = $('borderStrokeCol').value;
  const font    = $('fontSel').value;
  const bgAlpha = +$('bgAlpha').value / 100;
  const bgColor = $('bgColor').value;

  ensureFont(font);
  /* wait until the font is actually available before drawing text */
  await document.fonts.load(`${labelPx}px "${font}"`);

  const available = Object.keys(wordMap);
  const needed = cols*rows;
  if(available.length < needed){
    alert('Not enough words to fill matrix without duplicates');
    return;
  }
  const words = shuffle([...available]).slice(0, needed);

  /* Cell dimensions: emoji + label + paddings top/bottom */
  const cellW = emojiPx + pad*2;
  const cellH = emojiPx + labelPx + pad*3;

  /* Large internal canvas size */
  const canvas = $('matrix');
  const scale  = window.devicePixelRatio||1;
  canvas.width  = cols*cellW*scale;
  canvas.height = rows*cellH*scale;
  canvas.style.width  = cols*cellW + 'px';
  $('canvasSize').textContent = `${cols*cellW} x ${rows*cellH}`;

  const ctx = canvas.getContext('2d');
  ctx.scale(scale,scale);
  ctx.clearRect(0,0,canvas.width/scale,canvas.height/scale);
  if(bgAlpha>0){
    ctx.save();
    ctx.globalAlpha = bgAlpha;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0,0,canvas.width/scale,canvas.height/scale);
    ctx.restore();
  }
  ctx.fillStyle = '#000';

  ctx.textAlign='center';
  ctx.textBaseline='middle';

  /* Draw grid + content */
  let idx=0;
  for(let r=0;r<rows;r++){
    for(let c=0;c<cols;c++){
      const x=c*cellW, y=r*cellH;
      const cx=x+cellW/2, cy=y+pad+emojiPx/2;

      const word=words[idx++];
      const emo =choice(wordMap[word]);

      /* emoji */
      ctx.font=`${emojiPx}px sans-serif`;
      ctx.fillText(emo,cx,cy);

      /* label */
      ctx.font=`${labelPx}px "${font}", sans-serif`;
      ctx.fillText(word,cx,y+emojiPx+pad*2+labelPx/2);
    }
  }

  /* Grid lines */
  if(gridStrokeW>0){
    ctx.lineWidth=gridStrokeW;
    ctx.strokeStyle=gridStrokeC;
    ctx.beginPath();
    for(let c=1;c<cols;c++){
      const x=c*cellW;
      ctx.moveTo(x,0);
      ctx.lineTo(x,rows*cellH);
    }
    for(let r=1;r<rows;r++){
      const y=r*cellH;
      ctx.moveTo(0,y);
      ctx.lineTo(cols*cellW,y);
    }
    ctx.stroke();
  }

  /* Outer border */
  if(borderStrokeW>0){
    ctx.lineWidth=borderStrokeW;
    ctx.strokeStyle=borderStrokeC;
    ctx.strokeRect(0,0,cols*cellW,rows*cellH);
  }

  /* Download button */
  $('download').onclick = () => {
    const link = document.createElement('a');
    link.download = `word_grid_${cols}x${rows}_${String(dlCounter).padStart(4,'0')}.png`;
    link.href = canvas.toDataURL('image/png');
    dlCounter++;
    link.click();
  };
}

/* -----------------------------------------------------------
   UI wiring
----------------------------------------------------------------*/
$('generate').onclick=makeMatrix;
document.querySelectorAll('#controls input, #controls select')
        .forEach(el=>el.addEventListener('change',makeMatrix));

makeMatrix(); /* initial draw */
