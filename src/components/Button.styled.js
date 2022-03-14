import styled from 'styled-components';

export const ButtonStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: univiaPro;
  transition: transitions('border-color', 'background-color');
  color: white;

  &:before {
    transition: transitions('background-color');
    inset: 4px;
  }

  &.large {
    padding: 12px 44px;
  }

  &.medium {
    padding: 14px 28px;
  }

  &.small {
    padding: 8px 16px;
  }

  .large .loader {
    position: absolute;
    margin-left: -30px;
  }

  .large .icon {
    position: absolute;
    margin-top: 1.1%;
    margin-left: 35px;
  }

  .medium .loader {
    position: absolute;
    margin-left: -30px;
  }

  .medium .icon {
    position: absolute;
    margin-top: 1%;
    margin-left: 28px;
  }

  .small .loader {
    position: absolute;
    margin-left: -25px;
  }

  .small .icon {
    position: absolute;
    height: 16.67px;
    width: 16.67px;
    margin-top: 0.9%;
    margin-left: 25px;
  }

  .btn {
    font-weight: 400;
    margin: 4px;
    color: white;
    font-family: Univia Pro;
  }

  /*Button colors and sizes*/

  .btn--primary {
    background: linear-gradient(180deg, #FFC926 0%, #BA8F0A 100%);
    color: white
  }

  .btn--primary--solid {
    background: linear-gradient(180deg, #FFC926 0%, #BA8F0A 100%);
    color: white;
    border: 4px solid black;
    outline: 1px solid #FFC30F;
  }

  .btn--primary--solid:hover {
    background: linear-gradient(180deg, #FFD760 0%, #B7900E 100%);
  }

  .btn--primary--solid:active {
    background: linear-gradient(180deg, #FFDE7A 0%, #C99C07 100%);
  }

  .btn--primary--solid:disabled {
    background: rgba(56, 59, 64, 1);
    border: 4px solid black;
    outline: 1px solid #242629;
  }

  .btn--secondary {
    background: linear-gradient(180deg, #5CC75C 0%, #1C6C1C 100%);
  }

  .btn--secondary--solid {
    background: linear-gradient(180deg, #5CC75C 0%, #1C6C1C 100%);
    border: 4px solid black;
    outline: 1px solid green;
  }

  .btn--secondary--solid:hover {
    background: linear-gradient(180deg, #80E180 0%, #298129 100%);
  }

  .btn--secondary--solid:active {
    background: linear-gradient(180deg, #8CF28C 0%, #329732 100%);
  }

  .btn--secondary--solid:disabled {
    background: rgba(56, 59, 64, 1);
    border: 4px solid black;
    outline: 1px solid #242629;
  }

  .btn--disable--solid {
    background-color: #242629;
  }

  .btn--grey--solid {
    background-color: #2D2F33;
  }

  .btn--grey--solid:hover {
    background: rgba(56, 59, 64, 1);
  }

  .btn--grey--solid:active {
    background: rgba(56, 59, 64, 1);
  }

  .btn--grey--solid:disabled {
    background: rgba(36, 38, 41, 1);
  }

  .btn--green--solid {
    background-color: #48B048;
  }

  .btn--green--solid:hover {
    background-color: #5FC95F;
  }

  .btn--green--solid:active {
    background-color: #48B048;
  }

  .btn--green--solid:disabled {
    background-color: #5FC95F;
  }

  .btn--blue--solid {
    background-color: #2A7399;

  }

  .btn--blue--solid:hover {
    background-color: #418EB7;
  }

  .btn--blue--solid:active {
    background-color: #2A7399;
  }

  .btn--blue--solid:disabled {
    background-color: #418EB7;
  }

  .btn--red--solid {
    background-color: #9C2D2D;
  }

  .btn--red--solid:hover {
    background-color: #B23F3F;
  }

  .btn--red--solid:active {
    background-color: #9C2D2D;
  }

  .btn--red--solid:disabled {
    background-color: #B23F3F;
  }

  .btn--yellow--solid {
    background-color: #FFC30F;
  }

  .btn--yellow--solid:hover {
    background-color: #FFC926;
  }

  .btn--yellow--solid:active {
    background-color: #FFC30F;
  }

  .btn--yellow--solid:disabled {
    background-color: #FFC926;
  }

  .btn--darkGrey--solid {
    background-color: #242629;
  }

  .btn--darkGrey--solid:hover {
    background-color: #2D2F33;
  }

  .btn--darkGrey--solid:active {
    background-color: #242629;
  }

  .btn--darkGrey--solid:disabled {
    background-color: #2D2F33;
  }

  .btn--darkGrey--solid {
    background-color: #2D2F33;
  }

  .btn--darkGrey--solid:hover {
    background-color: #383B40;
  }

  .btn--darkGrey--solid:active {
    background-color: #2D2F33;
  }

  .btn--darkGrey--solid:disabled {
    background-color: #383B40;
  }

  .btn--transparentGrey--solid {
    background-color: #43464D;
  }

  .btn--transparentGrey--solid:hover {
    background-color: #43464D;
  }

  .btn--transparentGrey--solid:active {
    background-color: #43464D;
  }

  .btn--transparentGrey--solid:disabled {
    background-color: #383B40;
  }

  .btn--disable--outlined {
    background-color: transparent;
    border: 1px solid #242629;
    color: var(--disable)
  }

  .btn--green--outlined {
    background-color: transparent;
    border: 1px solid #48B048;
    color: #48B048;
  }

  .btn--green--outlined:hover {
    background-color: transparent;
    border: 1px solid #7BDB7B;
    color: #7BDB7B
  }

  .btn--green--outlined:active {
    background-color: transparent;
    border: 1px solid #48B048;
    color: #48B048;
  }

  .btn--green--outlined:disabled {
    background-color: transparent;
    border: 1px solid #7BDB7B;
    color: #7BDB7B;
  }

  .btn--blue--outlined {
    background-color: transparent;
    border: 1px solid #2A7399;
    color: var(--blue)
  }

  .btn--blue--outlined:hover {
    background-color: transparent;
    border: 1px solid #96D2F2;
    color: #96D2F2;
  }

  .btn--blue--outlined:active {
    background-color: transparent;
    border: 1px solid #5BAAD5;
    color: #5BAAD5;
  }

  .btn--blue--outlined:disabled {
    background-color: transparent;
    border: 1px solid #96D2F2;
    color: #96D2F2;
  }

  .btn--red--outlined {
    background-color: transparent;
    border: 1px solid #C65454;
    color: #C65454;
  }

  .btn--red--outlined:hover {
    background-color: transparent;
    border: 1px solid #DF6767;
    color: #DF6767
  }

  .btn--red--outlined:active {
    background-color: transparent;
    border: 1px solid #C65454;
    color: #C65454
  }

  .btn--red--outlined:disabled {
    background-color: transparent;
    border: 1px solid #DF6767;
    color: #DF6767;
  }

  .btn--yellow--outlined {
    background-color: transparent;
    border: 1px solid #FFC926;
    color: #FFC926;
  }

  .btn--yellow--outlined:hover {
    background-color: transparent;
    border: 1px solid #FFD968;
    color: #FFD968;
  }

  .btn--yellow--outlined:active {
    background-color: transparent;
    border: 1px solid #FFC926;
    color: #FFC926;
  }

  .btn--yellow--outlined:active {
    background-color: transparent;
    border: 1px solid #FFD968;
    color: #FFD968;
  }

  .btn--grey--outlined {
    background-color: transparent;
    border: 1px solid #8A8F99;
    color: #8A8F99;
  }

  .btn--grey--outlined:hover {
    background-color: transparent;
    border: 1px solid #A1A7B3;
    color: #A1A7B3;
  }

  .btn--grey--outlined:active {
    background-color: transparent;
    border: 1px solid #8A8F99;
    color: #8A8F99;
  }

  .btn--grey--outlined:disabled {
    background-color: transparent;
    border: 1px solid #A1A7B3;
    color: #A1A7B3;
  }

  .btn--semiDarkGrey--outlined {
    background-color: transparent;
    border: 1px solid #8A8F99;
    color: #8A8F99;
  }

  .btn--semiDarkGrey--outlined:hover {
    background-color: transparent;
    border: 1px solid #A1A7B3;
    color: #A1A7B3;
  }

  .btn--semiDarkGrey--outlined:active {
    background-color: transparent;
    border: 1px solid #8A8F99;
    color: #8A8F99;
  }

  .btn--semiDarkGrey--outlined:disabled {
    background-color: transparent;
    border: 1px solid #A1A7B3;
    color: #A1A7B3;
  }

  .btn--transparentGrey--outlined {
    background-color: transparent;
    border: 1px solid #737780;
    color: #737780;
  }

  .btn--transparentGrey--outlined:hover {
    background-color: transparent;
    border: 1px solid #8A8F99;
    color: #8A8F99;
  }

  .btn--transparentGrey--outlined:active {
    background-color: transparent;
    border: 1px solid #737780;
    color: #737780;
  }

  .btn--transparentGrey--outlined:disabled {
    background-color: transparent;
    border: 1px solid #8A8F99;
    color: #8A8F99;
  }

  /*Button sizes*/

  .large {
    height: 56px;
    width: 198px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19.2px;
  }

  .medium {
    height: 52px;
    width: 178px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19.2px;
  }

  .small {
    height: 46px;
    width: 158px;
    font-size: 14px;
    line-height: 16.8px;
    font-weight: 700;
  }



`;
