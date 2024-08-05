import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export interface BoxProps extends ComponentProps<typeof Box> {}

// somente para corrir a tag, ex: la na pagina do localhost que esta rodando o storybook
// entre em avatar e depois em docs, quando aperta em show code as vezes não aparece o codigo correto
// as vezes apareceria <style.div> ...etc ao invez de <avatar> por usamos o displayName para corrigir
Box.displayName = 'Box'
