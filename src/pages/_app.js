import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  <>
    <Component {...pageProps} />
    <ToastContainer position="top-right" />
  </>;
}
