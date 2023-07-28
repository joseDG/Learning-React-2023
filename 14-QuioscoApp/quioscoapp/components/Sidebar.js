import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";

const Sidebar = () => {

  //extrae las categorias
  const { categorias } = useQuiosco();

  return (
    <>
      <Image
        width={300}
        height={100}
        src="/assets/img/logo.svg"
        alt="imagen logotipo"
      />

      {/* muestro las categorias */}
      <nav className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
