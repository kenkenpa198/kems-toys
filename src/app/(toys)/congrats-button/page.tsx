import CongratsButton from '@/components/Organisms/CongratsButton';
import ToyLayout from '@/components/Templates/ToyLayout';
import MdBody from './page.body.mdx';
import MdSupplement from './page.supplement.mdx';

export default function Page() {
  return (
    <ToyLayout
      ToyComponent={CongratsButton}
      BodyComponent={MdBody}
      SupplementComponent={MdSupplement}
      version="0.1.2"
      onDate="2024-05-11"
    />
  );
}
