const max = (s1, s2) => {
  return s1.length >= s2.length ? s1 : s2
}

const lcs = (xstr, ystr) => {
  if (!xstr || !ystr) {
    return ''
  }
  
  let x = xstr[0]
  let xs = xstr.slice(1)
  let y = ystr[0]
  let ys = ystr.slice(1)

  if (x == y){
    return x + lcs(xs, ys)
  }
  else {
    return max(lcs(xstr, ys), lcs(ystr, xs))
  }
}

console.log(lcs('AXBXBXA', 'ABBA'))