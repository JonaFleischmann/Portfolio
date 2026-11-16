var e=`
<svg class="xmas-sleigh" viewBox="0 0 150 44" width="150" height="44" aria-hidden="true">
  <!-- reins -->
  <path d="M54 23 Q76 18 99 21" fill="none" stroke="var(--muted)" stroke-width="0.8" />

  <!-- sleigh -->
  <g class="xmas-sleigh-body">
    <path d="M6 38 H50 Q57 38 57 32" fill="none" stroke="var(--ink)" stroke-width="1.6" stroke-linecap="round" />
    <path d="M12 38 V34 M44 38 V34" stroke="var(--ink)" stroke-width="1.2" />
    <path d="M4 18 Q4 34 14 34 H46 Q54 34 54 24 L50 22 H20 Q12 22 10 14 Z" fill="var(--accent)" />
    <path d="M14 30 H48" stroke="var(--paper)" stroke-width="0.8" opacity="0.6" />

    <!-- sack -->
    <path d="M8 20 Q4 8 14 6 Q22 8 18 20 Z" fill="var(--muted)" />

    <!-- santa -->
    <g class="xmas-santa">
      <path d="M22 22 Q22 10 30 10 Q38 10 38 22 Z" fill="var(--accent)" />
      <path d="M22 18 H38" stroke="var(--paper)" stroke-width="1.6" />
      <circle cx="30" cy="7" r="3.6" fill="#f1c9a5" />
      <path d="M26.4 8 Q30 15 33.6 8 Z" fill="#fff" />
      <path d="M26 6 Q28 -1 35 1 L37 5 Q33 3 34 6 Z" fill="var(--accent)" />
      <circle cx="37.4" cy="5.2" r="1.5" fill="#fff" />
      <path d="M26 6.2 H34" stroke="#fff" stroke-width="1.4" stroke-linecap="round" />
      <path class="xmas-arm" d="M37 14 L42 10" stroke="var(--accent)" stroke-width="2.4" stroke-linecap="round" />
    </g>
  </g>

  <!-- reindeer -->
  ${t(72,0)}
  ${t(108,1,!0)}
</svg>`;function t(e,t,n=!1){return`
  <g transform="translate(${e} 0)"><g class="xmas-deer" style="--i:${t}">
    <g fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-linecap="round">
      <path class="xmas-leg xmas-leg-back" d="M6 25 V36" />
      <path class="xmas-leg xmas-leg-back xmas-leg-lag" d="M9.5 25 V36" />
      <path class="xmas-leg xmas-leg-front" d="M19.5 25 V36" />
      <path class="xmas-leg xmas-leg-front xmas-leg-lag" d="M23 25 V36" />
    </g>
    <path d="M2 22 Q2 17 9 17 H22 Q27 17 27 22 Q27 27 21 27 H7 Q2 27 2 22 Z" fill="var(--muted)" />
    <path d="M23 19 L27 10" stroke="var(--muted)" stroke-width="4" stroke-linecap="round" />
    <path d="M26 11 Q27 7 32 9 Q33 12 29 13 Z" fill="var(--muted)" />
    <path d="M27 8 L25 2 M25.6 4 L22.5 3.5 M28.5 8 L31 2 M30 4.5 L33 3.5"
      fill="none" stroke="var(--ink)" stroke-width="1" stroke-linecap="round" />
    <path d="M2.5 20 L0 18" stroke="var(--muted)" stroke-width="2" stroke-linecap="round" />
    <circle cx="32.4" cy="10" r="${n?1.6:.9}" fill="${n?`var(--accent)`:`var(--ink)`}"
      ${n?`class="xmas-nose"`:``} />
  </g></g>`}var n=`
<svg class="xmas-drifts" viewBox="0 0 1000 14" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 14 V10 Q40 4 90 9 T200 8 Q250 2 310 9 T430 7 Q490 3 540 9 T660 8 Q720 1 780 8 T900 7 Q960 3 1000 9 V14 Z" />
</svg>`;function r(){let t=document.querySelector(`footer`);if(!t)return;let r=document.createElement(`div`);r.className=`xmas`,r.setAttribute(`aria-hidden`,`true`);let i=document.createElement(`div`);i.className=`xmas-snow`;for(let e=0;e<36;e++){let e=document.createElement(`span`),t=2+Math.random()*3;e.style.cssText=[`left:${Math.random()*100}%`,`--size:${t}px`,`--drift:${(Math.random()-.5)*60}px`,`--dur:${6+Math.random()*8}s`,`--delay:${-Math.random()*14}s`,`opacity:${.35+Math.random()*.5}`].join(`;`),i.append(e)}r.innerHTML=`<div class="xmas-track">${e}</div>${n}`,r.prepend(i),t.before(r)}r();export{r as mountChristmas};