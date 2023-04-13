function giaiPhuongTrinh() {
  let a = +document.getElementById("a").value;
  let b = +document.getElementById("b").value;
  let c = +document.getElementById("c").value;

  if (a === 0) {
    // Phương trình bậc 1
    if (b == 0) {
      if (c === 0) {
        alert("Phương trình có vô số nghiệm");
      } else {
        alert("Phương trình vô nghiệm");
      }
    } else {
      alert("Phương trình có 1 nghiệm là: " + -c / b);
    }
  } else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
      alert("Phương trình vô nghiệm");
    } else if (delta == 0) {
      alert("Phương trình có 1 nghiệm kép là " + -b / (2 * a));
    } else {
      alert(
        "Phương trình có 2 nghiệm phân biệt là: " +
          (-b - Math.sqrt(delta)) / (2 * a) +
          ", " +
          (-b + Math.sqrt(delta)) / (2 * a)
      );
    }
  }
}
