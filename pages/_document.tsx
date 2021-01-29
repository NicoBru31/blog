import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import Footer from '../components/footer/Footer';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <body className='bg-gray-100 text-gray-800 dark:text-white dark:bg-gray-800 pt-10'>
          <Main />
          <NextScript />
        </body>
        <Footer />
      </Html>
    );
  }
}

export default MyDocument;
