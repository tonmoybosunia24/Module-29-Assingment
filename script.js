const sitbuttons = document.getElementsByClassName("sit-child");
for(let sit of sitbuttons){
       sit.addEventListener("click", function(){
              if(sit.getAttribute("data-selected") === "true"){
                     return;
              }
              sit.setAttribute("data-selected", "true")         
              const mainsit = document.getElementById("main-sit");
              const sitCounter = document.getElementById("sit-conunt-number");
              const totalsitcount = parseInt(sitCounter.innerText) + 1;
              if(totalsitcount < 5){
                     sit.style.backgroundColor = "green"
                     const sitnow = mainsit.innerText - 1;
                     mainsit.innerText = sitnow
                     sitCounter.innerText = totalsitcount;
                     const totalprice = 550 * totalsitcount;

                     const sitcetagory = document.getElementById("sit-cetagory-1");
                     const sitcetagorysecend = document.getElementById("sit-cetagory-2");
                     if(totalsitcount === 1){
                            sitcetagory.innerText = sit.innerText
                     }
                     else if(totalsitcount === 2){
                            sitcetagorysecend.innerText = sit.innerText
                     }
                     else if (totalsitcount === 3) {
                            // Create and append a new div
                            const secentSit = document.getElementById("secent-sit")
                            secentSit.classList = "border-b-0 flex justify-between pb-2";
                            const newDiv = document.createElement('div');
                            newDiv.className = 'flex justify-between pb-2 border-b-2 border-solid border-gray-300';
                            newDiv.id = "thirddiv"
                            newDiv.innerHTML = `
                              <div id="seat-3">C4</div>
                              <div>Economoy</div>
                              <div>550</div>
                            `;
                            document.getElementById('Sit-Cetagory-Container').appendChild(newDiv);
                      
                            // Update the third button's inner text
                            document.getElementById('seat-3').innerText = sit.innerText;
                     }
                     else if(totalsitcount === 4){
                            const thirddiv = document.getElementById("thirddiv");
                            thirddiv.classList = "flex justify-between border-b-0 pb-2"
                            const newDivForth = document.createElement("div");
                            newDivForth.className = "flex justify-between pb-2 border-b-2 border-solid- border-gray-300"
                            newDivForth.innerHTML = `
                               <div id="seat-4">C4</div>
                               <div>Economoy</div>
                               <div>550</div>    
                            `;
                            document.getElementById("Sit-Cetagory-Container").appendChild(newDivForth);
                            document.getElementById("seat-4").innerText = sit.innerText;
                     }
                     const priceWithoutDiscount = document.getElementById("price-widthout-discount");
                     const grandPrices = document.getElementById("grand-Price");
                     priceWithoutDiscount.innerText = totalprice;
                     grandPrices.innerText = totalprice;
                     sitCounter.innerText = totalsitcount;
              }
              const applyBtn = document.getElementById("apply-btn");      
              const applyInput = document.getElementById("apply-input");    
              applyBtn.addEventListener("click", function(){
                     const applyvalue = applyInput.value;
                     const sitcount = document.getElementById("sit-conunt-number")
                     const totalsitcount = parseInt(sitcount.innerText) 
                     if(totalsitcount === 4 && applyvalue === "NEW-15"){
                            // applyBtn.removeAttribute("disabled");
                            const grandprice = document.getElementById("grand-Price")
                            const notDiscountPrice = 550 * totalsitcount;
                            const percent = notDiscountPrice * 15;
                            const discountPrice = percent / 100;
                            const grandDiscountPrice = notDiscountPrice - discountPrice;
                            grandprice.innerText = grandDiscountPrice;
                     }
                     else if(totalsitcount === 4 && applyvalue === "Couple-20"){
                            applyBtn.removeAttribute("disabled");
                            const grandprice = document.getElementById("grand-Price")
                            const notDiscountPrice = 550 * totalsitcount;
                            const percent = notDiscountPrice * 20;
                            const discountPrice = percent / 100;
                            const grandDiscountPrice = notDiscountPrice - discountPrice;
                            grandprice.innerText = grandDiscountPrice;
                     }
              })
              
       })
}
const inputnumber = document.getElementById("number-input");
const modelbutton = document.getElementById("modelbutton");
inputnumber.addEventListener("keyup", function() {
    const inputvalue = inputnumber.value;
    const sits = document.getElementById("sit-conunt-number")  
    const sitsvalues = parseInt(sits.innerText)
    if (inputvalue !== "" && sitsvalues !== 0) {
       modelbutton.removeAttribute("disabled"); // Disable the button
    } 
    else{
       modelbutton.setAttribute("disabled", "disbled")
    }
});








//   let clickCount = 0;

//   document.getElementById('replace-btn').addEventListener('click', () => {
//     clickCount++;

//     // Replace "C2" and "C3" based on the number of clicks
//     if (clickCount === 1) {
//       document.getElementById('seat-1').innerText = 'New Text 1';
//     } else if (clickCount === 2) {
//       document.getElementById('seat-2').innerText = 'New Text 2';
//     } else if (clickCount === 3) {
//       // Create and append a new div
//       const newDiv = document.createElement('div');
//       newDiv.className = 'flex justify-between pb-2 border-b-2 border-solid border-gray-300';
//       newDiv.innerHTML = `
//         <div id="seat-3">C4</div>
//         <div>Economy</div>
//         <div>550</div>
//       `;
//       document.getElementById('seat-list').appendChild(newDiv);

//       // Update the third button's inner text
//       document.getElementById('seat-3').innerText = 'New Text 3';
//     }
//   });

