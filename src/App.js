import styles from "./styles/Global";

import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets"

const App =() => {
  return (
    <>
      <SectionWrapper
        title='Smart User Interface Marketplace'
        description='Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design.'
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
      />
      <SectionWrapper
        title='You own store of Nifty NFTs. Start Selling & Growing'
        description='Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using Pronef Marketplace.'
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title='Deployment'
        description="ProNeft is built using Expo wich runs natievely on all users'devices. You can easily get your app into people's hands"
        showBtn
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title='Creative way to showcase the store'
        description='The app contains two screens. The first screen list all NFTs while the second one shows the details of a specific NFT.'
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bgPrimary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "} <span className="bold">Kennedy Melo</span></p>
      </div>
    </>
  );
}

export default App;
