// Đảm bảo rằng mã chỉ chạy khi tài liệu đã được tải đầy đủ
$(document).ready(() => {

    // Thiết lập sự kiện click cho menu hamburger
    $('#hamburger-menu').click(() => {
        // Thêm hoặc xóa lớp 'active' cho phần tử #hamburger-menu khi nó được click
        $('#hamburger-menu').toggleClass('active');
        // Thêm hoặc xóa lớp 'active' cho phần tử #nav-menu khi #hamburger-menu được click
        $('#nav-menu').toggleClass('active');
    });

    // Định nghĩa các biểu tượng điều hướng cho carousel
    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"];

    // Thiết lập carousel cho phần tử #hero-carousel
    $('#hero-carousel').owlCarousel({
        items: 1, // Hiển thị 1 mục tại một thời điểm
        dots: false, // Không hiển thị dấu chấm điều hướng
        loop: true, // Lặp lại carousel khi hết mục
        nav: true, // Hiển thị nút điều hướng
        navText: navText, // Sử dụng biểu tượng điều hướng đã định nghĩa
        autoplay: true, // Tự động chạy carousel
        autoplayHoverPause: true // Tạm dừng carousel khi di chuột vào
    });

    // Thiết lập carousel cho phần tử #top-movies-slide
    $('#top-movies-slide').owlCarousel({
        items: 2, // Hiển thị 2 mục tại một thời điểm
        dots: false, // Không hiển thị dấu chấm điều hướng
        loop: true, // Lặp lại carousel khi hết mục
        autoplay: true, // Tự động chạy carousel
        autoplayHoverPause: true, // Tạm dừng carousel khi di chuột vào
        responsive: { // Thiết lập số lượng mục hiển thị dựa trên độ rộng màn hình
            500: {
                items: 3 // Hiển thị 3 mục khi độ rộng màn hình ít nhất 500px
            },
            1280: {
                items: 4 // Hiển thị 4 mục khi độ rộng màn hình ít nhất 1280px
            },
            1600: {
                items: 6 // Hiển thị 6 mục khi độ rộng màn hình ít nhất 1600px
            }
        }
    });

    // Thiết lập carousel cho các phần tử có lớp .movies-slide
    $('.movies-slide').owlCarousel({
        items: 2, // Hiển thị 2 mục tại một thời điểm
        dots: false, // Không hiển thị dấu chấm điều hướng
        nav: true, // Có nút điều hướng
        navText: navText, // Sử dụng biểu tượng điều hướng đã định nghĩa
        margin: 15, // Khoảng cách giữa các mục
        responsive: { // Thiết lập số lượng mục hiển thị dựa trên độ rộng màn hình
            500: {
                items: 2 // Hiển thị 2 mục khi độ rộng màn hình ít nhất 500px
            },
            1280: {
                items: 4 // Hiển thị 4 mục khi độ rộng màn hình ít nhất 1280px
            },
            1600: {
                items: 6 // Hiển thị 6 mục khi độ rộng màn hình ít nhất 1600px
            }
        }
    });
});
