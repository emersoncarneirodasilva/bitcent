import { useCallback, useState } from "react";

export default function useFormulario<T = any>(dadosInicial?: T) {
  const [dados, setDados] = useState<T>(dadosInicial ?? ({} as T));

  const alterarDados = useCallback(function (dados: T) {
    setDados(dados);
  }, []);

  const alterarAtributo = useCallback(
    function (atributo: string, fn?: Function) {
      return (valorOuEvento: any) => {
        const v = valorOuEvento?.target?.value ?? valorOuEvento;
        setDados({ ...dados, [atributo]: fn?.(v) ?? v });
      };
    },
    [dados]
  );

  return { dados, alterarDados, alterarAtributo };
}
