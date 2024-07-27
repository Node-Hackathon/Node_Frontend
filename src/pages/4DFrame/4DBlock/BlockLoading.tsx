import { theme } from '../../../styles/theme';
import { LoadingBox, LoadingContainer, LoadingLogo, LoadingSVG } from './styles';
import { ReactComponent as Logo } from '../../../assets/images/Logo-M.svg';

export default function BlockLoading() {
  return (
    <LoadingContainer>
      <LoadingBox>
        <LoadingSVG width="100%" height="100%" viewBox="0 0 160 160" fill="none">
          <path
            d="M160 80C160 124.183 124.183 160 80 160C35.8172 160 0 124.183 0 80C0 35.8172 35.8172 0 80 0C124.183 0 160 35.8172 160 80ZM3.93929 80C3.93929 122.007 37.9928 156.061 80 156.061C122.007 156.061 156.061 122.007 156.061 80C156.061 37.9928 122.007 3.93929 80 3.93929C37.9928 3.93929 3.93929 37.9928 3.93929 80Z"
            fill={theme.colors.textNormal}
          />
          <svg
            width="100%"
            height="100%"
            viewBox="0 -24 160 160"
            fill="none"
            style={{ overflow: 'visible' }}
          >
            <path
              d="M24.8242 0.824209C24.055 0.0550156 22.8059 0.053484 22.0558 0.841377C11.6181 11.806 4.49578 25.5189 1.53718 40.3928C-1.54964 55.9113 0.0346279 71.9966 6.08964 86.6147C12.1447 101.233 22.3985 113.727 35.5544 122.518C48.1639 130.943 62.8966 135.603 78.0303 135.976C79.1178 136.003 80 135.118 80 134.03C80 132.943 79.1178 132.063 78.0303 132.035C63.6758 131.663 49.7046 127.235 37.7429 119.242C25.2348 110.885 15.4859 99.0055 9.72906 85.1072C3.97221 71.2089 2.46595 55.9156 5.40077 41.1613C8.20737 27.0516 14.9549 14.0408 24.8422 3.62775C25.5912 2.8389 25.5934 1.5934 24.8242 0.824209Z"
              fill="url(#linear_gradient)"
            />
            <defs>
              <linearGradient
                id="linear_gradient"
                x1="80"
                y1="-24"
                x2="80"
                y2="136"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00C4B8" />
                <stop offset="1" stopColor="#5FCF89" />
              </linearGradient>
            </defs>
          </svg>
        </LoadingSVG>
        <LoadingLogo>
          <Logo />
        </LoadingLogo>
      </LoadingBox>
    </LoadingContainer>
  );
}
