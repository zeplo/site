import React from 'react'
import { css } from '@emotion/react'

export interface TagProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  color?: string
}

export default function Tag ({ color, ...props }: TagProps) {
  const allStyles = [styles.base]
  return (
    <span css={allStyles} {...props} />
  )
}

const styles = {
  base: css`
    box-sizing: border-box;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum","tnum";
    display: inline-block;
    height: auto;
    margin: 0 8px 0 0;
    padding: 0 7px;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    background: #fafafa;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    cursor: default;
    opacity: 1;
    transition: all .3s cubic-bezier(.78,.14,.15,.86);
  `,
}
