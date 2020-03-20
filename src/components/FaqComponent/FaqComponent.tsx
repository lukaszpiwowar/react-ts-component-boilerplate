import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  & {
    width: 100%;
    color: black;
    background-color: #FFFFFF;
    border: solid 1px #E0E0E0;    
  }
`;

const StyledRow = styled.div`
  & {
    cursor: pointer;
    width: 100%;
    border-bottom: solid 1px #E0E0E0;
    min-height: 60px;
  }
  &.active{
    background-color: #F5F5F5;
  }
  &:last-child {
    border-bottom: none;
    padding-bottom: 5px;
  }
`;

const Pos = styled.span`
  & {
    display: inline-block;
    padding: 6px 9px;
    max-width: 30px;
    max-height: 30px;
    background: #F5F5F5;
    border: solid 1px #E0E0E0;
    color: rgba(0,0,0,0.87);
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 16px;
    text-align: center;
    border-radius: 15px;
    margin: 15px 18px 0px 21px;
  }
`;

const ArrowWrapper = styled.div`
  width: 24px;
  height: 24px;
  float: right;
  display: inline-block;
  margin: 19px 16px 17px;
  text-align: center;
`;

export enum Direction {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}

export interface ArrowProps {
  direction: Direction;
}

const Arrow = ({ direction }: ArrowProps) => {
  const directionMap = {
    up: '270deg',
    left: '180deg',
    right: '0deg',
    down: '90deg'
  };
  const dir = directionMap[direction];
  return (
    <ArrowWrapper>
      <svg style={{marginTop: '5px', transform: `rotate(${dir})`}} width="15px" height="15px" viewBox="0 0 6 10" version="1.1">
        <title>97F2DD0D-79FD-42EA-B576-C2C94DE82C80</title>
        <desc>Created with sketchtool.</desc>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="01_Overview_Goldmie" transform="translate(-571.000000, -187.000000)">
            <g id="breadcrumbs" transform="translate(504.000000, 167.000000)">
              <g id="arrow_right" transform="translate(61.000000, 16.000000)">
                <polygon id="Path" points="18 0 0 0 0 18 18 18"></polygon>
                <polygon id="arrow_x5F_right_1_" fill-opacity="1" fill="#2F82FB" fill-rule="nonzero" points="7.5 13.5 12 9 7.5 4.5 6.45 5.55 9.9 9 6.45 12.45"></polygon>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </ArrowWrapper>
  )
};

const Question = styled.span`
  color: rgba(0,0,0,0.87);
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 21px;
`;

const Answer = styled.p`
  color: rgba(0,0,0,0.87);
  font-size: 16px;
  letter-spacing: 0;
  line-height: 22px;
  margin: 7px 59px 20px 66px;
  text-align: justify;
`;

export interface RowItem{
  pos: string | number;
  question: string;
  answer: string;
}

export interface RowProps{
  item: RowItem;
}

const Row = ({ item }: RowProps) => {
  const DOWN = 'down' as Direction;
  const UP = 'up' as Direction;
  const [active, setActive] = useState(false);
  const toggle = () => { setActive(!active) };

  return (
    <StyledRow onClick={toggle} className={active ? 'active' : ''}>
      <Pos>{item.pos}</Pos>
      <Question>{item.question}</Question>
      <Arrow direction={active ? UP : DOWN} />
      {
        active ?
        <Answer>
          {item.answer}
        </Answer> : null
      }
    </StyledRow>
  );
};


export interface FaqComponentProps {
  data: RowItem[]
}

export const FaqComponent: React.FC<FaqComponentProps> = ({ data }) => (
  <Wrapper>
    { data.map((item: RowItem, key) => { return (<Row item={item} key={key} />) }) }
  </Wrapper>
);
