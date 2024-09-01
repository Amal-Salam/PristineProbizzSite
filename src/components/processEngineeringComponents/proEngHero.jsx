import Hero from '../../assets/processEngineering/proEngHero.png'
export default function ProEngHero (){
    return (
      <>
        <div className='absolute top-[141px] left-[100px] w-[1080px] flex-col items-start justify-start gap-6 text-center hidden lg:flex'>
          <div className='self-stretch flex flex-col items-center justify-center'>
            <div className='relative leading-[55px] font-semibold'>
              <span>{`Innovating `}</span>
              <span className='text-brand-colors-secondary'>Chemical</span>
              <span> Solutions for Progress</span>
            </div>
          </div>
          <img
            className='self-stretch relative rounded-lg max-w-full overflow-hidden h-[484px] shrink-0 object-cover'
            alt=''
            src={Hero}
          />
          <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2'>
            Driving Sustainable Progress Through Expert Chemical Process
            Engineering Solutions. Empowering African Industries for a Greener
            Tomorrow Within our process engineering department, we specialize in
            guiding you from concept to realization. Our expertise lies in
            delivering budget-friendly engineering designs and technical
            solutions that seamlessly blend innovation with practicality. We
            excel in crafting optimized strategies that amplify productivity,
            pinpoint cost efficiencies, and unlock avenues for innovation. Our
            commitment centers on meticulous client requirement analysis and the
            delivery of strategic outputs, ensuring your journey culminates in
            resounding success. Your aspirations, our solutions – united for
            ultimate triumph.
          </div>
        </div>

        <div className='absolute top-[95px] left-[calc(50%_-_180px)] w-[360px] flex flex-col items-start justify-start p-4 box-border gap-6 text-center lg:hidden'>
          <div className='self-stretch flex flex-col items-center justify-center'>
            <div className='self-stretch relative leading-[55px] font-semibold'>
              <span>{`Innovating `}</span>
              <span className='text-greenyellow'>Chemical</span>
              <span> Solutions for Progress</span>
            </div>
          </div>
          <img
            className='self-stretch relative rounded-lg max-w-full overflow-hidden h-[484px] shrink-0 object-cover'
            alt=''
            src={Hero}
          />
          <div className='self-stretch relative text-justify text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2'>
            Driving Sustainable Progress Through Expert Chemical Process
            Engineering Solutions. Empowering African Industries for a Greener
            Tomorrow Within our process engineering department, we specialize in
            guiding you from concept to realization. Our expertise lies in
            delivering budget-friendly engineering designs and technical
            solutions that seamlessly blend innovation with practicality. We
            excel in crafting optimized strategies that amplify productivity,
            pinpoint cost efficiencies, and unlock avenues for innovation. Our
            commitment centers on meticulous client requirement analysis and the
            delivery of strategic outputs, ensuring your journey culminates in
            resounding success. Your aspirations, our solutions – united for
            ultimate triumph.
          </div>
        </div>
      </>
    );
}




