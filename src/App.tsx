import { useState } from 'react';
import styles  from './App.module.css';
import poweredImage from './assets/img/powered.png';
import { levels, calculateImc, Level } from './helpers/imc';
import GridItem from './components/gridItem';
import leftArrowImage from './assets/img/leftarrow.png';

export default function App() {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculatorButton = () => {
    if(heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert('Digite todos os campos');
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
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
              disabled={toShow ? true : false}
            />
            <input 
              type="number" 
              placeholder="Digite sua peso. Ex: 75.3 (em kg)"
              value={weightField > 0 ? weightField : ''}
              onChange={e => setWeightField(parseFloat(e.target.value))}
              disabled={toShow ? true : false}
            />
            <button onClick={handleCalculatorButton} disabled={toShow ? true : false}>
              Calcular
            </button>
          </form>
        </div>

        <div className={styles.rightSide}>
          {!toShow &&           // se eu nao tiver preenchido o formulario eu exibo todos os cards
            <div className={styles.grid}>
              {levels.map((item, key) =>(
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {toShow &&            // se eu preenchi o formulário e tenho um valor válido eu exibo apenas um dos cards.
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}