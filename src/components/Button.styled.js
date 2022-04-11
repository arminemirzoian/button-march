import styled from 'styled-components';
import {green, grey, yellow} from "@mui/material/colors";

export const ButtonStyled = styled.button`
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
    padding: 16.5px 54.37px;
    font-size: 16px;
    line-height: 16px;
    .loader {
      margin-right: 8px;
    }
  }

  &.medium {
    padding: 14.5px 48.55px;
    font-size: 14px;
    line-height: 14px;
    .loader {
      margin-right: 8px;
    }
  }

  &.small {
    padding: 13.68px 45.96px;
    font-size: 12px;
    line-height: 12px;
    font-weight: bold;
    .icon {
      height: 16.67px;
      width: 16.67px;
      font-size: 16px;
      margin-right: 7px;
    }
    .loader {
      margin-right: 7px;
    }
  }
  
   &.primary {
     border: 1px solid ${yellow[700]};
     background-color: transparent;

     &:before {
       content: '';
       border: 1px solid transparent;
       position: absolute;
       background-image: ${`linear-gradient(180deg, ${yellow[700]} 0%, #ba8f0a 100%)`};
     }

     &:hover {
       border-color: #fed65d;

       &:before {
         background-image: linear-gradient(180deg, #ffd760 0%, #b7900e 100%);
       }
     }

     &:focus {
       border-color: #ffe8a1;

       &:before {
         border: 1px solid rgba(255, 255, 255, 0.5);
         background-image: ${`linear-gradient(180deg, ${yellow[700]} 0%, #ba8f0a 100%)`};
       }
     }

     &:active {
       border-color: #fedd78;

       &:before {
         background-image: linear-gradient(180deg, #ffde7a 0%, #c99c07 100%);
       }
     }

     &:disabled {
       border-color: ${grey[300]};
       color: ${grey[700]};

       &:before {
         background: ${grey[400]};
       }
     }
   }
  
  &.secondary {
        border: 1px solid ${green[600]};
        background-color: transparent;

        &:before {
            content: '';
            position: absolute;
          background-image: linear-gradient(180deg, #5cc75c 0%, ${green[800]} 100%);
        }
        }

        &:hover {
            border-color: ${green[600]};

            &:before {
                background-image: linear-gradient(180deg, #80e180 0%, #298129 100%);
            }
        }

        &:focus {
            border-color: #9ef19e;

            &:before {
                background-image: linear-gradient(180deg, #5cc75c 0%, ${green[800]} 100%);
            }
        }

        &:active {
            border-color: ${green[600]};

            &:before {
                background-image: linear-gradient(180deg, #8cf28c 0%, #329732 100%);
            }
        }

        &:disabled {
            border-color: ${grey[300]};
            color: ${grey[700]};

            &:before {
                background: ${grey[400]};
            }
        }
    }


&.tertiary {
        border: 1px solid rgba(255,255,255, 0.3);
        background-color: transparent;
        color: ${grey[800]};

        &:before {
            content: '';
            position: absolute;
            background-image: linear-gradient(180deg, #f0f3f8 0%, #b1b9cc 100%);
        }

        &:hover {
            &:before {
                background-image: linear-gradient(180deg, #fbfcff 0%, #c5cad7 100%);
            }
        }

        &:focus { 
            border-color: rgba(255,255,255, 0.5);

            &:before {
                background: linear-gradient(180deg, #f0f3f8 0%, #b1b9cc 100%);
            }
        }

        &:active {
            border-color: rgba(255,255,255, 0.5);

            &:before {
                background-image: linear-gradient(180deg, #fbfcff 0%, #d6dce9 100%);
            }
        }

        &:disabled {
            border-color: rgba(255,255,255, 0.3);
            opacity: 0.5;

            &:before {
                background-image: linear-gradient(180deg, #f0f3f8 0%, #b1b9cc 100%);
            }
        }
    }

&.solid {
  border: 1px solid #5D626D;
  background-color: transparent;

  &:before {
    content: '';
    position: absolute;
    background-image: linear-gradient(180deg, #f0f3f8 0%, #b1b9cc 100%);
  }

  &:disabled {
    &:before {
      background-image: linear-gradient(180deg, #8c919d 0%, #5d626d 100%),
                    linear-gradient(180deg, #5cc75c 0%, green[800] 100%),
                    linear-gradient(180deg, ${yellow[700]} 0%, #ba8f0a 100%)
               
    }
  }
}
 
     &:disabled {
       cursor: default;
     }

     .button-text {
       position: relative;
       color: inherit;
       z-index: 1;
     }

     .icon {
       margin-right: 8px;
       display: inline-block;
       position: relative;
       z-index: 1;
     }

  
`;
