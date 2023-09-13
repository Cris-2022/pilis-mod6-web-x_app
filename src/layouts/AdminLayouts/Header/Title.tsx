interface Props {
  children: string;
}
export default function Title({ children }: Props) {
  return <h1 className='header__title'>{children}</h1>;
}
