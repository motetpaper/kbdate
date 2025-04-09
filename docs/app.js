import { kbdateObject } from 'https://motetpaper.github.io/web/kbdateObject.js';

const inputdt = document.querySelector('#inputdt');
const outputs = document.querySelector('#outputs');
const po = document.querySelector('#msg');


document.body.onload = () => {
  const dt = new Date();
  let yyyymmdd = dt.toLocaleDateString('fr-CA');
  let hhmm = dt.toLocaleTimeString('en-GB', {
    timeStyle: 'short',
  });

  const now = `${yyyymmdd}T${hhmm}`;
  inputdt.value = now;
  setOutput(now);
}

inputdt.onchange = (e) => {
  setOutput(e.target.value);
}

inputdt.oninput = (e) => {
  setOutput(e.target.value);
}


outputs.onclick = async (e)=> {
  await navigator.clipboard.writeText(outputs.value)
  .then(()=>{
    po.showPopover();
    setTimeout(() => {
      po.hidePopover();
    }, 1500);
  });
}


function setOutput(str) {
  const kbdate = ''+ (new kbdateObject(str));
  outputs.value = kbdate;
}
