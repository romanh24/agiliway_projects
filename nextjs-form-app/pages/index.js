import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import { StyledContainer, StyledStart, StyledTitle } from './../styles/styled';

export default function Home() {
  return (
    <StyledContainer>
      <StyledTitle>Let the stepper beggin</StyledTitle>

      <Link href='/login-form' passHref>
        <StyledStart>
          <span>START</span>
        </StyledStart>
      </Link>
    </StyledContainer>
  );
}
