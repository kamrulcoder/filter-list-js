
let input = document.getElementById('input');
input.addEventListener("keyup",myFunction )


function myFunction(){
    
    let inputValue  = input.value.toUpperCase();
    let a = document.getElementsByTagName('a')

    for (let i = 0; i < a.length; i++) {
        const element = a[i];
      let textValue = element.textContent || element.innerText;
      if (textValue.toUpperCase().indexOf(inputValue) > -1) {

        element.style.display = 'block';
        if (inputValue.length > 0) {           
            element.style.border = '1px solid green'
        }else{
            element.style.border = '1px solid rgba(0,0,0,.125)'
        }



      }else{
        element.style.display = 'none';
        element.style.border = 'none';
      }  
    }
}
