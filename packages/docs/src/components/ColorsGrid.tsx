import { colors } from '@igniteOkra-ui/tokens'
import { getContrast } from 'polished'

// getContrast é uma biblioteca que permite manipular cores,pegar o contraste e varias outras

export function ColorsGrid() {
  // vamos percorrer todas as cores
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            // aqui verificamos o contraste da cor atual a cor branca, se ele for menos que 3.5 faça isso
            color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
          }}
        >
          <strong>${key}</strong>
          <strong>{color}</strong>
        </div>
      </div>
    )
  })
}
