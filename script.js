
document.getElementById('apply-confirm').addEventListener('input',function(event){
  const text = event.target.value;
  const deleteButton = document.getElementById('btn-apply')
  if(text.toUpperCase() === 'NEW15'){
    deleteButton.removeAttribute('disabled')
    clickCoupon()
  }else if(text === 'Coupon 20'){
    deleteButton.removeAttribute('disabled')
  }else{
deleteButton.setAttribute('disabled',true)
  }
})

function disable(x){
  x.disabled = true;
}





function play(){
  hideElementById('secondPart')
  showElementById('thirdPart')
  hideElementById('firstPart')
  }
function begin(){
  showElementById('firstPart')
  hideElementById('thirdPart')
  showElementById('secondPart')
}
  function clickCoupon(){
      const grandTotal = document.getElementById('grand-total').innerText;
const convertedGrandTotal = parseInt(grandTotal)
document.getElementById('grand-total').innerText= convertedTotalCost + parseInt(priceName) 
    }



const allBtn = document.getElementsByClassName('btn')
let count = 0
for(const button of allBtn){
  button.addEventListener('click',function(e){
count = count + 1;
const seatName = e.target.innerText
const priceName = e.target.parentNode.childNodes[1].innerText
const colorKey =e.target.innerText


setBackgroundColorById(colorKey)


const submitbtn= document.getElementById('submitbtn')
const convertedSubmit = parseInt(submitbtn)
if(parseInt(priceName) > 549){
 submitbtn.removeAttribute('disabled')
}else{
  submitbtn.setAttribute('disabled')
}
if(count > 4){
alert('Limit')
removeBackgroundColorbyId(colorKey)
return;
}













// seats left
const seatsLeft = document.getElementById('seats-left').innerText
const convertSeatsLeft = parseInt(seatsLeft)
const totalSeatsLeft = convertSeatsLeft - 1
document.getElementById('seats-left').innerText=totalSeatsLeft


const selectedContainer = document.getElementById('container')
const li = document.createElement('li')
const p =document.createElement('p')
p.innerText= seatName
li.appendChild(p)
selectedContainer.appendChild(li)

const priceContainer = document.getElementById('price-container')
const li2 = document.createElement('li')
const p2 =document.createElement('p')
p2.innerText=priceName
li2.appendChild(p2)
priceContainer.appendChild(li2)

const classContainer = document.getElementById('class-container')
const li3 = document.createElement('li')
const p3 =document.createElement('p')
p3.innerText='economy'
li3.appendChild(p3)
classContainer.appendChild(li3)


const totalCost = document.getElementById('total-cost').innerText;
const convertedTotalCost = parseInt(totalCost)
document.getElementById('total-cost').innerText=convertedTotalCost + parseInt(priceName)



const grandTotal = document.getElementById('grand-total').innerText;
const convertedGrandTotal = parseInt(grandTotal)
document.getElementById('grand-total').innerText= convertedTotalCost + parseInt(priceName)

// coupon part----------------------










setInnerText('cart-count',count)
  })
}










function removeBackgroundColorbyId(elementId){
const element = document.getElementById(elementId)
element.classList.remove('bg-green-500')
}


function setInnerText(id,value){
document.getElementById(id).innerText=value
}

function setBackgroundColorById(elementId){
  const element=document.getElementById(elementId)
  element.classList.add('bg-green-500')
}



function hideElementById(elementId){
  const element = document.getElementById(elementId)
  element.classList.add('hidden')
}

function showElementById(elementId){
  const element =document.getElementById(elementId)
  element.classList.remove('hidden')
}

