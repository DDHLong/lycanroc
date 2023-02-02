export const protect = (target) => {
  return { name: target.name, protected: true, type: "protected" };
};

export const wolfKill = (target) => {
  if (target.protected === true) return;
  return { name: target.name, alived: false, type: "protected" };
};

export const foreseer = (target) => {
  return { name: target.name, foreseered: true, type: "foreseered" };
};

export const witchKill = (target) => {
  return { name: target.name, alived: false, type: "alived" };
};

export const witchRevived = (target) => {
  if (target.alived === true) return;
  return { name: target.name, alived: true, type: "alived" };
};

export const doNothing = (s) => {
  return {name: s};
};


