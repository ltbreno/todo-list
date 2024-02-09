import { useCallback, useMemo, useState } from "react"

interface MemoizationProps {
    financialData: {
        incomes: number[],
        outcomes: number[],
    }
}

export const Memoization : React.FC<MemoizationProps> = ({financialData}) => {

    const [showValues , setShowValues] = useState(true) ;

    const totalIncomes = useMemo(() => {
        return financialData.incomes.reduce((total, income) => {
            return total += income
        }, 0)
    }, [financialData.incomes])

    const totalOutcomes = useMemo(() => {
        return financialData.outcomes.reduce((total, outcomes) => {
            return total += outcomes
        }, 0)
    }, [financialData.outcomes])

    const aplicarDesconto = useCallback((desconto: number) => {
        return totalOutcomes * ( 1 - desconto)
    }, [totalOutcomes])

    return (
        <div>
            <h1>Memoization</h1>

            <h2>useMemo</h2>

            <p>{`Total de receitas: RS ${showValues ? totalIncomes : "XXXXXX"}`}</p>
            <br />
            <p>{`Total de despesas: RS ${showValues ? totalOutcomes : "XXXXXX"}`}</p>
            <br /><br />
            <button onClick={() => setShowValues(!showValues)}>
                { showValues ? "ocultar valores " : "Mostrar valores"}
            </button> 
        </div>
    )
}