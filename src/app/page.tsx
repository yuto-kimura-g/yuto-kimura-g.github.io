import ListItem from '@/components/ListItem';
import HrefText from '@/components/HrefText';
// import Dummy from '@/components/Dummy';

export default function IndexPage() {
  return (
    <div className="w-full space-y-10 bg-theme-light-bg bg-opacity-50 px-5 py-16 lg:px-16">
      <div>
        <div className="text-3xl font-bold">About</div>
        <ul>
          <ListItem title="Name" body={<span>Yuto KIMURA</span>} />
          <ListItem
            title="Affiliation"
            body={
              <HrefText
                text="GSoIS, University of Hyogo"
                link="https://u-hyogo.info/"
              />
            }
          />
          <ListItem
            title="Contact"
            body={<span>ad24g018 [at] guh [dot] u-hyogo.ac.jp</span>}
          />
          <ListItem
            title="Interest"
            body={
              <span>
                <span className="underline">Mathematical Optimization</span>{' '}
                (real-world application: steel industry, container terminal),{' '}
                <span className="underline">Software Development</span>{' '}
                (Full-stack, OSS, Container, Cloud, Software Architecture), ...
              </span>
            }
          />
        </ul>
      </div>
      <div>
        <div className="text-3xl font-bold">Link</div>
        <ul>
          <ListItem
            title="GitHub"
            body={<HrefText link="https://github.com/yuto-kimura-g/" />}
          />
          <ListItem
            title="Website"
            body={
              <HrefText link="https://github.com/yuto-kimura-g/yuto-kimura-g.github.io/" />
            }
          />
          <ListItem
            title="Weblog"
            body={<HrefText link="https://md-weblog.pages.dev/" />}
          />
          <ListItem
            title="Ocean View"
            body={
              <HrefText link="https://yuto-kimura-g.github.io/ocean-view/" />
            }
          />
        </ul>
      </div>
      {/* <Dummy /> */}
    </div>
  );
}
