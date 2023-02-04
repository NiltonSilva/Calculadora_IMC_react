import { useState } from 'react';
import styles  from './App.module.css';
import poweredImage from './assets/img/powered.png';

export default function App() {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculatorButton = () => {
    if(heightField && weightField) {

    } else {
      alert('Digite todos os campos');
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.</p>
          <form action="">
            <input 
              type="number" 
              placeholder="Digite sua altura. Ex: 1.5 (em metros)"
              value={heightField > 0 ? heightField : ''}
              onChange={e => setHeightField(parseFloat(e.target.value))}
            />
            <input 
              type="number" 
              placeholder="Digite sua peso. Ex: 75.3 (em kg)"
              value={weightField > 0 ? weightField : ''}
              onChange={e => setWeightField(parseFloat(e.target.value))}
            />
            <button onClick={handleCalculatorButton}>Calcular</button>
          </form>
        </div>
        <div className={styles.rightSide}>...</div>
      </div>
    </div>
  )
}