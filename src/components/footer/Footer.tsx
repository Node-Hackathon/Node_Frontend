import { FooterContainer, FooterCopyright, FooterInfo, FooterLogo } from './styles';
import { ReactComponent as Logo } from '../../assets/images/Logo-s.svg';
import { useOwnerInfo } from './events';
import { Link } from 'react-router-dom';

function Footer() {
  const { ownerName, ownerEmail, ownerTel } = useOwnerInfo();
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterLogo>
        <Link to={'/main'}>
          <Logo />
        </Link>
      </FooterLogo>
      <FooterInfo>
        <table>
          <tr>
            <td className="info">대표: </td>
            <td>{ownerName}</td>
          </tr>
          <tr>
            <td className="info">E-mail: </td>
            <td>{ownerEmail}</td>
          </tr>
          <tr>
            <td className="info">Tel: </td>
            <td>{ownerTel}</td>
          </tr>
        </table>
      </FooterInfo>
      <FooterCopyright>Copyright© {currentYear} Node All Rights Reserved.</FooterCopyright>
    </FooterContainer>
  );
}

export default Footer;
