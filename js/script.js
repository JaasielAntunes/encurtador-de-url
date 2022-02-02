function encurtarUrl() {
  
  let url = document.getElementById("input-url").value
  if (!url) {
    alert("Informe uma URL válida para encurtar!")
    return;
  }

  let headers = {
    "Content-Type": "application/json",
    apiKey: "f2894ff12f9f4e0bb6e18992f99c5b21",
  }

  let linkRequest = {
    destination: url,
    domain: { fullName: "rebrand.ly" },
  }

  fetch("https://api.rebrandly.com/v1/links", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(linkRequest),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let inputUrl = document.getElementById("input-url")
      inputUrl.value = json.shortUrl
    })
}

function copiar() {
  let inputUrl = document.getElementById("input-url")

  if (document.getElementById("input-url").value.length === 0) {
    alert('Não existe URL para ser copiada!')
    document.getElementById("input-url").focus()
    return false
  }

  inputUrl.select();
  inputUrl.setSelectionRange(0, 99999)

  navigator.clipboard.writeText(inputUrl.value)

  alert(`URL copiada com sucesso: ${inputUrl.value}`)
}
