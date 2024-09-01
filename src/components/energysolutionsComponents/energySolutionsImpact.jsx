import Grid from '../../assets/energySolutions/grid.svg';
import Agrivotaic from '../../assets/energySolutions/agrivotaics.svg';
import Carports from '../../assets/energySolutions/carports.svg';
import MicroGrid from '../../assets/energySolutions/microgrid.svg';
import EVehicle from '../../assets/energySolutions/evehicle.svg';
import OffGrid from '../../assets/energySolutions/offgrid.svg';
import MobileSol from '../../assets/energySolutions/mobilesol.svg'
export default function EnergySolutionsImpact () {
  return (
    <>
      <div className='absolute top-[1538px] left-[calc(50%_-_638px)] bg-background-color w-[1278px] flex-col items-center justify-start p-[100px] box-border gap-14 hidden lg:flex'>
        <div className='w-[807px] flex flex-col items-center justify-center gap-4'>
          <div className='relative leading-[55px] font-semibold'>
            The Impact of Solar Energy in Africa
          </div>
          <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 whitespace-pre-wrap'>
            Solar energy in Africa has a transformative impact, bring clean
            electricity to remote areas, powering essential services, and
            driving economic growth. it alleviates energy poverty, reduces
            carbon emissions, and fosters sustainable development across the
            continent.
          </div>
        </div>
        <div className='w-[1078px] flex flex-col items-start justify-start gap-6'>
          <div className='self-stretch shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-black-colors-white border-grey-colors-gray2 border-[0.2px] border-solid box-border h-[300px] flex flex-row items-center justify-center p-6 gap-[38px]'>
            <img
              className='w-[215px] relative h-[120px] overflow-hidden shrink-0'
              alt=''
              src={Grid}
            />
            <div className='w-[780.8px] flex flex-col items-start justify-center gap-4'>
              <div className='relative leading-[55px] font-semibold'>
                Grid connected systems
              </div>
              <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 whitespace-pre-wrap text-left'>
                An on-grid or grid-tied solar system is one that functions in
                conjunction with the public power grid. Owners of residential,
                commercial, and industrial facilities use them frequently. They
                provide to a significant reduction in electricity costs by
                supplying sufficient power to handle the necessary loads. A
                grid-connected system can either have zero power export or can
                feed any surplus power back into the grid.
              </div>
            </div>
          </div>
          <div className='self-stretch shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-black-colors-white border-grey-colors-gray2 border-[0.2px] border-solid box-border h-[300px] flex flex-row items-center justify-start p-6 gap-[38px]'>
            <img
              className='w-[215px] relative h-[120px] overflow-hidden shrink-0'
              alt=''
              src={OffGrid}
            />
            <div className='w-[785px] flex flex-col items-start justify-center gap-4'>
              <div className='relative leading-[55px] font-semibold'>
                Off grid diesel hybrid systems
              </div>
              <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
                An on-grid or grid-tied solar system is one that functions in
                conjunction with the public power grid. Owners of residential,
                commercial, and industrial facilities use them frequently. They
                provide to a significant reduction in electricity costs by
                supplying sufficient power to handle the necessary loads. A
                grid-connected system can either have zero power export or can
                feed any surplus power back into the grid.
              </div>
            </div>
          </div>
          <div className='self-stretch shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-black-colors-white border-grey-colors-gray2 border-[0.2px] border-solid box-border h-[300px] flex flex-row items-center justify-start p-6 gap-[38px]'>
            <img
              className='w-52 relative h-[124px] overflow-hidden shrink-0'
              alt=''
              src={MicroGrid}
            />
            <div className='w-[780.8px] flex flex-col items-start justify-center gap-4'>
              <div className='relative leading-[55px] font-semibold'>{`Microgrids & storage solutions`}</div>
              <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 whitespace-pre-wrap text-left'>
                A microgrid is a tiny electrical grid that can run independently
                from the main grid or alongside it. It has its own power system.
                For customers seeking a 100% renewable energy source, battery
                energy storage systems can be charged to provide backup power on
                cloudy days or power during the night.
              </div>
            </div>
          </div>
          <div className='self-stretch shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-black-colors-white border-grey-colors-gray2 border-[0.2px] border-solid box-border h-[300px] flex flex-row items-center justify-start p-6 gap-[38px]'>
            <img
              className='w-[217px] relative h-[118px] overflow-hidden shrink-0'
              alt=''
              src={Agrivotaic}
            />
            <div className='w-[780.8px] flex flex-col items-start justify-center gap-4'>
              <div className='relative leading-[55px] font-semibold'>
                Dual use solar
              </div>
              <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
                Dual-use solar also know as Agri photovoltaics, involves
                installing PV modules above the crops to improve climate
                resilience and enable sustainable food and energy production on
                a single plot of land. Three fundamental forms of agrivoltaics
                are being intensively researched: solar arrays with room between
                them for crops, solar arrays on stilts above crops, and solar
                arrays in greenhouses.
              </div>
            </div>
          </div>
          <div className='self-stretch shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-black-colors-white border-grey-colors-gray2 border-[0.2px] border-solid box-border h-[300px] flex flex-row items-center justify-start p-6 gap-[38px]'>
            <img
              className='w-[210px] relative h-[184px] overflow-hidden shrink-0'
              alt=''
              src={MobileSol}
            />
            <div className='w-[780.8px] flex flex-col items-start justify-center gap-4'>
              <div className='relative leading-[55px] font-semibold'>{`Temporary & mobile solutions`}</div>
              <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
                A dependable solution that is simple to install and move to new
                locations is remote solar systems. They are often solar hybrid
                plug-and-play solutions that supply renewable energy while
                assisting in lowering gasoline use. The greatest places to use
                this system are rural locations and short-term sporting and
                entertainment events.
              </div>
            </div>
          </div>
          <div className='self-stretch shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-black-colors-white border-grey-colors-gray2 border-[0.2px] border-solid box-border h-[300px] flex flex-row items-center justify-start p-6 gap-[38px]'>
            <img
              className='w-[209px] relative h-[198px] overflow-hidden shrink-0'
              alt=''
              src={Carports}
            />
            <div className='w-[780.8px] flex flex-col items-start justify-center gap-4'>
              <div className='relative leading-[55px] font-semibold'>{`Carports & canopies`}</div>
              <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
                Ground-mounted canopies that cover parking spots are known as
                solar carports. The canopy roof area provides the ideal platform
                for the seamless mounting of solar panels due to its slight
                inclination. This is an emerging concept that turns a carport
                from a one-dimensional structure that is just used for shading
                into a useful investment that produces electricity by enclosing
                an existing portion of the building with canopies. Parking lots,
                rooftops, and other areas can be shaded by canopies.
              </div>
            </div>
          </div>
          <div className='self-stretch shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-black-colors-white border-grey-colors-gray2 border-[0.2px] border-solid box-border h-[300px] flex flex-row items-center justify-start p-6 gap-[38px]'>
            <img
              className='w-[210px] relative h-[214px]'
              alt=''
              src={EVehicle}
            />
            <div className='w-[780.8px] flex flex-col items-start justify-center gap-4'>
              <div className='relative leading-[55px] font-semibold'>
                Electric vehicle charging
              </div>
              <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
                Electric vehicles need multiple charging stations in different
                locations and using solar panels to power these stations is the
                easiest way to deploy them around the country and is considered
                the most economical solution. When the station is not being used
                to charge the EVs it could be used to power nearby buildings
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute top-[2715px] left-[calc(50%_-_180px)] bg-background-color w-[360px] flex flex-col items-center justify-start p-6 box-border gap-14 lg:hidden'>
        <div className='self-stretch flex flex-col items-center justify-center gap-4'>
          <div className='self-stretch relative leading-[55px] font-semibold'>
            The Impact of Solar Energy in Africa
          </div>
          <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 whitespace-pre-wrap'>
            Solar energy in Africa has a transformative impact, bring clean
            electricity to remote areas, powering essential services, and
            driving economic growth. it alleviates energy poverty, reduces
            carbon emissions, and fosters sustainable development across the
            continent.
          </div>
        </div>
        <div className='w-[326px] flex flex-col items-center justify-start gap-6'>
          <div className='self-stretch shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-black-colors-white border-grey-colors-gray2 border-[0.2px] border-solid flex flex-col items-center justify-center p-6 gap-6'>
            <img
              className='w-[215px] relative h-[120px] overflow-hidden shrink-0'
              alt=''
              src={Grid}
            />
            <div className='self-stretch flex flex-col items-center justify-center gap-4'>
              <div className='self-stretch relative leading-[55px] font-semibold'>
                Grid connected systems
              </div>
              <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 whitespace-pre-wrap text-left'>
                An on-grid or grid-tied solar system is one that functions in
                conjunction with the public power grid. Owners of residential,
                commercial, and industrial facilities use them frequently. They
                provide to a significant reduction in electricity costs by
                supplying sufficient power to handle the necessary loads. A
                grid-connected system can either have zero power export or can
                feed any surplus power back into the grid.
              </div>
            </div>
          </div>
          <div className='self-stretch shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-black-colors-white border-grey-colors-gray2 border-[0.2px] border-solid flex flex-col items-center justify-center p-6 gap-6'>
            <img
              className='w-[215px] relative h-[120px] overflow-hidden shrink-0'
              alt=''
              src={OffGrid}
            />
            <div className='self-stretch flex flex-col items-center justify-center gap-4'>
              <div className='self-stretch relative leading-[55px] font-semibold'>
                Off grid diesel hybrid systems
              </div>
              <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[38px] font-medium text-grey-colors-gray2 text-left'>
                An on-grid or grid-tied solar system is one that functions in
                conjunction with the public power grid. Owners of residential,
                commercial, and industrial facilities use them frequently. They
                provide to a significant reduction in electricity costs by
                supplying sufficient power to handle the necessary loads. A
                grid-connected system can either have zero power export or can
                feed any surplus power back into the grid.
              </div>
            </div>
          </div>
          <div className='self-stretch shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-black-colors-white border-grey-colors-gray2 border-[0.2px] border-solid flex flex-col items-center justify-center p-6 gap-6'>
            <img
              className='w-[203.8px] relative h-[122px]'
              alt=''
              src={MicroGrid}
            />
            <div className='self-stretch flex flex-col items-center justify-center gap-4'>
              <div className='self-stretch relative leading-[55px] font-semibold'>{`Microgrids & storage solutions`}</div>
              <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[38px] font-medium text-grey-colors-gray2 whitespace-pre-wrap text-left'>
                A microgrid is a tiny electrical grid that can run independently
                from the main grid or alongside it. It has its own power system.
                For customers seeking a 100% renewable energy source, battery
                energy storage systems can be charged to provide backup power on
                cloudy days or power during the night.
              </div>
            </div>
          </div>
          <div className='self-stretch shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-black-colors-white border-grey-colors-gray2 border-[0.2px] border-solid flex flex-col items-center justify-center p-6 gap-6'>
            <img
              className='w-[217px] relative h-[118px] overflow-hidden shrink-0'
              alt=''
              src={Agrivotaic}
            />
            <div className='self-stretch flex flex-col items-center justify-center gap-4'>
              <div className='relative leading-[55px] font-semibold'>
                Dual use solar
              </div>
              <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
                Dual-use solar also know as Agri photovoltaics, involves
                installing PV modules above the crops to improve climate
                resilience and enable sustainable food and energy production on
                a single plot of land. Three fundamental forms of agrivoltaics
                are being intensively researched: solar arrays with room between
                them for crops, solar arrays on stilts above crops, and solar
                arrays in greenhouses.
              </div>
            </div>
          </div>
          <div className='self-stretch shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-black-colors-white border-grey-colors-gray2 border-[0.2px] border-solid flex flex-col items-center justify-center p-6 gap-6'>
            <img
              className='w-[210px] relative h-[184px] overflow-hidden shrink-0'
              alt=''
              src={MobileSol}
            />
            <div className='self-stretch flex flex-col items-center justify-center gap-4'>
              <div className='self-stretch relative leading-[55px] font-semibold'>{`Temporary & mobile solutions`}</div>
              <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
                A dependable solution that is simple to install and move to new
                locations is remote solar systems. They are often solar hybrid
                plug-and-play solutions that supply renewable energy while
                assisting in lowering gasoline use. The greatest places to use
                this system are rural locations and short-term sporting and
                entertainment events.
              </div>
            </div>
          </div>
          <div className='self-stretch shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-black-colors-white border-grey-colors-gray2 border-[0.2px] border-solid flex flex-col items-center justify-center p-6 gap-6'>
            <img
              className='w-[209px] relative h-[198px] overflow-hidden shrink-0'
              alt=''
              src={Carports}
            />
            <div className='self-stretch flex flex-col items-center justify-center gap-4'>
              <div className='self-stretch relative leading-[55px] font-semibold'>{`Carports & canopies`}</div>
              <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
                Ground-mounted canopies that cover parking spots are known as
                solar carports. The canopy roof area provides the ideal platform
                for the seamless mounting of solar panels due to its slight
                inclination. This is an emerging concept that turns a carport
                from a one-dimensional structure that is just used for shading
                into a useful investment that produces electricity by enclosing
                an existing portion of the building with canopies. Parking lots,
                rooftops, and other areas can be shaded by canopies.
              </div>
            </div>
          </div>
          <div className='self-stretch shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-black-colors-white border-grey-colors-gray2 border-[0.2px] border-solid flex flex-col items-center justify-center p-6 gap-6'>
            <img
              className='w-[210px] relative h-[214px]'
              alt=''
              src={EVehicle}
            />
            <div className='self-stretch flex flex-col items-center justify-center gap-4'>
              <div className='self-stretch relative leading-[55px] font-semibold'>
                Electric vehicle charging
              </div>
              <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
                Electric vehicles need multiple charging stations in different
                locations and using solar panels to power these stations is the
                easiest way to deploy them around the country and is considered
                the most economical solution. When the station is not being used
                to charge the EVs it could be used to power nearby buildings
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


