const DrinkItemSkeleton = () => {
  return (
    <div className='w-1/5 min-w-[200px] p-2 border rounded flex flex-col items-center'>
      <div className='w-full aspect-square bg-gray-400' />
      <div className='w-[60px] h-6 my-2 bg-gray-400' />
    </div>
  );
};
export default DrinkItemSkeleton;
