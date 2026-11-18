(function(){var K='dic-progress';function get(){try{return JSON.parse(localStorage.getItem(K)||'{}')}catch(e){return {}}}function put(v){try{localStorage.setItem(K,JSON.stringify(v))}catch(e){}}
var st=get();
document.querySelectorAll('[data-done-slug]').forEach(function(el){if(st[el.dataset.doneSlug]&&st[el.dataset.doneSlug].done)el.classList.add('cleared')});
function paintBar(){var bar=document.querySelector('.xpbar');if(!bar)return;var n=0;for(var k in st)if(st[k].done)n++;bar.querySelector('i').style.width=(n/7*100)+'%';bar.querySelector('b').textContent=n+' / 7 levels cleared · '+(n*100)+' XP';}
paintBar();
var box=document.querySelector('.check[data-slug]');if(!box)return;var slug=box.dataset.slug,lvl=box.dataset.level;var mine=st[slug]||{ticks:[]};
var lis=[].slice.call(box.querySelectorAll('li'));
function upd(first){var all=lis.every(function(li){return li.classList.contains('on')});mine.ticks=lis.map(function(li){return li.classList.contains('on')});var was=mine.done;mine.done=all;st[slug]=mine;put(st);
 box.classList.toggle('won',all);paintBar();if(all&&!was&&!first)levelUp();}
lis.forEach(function(li,i){if(mine.ticks&&mine.ticks[i])li.classList.add('on');li.setAttribute('role','checkbox');li.tabIndex=0;li.addEventListener('click',function(){li.classList.toggle('on');upd()});li.addEventListener('keydown',function(e){if(e.key===' '||e.key==='Enter'){e.preventDefault();li.click()}})});upd(true);
function levelUp(){var t=document.createElement('div');t.className='levelup';t.innerHTML='<span class="tag">&lt;level-up&gt;</span><strong>Level '+lvl+' cleared!</strong><span>+100 XP</span>';
 var cols=['#F79F4D','#DBCDEB','#FFD74A','#7EDFA0','#4DA2FF','#00BFFF'];for(var i=0;i<28;i++){var c=document.createElement('i');c.style.left=(Math.random()*100)+'%';c.style.background=cols[i%6];c.style.animationDelay=(Math.random()*.4)+'s';t.appendChild(c)}
 document.body.appendChild(t);setTimeout(function(){t.classList.add('out')},2600);setTimeout(function(){t.remove()},3200);}
})();
