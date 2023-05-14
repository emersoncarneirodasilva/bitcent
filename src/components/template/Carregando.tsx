import Image from "next/image";
import Pagina from "./Pagina";
import loading from "../../../public/loading.gif";

export default function Carregando() {
  return (
    <Pagina externa className="items-center justify-center">
      <Image priority src={loading} alt="loading" width={40} height={40} />
    </Pagina>
  );
}
