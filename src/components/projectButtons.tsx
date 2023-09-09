// Renderiza o botao de Proximo.
export function ButtonNext(PageChange){
  return (
    <button className="bg-[#0c2364] text-white m-4 border-white p-2 w-16 h-16 rounded-lg transform transition-transform" {...PageChange}>
      <div className="w-7 h-7 border-b-2 border-r-2 ml-2 border-white hover:rotate-[-45deg]"></div>
    </button>
  );
}

// Renderiza o botao de Anterior.
export function ButtonPrevious(PageChange){
  return (
    <button className="bg-[#0c2364] text-white m-4 border-white p-2 w-16 h-16 rounded-lg transform transition-transform" {...PageChange}>
      <div className="w-7 h-7 border-t-2 border-l-2  ml-2 border-white hover:rotate-[-45deg]"></div>
    </button>
  );
}