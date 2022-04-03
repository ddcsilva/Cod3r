{
    {
        {
            {
                var sera = "Será?"; // Javascript ignora o escopo quando usamos var
            }
        }
    }
}

console.log(sera);

function teste() {
    var local = 123; // O var dentro da função, só existe apenas neste escopo
    console.log(local);
}

teste();
