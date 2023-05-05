'use client'
import { Inter } from 'next/font/google'

import { useParams, useSearchParams } from 'next/navigation';

import { config } from '@fortawesome/fontawesome-svg-core'
// https://record22.tistory.com/132
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  data: [number, string, string][]
}

export default function MyTable(props: Props ) {

  return (
    <table className="border-2 border-primary mx-auto shadow-sm">
      <caption className='caption-top text-dark text-2xl'>
        <h1 className='mb-4 text-light'>BBS Table</h1>
      </caption>
      <caption className='caption-bottom'>
        <ul className="list-none mx-auto block mt-6">
          <li className="inline"><button className="mx-1 w-8 h-8 bg-primary-100 text-dark hover:bg-primary-active hover:text-light rounded-lg shadow-sm"><FontAwesomeIcon icon={faAnglesLeft} /></button></li>
          <li className="inline"><button className="mx-1 w-8 h-8 bg-primary-100 text-dark hover:bg-primary-active hover:text-light rounded-lg shadow-sm"><FontAwesomeIcon icon={faAngleLeft} /></button></li>
          <li className="inline"><button className="mx-1 w-8 h-8 bg-primary-100 text-dark hover:bg-primary-active hover:text-light rounded-lg shadow-sm 
                bg-primary-active text-light cursor-not-allowed
              ">1</button></li>
          <li className="inline"><button className="mx-1 w-8 h-8 bg-primary-100 text-dark hover:bg-primary-active hover:text-light rounded-lg shadow-sm">2</button></li>
          <li className="inline"><button className="mx-1 w-8 h-8 bg-primary-100 text-dark hover:bg-primary-active hover:text-light rounded-lg shadow-sm">3</button></li>
          <li className="inline"><button className="mx-1 w-8 h-8 bg-primary-100 text-dark hover:bg-primary-active hover:text-light rounded-lg shadow-sm">4</button></li>
          <li className="inline"><button className="mx-1 w-8 h-8 bg-primary-100 text-dark hover:bg-primary-active hover:text-light rounded-lg shadow-sm">5</button></li>
          <li className="inline"><button className="mx-1 w-8 h-8 bg-primary-100 text-dark hover:bg-primary-active hover:text-light rounded-lg shadow-sm"><FontAwesomeIcon icon={faAngleRight} /></button></li>
          <li className="inline"><button className="mx-1 w-8 h-8 bg-primary-100 text-dark hover:bg-primary-active hover:text-light rounded-lg shadow-sm"><FontAwesomeIcon icon={faAnglesRight} /></button></li>
        </ul>
      </caption>
      <colgroup>
        <col className="w-20"></col>
        <col className="w-96"></col>
        <col className="w-40"></col>
      </colgroup>
      <thead>
        <tr className="bg-primary-active text-light">
          <th className='border-2 border-primary-200'>No</th>
          <th className='border-2 border-primary-200'>Title</th>
          <th className='border-2 border-primary-200'>Created At</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((content, idx) => (
          <tr key={idx} className="text-dark text-center bg-white hover:bg-primary-active hover:text-light hover:opacity-40 cursor-pointer">
            <td className='border-2 border-primary-200'>{content[0]}</td>
            <td className='border-2 border-primary-200 pl-4'>{content[1]}</td>
            <td className='border-2 border-primary-200'>{content[2]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
