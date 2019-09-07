<script type="application/javascript">
    const TotalCuenta = parseFloat(prompt("Cual es el total de la cuenta"))
    const Individuos = parseFloat(prompt("¿Cuantos son?"))
    const TotalSinIva = TotalCuenta/Individuos
    const TotalConIVa = (TotalSinIva * .10) + TotalSinIva
    alert(TotalConIVa)
</script>
INICIO
Leer TotalCuenta
Leer Individuos
TotalSinIva = TotalCuenta/Individuos
TotalConIVa = (TotalSinIva * .10) + TotalSinIva
Escribe TotalConIva
FIN