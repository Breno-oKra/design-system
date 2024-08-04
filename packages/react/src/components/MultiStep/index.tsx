import { Label, MultiStepContainer, Step, Steps } from './style'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      {/*  passando uma variavel */}
      <Steps css={{ '--steps-size': size }}>
        {/* (_, i) => i + 1 = (_conteudo do array, indice do array) */}
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          /* step retorn 1,2,3,4 etc.., ai verificamos se o step activo é maior ou igual o step atual do map
          pois se for ele sera todo branco e os outros não */
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}
