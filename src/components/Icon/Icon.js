import Icons from '../../icons/award.svg';

const Icon = ({ className, name, color, size }) => (
  <svg className={className} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#${name}`} id={name} />
  </svg>
);

export default Icon;
