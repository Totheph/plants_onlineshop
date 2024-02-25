export default function counter(to, id){
  let from = to - 50;
  let counter = setInterval(function(){
    if (from == to){
      clearInterval(counter)
      return
    }
    from += 1;
    document.querySelector(id).textContent = `${from}+`;
  }, 50)
}