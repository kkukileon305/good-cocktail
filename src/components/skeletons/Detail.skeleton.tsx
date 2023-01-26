const DetailSkeleton = () => {
  return (
    <div className='flex gap-4 justify-between'>
      <div className='w-[calc(100%-216px)]'>
        <div className='flex gap-4 items-end'>
          <h2 className='w-[80px] h-[36px] font-bold text-3xl bg-gray-400' />
          <div className='w-[130px] h-[34px] bg-gray-400 rounded-full' />
        </div>
        <div className='mt-4 max-w-[600px] h-6 w-full bg-gray-400' />
      </div>
      <div className='w-[200px] aspect-square bg-gray-400' />
    </div>
  );
};

export default DetailSkeleton;
