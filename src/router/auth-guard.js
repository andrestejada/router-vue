const isAutenticatedGuard =(to,from,next)=>{
  return new Promise( ()=>{
    const ramdom = Math.random()*100;

    if(ramdom>50){
      console.log('estas autenticado')
      next()
    }else{
      console.log('bloqueado isAutenticatedGuard ');
      next({name:'pokemon-home'})
    }
  })
}

export default isAutenticatedGuard;