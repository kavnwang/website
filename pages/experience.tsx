import PageLayout from "@/layouts/PageLayout";

export default function Experience() {
  return (
    <div>
        <PageLayout>
            <ul className={'flex flex-col text-lg pl-32 space-y-12'}>
            <ul className={'flex flex-col space-y-4'}>
                <li className={'text-2xl font-semibold'}>Projects</li>
                <li className={'text-md font-semilight'}><span  className={'text-md font-semibold'}>F=math: </span>Founded a math competition non-profit; organized dozens of classes, seminars, and summer camps, impacting over 300 students and raising over $5000 to charity. Website: <a rel={"noopener noreferrer"} target={'_blank'} className={`underline`} href={'https://fequalsmath.org'} >fequalsmath.org</a></li>
              </ul>
              <ul className={'flex flex-col space-y-4'}>
                <li className={'text-2xl font-semibold'}>Education</li>
                <li className={'text-md font-semilight'}><span  className={'text-md font-semibold'}>Lebanon Trail High School: </span>2020-2024, Activities: Math and Physics Team, DECA, Orchestra</li>
              </ul>


              <ul className={'flex flex-col space-y-4'}>
                <li className={'text-2xl font-semibold'}>Honors</li>
                <li className={'text-md font-semilight'}><span  className={'text-md font-semibold'}>Math: </span>2022 USA Junior Math Olympiad Top 24, 5x AIME Qualifier, 3x AMC 10/12 Distinguished Honor Roll</li>
                <li className={'text-md font-semilight'}><span  className={'text-md font-semibold'}>Computer Science: </span>USACO Gold Division</li>
              </ul>
            </ul>
        </PageLayout>
    </div>
  );
}
