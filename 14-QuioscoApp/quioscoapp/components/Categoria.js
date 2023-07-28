import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

//recibo las categorias
const Categoria = ({ categoria }) => {

  //extraendo las categorias filtradas
  const { categoriaActual, handleClickCategoria } = useQuiosco();

  //destrucutuo las categorias
  const { nombre, icono, id } = categoria;

  return (

    // aqui se muestra la categorias seleccionada
    <div
      className={`${
        categoriaActual?.id === id ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icono}.svg`}
        alt="Imagen Icono"
      />

      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        // se llama el filtro cuando se da click
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
