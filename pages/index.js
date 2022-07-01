import Head from 'next/head'
import Image from 'next/image';


console.log(process.env.REACT_APP_FIREBASE_KEY);

export default function Home() {
  return (
    <div className=''>Hello Next.js</div>
  )
}
