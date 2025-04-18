import { loremIpsum } from 'lorem-ipsum';

const BuildPage = () => (
  <>

    <div>
      {loremIpsum({ count: 50 })}
    </div>
  </>
);

export const PageOne = () => BuildPage(1);
export const PageTwo = () => BuildPage(2);