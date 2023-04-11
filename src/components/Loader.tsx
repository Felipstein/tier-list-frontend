import { HashLoader } from 'react-spinners';

export const Loader: React.FC = () => {

  return (
    <div className='flex'>
      <HashLoader size={16} color='white' />
    </div>
  );
};
