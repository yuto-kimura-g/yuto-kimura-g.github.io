import HrefText from '@/components/HrefText';

export default function IndexPage() {
  return (
    <div className="bg-theme-light-bg bg-opacity-50 w-full px-5 py-16 lg:px-16">
      <div className="text-2xl font-bold">About</div>
      <ul>
        <li>
          Name: Yuto KIMURA
        </li>
        <li>
          Affiliation: <HrefText
            text="Graduate School of Information Science, University of Hyogo"
            link="https://u-hyogo-gsis.org/"
          />
        </li>
        <li>
          Contact: ad24g018 [at] guh [dot] u-hyogo.ac.jp
        </li>
      </ul>
    </div >
  );
}
