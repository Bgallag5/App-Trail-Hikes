import React, { useState, useEffect } from "react";
import WildlifeTabButton from "./WildlifeTabButton";
import WildlifeTabContent from "./WildlifeTabContent";

export default function WildlifeTabs() {
  const [activeTab, setActiveTab] = useState("bears");

  const setTab = (name) => {
    setActiveTab(name);
  };

  console.log(activeTab);

  return (
    <div className="tabs-container relative p-3 h-auto w-10/12 m-auto bg-stone-300 rounded min-h-[30rem] flex flex-col justify-center items-center mt-[8rem] ">
      <div className="tabs-container--overlay"></div>
      <div className="absolute top-0 w-auto mb-5 bg-stone-800 p-5 flex flex-row gap-1 rounded-b-lg shadow-md">
        <WildlifeTabButton name="bears" setTab={setTab} activeTab={activeTab} />
        <WildlifeTabButton
          name="snakes"
          setTab={setTab}
          activeTab={activeTab}
        />
        <WildlifeTabButton name="other" setTab={setTab} activeTab={activeTab} />
      </div>
      <div className={`flex flex-col gap-1 m-auto h-auto py-4`}>
        <WildlifeTabContent
          activeTab={activeTab}
          rules={["1. ALWAYS store food properly.", "2. Invest in a bear bag."]}
          title="bears"
          content="There ARE black bears on the Appalachian Trail. Black bears are the only bears found in the east.
             They are smaller and less aggressive than the Grizzly but still can be 400 to 500 pounds, and in certain situations
              are known to attack humans. Like all bears they are attracted to the smell food, and will come if you leave leftover 
              food at your campsite. For this reason, shelters in the Smokies have chain-link fencing to ward off the bears, 
              and Shenandoah National Park has steel poles with prongs at the top for hikers to lift packs high off the ground."
        />
        <WildlifeTabContent
          activeTab={activeTab}
          title="snakes"
          rules={[
            "1. Wear tall, sturdy boots.",
            "2. Avoid walking anywhere but the designated trail.",
            "3. Stay vigilent and listen to your surroundings as you hike.",
          ]}
          content="On the East Coast of the United States there are 4 species of venomous snakes, 
          all of which can be found along the App Trail. The Eastern Copperhead, Eastern Diamondback Rattlesnake, 
          Northern Cottonmouth, and the Timber Rattlesnake live in the woods, streams, and plains of the East Coast. 
          While most snake bits are not fatal to adults, a bite out on the App Trail can potentially lead to disaster.
           If not quickly treated, a bit from any of these serpents can leave a grown adult dead within a matter of hours.
            For this reason hikers are urged to take a few precausions."
        />
        <WildlifeTabContent
          activeTab={activeTab}
          title="other"
          rules={[
            "1. Leave no trace.",
            "2. Observe animals from a distance; be respectful",
          ]}
          content="There are literally thousands of animal species that can be found on
        the Appalchian Trail, but other than Bears and Snakes the wildlife
        on the trail is mostly harmless. Commonly seen animals include:
        deer, owls, lizards, racoons, mice, spiders, skunks, bats, foxes,
        and many more. None of these animals are threatening to humans, and
        they tend to keep their distance, and so should you! If you see any
        of these animals while hiking do not try to bother or interact with
        them. The principle of Leave No Trace doesn't just apply to trash,
        it applies to the entire ecosystem of the trail. Keep in mind that
        the woods is THEIR home, not yours. You can watch and take pictures,
        but please be respectful to the forest and leave the animals alone."
        />
      </div>
    </div>
  );
}
