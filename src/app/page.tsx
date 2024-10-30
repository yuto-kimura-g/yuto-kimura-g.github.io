import ListItem from '@/components/ListItem';

export default function IndexPage() {
  return (
    <div className="w-full bg-theme-light-bg py-10 px-5 lg:px-20 space-y-10">
      <div>
        <div className="text-3xl font-bold">About</div>
        <ul>
          <ListItem title="Name" description="Yuto KIMURA" />
          <ListItem
            title="Affiliation"
            description="GSoIS, University of Hyogo"
          />
          <ListItem
            title="Contact"
            description="ad24g018 [at] guh [dot] u-hyogo.ac.jp"
          />
        </ul>
      </div>
      <div>
        <div className="text-3xl font-bold">Link</div>
        <ul>
          <ListItem title="GitHub" link="https://github.com/yuto-kimura-g/" />
          <ListItem
            title="Ocean View"
            link="https://yuto-kimura-g.github.io/ocean-view/"
          />
          <ListItem title="Weblog" link="https://md-weblog.pages.dev/" />
        </ul>
      </div>
    </div>
  );
}
