import './custom-button.styles.scss'

export function CustomButton({ children, ...otherProps }) {
  return (
    <button className='custom-button' {...otherProps}>
      {children}
    </button>
  );
}
