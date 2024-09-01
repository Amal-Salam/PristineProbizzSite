import {teams} from '../../constants/index'
export default function OurTeam() {
  return (
    <>
      <div className='absolute top-[2691px] left-[calc(50%_-_640px)] bg-background-color w-[1280px] overflow-hidden flex-col items-center justify-center p-[100px] box-border gap-14 hidden lg:flex'>
        <div className='flex flex-col items-center justify-start gap-2'>
          <div className='relative leading-[55px] font-semibold'>Our Team</div>
          <div className='w-[69px] relative bg-brand-colors-secondary h-[5px]' />
        </div>
        <div className='flex flex-row items-center justify-center gap-6 text-right text-lg'>
          {teams.map((team, index) => (
            <div
              key={index}
              className='w-[248px] rounded-lg bg-black-colors-white border-grey-colors-gray4 border-[1px] border-solid box-border h-[358.1px] overflow-hidden shrink-0 flex flex-col items-center justify-center p-6 gap-2.5'
            >
              <img
                className='w-[200px] relative h-[238.1px] object-cover'
                alt=''
                src={team.image}
              />
              <div className='self-stretch flex flex-col items-center justify-center'>
                <div className='w-[169px] relative tracking-[-0.02em] leading-[32px] font-medium inline-block'>
                  {team.name}
                </div>
                <div className='relative text-sm leading-[24px] text-black-colors-black-3 text-center'>
                  {team.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='absolute top-[4276px] left-[calc(50%_-_179px)] bg-background-color w-[359px] flex flex-col items-center justify-center p-4 box-border gap-14 lg:hidden'>
        <div className='flex flex-col items-center justify-start gap-2'>
          <div className='relative leading-[55px] font-semibold'>Our Team</div>
          <div className='w-[69px] relative bg-brand-colors-secondary h-[5px]' />
        </div>
        <div className='flex flex-col items-center justify-center gap-6 text-right text-lg'>
          {teams.map((team, index) => (
            <div
              key={index}
              className='w-[248px] rounded-lg bg-black-colors-white border-grey-colors-gray4 border-[1px] border-solid box-border h-[358.1px] overflow-hidden shrink-0 flex flex-col items-center justify-center p-6 gap-2.5'
            >
              <img
                className='w-[200px] relative h-[238.1px] object-cover'
                alt=''
                src={team.image}
              />
              <div className='self-stretch flex flex-col items-center justify-center'>
                <div className='w-[169px] relative tracking-[-0.02em] leading-[32px] font-medium inline-block'>
                  {team.name}
                </div>
                <div className='relative text-sm leading-[24px] text-black-colors-black-3 text-center'>
                  {team.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

