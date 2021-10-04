const hariElement = document.getElementById("hari");
const jamElement = document.getElementById("jam");
const menitElement = document.getElementById("menit");
const detikElement = document.getElementById("detik");

//  Invalid Date if  using st blabla
// Just  Work with this  method
const tahunBaru = "31 Dec 2021";
// And also second method
// const tahunBaru = '2021/08/08';


function hitungMundur(){

     const hitunganTahunBaru = new Date(tahunBaru);
     console.log(hitunganTahunBaru);
     const waktuTanggalSekarang = new Date();

     const TotalDetik = (hitunganTahunBaru - waktuTanggalSekarang) / 1000;
// console.log(TotalDetik);
    //  console.log(detik);
        // hari 

        // const hari = Math.floor(TotalDetik / 3600 / 24);
    const hari = Math.floor(TotalDetik / 3600 / 24 );

    // Jam 
    const jam = Math.floor(TotalDetik / 3600) % 24;

    // menit 
    const menit = Math.floor(TotalDetik / 60 ) % 60;

    // detik
    const detik =Math.floor(TotalDetik) % 60;


    console.log(hari,jam,menit,detik);

    //  console.log(hitunganTahunBaru - waktuTanggalSekarang);
    //  console.log(new Date(tahunBaru));

    hariElement.innerHTML= hari;
    jamElement.innerHTML= formatWaktu(jam);
    menitElement.innerHTML= formatWaktu(menit);
    detikElement.innerHTML= formatWaktu(detik);


}

function formatWaktu(time) {
    return time < 10 ? `0${time}` : time;
}

// Memanggil Fungsinya
 hitungMundur();

 setInterval(hitungMundur, 1000);

