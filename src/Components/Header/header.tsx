import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss" ;

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <h1>My Todo</h1>

                    <span>Bem vindo, Breno!</span>
                </div>

                <div>    
                    <StatsCard title="Total de Atividades" value={5} />
                    <StatsCard title="Atividades Pendentes" value={4} />
                    <StatsCard title="Atividades Concluidas" value={1} />
                </div>
            </div>    
        </header>
    );
}