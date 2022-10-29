function problem2(cryptogram) {

  // 제한 사항 만족하는지 체크
  // - cryptogram은 길이가 1 이상 1000 이하인 문자열이다.
  // - cryptogram은 알파벳 소문자로만 이루어져 있다.
  if (cryptogram.length < 1 || cryptogram.length > 1000) return false;
  if (!(/^[a-z]+$/.test(cryptogram))) return false;

}
module.exports = problem2;
