import { ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './style'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  // prefix, no input queremos deixar assim: cal.com/.... eo resto o usuario digita
  // mas somente um input vai ter isso então deixamos com opcional
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}
