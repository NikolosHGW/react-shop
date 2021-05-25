import './menu-item.styles.scss';

export default function MenuItem({ title, size, imageUrl }) {
  return (
    <div
      className={`menu-item${!!size === true ? ' ' + size : ''}`}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className='content'>
        <h2 className='title'>{title}</h2>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}
