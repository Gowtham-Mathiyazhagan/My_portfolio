let aboutuls=document.getElementsByClassName("link");
var contantul=document.getElementsByClassName("contant-ul");
console.log(contantul)
 function tablink(tabname){
    for(link of aboutuls){
        link.classList.remove("active")
    }
    for(contan of contantul){
        contan.classList.remove("active-contant")
    }
     event.currentTarget.classList.add("active")
     let tab=document.getElementById(tabname)
     tab.classList.add("active-contant")
 }


 let sidemenu=document.getElementById("sidemenu")

 function openbtn(){
    sidemenu.style="right:0px"
 }
 function closebtn(){
    sidemenu.style="right:-125px"
 }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzF9Aag7W0TbkFeDz4jRIC_ohyFbj6GWaexTjPDrQS3jO34stqWajWAPYZi5AeRvqnD/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=  document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
         msg.innerHTML="Submitted successfully"
      })
      setTimeout(function(){
        msg.innerHTML=""
      },10000)
      form.reset()
      .catch(error => console.error('Error!', error.message))
  })
