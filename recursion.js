let nameStr = "vivek";

function reverseName(name) {
  if (name.length === 0) return name;
  return reverseName(name.slice(1)) + name.slice(0, 1);
}

console.log(reverseName(nameStr));
