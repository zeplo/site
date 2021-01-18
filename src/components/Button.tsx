import React from 'react'
import { css } from '@emotion/react'

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  primary?: boolean
  size?: 'small'|'default'|'large'
  block?: boolean
}

export default function Button ({ primary, size, block, ...props }: ButtonProps) {
  const allStyles = [styles.base]
  if (size) allStyles.push(styles[size])
  if (primary) allStyles.push(styles.primary)
  if (block) allStyles.push(styles.block)
  return (
    <button css={allStyles} {...props} />
  )
}

const styles = {
  base: css`
    outline: none;
    border-radius: 6px;
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    box-shadow: 0 2px 0 rgba(0,0,0,.015);
    cursor: pointer;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    touch-action: manipulation;
    height: 32px;
    padding: 4px 15px;
    font-size: 14px;
    border-radius: 6px;
    color: rgba(0,0,0,.65);
    background: #fff;
    border: 1px solid #d9d9d9;
  `,
  small: css`
  `,
  default: css`
  `,
  large: css`
    padding: 6.4px 15px;
    font-size: 16px;
    height: 40px;
  `,
  primary: css`
    color: #fff;
    background: #00b782;
    border-color: #00b782;
    text-shadow: none;
    box-shadow: 0 2px 0 rgba(0,0,0,.045);
  `,
  block: css`
    display: block;
    width: 100%;
  `,
}
