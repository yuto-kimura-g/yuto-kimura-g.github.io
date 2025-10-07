import ListItem from '@/components/ListItem';
import HrefText from '@/components/HrefText';

export default function IndexPage() {
  return (
    <div className="w-full bg-theme-light-bg bg-opacity-50 px-5 py-16 lg:px-16">
      <div className="text-2xl font-bold">About</div>
      <ul>
        <ListItem title="Name" body={<span>Yuto KIMURA</span>} />
        <ListItem
          title="Affiliation"
          body={
            <HrefText
              text="Graduate School of Information Science, University of Hyogo"
              link="https://u-hyogo-gsis.org/"
            />
          }
        />
        <ListItem
          title="Contact"
          body={<span>ad24g018 [at] guh [dot] u-hyogo.ac.jp</span>}
        />
      </ul>
    </div>
  );
}
