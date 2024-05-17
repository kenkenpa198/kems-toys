import { NabeatsuAssessmenter } from '@/components/Organisms/NabeatsuAssessmenter';
import { ToyLayout } from '@/components/Templates/ToyLayout';
import MdBody from './page.body.mdx';
import MdSupplement from './page.supplement.mdx';

const Page = () => (
  <ToyLayout
    title="ナベアツ判定機"
    ToyComponent={NabeatsuAssessmenter}
    BodyComponent={MdBody}
    SupplementComponent={MdSupplement}
    version="0.1.0"
    onDate="2024-05-12"
  />
);

export default Page;