const km = document.getElementById('km');
const min = document.getElementById('min');
const btn = document.getElementById('btn');
const fare = document.getElementById('show-fare')
const rateInfo = document.getElementById('rate-info')
const showRate = document.getElementById('show-rate')

btn.addEventListener('click', async ()=>{
    const res = await axios.post('/calculate',{km:km.value, min:min.value})
    fare.innerHTML = `<h1>The total fare will be Rs. ${res.data.totalFare}</h1>`
    console.log(res.data.totalFare)
})

rateInfo.addEventListener('click',async ()=>{
    const res = await axios.get('/rates')
    showRate.innerHTML = `
                        <br>
                        Fixed Fare = Rs. ${res.data.fixed}
                        <br>
                        Fixed Distance = ${res.data.freeKm} Km
                        <br>
                        Per Km rate = Rs. ${res.data.perKm}
                        <br>
                        Fixed Time = ${res.data.freeMin} min
                        <br>
                        Per min rate = Rs. ${res.data.permin}
    `
})