let car ={
    Make: "Mahindra",
    Model: "XUV700",
    Year: 2022,
}
function represent(){
    for (const key in car) {
        console.log(`${key}: ${car[key]}`);
}
}
represent()