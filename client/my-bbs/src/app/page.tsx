import { Inter } from 'next/font/google'

import { config } from '@fortawesome/fontawesome-svg-core'
// https://record22.tistory.com/132
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import MyTable from './components/MyTable';
import { AppContext } from 'next/app';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] })

export default async function Home(props: any) {
  const { page = 1, pageNum = 20 } = props.searchParams;
  // console.log('page', page);

  const contents = (await axios.get('http://localhost:3000/api/contents')).data;
  console.log(contents);

  return (
    <main className="mt-10">
      <div className="">
        <MyTable data={contents} />
      </div>
    </main>
  )
}
