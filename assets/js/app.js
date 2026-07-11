
const datasets={
today:{
staff:"286",coverage:"98%",training:"96%",vacancies:"8",openshifts:"3",skillmix:"96%",
attendance:"94%",forms:"91%",requests:"18",apps:"7",
births:"14",beds:"91%",csection:"28%",neonatal:"83%",feeding:"87%",stay:"2.8",theatre:"76%",readmit:"2.1%",
budget:"74%",procurement:"15",stock:"99%",suppliers:"97%",
users:"2845",satisfaction:"96%",reminders:"99%",rating:"4.8/5",experience:"4.8/5",
policies:"4",audits:"12/12",risks:"5",dpias:"26",
mfa:"99%",active:"1286",failed:"14",incidents:"0"
},
week:{
staff:"301",coverage:"97%",training:"95%",vacancies:"9",openshifts:"5",skillmix:"95%",
attendance:"93%",forms:"89%",requests:"24",apps:"11",
births:"98",beds:"88%",csection:"27%",neonatal:"79%",feeding:"86%",stay:"2.9",theatre:"74%",readmit:"2.2%",
budget:"76%",procurement:"22",stock:"98%",suppliers:"96%",
users:"5632",satisfaction:"95%",reminders:"98%",rating:"4.7/5",experience:"4.7/5",
policies:"6",audits:"11/12",risks:"7",dpias:"29",
mfa:"99%",active:"1310",failed:"66",incidents:"1"
},
month:{
staff:"315",coverage:"96%",training:"94%",vacancies:"10",openshifts:"7",skillmix:"94%",
attendance:"92%",forms:"88%",requests:"41",apps:"19",
births:"421",beds:"86%",csection:"29%",neonatal:"81%",feeding:"88%",stay:"2.7",theatre:"78%",readmit:"2.0%",
budget:"79%",procurement:"31",stock:"97%",suppliers:"95%",
users:"10480",satisfaction:"94%",reminders:"98%",rating:"4.7/5",experience:"4.7/5",
policies:"8",audits:"10/12",risks:"9",dpias:"31",
mfa:"98%",active:"1332",failed:"212",incidents:"2"
}};
document.addEventListener("DOMContentLoaded",()=>{
 const period=document.getElementById("period");
 if(period) period.addEventListener("change",e=>{
   const d=datasets[e.target.value];
   Object.entries(d).forEach(([k,v])=>{const el=document.getElementById(k);if(el)el.textContent=v;});
 });
});
