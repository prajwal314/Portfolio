/**
 * Footer — sleek centered format.
 */
import Container from './Container';
import { FOOTER_CONFIG } from '../utils/constants';

const Footer = () => (
  <Container className="py-16">
    <div className="flex flex-col items-center justify-center">
      <p className="text-secondary text-center text-sm">
        {FOOTER_CONFIG.text} <b>{FOOTER_CONFIG.developer}</b> <br /> &copy;{' '}
        {new Date().getFullYear()}. {FOOTER_CONFIG.copyright}
      </p>
    </div>
  </Container>
);

export default Footer;
