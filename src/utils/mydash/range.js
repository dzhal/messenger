export function range(...args) {
  let start = 0;
  let end;
  let step = 1;
  const result = []
  if (args.length === 3) {
    [start, end , step] = [...args];
    if (step === 0) {
      for (let i = 0; i < Math.abs(start - end); i++) {
        result.push(start);
      }
      return result;
    }
    for (let i = 0; i < Math.abs((start - end)/step); i++) {
      result.push(start + step * i);
    }
  } else if (args.length === 2) {
    [start, end] = [...args];
    for (let i = 0; i < Math.abs(start - end); i++) {
      result.push(start + step * i);
    }
  } else {
    [end] = [...args]
    if (end < 0) {
      for (let i = 0; i > end; i--) {
        result.push(step * i);
      }
    } else {
      for (let i = 0; i < Math.abs(start - end); i++) {
        result.push(start + step * i);
      }
    }
  }

  return result;
}