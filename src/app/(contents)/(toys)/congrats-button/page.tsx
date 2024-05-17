import { CongratsButton } from '@/components/Organisms/CongratsButton';
import { ToyLayout } from '@/components/Templates/ToyLayout';
import MdBody from './page.body.mdx';
import MdSupplement from './page.supplement.mdx';

const Page = () => (
  <ToyLayout
    title="おめでとうボタン"
    version="0.1.2"
    onDate="2024-05-11"
    ToyComponent={CongratsButton}
    BodyComponent={MdBody}
    SupplementComponent={MdSupplement}
  />
);

export default Page;