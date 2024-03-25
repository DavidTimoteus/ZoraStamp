$(document).ready(function(){
    $(".nav-link").click(function(){
        // Menghapus kelas "active" dari semua elemen dengan kelas "nav-link"
        $(".nav-link").removeClass("active");
        // Menambahkan kelas "active" ke elemen yang diklik
        $(this).addClass("active");
        // Mengatur warna teks menjadi merah untuk semua elemen dengan kelas "nav-link"
        $(".nav-link").css("color", "");
        // Mengatur warna teks menjadi merah untuk elemen yang diklik
        $(this).css("color", "red");
    });
});
