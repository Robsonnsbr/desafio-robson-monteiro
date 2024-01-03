import type { Metadata } from 'next';
import { Raleway, Inter, Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });
import '@/styles/globals.css';
import Motion from 'src/components/common/Motion';

interface children {
  children: React.ReactNode;
}

const isValidFont = () => {
  if (montserrat) {
    return montserrat;
  }
  if (raleway) {
    return raleway;
  }

  if (inter) {
    return inter;
  }
  console.log(new Error('Font is not valid'));
};

export const metadata: Metadata = {
  title: {
    default: 'Desafio',
    template: '%s | Desafio'
  },
  description: 'Teste para Dev Jr. de Robson Monteiro'
};

export default function RootLayout({ children }: children) {
  return (
    <html lang="pt-BR">
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body
        suppressHydrationWarning={true}
        className={isValidFont() ? isValidFont()?.className : 'font-sans'}
      >
        <Motion motionKey="body">
          <div className="Wrapper-container">{children}</div>
        </Motion>
      </body>
    </html>
  );
}
