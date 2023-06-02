function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) 
}
function save() {
    let fullname = document.querySelector('#fullname').value;
    let email = document.querySelector('#email').value;
    let address = document.querySelector('#address').value;
    let phone = document.querySelector('#phone').value;
    let gender = '';
    if (document.querySelector('#male').checked) {
        gender = document.querySelector('#male').value;
    } else if (document.querySelector('#female').checked) {
        gender = document.querySelector('#female').value;
    }
// validate fullname
    if (_.isEmpty(fullname)) {
        fullname = '';
        document.querySelector('#fullname-error').innerHTML = 'Vui lòng nhập họ và tên';
    } else if (fullname.trim().length <= 2) {
        fullname = '';
        document.querySelector('#fullname-error').innerHTML = 'Họ tên không được dưới 2 kí tự';
    } else if (fullname.trim().length > 50) {
        fullname = '';
        document.querySelector('#fullname-error').innerHTML = 'Họ tên không được quá 50 kí tự';
    }  else {
        document.querySelector('#fullname-error').innerHTML = '';
    }

    if (_.isEmpty(email)) {
        email = ''
        document.querySelector('#email-error').innerHTML = 'Vui lòng nhập email';
    }else if (!emailIsValid(email)) {
        email = ''
        document.querySelector('#email-error').innerHTML = 'Email không đúng định dạng';
    } else if (email.trim().length > 50) {
        email = ''
        document.querySelector('#email-error').innerHTML = 'Email không được quá 50 kí tự';
    } else {
        document.querySelector('#email-error').innerHTML = '';
    }

    if (_.isEmpty(address)) {
        address = ''
        document.querySelector('#address-error').innerHTML = 'Vui lòng nhập địa chỉ';
    }else if (address.trim().length <= 2) {
        address = ''
        document.querySelector('#address-error').innerHTML = 'Địa chỉ không được dưới 2 kí tự';
    } else if (address.trim().length > 100) {
        address = ''
        document.querySelector('#address-error').innerHTML = 'Họ tên không được quá 100 kí tự';
    } else {
        document.querySelector('#address-error').innerHTML = '';
    }

    if (_.isEmpty(phone)) {
        phone = ''
        document.querySelector('#phone-error').innerHTML = 'Vui lòng nhập số điện thoại';
    } else if (phone.trim().length < 10) {
        phone = ''
        document.querySelector('#phone-error').innerHTML = 'Số điện thoại không đúng';
    } else if (phone.trim().length > 10) {
        phone = ''
        document.querySelector('#phone-error').innerHTML = 'Số điện thoại không đúng';
    } else {
        document.querySelector('#phone-error').innerHTML = '';
    }

    if (_.isEmpty(gender)) {
        gender = ''
        document.querySelector('#gender-error').innerHTML = 'Vui lòng chọn giới tính';
    }else {
        document.querySelector('#gender-error').innerHTML = '';
    }

    if (fullname && email && phone && address && gender) {
        // Lưu vào danh sách sinh viên
        let student = {
            fullname: fullname,
            email: email,
            phone: phone,
            address: address,
            gender: gender,
        };

        let students = [];
        students.push(student)

        let tableContent = `<tr>
        <td style="width="30px"">#</td>
        <td>Họ và tên</td>
        <td>Email</td>
        <td>Điện thoại</td>
        <td>Địa chỉ</td>
        <td>Giới tính</td>
        <td>Hành động</td>
    </tr>`

        students.forEach((student, index) => {
            index++;
            tableContent += `<tr>
            <td>${index}</td>
            <td>${student.fullname}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.address}</td>
            <td>${student.gender == 1 ? 'Nam' : 'Nữ'}</td>
            <td>
                <a href="#" class="form-btn">Sửa</a> | <a href="#" class="form-btn">Xóa</a>
                
            </td>
        </tr>`
        })

        document.querySelector('#list-student').innerHTML = tableContent;
    }
}