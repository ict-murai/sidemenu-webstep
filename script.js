$(document).ready(function() {
    $("#menu-toggle").click(function(e) {
        e.stopPropagation();

        $("#side-menu").toggleClass("open");
        
        // メニューが開いているかどうかでボタンのテキストを変更
        if ($("#side-menu").hasClass("open")) {
            $(this).text("close");
        } else {
            $(this).text("open");
        }
    });

    $("#side-menu").click(function(e) {
        e.stopPropagation();
    });

    $(document).click(function() {
        if ($("#side-menu").hasClass("open")) {
            $("#side-menu").removeClass("open");
            $("#menu-toggle").text("open"); // サイドメニュー以外の領域がクリックされたときにメニューを閉じるとともにボタンのテキストを変更
        }
    });
});