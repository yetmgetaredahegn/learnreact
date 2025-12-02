interface ButtonsProps {
    children: string;
    color?: 'primary' | 'secondary' | 'success' | 'danger' ;
    onClick: () => void;
}
const Buttons = ({children,color,onClick}:ButtonsProps) => {
  return (
    <button onClick={onClick} className={'btn btn-' + color}>{children}</button   >
  )
}

export default Buttons