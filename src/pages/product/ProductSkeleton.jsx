import React from 'react';
import { Main, Container, Section, Box } from '@/components/elements';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import SkeletonLoader from '@/components/skeletonLoader/SkeletonLoader';
import { SkeletonContainer } from './Product.styled';

export default function ProductSkeleton() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <Container>
            <SkeletonContainer>
                <SkeletonLoader variant="rectangular" />
                <SkeletonLoader variant="rectangular" />
            </SkeletonContainer>
            {/* Simula la información adicional del producto */}
            <div>
              <SkeletonLoader variant="rectangular" width="100%" height="200px" borderRadius="8px" style={{ marginTop: '10px' }} />
            </div>
          </Container>
        </Section>
      </Main>
      <Footer />
    </>
  );
}
