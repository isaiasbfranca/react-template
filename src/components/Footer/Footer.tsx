import { Layout } from 'components/Layout';

import * as S from './styles';

export const Footer = () => {
  return (
    <Layout>
      <S.Container>
        <S.CopyrightContainer>
          <S.Copyright>
            Todos os direitos reseverdos © Isaias Batista{' '}
            {new Date().getFullYear()}
          </S.Copyright>
        </S.CopyrightContainer>
      </S.Container>
    </Layout>
  );
};
