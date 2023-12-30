import { Metadata } from 'next';
import Motion from 'src/components/common/Motion';
import Table from 'src/components/table/Table';

export const metadata: Metadata = {
  title: {
    absolute: 'Home | Desafio'
  }
};

export default function Home() {
  return (
    <Motion>
      <main className="max-w-[90%] sm:max-w-[75%] m-auto">
        <Table />
      </main>
    </Motion>
  );
}
