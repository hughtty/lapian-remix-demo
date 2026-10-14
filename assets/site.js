document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{
  const box=t.closest('.panel');
  box.querySelectorAll('.tab').forEach(x=>x.classList.remove('on'));
  box.querySelectorAll('.view').forEach(x=>x.classList.remove('on'));
  t.classList.add('on');box.querySelector('#'+t.dataset.v).classList.add('on');
});
const v=document.getElementById('v');
if(v){
  document.querySelectorAll('[data-t]').forEach(el=>el.onclick=()=>{
    v.currentTime=parseFloat(el.dataset.t);v.play();
    document.querySelector('.player').scrollIntoView({behavior:'smooth',block:'start'});
  });
}
