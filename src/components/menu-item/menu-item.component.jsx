import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

function MenuItem({ title, size, imageUrl, linkUrl, history, match }) {
  return (
    <div
      className={`menu-item${!!size === true ? ' ' + size : ''}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
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

export default withRouter(MenuItem);
