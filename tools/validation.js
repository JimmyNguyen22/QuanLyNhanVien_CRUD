function checkLength(value, selectorError, name, min, max) {
  if (value.length < min || value.length > max) {
    document.querySelector(selectorError).innerHTML =
      name + " tối đa " + min + " - " + max + " chữ số, không để trống ";
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}

function checkName(value, selectorError, name) {
  let regexLetter = /^[a-z]+$/i;
  if (regexLetter.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + " viết không dấu, không để trống";
  return false;
}

function checkEmail(value, selectorError, name) {
  let regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (regexEmail.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML = name + " ko hợp lệ";
  return false;
}

function checkPass(value, selectorError, name) {
  let regexPW =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
  if (regexPW.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + " phải có số và chữ, ít nhất 1 kí tự viết hoa và kí tự đặt biệt";
  return false;
}

function lengthPass(value, selectorError, name, minLength, maxLength) {
  if (value.length > maxLength || value.length < minLength) {
    document.querySelector(selectorError).innerHTML =
      name + " độ dài từ " + minLength + " đến " + maxLength + " kí tự";
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}

function checkDay(value, selectorError, name) {
  if (value.trim() === "") {
    document.querySelector(selectorError).innerHTML = name + " ko được trống";
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}

function checkLuong(value, selectorError, name, minValue) {
  if (Number(value) < minValue) {
    document.querySelector(selectorError).innerHTML =
      name + " cơ bản từ 10,000,000 VND";
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}

function kiemTraChuc(value, selectorError, name) {
  if (value === "chức vụ") {
    document.querySelector(selectorError).innerHTML = name + " ko hợp lệ";
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}

function soGioLam(value, selectorError, name, min) {
  if (Number(value) < min) {
    document.querySelector(selectorError).innerHTML =
      name + " phải từ " + min + " giờ";
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}
/*
Date:
	+ yyyy/mm/dd or yyyy-mm-dd
	/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/
	
Letter:
	"^[A-Za-z]+$"
	
	"^[a-zA-Z_Ă€ĂĂ‚ĂƒĂˆĂ‰Ăáº¾ĂŒĂĂ’Ă“Ă”Ă•Ă™ĂÄ‚ÄÄ¨Å¨Æ Ă Ă¡Ă¢Ă£Ă¨Ă©ĂªĂ¬Ă­Ă²Ă³Ă´ĂµĂ¹ĂºÄƒÄ‘Ä©Å©Æ¡Æ¯Ä‚áº áº¢áº¤áº¦áº¨áºªáº¬áº®áº°áº²áº´áº¶" + "áº¸áººáº¼á»€á»€á»‚Æ°Äƒáº¡áº£áº¥áº§áº©áº«áº­áº¯áº±áº³áºµáº·áº¹áº»áº½á»á»á»ƒáº¿á»„á»†á»ˆá»á»Œá»á»á»’á»”á»–á»˜á»á»œá»á» á»¢á»¤á»¦á»¨á»ªá»…á»‡á»‰á»‹á»á»á»‘á»“á»•á»—á»™á»›á»á»Ÿá»¡á»£" + "á»¥á»§á»©á»«á»¬á»®á»°á»²á»´Ăá»¶á»¸á»­á»¯á»±á»³á»µá»·á»¹\\s]+$"
	
Number:
	interger:
	 /^[0-9]+$/;
     
Email:
	/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	
Password:
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/
*/
