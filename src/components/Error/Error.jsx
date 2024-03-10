import './Error.css'

export const Error = ({src, error }) => {
  return (
    <div className="error_block">
      <img className="error_image" src={src} />
      <p className='error_message'>{error}</p>
    </div>
  );
};
