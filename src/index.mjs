import "./styles.css";

var form = document.getElementById('form');
  var id = document.getElementById('userId');
  var nickname = document.getElementById('nickname');
  var email = document.getElementById('userEmail').value; // Get the value of the email input.
  var password = document.getElementById('pass').value;
  var passwordCheck = document.getElementById('pass2').value;
  var check = true; 

  // 이름
  if (id.value === "") {
    // Assuming you have an error element with ID "idError."
    document.getElementById("idError").innerHTML = "필수 정보입니다.";
    check = false; // Set check to false if there's an error.
  } else {
    document.getElementById("idError").innerHTML = ""; 
  }

  // 닉네임 2~5자리 제한
  if (nickname.value.length < 2 || nickname.value.length > 5) {
    document.getElementById("nicknameError").innerHTML = "닉네임은 2~5글자로 구성해주세요!";
    check = false;
  } else {
    document.getElementById("nicknameError").innerHTML = "";
  }

  // 이메일 형식
  if (!email.includes('@')) {
    document.getElementById("emailError").innerHTML = "올바른 메일 형식이 아닙니다!";
    check = false;
  } else {
    let emailId = email.split('@')[0];
    let emailServer = email.split('@')[1];
    if (emailId === "" || emailServer === "") {
      document.getElementById("emailError").innerHTML = "올바른 메일 형식이 아닙니다!";
      check = false;
    } else {
      document.getElementById("emailError").innerHTML = "";
    }
  }

  // 비밀번호 경고 메시지
  let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~?!@#$%^&*_-])$/;
  if (!reg.test(password)) {
    document.getElementById("passwordError").innerHTML = "영어+숫자+특수문자를 조합하여 작성해주세요.";
    check = false;
  } else {
    document.getElementById("passwordError").innerHTML = "";
  }

  // 비밀번호 확인
  if (password !== passwordCheck) {
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("passwordCheckError").innerHTML = "비밀번호가 일치하지 않습니다.";
    check = false;
  } else {
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("passwordCheckError").innerHTML = "";
  }

  if (password === "") {
    document.getElementById("passwordError").innerHTML = "비밀번호를 입력해주세요.";
    check = false;
  }

  if (passwordCheck === "") {
    document.getElementById("passwordCheckError").innerHTML = "비밀번호를 다시 입력해주세요.";
    check = false;
  }

  if (check) {
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("passwordCheckError").innerHTML = "";
    document.getElementById("areaError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";

    setTimeout(function () {
      alert("가입이 완료되었습니다.");
    }, 0);
  }

