import React from 'react'

export default function WildlifeTabButton(props) {
    const {name, setTab, activeTab} = props;

        const active = activeTab === name ? 'bg-yellow-500' : 'bg-green-500';

  return (
    <button onClick={() => setTab(name)} className={`${active} p-2 rounded-full w-32 shadow-sm active:translate-y-[1px] capitalize`}>{name}</button>
  )
}
