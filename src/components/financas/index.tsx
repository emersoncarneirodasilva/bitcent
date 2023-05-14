import Cabecalho from "../template/Cabecalho";
import Conteudo from "../template/Conteudo";
import Pagina from "../template/Pagina";
import Lista from "./Lista";
import { transacaoVazia } from "@/logic/core/financas/Transacao";
import Formulario from "./Formulario";
import NaoEncontrado from "../template/NaoEncontrado";
import { Button, SegmentedControl } from "@mantine/core";
import { IconLayoutGrid, IconList, IconPlus } from "@tabler/icons-react";
import useTransacao, { TipoExibicao } from "@/data/hooks/useTransacao";
import CampoMesAno from "../template/CampoMesAno";
import Grade from "./Grade";
import Sumario from "./Sumario";

export default function Financas() {
  const {
    data,
    transacoes,
    transacao,
    tipoExibicao,
    salvar,
    excluir,
    selecionar,
    alterarData,
    alterarExibicao,
  } = useTransacao();

  function renderizarControles() {
    return (
      <div className="flex items-center justify-between">
        <CampoMesAno data={data} dataMudou={alterarData} />
        <div className="flex items-center gap-2 sm:gap-5">
          <Button
            className="bg-blue-500 ml-2 sm:ml-0 w-[38px] sm:w-fit"
            leftIcon={<IconPlus />}
            onClick={() => selecionar(transacaoVazia)}
          >
            Nova transação
          </Button>
          <SegmentedControl
            data={[
              { label: <IconList />, value: "lista" },
              { label: <IconLayoutGrid />, value: "grade" },
            ]}
            onChange={(tipo) => alterarExibicao(tipo as TipoExibicao)}
          />
        </div>
      </div>
    );
  }

  function renderizarTransacoes() {
    const props = { transacoes: transacoes, selecionarTransacao: selecionar };

    return tipoExibicao === "lista" ? (
      <Lista {...props} />
    ) : (
      <Grade {...props} />
    );
  }

  return (
    <Pagina>
      <Cabecalho />
      <Conteudo className="gap-5">
        <Sumario transacoes={transacoes} />
        {renderizarControles()}
        {transacao ? (
          <Formulario
            transacao={transacao}
            salvar={salvar}
            excluir={excluir}
            cancelar={() => selecionar(null)}
          />
        ) : transacoes.length ? (
          renderizarTransacoes()
        ) : (
          <NaoEncontrado>Nenhuma transação encontrada</NaoEncontrado>
        )}
      </Conteudo>
    </Pagina>
  );
}
