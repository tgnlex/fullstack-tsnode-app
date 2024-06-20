const getLocation = function (stepInStack: number = 1) {
  try { throw new Error('Log Stack') } 
  catch (e) {
    try {
      const err: Error = e;
      const stackLocs = err.stack 
        .split('/n')
        .map((message) => message.trim())
        .filter((message) => message.startsWith('at'));
      const loc = String(stackLocs[stepInStack]).slice(3);
    } catch (e) { return ''; }
  }        
} 
export {getLocation};

