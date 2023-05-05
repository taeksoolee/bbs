import MyTable from "@/app/components/MyTable";
import axios from "axios";
import '@/app/globals.css';

type Content = [number, string, string];

type Props = {
  contents: Content[]
}

/**
 * 기존 pages 아래 페이지 컴포는터를 생성하면 기존 nextjs 처럼 사용 가능하다.
 */
export default function Test({contents}: Props) {
  console.log(contents);
  return (
    <MyTable 
      data={contents}
    />
  )
}

export async function getStaticProps(): Promise<{props: Props}> {
  const contents = (await axios.get<Content[]>('http://localhost:3000/api/contents')).data;
  return {
    props: {
      contents,
    },
  };
}

