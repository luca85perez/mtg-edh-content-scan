import React from 'react';

import './DateFormatter.scss';

type Props = {
  dateString: string;
};

/**
 *
 * @param {*} props
 */
const DateFormatter = (props: Props) => (
  <time>{
    new Date(props.dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }</time>
);

export default DateFormatter;
