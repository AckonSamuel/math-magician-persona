export default function integer() {
  const arrInt = [];
  for ( let i = 0; i < 10; i++) {
    
    arrInt.unshift(i.toString());
  }

  return arrInt;
}