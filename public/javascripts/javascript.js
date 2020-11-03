function onSubmit() {

    var numberInput1 = $('#num1').val();
    var numberInput2 = $('#num2').val();
    numberInput1 = parseFloat(numberInput1);
    numberInput2 = parseFloat(numberInput2);
    var notif = document.getElementById("notif");

    notif.innerHTML = "";
    if (Number.isNaN(numberInput1) == true && Number.isNaN(numberInput2) == true) {
        notif.innerHTML = "<p>Giá trị nhập ở ô <span>Số thứ nhất và Số thứ hai</span> không phải là số</p>";
        return false;

    } else if (Number.isNaN(numberInput1) == true) {
        notif.innerHTML = "<p>Giá trị nhập ở ô <span>Số thứ nhất</span> không phải là số</p>";
        return false;
    } else if (Number.isNaN(numberInput2) == true) {
        notif.innerHTML = "<p>Giá trị nhập ở ô <span>Số thứ hai</span> không phải là số</p>";
        return false;
    } else {

        var calc = document.querySelector('input[name="calcRadios"]:checked').value;

        if (calc == "") {
            notif.innerHTML = "<p>Chọn phép tính trước khi tính</p>";
            return false;
        }
        if (calc == "div" && numberInput2 == 0) {
            return false;
        } else {
            return true;
        }
    }
};