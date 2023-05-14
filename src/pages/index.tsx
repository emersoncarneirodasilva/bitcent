import Landing from "@/components/landing";
import Financas from "@/components/financas";
import { useContext } from "react";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import Carregando from "@/components/template/Carregando";

export default function Home() {
  const { usuario, carregando } = useContext(AutenticacaoContext);

  if (carregando) {
    return <Carregando />;
  }

  return usuario ? <Financas /> : <Landing />;
}
