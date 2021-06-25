import { ReactNode } from 'react';
import cx from 'classnames'

import './styles.scss';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode; //? ReactNode - pode ser qualquer conteúdo .jsx 
  //? (div, outro componente, mais de um componente)
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export function Question({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children,
}: QuestionProps) {
  return (
    <div
      //* alternativa a -> className={`question ${isAnswered ? 'answered' : ''} ${isHighlighted ? 'highlighted' : ''}`}
      //* é usar a biblioteca 'classNames', precisa apenas instalar usando o "npm add classnames"
      //* para usar -> cx(nome dado no import) + ( nomesDaClassePadrão + , + { insira "nomeDaClasse" caso o "isAnswered" seja true } )
      className={cx(
        'question',
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered }
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}