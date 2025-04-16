const input = document.getElementById("text")
function appendValue(value){
    document.getElementById("text").value += value;
}


function clearDisplay() {
    document.getElementById('text').value = '';
  }

function deleteLast()
{
    let displayValue = document.getElementById('text').value
    document.getElementById('text').value = displayValue.slice(0, -1)
}

function calculate(){
    let displayValue = document.getElementById('text').value
    try {
        document.getElementById('text').value = eval(displayValue)
    }
    catch(error){
Document.getElementById('text').value = "error";
    }
}