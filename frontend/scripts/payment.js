// this is for toggling the payment mode
function showPage(modeId) {
  // Hide all pages
  
  var modes = document.getElementsByClassName('mode');
  for (var i = 0; i < modes.length; i++) {
    modes[i].classList.remove('active');
    
  }
  
  // Show the selected page
  var mode = document.getElementById(modeId);
  if (mode) {
    mode.classList.add('active');
    
  }
}


//==============   for captcha==================>

 // Set up the canvas element
 const canvas = document.getElementById('captcha-canvas');
 const ctx = canvas.getContext('2d');
 ctx.font = '30px Arial';
 
 // Generate a random 4-digit code
 function generateCode() {
   let code = '';
   for (let i = 0; i < 4; i++) {
     code += Math.floor(Math.random() * 10);
   }
   return code;
 }
 
 // Draw the code onto the canvas
 function drawCode(code) {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.fillText(code, 10, 30);
 }
 
 // Set up event listeners for refresh button
 const refreshBtn = document.getElementById('refreshimg');
 refreshBtn.addEventListener('click', () => {
   const code = generateCode();
   drawCode(code);
 });
 
 // Initialize the CAPTCHA
 const code = generateCode();
 drawCode(code);


// ==================after place order====================>
let placeOrder = document.getElementById("placeOrder")
let redirect = document.getElementById("redirect")


placeOrder.addEventListener("click",()=>{
  Swal.fire({
    title: 'Congratulations!',
    text: 'Your Room has been Booked  ',
    icon: 'success',
    
  });
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
})