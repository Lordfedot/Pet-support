import iconSprite from '../images/iconSprite.svg'
type IconProps = {
  iconId: string;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
};

export const Icon = ({iconId, ...props}: IconProps ) => {
  return (
    <svg {...props}>
      <use href={`${iconSprite}#${iconId}`} />
    </svg>
  );
};
