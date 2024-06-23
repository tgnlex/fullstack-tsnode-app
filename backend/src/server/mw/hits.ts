const hits = {count: 0}
function hitCounter(req, next) {
  if (req) {
    hits.count = hits.count + 1;
  }
  console.log(hits.count);
  next()
}

export {hitCounter};

