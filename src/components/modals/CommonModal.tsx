import { MouseEventHandler, ReactNode } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { setModal } from '../../store/slices/modalSlice';

type CommonModalProps = {
  children: ReactNode;
};

const CommonModal = ({ children }: CommonModalProps) => {
  const dispatch = useAppDispatch();

  const onClick: MouseEventHandler = e => {
    if (e.target instanceof Element && !e.target.closest('#container')) {
      dispatch(setModal(false));
    }
  };

  return (
    <div className='fixed w-full h-full left-0 top-0 bg-black/50 flex justify-center items-center z-10 p-4' onClick={onClick}>
      <div id='container' className='min-w-[200px] max-w-[600px] w-full rounded-lg bg-white dark:bg-slate-800 border p-4'>
        {children}
      </div>
    </div>
  );
};
export default CommonModal;
