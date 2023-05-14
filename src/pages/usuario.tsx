import Cabecalho from "@/components/template/Cabecalho";
import Conteudo from "@/components/template/Conteudo";
import Pagina from "@/components/template/Pagina";
import TituloPagina from "@/components/template/TituloPagina";
import Formularios from "@/components/usuario/Formularios";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import { IconForms } from "@tabler/icons-react";
import { useContext } from "react";

export default function CadastroUsuario() {
  const { usuario } = useContext(AutenticacaoContext);

  return (
    <Pagina>
      <Cabecalho />
      <Conteudo>
        <TituloPagina
          icone={<IconForms />}
          principal="Dados Cadastrais"
          secundario={`Informações de ${usuario?.email}`}
        />
        <Formularios />
      </Conteudo>
    </Pagina>
  );
}
