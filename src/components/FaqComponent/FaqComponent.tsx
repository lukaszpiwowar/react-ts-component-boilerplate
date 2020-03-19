import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  color: black;
`;

export interface TestComponentProps {
  text?: string;
}

export const FaqComponent: React.FC<TestComponentProps> = ({ text }) => (
  <Wrapper>XD {text ? text : 'Test Component'}</Wrapper>
);
